import { useState } from 'react'
import { immigrationRoutes } from '../lib/mockData'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { Calculator, Users2, Coins } from 'lucide-react'

export default function Immigration() {
  const [age, setAge] = useState('')
  const [exp, setExp] = useState('')
  const [ielts, setIelts] = useState('')
  const [edu, setEdu] = useState('Bachelor')
  const [score, setScore] = useState(null)

  const calculate = () => {
    let s = 0
    const a = parseInt(age) || 0
    const e = parseInt(exp) || 0
    const i = parseFloat(ielts) || 0
    if (a >= 18 && a <= 35) s += 30; else if (a <= 45) s += 20; else s += 5
    if (e >= 5) s += 30; else if (e >= 3) s += 20; else s += 10
    if (i >= 7.5) s += 25; else if (i >= 6.5) s += 15; else s += 5
    if (edu === 'PhD') s += 15; else if (edu === 'Master') s += 12; else if (edu === 'Bachelor') s += 8; else s += 4
    setScore(Math.min(s, 100))
  }

  const scoreColor = score !== null
    ? score >= 70 ? 'text-emerald-600' : score >= 50 ? 'text-amber-600' : 'text-red-500'
    : ''

  const scoreMsg = score !== null
    ? score >= 70
      ? 'Strong candidate — eligible for most routes.'
      : score >= 50
      ? 'Moderate — eligible for selected routes.'
      : 'Needs improvement — contact an advisor.'
    : ''

  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Immigration Routes</h1>
        <p className="text-sm text-slate-500 mt-1">Assess eligibility and view active immigration pathways.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Route cards */}
        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-4">
            {immigrationRoutes.map(route => (
              <Card key={route.id} className="p-5 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">{route.name}</h3>
                  <span className="text-2xl">{route.flag}</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Users2 className="h-3.5 w-3.5" /> Eligible Pool
                    </span>
                    <span className="font-semibold text-slate-800">{route.eligible.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Coins className="h-3.5 w-3.5" /> Avg Cost
                    </span>
                    <span className="font-semibold text-slate-800">{route.avgCost}</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${route.color} rounded-full`}
                      style={{ width: `${(route.eligible / 1500) * 100}%` }}
                    />
                  </div>
                </div>
                <Button variant="secondary" size="sm" className="w-full mt-4">
                  View Requirements
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Calculator */}
        <div>
          <Card className="p-6 sticky top-24 border-blue-200">
            <div className="flex items-center gap-2 mb-1">
              <Calculator className="h-5 w-5 text-blue-600" />
              <h2 className="font-semibold text-slate-900">Quick Assessment</h2>
            </div>
            <p className="text-sm text-slate-500 mb-5">Calculate your eligibility score</p>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">Age</label>
                <Input type="number" placeholder="e.g. 28" value={age} onChange={e => setAge(e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">Years of Experience</label>
                <Input type="number" placeholder="e.g. 5" value={exp} onChange={e => setExp(e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">English Score (IELTS)</label>
                <Input type="number" step="0.5" placeholder="e.g. 7.5" value={ielts} onChange={e => setIelts(e.target.value)} />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">Education Level</label>
                <select
                  value={edu}
                  onChange={e => setEdu(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Bachelor">Bachelor's Degree</option>
                  <option value="Master">Master's Degree</option>
                  <option value="PhD">PhD</option>
                  <option value="Diploma">Diploma</option>
                </select>
              </div>
              <Button onClick={calculate} className="w-full" size="lg">
                Calculate Score
              </Button>
            </div>

            {score !== null && (
              <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Your Eligibility Score
                </p>
                <div className={`text-4xl font-bold ${scoreColor}`}>{score}%</div>
                <p className="text-sm text-slate-500 mt-2">{scoreMsg}</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
