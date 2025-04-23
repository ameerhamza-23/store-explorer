export default function Header() {
    return (
        <div className="flex justify-between">
                <div className="w-full sm:w-72 md:w-96">
                    <input type="text" placeholder="Enter title" className="p-2 rounded-lg border border-gray-600 w-full"/>
                </div>

                <div className="hidden sm:block sm:flex gap-4">
                    <button className="px-4 py-1 rounded rouneded-lg text-sm border border-gray-600">Filter</button>
                    <button className="px-4 py-1 rounded rouneded-lg text-sm border border-gray-600">Sort</button>
                </div>
        </div>
    )
}