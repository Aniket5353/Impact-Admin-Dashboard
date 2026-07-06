export default function Progress({ value = 0 }) {
  return (
    <div className="h-1.5 w-16 rounded-full bg-slate-100 overflow-hidden">
      <div
        className="h-full rounded-full bg-blue-500 transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}
