interface Props {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export function Select({ value, options, onChange }: Props) {
  return (
    <select
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
