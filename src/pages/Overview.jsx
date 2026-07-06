import { stats, pipeline } from '../lib/mockData'
import Card from '../components/ui/Card'
import {
  Users, Briefcase, Building2, FileText, TrendingUp,
  BadgeCheck, GraduationCap, Banknote, ArrowUpRight, ArrowDownRight,
} from 'lucide-react'

const STAT_CARDS = [
  { title: 'Total Candidates',   value: () => stats.totalCandidates.toLocaleString(),      Icon: Users,         trend: '+12.5%', up: true,  color: 'text-blue-600',    bg: 'bg-blue-50' },
  { title: 'Active Jobs',         value: () => stats.activeJobs.toLocaleString(),           Icon: Briefcase,     trend: '+4.2%',  up: true,  color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { title: 'Verified Sponsors',   value: () => stats.sponsorsVerified.toLocaleString(),     Icon: Building2,     trend: '+2.1%',  up: true,  color: 'text-violet-600',  bg: 'bg-violet-50' },
  { title: 'Applications (MTD)',  value: () => stats.applicationsThisMonth.toLocaleString(), Icon: FileText,     trend: '-1.4%',  up: false, color: 'text-red-600',     bg: 'bg-red-50' },
  { title: 'Avg Match Score',     value: () => `${stats.aiMatchScore}%`,                    Icon: TrendingUp,    trend: '+5.1%',  up: true,  color: 'text-sky-600',     bg: 'bg-sky-50' },
  { title: 'Pending Visas',       value: () => stats.pendingVisaCases.toLocaleString(),     Icon: BadgeCheck,    trend: '-8.3%',  up: true,  color: 'text-amber-600',   bg: 'bg-amber-50' },
  { title: 'Available Advisors',  value: () => stats.advisorsAvailable.toLocaleString(),    Icon: GraduationCap, trend: '0%',     up: true,  color: 'text-teal-600',    bg: 'bg-teal-50' },
  { title: 'Revenue (MTD)',       value: () => `£${stats.revenueMTD.toLocaleString()}`,     Icon: Banknote,      trend: '+14.5%', up: true,  color: 'text-green-600',   bg: 'bg-green-50' },
]

const PIPELINE_STAGES = [
  { label: 'Applied',         value: pipeline.applied,         color: 'bg-blue-500' },
  { label: 'Shortlisted',     value: pipeline.shortlisted,     color: 'bg-indigo-500' },
  { label: 'Interview',       value: pipeline.interview,       color: 'bg-purple-500' },
  { label: 'Offer',           value: pipeline.offer,           color: 'bg-pink-500' },
  { label: 'Visa Processing', value: pipeline.visaProcessing,  color: 'bg-amber-500' },
  { label: 'Onboarded',       value: pipeline.onboarded,       color: 'bg-emerald-500' },
]

const SYSTEM_SERVICES = [
  ['API Server', 'Healthy'],
  ['Database', 'Healthy'],
  ['AI Engine', 'Healthy'],
  ['Storage', 'Healthy'],
]

export default function Overview() {
  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Overview</h1>
        <p className="text-slate-500 mt-1 text-sm">Mission control for all immigration operations.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STAT_CARDS.map(({ title, value, Icon, trend, up, color, bg }, i) => (
          <Card key={i} className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{title}</p>
                <p className="text-2xl font-bold text-slate-900 mt-1.5">{value()}</p>
                <div className={`flex items-center gap-1 mt-2 text-xs font-medium ${up ? 'text-emerald-600' : 'text-red-500'}`}>
                  {up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                  {trend} vs last month
                </div>
              </div>
              <div className={`${bg} ${color} p-2.5 rounded-xl`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pipeline + System health */}
      <div className="grid lg:grid-cols-5 gap-6">
        <Card className="lg:col-span-3 p-6">
          <h2 className="font-semibold text-slate-900 mb-5">Application Pipeline Funnel</h2>
          <div className="space-y-4">
            {PIPELINE_STAGES.map(({ label, value, color }, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-28 text-sm font-medium text-slate-600">{label}</div>
                <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${color} rounded-full`}
                    style={{ width: `${(value / pipeline.applied) * 100}%` }}
                  />
                </div>
                <div className="w-14 text-right text-sm font-mono font-medium text-slate-700">
                  {value.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="lg:col-span-2 p-6 flex flex-col items-center justify-center text-center">
          <h2 className="font-semibold text-slate-900 mb-6 self-start w-full">System Health</h2>
          <div className="relative w-36 h-36">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#e2e8f0" strokeWidth="10" />
              <circle cx="60" cy="60" r="50" fill="none" stroke="#10b981" strokeWidth="10"
                strokeDasharray="314" strokeDashoffset="3" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-emerald-600">99%</span>
            </div>
          </div>
          <p className="mt-4 font-medium text-slate-800">All systems operational</p>
          <p className="text-sm text-slate-500 mt-1">API latency: 42ms</p>
          <div className="mt-5 w-full space-y-2 text-xs">
            {SYSTEM_SERVICES.map(([service, status]) => (
              <div key={service} className="flex justify-between items-center px-3 py-1.5 bg-slate-50 rounded-lg">
                <span className="text-slate-600">{service}</span>
                <span className="text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  {status}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
