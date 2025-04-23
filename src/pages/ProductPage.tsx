export default function ProductPage() {
    return (
        <div className="h-full w-full m-8 flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10">

                <div className="h-[600px] border border-gray-300 bg-gray-50 flex items-center justify-center">
                    <img src="https://via.placeholder.com/300" alt="Product" className="h-full w-full object-contain"/>
                </div>

                <div className="flex flex-col gap-4 p-6">
                    <h1 className="text-2xl font-semibold">Product Title Here</h1>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum explicabo non aspernatur minus deleniti necessitatibus, fugiat consequatur officia. Odio quas sint esse tempora ut autem repudiandae eos quae assumenda minima.
                    </p>

                    <p className="text-sm text-gray-500">Category: Electronics</p>

                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-yellow-500">⭐ 4.3</span>
                    </div>

                    <p className="text-sm text-gray-500">In stock: 34</p>


                    <div className="flex justify-between items-center mt-2">
                        <h1 className="text-xl font-bold">$500</h1>
                        <button className="px-6 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800">
                            Add to Cart
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
