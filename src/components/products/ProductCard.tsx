import { Product } from "../../types/Product";

export default function ProductCard({product}: {product: Product }) {
    return (
        <div className="w-full h-72 flex flex-col text-sm">

            <div className="w-full h-56 border border-black">
                <img src={product.image} className="w-full h-full object-contain" data-testid='product-card'/>
            </div>

            <div className="flex flex-col border border-black"> 
                <p className="">{product.title}</p>
                <div className="flex justify-between">
                    <h1>Price: ${product.price}</h1>
                    <h1>In Stock: {product.rating.count}</h1>
                </div>
            </div>

        </div>
    )
}