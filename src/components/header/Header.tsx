import { SearchInput } from "./SearchInput"
import { CategorySelect } from "./CategorySelect"
import { SortSelect } from "./SortSelect"

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
    <header className="w-full flex justify-between items-center">
      <h1 className="text-2xl font-bold">Store Explorer</h1>
      <div className="flex gap-4 items-center">
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
