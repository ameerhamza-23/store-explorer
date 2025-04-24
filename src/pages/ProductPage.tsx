// src/pages/ProductPage.tsx
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { addToCart } from "../actions/cartActions";

export default function ProductPage() {

  const { id } = useParams();
  const product = useSelector((state: RootState) =>
    state.product.products.find(p => p.id === Number(id))
  );
  const dispatch = useDispatch()

  if (!product) {
    return <div className="p-6">Product not found...</div>;
  }

  return (
    <div className="h-full w-full m-8 flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10">
        <div className="h-[600px] border border-gray-300 bg-gray-50 flex items-center justify-center">
          <img src={product.image} alt={product.title} className="h-full w-full object-contain"/>
        </div>
        <div className="flex flex-col gap-4 p-6">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-yellow-500">⭐ {product.rating?.rate || '4.3'}</span>
          </div>
          <p className="text-sm text-gray-500">In stock: {product.rating?.count || 'N/A'}</p>
          <div className="flex justify-between items-center mt-2">
            <h1 className="text-xl font-bold">${product.price}</h1>
            <button className="px-6 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800 cursor-pointer" onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
