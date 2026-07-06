export default function Button({
  children, onClick, variant = 'primary', size = 'md', className = '', disabled = false,
}) {
  const base =
    'inline-flex items-center justify-center gap-1.5 font-medium rounded-lg transition-all ' +
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ' +
    'disabled:opacity-50 disabled:cursor-not-allowed'
  const sizes   = { sm: 'px-3 py-1.5 text-xs', md: 'px-4 py-2 text-sm', lg: 'px-5 py-2.5 text-base' }
  const variants = {
    primary:   'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    outline:   'border border-slate-200 text-slate-700 hover:bg-slate-50',
    ghost:     'text-slate-600 hover:bg-slate-100',
    success:   'bg-emerald-600 text-white hover:bg-emerald-700',
    danger:    'bg-red-600 text-white hover:bg-red-700',
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant] ?? variants.primary} ${className}`}
    >
      {children}
    </button>
  )
}
