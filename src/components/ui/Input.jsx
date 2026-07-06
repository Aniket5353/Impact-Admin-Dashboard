export default function Input({ placeholder, value, onChange, type = 'text', className = '' }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={
        'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 ' +
        'placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ' +
        `focus:border-transparent ${className}`
      }
    />
  )
}
