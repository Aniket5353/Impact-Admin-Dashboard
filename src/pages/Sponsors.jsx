import { useState } from 'react'
import { sponsors, advisors } from '../lib/mockData'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import StarRating from '../components/ui/StarRating'
import Avatar from '../components/ui/Avatar'
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  ShieldAlert, 
  Building2, 
  MapPin, 
  Briefcase,
  Users,
  Calendar,
  TrendingUp,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Mail,
  Phone,
  Globe,
  Award
} from 'lucide-react'

export default function Sponsors() {
  const [search, setSearch] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedSponsor, setSelectedSponsor] = useState(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)

  // Get unique regions for filter
  const regions = ['All', ...new Set(sponsors.map(s => s.country))]

  // Filter sponsors
  const filtered = sponsors.filter(s => {
    const matchesSearch = s.company.toLowerCase().includes(search.toLowerCase()) ||
                          s.country.toLowerCase().includes(search.toLowerCase()) ||
                          s.industry?.toLowerCase().includes(search.toLowerCase())
    const matchesRegion = selectedRegion === 'All' || s.country === selectedRegion
    const matchesStatus = selectedStatus === 'All' || s.status === selectedStatus
    return matchesSearch && matchesRegion && matchesStatus
  })

  // Statistics
  const totalSponsors = sponsors.length
  const verifiedSponsors = sponsors.filter(s => s.status === 'Verified').length
  const totalJobs = sponsors.reduce((acc, s) => acc + s.activeJobs, 0)
  const avgRating = (sponsors.reduce((acc, s) => acc + s.rating, 0) / sponsors.length).toFixed(1)

  // Handle view details
  const handleViewDetails = (sponsor) => {
    setSelectedSponsor(sponsor)
    setShowDetailsModal(true)
  }

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Sponsor Directory</h1>
            <p className="text-sm text-slate-500 mt-1">Licensed employers approved to sponsor immigrant workers.</p>
          </div>
          <div className="flex items-center gap-6 text-sm bg-white p-3 rounded-lg shadow-sm border border-slate-100">
            <div className="text-center">
              <p className="text-xl font-bold text-slate-900">{totalSponsors}</p>
              <p className="text-xs text-slate-500">Total Sponsors</p>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <p className="text-xl font-bold text-emerald-600">{verifiedSponsors}</p>
              <p className="text-xs text-slate-500">Verified</p>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <p className="text-xl font-bold text-blue-600">{totalJobs}</p>
              <p className="text-xs text-slate-500">Active Jobs</p>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <p className="text-xl font-bold text-amber-500">{avgRating}</p>
              <p className="text-xs text-slate-500">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-3 flex-wrap">
        <Button className="flex items-center gap-2">
          <Building2 className="h-4 w-4" /> Verify New Sponsor
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Users className="h-4 w-4" /> View All Applications
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4" /> Reports
        </Button>
      </div>

      {/* Main Card */}
      <Card>
        {/* Filters */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 flex-wrap gap-3">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search by company, country, or industry..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <select 
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedRegion}
              onChange={e => setSelectedRegion(e.target.value)}
            >
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
            <select 
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Verified">Verified</option>
              <option value="Pending">Pending</option>
              <option value="Suspended">Suspended</option>
            </select>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter className="h-4 w-4" /> More Filters
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-slate-500 text-xs uppercase tracking-wide">
                <th className="text-left px-6 py-3 font-semibold">Company</th>
                <th className="text-left px-4 py-3 font-semibold">Industry</th>
                <th className="text-left px-4 py-3 font-semibold">Region</th>
                <th className="text-left px-4 py-3 font-semibold">License</th>
                <th className="text-right px-4 py-3 font-semibold">Active Jobs</th>
                <th className="text-left px-4 py-3 font-semibold">Rating</th>
                <th className="text-left px-4 py-3 font-semibold">Status</th>
                <th className="text-right px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map(s => (
                <tr key={s.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar initials={s.companyInitials || s.company.slice(0, 2).toUpperCase()} size="sm" />
                      <div>
                        <div className="font-semibold text-slate-800">{s.company}</div>
                        {s.website && (
                          <a href={s.website} target="_blank" rel="noopener noreferrer" 
                             className="text-xs text-blue-500 hover:underline flex items-center gap-0.5">
                            <Globe className="h-3 w-3" /> Website
                          </a>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-slate-600">
                    <Badge variant="outline">{s.industry || 'General'}</Badge>
                  </td>
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-1 text-slate-600">
                      <MapPin className="h-3.5 w-3.5" /> {s.country}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1">
                      <Badge variant={s.licenseStatus === 'Active' ? 'success' : 'warning'}>
                        {s.license}
                      </Badge>
                      {s.licenseStatus === 'Active' && (
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div>
                      <span className="font-mono font-semibold text-slate-700">{s.activeJobs}</span>
                      <span className="text-xs text-slate-400 ml-1">open</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div>
                      <StarRating rating={s.rating} />
                      <span className="text-xs text-slate-400 ml-1">({s.reviewCount || 0})</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    {s.status === 'Verified' ? (
                      <span className="flex items-center gap-1.5 text-emerald-600 text-sm font-medium">
                        <ShieldCheck className="h-4 w-4" /> Verified
                      </span>
                    ) : s.status === 'Pending' ? (
                      <span className="flex items-center gap-1.5 text-amber-600 text-sm font-medium">
                        <Clock className="h-4 w-4" /> Pending
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-red-600 text-sm font-medium">
                        <XCircle className="h-4 w-4" /> Suspended
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleViewDetails(s)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-slate-100">
          <p className="text-sm text-slate-500">
            Showing {filtered.length} of {sponsors.length} sponsors
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </Card>

      {/* Details Modal */}
      {showDetailsModal && selectedSponsor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar initials={selectedSponsor.companyInitials || selectedSponsor.company.slice(0, 2).toUpperCase()} size="lg" />
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{selectedSponsor.company}</h2>
                  <p className="text-sm text-slate-500">{selectedSponsor.industry || 'General Industry'}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowDetailsModal(false)}>✕</Button>
            </div>

            <div className="p-6 space-y-6">
              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="font-semibold text-slate-800 flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {selectedSponsor.country}
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-xs text-slate-500">License Number</p>
                  <p className="font-semibold text-slate-800">{selectedSponsor.license}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-xs text-slate-500">Active Jobs</p>
                  <p className="font-semibold text-slate-800">{selectedSponsor.activeJobs} positions</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-xs text-slate-500">Rating</p>
                  <div className="flex items-center gap-2">
                    <StarRating rating={selectedSponsor.rating} />
                    <span className="text-sm font-semibold text-slate-800">({selectedSponsor.reviewCount || 0})</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              {selectedSponsor.description && (
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">About</h3>
                  <p className="text-sm text-slate-600">{selectedSponsor.description}</p>
                </div>
              )}

              {/* Associated Advisors */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Associated Advisors</h3>
                <div className="space-y-2">
                  {advisors
                    .filter(a => a.sponsorId === selectedSponsor.id)
                    .map(advisor => (
                      <div key={advisor.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Avatar initials={advisor.initials} color={advisor.color} size="sm" />
                          <div>
                            <p className="font-medium text-slate-800">{advisor.name}</p>
                            <p className="text-xs text-slate-500">{advisor.specialization}</p>
                          </div>
                        </div>
                        <Badge variant={advisor.availability === 'Available' ? 'success' : 'warning'}>
                          {advisor.availability}
                        </Badge>
                      </div>
                    ))}
                  {advisors.filter(a => a.sponsorId === selectedSponsor.id).length === 0 && (
                    <p className="text-sm text-slate-500 italic">No advisors associated with this sponsor</p>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <Button className="flex-1">Contact Sponsor</Button>
                <Button variant="outline" className="flex-1">View All Jobs</Button>
                <Button variant="outline">Verify</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}