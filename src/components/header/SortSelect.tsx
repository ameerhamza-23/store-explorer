interface SortSelectProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  }
  
  export function SortSelect({ value, onChange }: SortSelectProps) {
    return (
      <select
        value={value}
        onChange={onChange}
        className="px-4 py-2 border rounded border-gray-300"
      >
        <option value="">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Rating</option>
      </select>
    )
  }
  