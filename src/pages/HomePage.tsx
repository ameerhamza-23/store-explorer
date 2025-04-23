import { Link } from "react-router-dom"
import ProductCard from "../components/products/ProductCard"
import Header from "../components/home/Header"

export default function HomePage() {
    return (
        <div className="h-full w-full m-8 flex flex-col gap-8">
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <Link to="/product">
                    <ProductCard />
                </Link>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
        </div>
    )
}