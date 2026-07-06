import { advisors } from '../lib/mockData'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Avatar from '../components/ui/Avatar'
import StarRating from '../components/ui/StarRating'
import { 
  Clock, 
  MessageSquare, 
  MapPin, 
  CheckCircle, 
  Award, 
  Users, 
  Calendar,
  Briefcase,
  Shield,
  Star,
  TrendingUp
} from 'lucide-react'

export default function Advisors() {
  // Stats summary
  const totalAdvisors = advisors.length
  const verifiedAdvisors = advisors.filter(a => a.isVerified).length
  const avgRating = (advisors.reduce((acc, a) => acc + a.rating, 0) / advisors.length).toFixed(1)

  return (
    <div className="space-y-7">
      {/* Header with stats */}
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Advisor Marketplace</h1>
            <p className="text-sm text-slate-500 mt-1">Connect with verified immigration lawyers and consultants.</p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">{totalAdvisors}</p>
              <p className="text-xs text-slate-500">Total Advisors</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-emerald-600">{verifiedAdvisors}</p>
              <p className="text-xs text-slate-500">Verified</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-500">{avgRating}</p>
              <p className="text-xs text-slate-500">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter/Search bar - optional */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex-1 min-w-[200px]">
          <input 
            type="text" 
            placeholder="Search advisors..." 
            className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Specializations</option>
          <option>Immigration Law</option>
          <option>Student Visa</option>
          <option>Work Permit</option>
          <option>Family Visa</option>
        </select>
        <select className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Sort by: Rating</option>
          <option>Sort by: Experience</option>
          <option>Sort by: Fee (Low to High)</option>
          <option>Sort by: Fee (High to Low)</option>
        </select>
      </div>

      {/* Advisor Cards Grid */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {advisors.map(a => (
          <Card key={a.id} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
            <div className="flex-1 p-6">
              {/* Avatar & Status */}
              <div className="relative inline-block mx-auto mb-3">
                <Avatar initials={a.initials} color={a.color} size="lg" />
                <span
                  className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
                    a.availability === 'Available' ? 'bg-emerald-500' : 'bg-amber-400'
                  }`}
                />
                {/* Verification Badge */}
                {a.isVerified && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-0.5">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </span>
                )}
              </div>

              {/* Name & Specialization */}
              <div className="text-center mb-3">
                <h3 className="font-semibold text-slate-900 flex items-center justify-center gap-1">
                  {a.name}
                  {a.isVerified && (
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-normal">
                      Verified
                    </span>
                  )}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{a.specialization}</p>
              </div>

              {/* Location & Experience */}
              <div className="flex items-center justify-center gap-3 text-xs text-slate-500 mb-3">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {a.location || 'Remote'}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="h-3 w-3" />
                  {a.experience || '5+ years'}
                </span>
              </div>

              {/* Rating Section */}
              <div className="flex items-center justify-center gap-1 mb-4">
                <StarRating rating={a.rating} />
                <span className="text-xs text-slate-400 ml-1">
                  ({a.reviewCount || 120}+ reviews)
                </span>
                {a.rating >= 4.5 && (
                  <span className="text-xs bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                    <Award className="h-3 w-3" /> Top Rated
                  </span>
                )}
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-2 bg-slate-50 rounded-xl p-3 text-sm mb-3">
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Consultation Fee</p>
                  <p className="font-semibold text-slate-800">{a.fee}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Status</p>
                  <p className={`font-semibold ${a.availability === 'Available' ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {a.availability}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Experience</p>
                  <p className="font-medium text-slate-700 text-xs">{a.yearsExp || '5'} years</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Clients</p>
                  <p className="font-medium text-slate-700 text-xs flex items-center gap-0.5">
                    <Users className="h-3 w-3" /> {a.clientsServed || 200}+
                  </p>
                </div>
              </div>

              {/* Languages & Specialties */}
              {a.languages && (
                <div className="flex flex-wrap gap-1 justify-center mb-2">
                  {a.languages.map((lang, idx) => (
                    <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                      {lang}
                    </span>
                  ))}
                </div>
              )}

              {/* Success Rate */}
              {a.successRate && (
                <div className="flex items-center justify-center gap-1 text-xs text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mx-auto w-fit">
                  <TrendingUp className="h-3 w-3" />
                  {a.successRate}% success rate
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="px-4 pb-4 flex gap-2 border-t border-slate-100 pt-4">
              <Button
                variant={a.availability === 'Available' ? 'primary' : 'secondary'}
                disabled={a.availability !== 'Available'}
                className="flex-1"
                size="sm"
              >
                <Clock className="h-3.5 w-3.5 mr-1.5" /> Book Now
              </Button>
              <Button variant="outline" size="sm" className="px-3">
                <MessageSquare className="h-3.5 w-3.5" />
              </Button>
              <Button variant="outline" size="sm" className="px-3">
                <Shield className="h-3.5 w-3.5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}