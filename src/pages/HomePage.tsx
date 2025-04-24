import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../actions/productActions"
import { RootState } from "../reducers"
import { Product } from "../types/Product"
import ProductCard from "../components/products/ProductCard"
import Header from "../components/home/Header"

export default function HomePage() {
    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.product.products)

    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [sortOption, setSortOption] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then((res) => res.json())
            .then((data) => dispatch(setProducts(data)))
    }, [])

    useEffect(() => {
        let updatedProducts = [...products]

        if (searchTerm) {
            updatedProducts = updatedProducts.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        if (selectedCategory) {
            updatedProducts = updatedProducts.filter((product) =>
                product.category.toLowerCase() === selectedCategory.toLowerCase()
            )
        }

        if (sortOption === "price-asc") {
            updatedProducts.sort((a, b) => a.price - b.price)
        } else if (sortOption === "price-desc") {
            updatedProducts.sort((a, b) => b.price - a.price)
        } else if (sortOption === "rating-desc") {
            updatedProducts.sort((a, b) => b.rating.rate - a.rating.rate)
        }

        setFilteredProducts(updatedProducts)
    }, [searchTerm, selectedCategory, sortOption, products])

    return (
        <div className="h-full w-full m-8 flex flex-col gap-8">
            <Header
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                sortOption={sortOption}
                setSortOption={setSortOption}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
