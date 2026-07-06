import { useState } from 'react'
import { jobs } from '../lib/mockData'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import StatusBadge from '../components/ui/StatusBadge'
import { Search, Filter, Plus, Building, MapPin, Banknote, FileCheck2 } from 'lucide-react'

export default function Jobs() {
  const [search, setSearch] = useState('')

  const filtered = jobs.filter(j =>
    j.title.toLowerCase().includes(search.toLowerCase()) ||
    j.company.toLowerCase().includes(search.toLowerCase()) ||
    j.country.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Jobs &amp; Sponsorship Portal</h1>
          <p className="text-sm text-slate-500 mt-1">Manage sponsored job opportunities across regions.</p>
        </div>
        <Button><Plus className="h-4 w-4" /> Post Job</Button>
      </div>

      <Card>
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search jobs, companies..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4" /> Filter by Route
          </Button>
        </div>

        <div className="divide-y divide-slate-100">
          {filtered.map(job => (
            <div
              key={job.id}
              className="px-6 py-5 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-semibold text-slate-900">{job.title}</h3>
                  <StatusBadge status={job.status} />
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5"><Building className="h-3.5 w-3.5" />{job.company}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{job.country}</span>
                  <span className="flex items-center gap-1.5 text-slate-800 font-medium">
                    <Banknote className="h-3.5 w-3.5 text-slate-400" />{job.salary}
                  </span>
                  <span className="flex items-center gap-1.5"><FileCheck2 className="h-3.5 w-3.5" />{job.sponsorship}</span>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="secondary" size="sm">View Applicants</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
