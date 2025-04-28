interface CategorySelectProps {
    value: string
    options: string[]
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  }
  
  export function CategorySelect({ value, options, onChange }: CategorySelectProps) {
    return (
      <select
        value={value}
        onChange={onChange}
        className="px-4 py-2 border rounded border-gray-300"
        data-testid="category-select"
      >
        <option value="">All Categories</option>
        {options && options.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    )
  }
  