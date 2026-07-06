import { notifications } from '../lib/mockData'
import Button from '../components/ui/Button'
import { Bell, Sparkles, UserCheck, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react'

const ICON_MAP = {
  match:   <Sparkles className="h-5 w-5 text-violet-500" />,
  update:  <UserCheck className="h-5 w-5 text-blue-500" />,
  success: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
  info:    <ShieldCheck className="h-5 w-5 text-sky-500" />,
  alert:   <AlertCircle className="h-5 w-5 text-amber-500" />,
}

const BG_MAP = {
  match:   'bg-violet-50 border-violet-100',
  update:  'bg-blue-50 border-blue-100',
  success: 'bg-emerald-50 border-emerald-100',
  info:    'bg-sky-50 border-sky-100',
  alert:   'bg-amber-50 border-amber-100',
}

export default function Notifications() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Notifications</h1>
          <p className="text-sm text-slate-500 mt-1">Platform alerts and updates.</p>
        </div>
        <Button variant="outline" size="sm">Mark all as read</Button>
      </div>

      <div className="space-y-3">
        {notifications.map(n => (
          <div
            key={n.id}
            className={`flex gap-4 p-4 rounded-xl border ${BG_MAP[n.type] ?? 'bg-white border-slate-200'} hover:shadow-sm transition-shadow`}
          >
            <div className="bg-white rounded-full p-2.5 shadow-sm h-fit mt-0.5">
              {ICON_MAP[n.type] ?? <Bell className="h-5 w-5 text-slate-400" />}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-800 leading-relaxed">{n.message}</p>
              <p className="text-xs text-slate-400 mt-1">{n.time}</p>
            </div>
            {n.type === 'match' && (
              <Button variant="secondary" size="sm" className="shrink-0 self-center">
                View Match
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
