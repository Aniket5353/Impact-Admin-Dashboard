import { pipeline } from '../lib/mockData'
import Card from '../components/ui/Card'
import { MoreVertical } from 'lucide-react'

const STAGES = [
  { id: 'applied',     label: 'Applied',        count: pipeline.applied,        border: 'border-t-blue-500' },
  { id: 'shortlisted', label: 'Shortlisted',     count: pipeline.shortlisted,    border: 'border-t-indigo-500' },
  { id: 'interview',   label: 'Interview',        count: pipeline.interview,      border: 'border-t-purple-500' },
  { id: 'offer',       label: 'Offer',            count: pipeline.offer,          border: 'border-t-pink-500' },
  { id: 'visa',        label: 'Visa Processing',  count: pipeline.visaProcessing, border: 'border-t-amber-500' },
  { id: 'onboarded',   label: 'Onboarded',        count: pipeline.onboarded,      border: 'border-t-emerald-500' },
]

const MOCK_CARDS = [
  { id: 1, name: 'Priya Sharma',     role: 'Data Scientist', company: 'CanadaTech',  stage: 'shortlisted' },
  { id: 2, name: 'Carlos Mendes',    role: 'Civil Engineer', company: 'AusBuilders', stage: 'interview' },
  { id: 3, name: 'Liu Wei',          role: 'Senior Dev',     company: 'TechCorp UK', stage: 'offer' },
  { id: 4, name: 'Fatima Al-Rashid', role: 'ICU Nurse',      company: 'NHS Trust',   stage: 'visa' },
]

export default function Applications() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Application Tracker</h1>
        <p className="text-sm text-slate-500 mt-1">Pipeline view of all candidate applications.</p>
      </div>

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max">
          {STAGES.map(stage => (
            <div
              key={stage.id}
              className={`w-64 flex flex-col rounded-xl bg-slate-50 border border-slate-200 border-t-4 ${stage.border} overflow-hidden`}
            >
              <div className="flex items-center justify-between px-4 pt-4 pb-3">
                <h3 className="font-semibold text-sm text-slate-700">{stage.label}</h3>
                <span className="bg-white border border-slate-200 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full">
                  {stage.count.toLocaleString()}
                </span>
              </div>

              <div className="flex-1 px-3 pb-4 space-y-2.5 min-h-[200px]">
                {MOCK_CARDS.filter(c => c.stage === stage.id).map(card => (
                  <Card key={card.id} className="p-3.5 cursor-pointer hover:border-blue-300 transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="font-medium text-sm text-slate-800">{card.name}</span>
                      <MoreVertical className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    </div>
                    <p className="text-xs text-slate-500 mb-2.5">{card.role}</p>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                      {card.company}
                    </span>
                  </Card>
                ))}

                {MOCK_CARDS.filter(c => c.stage === stage.id).length === 0 && (
                  <div className="text-center py-6 text-xs text-slate-400 border-2 border-dashed border-slate-200 rounded-lg">
                    No active applications
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
