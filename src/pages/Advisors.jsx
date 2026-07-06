import { advisors } from '../lib/mockData'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Avatar from '../components/ui/Avatar'
import StarRating from '../components/ui/StarRating'
import { Clock, MessageSquare } from 'lucide-react'

export default function Advisors() {
  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Advisor Marketplace</h1>
        <p className="text-sm text-slate-500 mt-1">Connect with verified immigration lawyers and consultants.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {advisors.map(a => (
          <Card key={a.id} className="overflow-hidden flex flex-col">
            <div className="flex-1 p-6 text-center">
              <div className="relative inline-block mx-auto mb-4">
                <Avatar initials={a.initials} color={a.color} size="lg" />
                <span
                  className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
                    a.availability === 'Available' ? 'bg-emerald-500' : 'bg-amber-400'
                  }`}
                />
              </div>

              <h3 className="font-semibold text-slate-900">{a.name}</h3>
              <p className="text-xs text-slate-500 mt-0.5 mb-3">{a.specialization}</p>

              <div className="flex items-center justify-center gap-1 mb-4">
                <StarRating rating={a.rating} />
                <span className="text-xs text-slate-400 ml-1">(120+ reviews)</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-left bg-slate-50 rounded-xl p-3 text-sm">
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Rate</p>
                  <p className="font-semibold text-slate-800">{a.fee}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Status</p>
                  <p className={`font-semibold ${a.availability === 'Available' ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {a.availability}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-4 pb-4 flex gap-2 border-t border-slate-100 pt-4">
              <Button
                variant={a.availability === 'Available' ? 'primary' : 'secondary'}
                disabled={a.availability !== 'Available'}
                className="flex-1"
                size="sm"
              >
                <Clock className="h-3.5 w-3.5" /> Book
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="h-3.5 w-3.5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
