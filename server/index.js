const express = require('express');
const axios = require('axios')
const cors = require('cors')
const { connectRedis, redisClient } = require('./utils/redisClient');
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN
}));
app.use(express.json());

app.get("/api/products", async (req, res) => {
    try {
        const cached = await redisClient.get('products');
        if (cached) {
            return res.json(JSON.parse(cached));
        }
        
        const response = await axios.get(process.env.FAKE_STORE_API_URL);
        const products = response.data;

        const categories = [...new Set(products.map(p => p.category))];
        
        await redisClient.setEx('products', 5, JSON.stringify(products));
        await redisClient.set('categories', JSON.stringify(categories));

        res.json({ products, categories });
    }
    catch (error) {
        console.log(error)
    }
})

connectRedis().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
}) 