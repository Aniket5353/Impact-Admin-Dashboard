import { useState } from 'react'
import { candidates } from '../lib/mockData'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Avatar from '../components/ui/Avatar'
import Progress from '../components/ui/Progress'
import StatusBadge from '../components/ui/StatusBadge'
import { Search, Filter, UserPlus, MoreHorizontal } from 'lucide-react'

export default function Candidates() {
  const [search, setSearch] = useState('')

  const filtered = candidates.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.country.toLowerCase().includes(search.toLowerCase()) ||
    c.visaType.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Candidates</h1>
          <p className="text-sm text-slate-500 mt-1">Manage job seekers and their immigration status.</p>
        </div>
        <Button><UserPlus className="h-4 w-4" /> Add Candidate</Button>
      </div>

      <Card>
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search candidates..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4" /> Filters
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-slate-500 text-xs uppercase tracking-wide">
                <th className="text-left px-6 py-3 font-semibold">Candidate</th>
                <th className="text-left px-4 py-3 font-semibold">Country</th>
                <th className="text-left px-4 py-3 font-semibold">Target Visa</th>
                <th className="text-left px-4 py-3 font-semibold">Profile Score</th>
                <th className="text-left px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map(c => (
                <tr key={c.id} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                  <td className="px-6 py-4 font-medium text-slate-800">
                    <div className="flex items-center gap-3">
                      <Avatar
                        initials={c.name.split(' ').map(n => n[0]).join('')}
                        color="bg-blue-600"
                        size="sm"
                      />
                      {c.name}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-slate-600">{c.country}</td>
                  <td className="px-4 py-4 text-slate-600">{c.visaType}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Progress value={c.profileScore} />
                      <span className="text-xs text-slate-500">{c.profileScore}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <StatusBadge status={c.status} />
                  </td>
                  <td className="px-4 py-4">
                    <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-600 transition-all">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
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
