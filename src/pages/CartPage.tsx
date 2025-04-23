import Header from "../components/home/Header"

export default function CartPage() {
    return (
        <div className="w-full h-full m-8 overflow-x-auto">
            <Header />
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
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4 border-b border-gray-200">Test</td>
                        <td className="px-4 py-4 border-b border-gray-200">Test</td>
                        <td className="px-4 py-4 border-b border-gray-200">4.2</td>
                        <td className="px-4 py-4 border-b border-gray-200">200</td>
                        <td className="px-4 py-4 border-b border-gray-200">$300</td>
                        <td className="px-4 py-4 border-b border-gray-200">
                            <button className="text-red-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4 border-b border-gray-200">Test</td>
                        <td className="px-4 py-4 border-b border-gray-200">Test</td>
                        <td className="px-4 py-4 border-b border-gray-200">4.2</td>
                        <td className="px-4 py-4 border-b border-gray-200">200</td>
                        <td className="px-4 py-4 border-b border-gray-200">$300</td>
                        <td className="px-4 py-4 border-b border-gray-200">
                            <button className="text-red-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
