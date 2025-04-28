import { Product } from "../../types/Product";
import { Link } from "react-router-dom";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/product/${product.id}`} data-testid="product-card-link">
      <div className="w-full h-auto flex flex-col bg-white rounded-2xl shadow-md overflow-hidden shadow-lg transition-shadow p-4">
        {/* Image */}
        <div className="w-full h-48 sm:h-56 md:h-48 lg:h-56 flex items-center justify-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain"
            data-testid="product-card"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 text-sm text-gray-700">
          <p className="font-semibold line-clamp-2">{product.title}</p>

          <div className="flex justify-between text-gray-600 text-xs">
            <span>Price: <span className="font-bold text-black">${product.price}</span></span>
            <span>Stock: {product.rating.count}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
