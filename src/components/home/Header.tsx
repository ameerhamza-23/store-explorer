import { ChangeEvent } from "react"

interface HeaderProps {
    searchTerm: string
    setSearchTerm: (term: string) => void
    categories: string[]
    selectedCategory: string
    setSelectedCategory: (category: string) => void
    sortOption: string
    setSortOption: (option: string) => void
}

export default function Header({
    searchTerm,
    setSearchTerm,
    categories,
    selectedCategory,
    setSelectedCategory,
    sortOption,
    setSortOption,
}: HeaderProps) {

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value)
    }

    const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSortOption(e.target.value)
    }

    return (
        <header className="w-full flex justify-between items-center">
            <h1 className="text-2xl font-bold">Store Explorer</h1>
            <div className="flex gap-4 items-center">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border border-gray-300 rounded px-4 py-2"
                />

                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="px-4 py-2 border rounded border-gray-300"
                >
                    <option value="">All Categories</option>
                    {categories?.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}

                </select>

                <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="px-4 py-2 border rounded border-gray-300"
                >
                    <option value="">Sort By</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating-desc">Rating</option>
                </select>
            </div>
        </header>
    )
}
