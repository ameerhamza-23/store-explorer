import { useSelector, useDispatch } from "react-redux";
import { RootState } from "reducers/index";
import { RemoveFromCart, IncreaseQuantity, DecreaseQuantity } from "actions/cartActions";
import { useState, useEffect } from "react";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const [total, setTotal] = useState(0);

  const tableColumns = ['Title' , 'Category', 'Rating', 'Stock', 'Price', 'Quantity', 'Remove']

  useEffect(() => {
    setTotal(
      cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    );
  }, [cart]);

  const handleIncrease = (productId: number) => {
    dispatch(IncreaseQuantity(productId));
  };

  const handleDecrease = (productId: number) => {
    dispatch(DecreaseQuantity(productId));
  };

  return (
    <div className="w-full h-full m-8 overflow-x-auto">
      <div className="flex justify-end">
        <h1 className="text-sm">
          Subtotal: <span className="font-semibold">${total.toFixed(2)}</span>
        </h1>
      </div>

      <table className="min-w-full border border-gray-300 text-sm mt-8">
        <thead className="bg-gray-100 text-left">

          <tr>
            {tableColumns.map((value) => {
              return <th key={value} className="px-4 py-4 border-b border-gray-300">{value}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-6 text-center text-gray-500">
                Your cart is empty.
              </td>
            </tr>
          ) : (
            cart.map(({product, quantity}) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 border-b border-gray-200">{product.title}</td>
                <td className="px-4 py-4 border-b border-gray-200">{product.category}</td>
                <td className="px-4 py-4 border-b border-gray-200">
                  {product.rating?.rate ?? "N/A"}
                </td>
                <td className="px-4 py-4 border-b border-gray-200">
                  {product.rating?.count ?? "N/A"}
                </td>
                <td className="px-4 py-4 border-b border-gray-200">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-4 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => handleDecrease(product.id)}
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => handleIncrease(product.id)}
                      disabled={quantity === product.rating.count}
                    >
                      +
                    </button>
                  </div>
                </td>
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
