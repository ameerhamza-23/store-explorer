export default function ProductCard() {
    return (
        <div className="w-full h-72 flex flex-col text-sm">

            <div className="w-full h-56 border border-black">

            </div>

            <div className="flex flex-col border border-black"> 
                <p className="">Product1</p>
                <div className="flex justify-between">
                    <h1>Price: $100</h1>
                    <h1>In Stock: 0</h1>
                </div>
            </div>

        </div>
    )
}