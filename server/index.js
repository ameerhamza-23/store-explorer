const express = require('express');
const axios = require('axios')
const cors = require('cors')
const { connectRedis, redisClient } = require('./utils/redisClient');
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

app.get("/api/products", async (req, res) => {
    try {
        const cached = await redisClient.get('products');
        if (cached) {
            return res.json(JSON.parse(cached));
        }
        
        const response = await axios.get('https://fakestoreapi.com/products');
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