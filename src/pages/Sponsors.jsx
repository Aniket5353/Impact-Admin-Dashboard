import { useState } from 'react'
import { sponsors } from '../lib/mockData'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import StarRating from '../components/ui/StarRating'
import { Search, Filter, ShieldCheck, ShieldAlert } from 'lucide-react'

export default function Sponsors() {
  const [search, setSearch] = useState('')

  const filtered = sponsors.filter(s =>
    s.company.toLowerCase().includes(search.toLowerCase()) ||
    s.country.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Sponsor Directory</h1>
          <p className="text-sm text-slate-500 mt-1">Licensed employers approved to sponsor immigrant workers.</p>
        </div>
        <Button>Verify New Sponsor</Button>
      </div>

      <Card>
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search sponsors..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4" /> Filter by Region
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-slate-500 text-xs uppercase tracking-wide">
                <th className="text-left px-6 py-3 font-semibold">Company</th>
                <th className="text-left px-4 py-3 font-semibold">Region</th>
                <th className="text-left px-4 py-3 font-semibold">License</th>
                <th className="text-right px-4 py-3 font-semibold">Active Jobs</th>
                <th className="text-left px-4 py-3 font-semibold">Rating</th>
                <th className="text-left px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map(s => (
                <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-800">{s.company}</td>
                  <td className="px-4 py-4 text-slate-600">{s.country}</td>
                  <td className="px-4 py-4"><Badge variant="outline">{s.license}</Badge></td>
                  <td className="px-4 py-4 text-right font-mono font-medium text-slate-700">{s.activeJobs}</td>
                  <td className="px-4 py-4"><StarRating rating={s.rating} /></td>
                  <td className="px-4 py-4">
                    {s.status === 'Verified' ? (
                      <span className="flex items-center gap-1.5 text-emerald-600 text-sm font-medium">
                        <ShieldCheck className="h-4 w-4" /> Verified
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-amber-600 text-sm font-medium">
                        <ShieldAlert className="h-4 w-4" /> Pending
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <Button variant="ghost" size="sm">Details</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
