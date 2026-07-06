export default function Badge({ children, variant = 'default' }) {
  const base = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold'
  const variants = {
    default:   'bg-blue-100 text-blue-700',
    success:   'bg-emerald-100 text-emerald-700',
    warning:   'bg-amber-100 text-amber-700',
    danger:    'bg-red-100 text-red-700',
    secondary: 'bg-slate-100 text-slate-600',
    outline:   'border border-slate-200 text-slate-600',
    info:      'bg-sky-100 text-sky-700',
    purple:    'bg-violet-100 text-violet-700',
  }
  return <span className={`${base} ${variants[variant] ?? variants.default}`}>{children}</span>
}
