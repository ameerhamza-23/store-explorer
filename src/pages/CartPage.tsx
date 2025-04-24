import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { Product } from "../types/Product";
import { RemoveFromCart } from "../actions/cartActions";
import { useState, useEffect } from "react";

export default function CartPage() {

  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.cart);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(
      products.reduce((acc, product) => acc + product.price, 0)
    );
  }, [products]);

  return (
    <div className="w-full h-full m-8 overflow-x-auto">

        <div className="flex justify-end">
            <h1 className="text-sm">Subtotal: <span className="font-semibold">{total}</span></h1>
        </div>

      <table className="min-w-full border border-gray-300 text-sm mt-8">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-4 border-b border-gray-300">Title</th>
            <th className="px-4 py-4 border-b border-gray-300">Category</th>
            <th className="px-4 py-4 border-b border-gray-300">Rating</th>
            <th className="px-4 py-4 border-b border-gray-300">Stock</th>
            <th className="px-4 py-4 border-b border-gray-300">Price</th>
            <th className="px-4 py-4 border-b border-gray-300">Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                Your cart is empty.
              </td>
            </tr>
          ) : (
            products.map((product: Product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 border-b border-gray-200">{product.title}</td>
                <td className="px-4 py-4 border-b border-gray-200">{product.category}</td>
                <td className="px-4 py-4 border-b border-gray-200">
                  {product.rating?.rate ?? "N/A"}
                </td>
                <td className="px-4 py-4 border-b border-gray-200">
                  {product.rating?.count ?? "N/A"}
                </td>
                <td className="px-4 py-4 border-b border-gray-200">${product.price}</td>
                <td className="px-4 py-4 border-b border-gray-200">
                  <button
                    className="text-red-500 cursor-pointer"
                    onClick={() => dispatch(RemoveFromCart(product.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
