import ProductCard from "../components/products/ProductCard"

export default function HomePage() {
    return (
        <div className="h-full w-full m-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
        </div>
    )
}