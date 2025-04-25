interface SearchInputProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
  
  export function SearchInput({ value, onChange }: SearchInputProps) {
    return (
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-4 py-2"
        data-testid="search-input"
      />
    )
  }
  