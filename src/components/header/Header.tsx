import { SearchInput } from "components/header/SearchInput/SearchInput"
import { CategorySelect } from "components/header/categorySelect/CategorySelect"
import { SortSelect } from "components/header/SortSelect/SortSelect"

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
  return (
    <header className="w-full flex flex-wrap justify-between items-center p-4">
      <h1 className="text-2xl font-bold mb-4 sm:mb-0">Store Explorer</h1>
      <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
        <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <CategorySelect
          value={selectedCategory}
          options={categories}
          onChange={(e) => setSelectedCategory(e.target.value)}
        />
        <SortSelect value={sortOption} onChange={(e) => setSortOption(e.target.value)} />
      </div>
    </header>
  )
}
