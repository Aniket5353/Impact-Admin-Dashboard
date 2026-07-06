import { useState } from 'react'
import {
  LayoutDashboard, Users, Briefcase, Map, Building2, Globe2,
  GraduationCap, BarChart3, Bell, ChevronRight, Settings,
  MessageSquare, Calendar
} from 'lucide-react'

const NAV_ITEMS = [
  { id: 'overview',      label: 'Overview',       Icon: LayoutDashboard },
  { id: 'candidates',    label: 'Candidates',     Icon: Users },
  { id: 'jobs',          label: 'Jobs',           Icon: Briefcase },
  { id: 'applications',  label: 'Applications',   Icon: Map },
  { id: 'sponsors',      label: 'Sponsors',       Icon: Building2 },
  { id: 'immigration',   label: 'Immigration',    Icon: Globe2 },
  { id: 'advisors',      label: 'Advisors',       Icon: GraduationCap },
  { id: 'analytics',     label: 'Analytics',      Icon: BarChart3 },
  { id: 'notifications', label: 'Notifications',  Icon: Bell, badge: 2 },
  { id: 'messages',      label: 'Messages',       Icon: MessageSquare, badge: 3 },
  { id: 'consultation',  label: 'Consultation',   Icon: Calendar, badge: 1 },
]

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-slate-100 flex flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2.5 px-6 border-b border-slate-700/60">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
          <Globe2 className="h-4 w-4 text-white" />
        </div>
        <span className="text-lg font-bold tracking-tight text-white">IMMPACT</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-3 mb-3">
          Main Menu
        </p>
        {NAV_ITEMS.map(({ id, label, Icon, badge }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="flex-1 text-left">{label}</span>
              {badge && (
                <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                  {badge}
                </span>
              )}
              {isActive && <ChevronRight className="h-3.5 w-3.5 opacity-70" />}
            </button>
          )
        })}
      </nav>

      {/* User */}
      <div className="border-t border-slate-700/60 p-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
            AU
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-100 truncate">Admin User</p>
            <p className="text-xs text-slate-500 truncate">Immigration Officer</p>
          </div>
          <button className="text-slate-500 hover:text-slate-300 transition-colors">
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  )
}
