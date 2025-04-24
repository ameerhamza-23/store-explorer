import { ChangeEvent } from "react"

interface HeaderProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

export default function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <header className="w-full flex justify-between items-center">
      <h1 className="text-2xl font-bold">Store Explorer</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleChange}
        className="border border-gray-300 rounded px-4 py-2"
      />
    </header>
  )
}
