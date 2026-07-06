import { useState } from 'react';
import { jobs as initialJobs } from '../lib/mockData';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import StatusBadge from '../components/ui/StatusBadge';
import Avatar from '../components/ui/Avatar';
import {
  Search, Filter, Plus, Building, MapPin, Banknote, FileCheck2,
  Briefcase, CheckCircle, XCircle, Clock, Star, AlertCircle,
  Eye, Edit2, Trash2, ChevronDown, ChevronUp, Users,
  UserCheck, UserX, Calendar, MessageSquare, Download,
  RefreshCw, MoreHorizontal, Shield, Award, TrendingUp,
  BarChart3, PieChart, Activity, Zap
} from 'lucide-react';

// Mock data for employers, lawyers, advisors
const EMPLOYERS = [
  { id: 1, name: 'TechCorp Inc.', industry: 'Technology', country: 'USA', jobs: 12, verified: true },
  { id: 2, name: 'Global Finance Ltd.', industry: 'Finance', country: 'UK', jobs: 8, verified: true },
  { id: 3, name: 'HealthCare Plus', industry: 'Healthcare', country: 'Canada', jobs: 5, verified: false },
  { id: 4, name: 'Education First', industry: 'Education', country: 'Australia', jobs: 3, verified: true },
  { id: 5, name: 'TechStartup Hub', industry: 'Technology', country: 'Germany', jobs: 6, verified: false },
];

const LAWYERS = [
  { id: 1, name: 'Sarah Mitchell', firm: 'Mitchell & Associates', cases: 34, rating: 4.9 },
  { id: 2, name: 'James Rodriguez', firm: 'Rodriguez Law Group', cases: 28, rating: 4.8 },
  { id: 3, name: 'Emma Watson', firm: 'Watson Legal', cases: 25, rating: 4.7 },
];

const ADVISORS = [
  { id: 1, name: 'Dr. Robert Kim', specialization: 'Visa Consultation', sessions: 156, rating: 4.9 },
  { id: 2, name: 'Patricia Davis', specialization: 'Career Guidance', sessions: 143, rating: 4.8 },
  { id: 3, name: 'Michael O\'Brien', specialization: 'Legal Advice', sessions: 128, rating: 4.7 },
];

export default function Jobs() {
  const [search, setSearch] = useState('');
  const [jobs, setJobs] = useState(initialJobs);
  const [activeTab, setActiveTab] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showJobModal, setShowJobModal] = useState(false);
  const [modalMode, setModalMode] = useState('view');
  const [filterEmployer, setFilterEmployer] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  // Job statistics
  const stats = {
    total: jobs.length,
    pending: jobs.filter(j => j.status === 'pending').length,
    approved: jobs.filter(j => j.status === 'active').length,
    rejected: jobs.filter(j => j.status === 'rejected').length,
    featured: jobs.filter(j => j.featured).length,
    expired: jobs.filter(j => j.status === 'expired').length,
    totalApplications: jobs.reduce((acc, j) => acc + (j.applicants || 0), 0),
    avgSalary: Math.round(jobs.reduce((acc, j) => {
      const salary = parseInt(j.salary.replace(/[^0-9]/g, ''));
      return acc + salary;
    }, 0) / jobs.length)
  };

  // Filter jobs based on tabs and search
  const getFilteredJobs = () => {
    let filtered = jobs.filter(j => {
      const matchesSearch = j.title.toLowerCase().includes(search.toLowerCase()) ||
        j.company.toLowerCase().includes(search.toLowerCase()) ||
        j.country.toLowerCase().includes(search.toLowerCase()) ||
        j.sponsorship?.toLowerCase().includes(search.toLowerCase());
      
      const matchesEmployer = filterEmployer === 'all' || j.employerId === parseInt(filterEmployer);
      const matchesType = filterType === 'all' || j.type === filterType;
      
      return matchesSearch && matchesEmployer && matchesType;
    });

    // Tab filtering
    switch(activeTab) {
      case 'pending':
        filtered = filtered.filter(j => j.status === 'pending');
        break;
      case 'approved':
        filtered = filtered.filter(j => j.status === 'active');
        break;
      case 'rejected':
        filtered = filtered.filter(j => j.status === 'rejected');
        break;
      case 'featured':
        filtered = filtered.filter(j => j.featured);
        break;
      case 'expired':
        filtered = filtered.filter(j => j.status === 'expired');
        break;
      default:
        break;
    }

    // Sorting
    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'title':
          return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
        case 'company':
          return sortOrder === 'asc' ? a.company.localeCompare(b.company) : b.company.localeCompare(a.company);
        case 'applicants':
          return sortOrder === 'asc' ? (a.applicants || 0) - (b.applicants || 0) : (b.applicants || 0) - (a.applicants || 0);
        case 'date':
        default:
          return sortOrder === 'asc' ? new Date(a.postedDate) - new Date(b.postedDate) : new Date(b.postedDate) - new Date(a.postedDate);
      }
    });

    return filtered;
  };

  const filteredJobs = getFilteredJobs();

  const handleApprove = (job) => {
    setSelectedJob(job);
    setShowApprovalModal(true);
  };

  const handleReject = (job) => {
    setSelectedJob(job);
    setShowRejectModal(true);
  };

  const confirmApprove = () => {
    setJobs(jobs.map(j => 
      j.id === selectedJob.id 
        ? { ...j, status: 'active', approvedBy: 'Admin', approvedDate: new Date().toISOString() }
        : j
    ));
    setShowApprovalModal(false);
    setSelectedJob(null);
  };

  const confirmReject = () => {
    setJobs(jobs.map(j => 
      j.id === selectedJob.id 
        ? { ...j, status: 'rejected', rejectedBy: 'Admin', rejectedDate: new Date().toISOString() }
        : j
    ));
    setShowRejectModal(false);
    setSelectedJob(null);
  };

  const handleFeature = (job) => {
    setJobs(jobs.map(j => 
      j.id === job.id 
        ? { ...j, featured: !j.featured }
        : j
    ));
  };

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      pending: 'bg-amber-100 text-amber-700 border-amber-200',
      rejected: 'bg-red-100 text-red-700 border-red-200',
      expired: 'bg-slate-100 text-slate-700 border-slate-200',
      closed: 'bg-slate-100 text-slate-700 border-slate-200'
    };
    return colors[status] || colors.active;
  };

  const getStatusIcon = (status) => {
    const icons = {
      active: <CheckCircle className="h-3 w-3" />,
      pending: <Clock className="h-3 w-3" />,
      rejected: <XCircle className="h-3 w-3" />,
      expired: <AlertCircle className="h-3 w-3" />,
      closed: <AlertCircle className="h-3 w-3" />
    };
    return icons[status] || icons.active;
  };

  // Tab configuration
  const tabs = [
    { id: 'all', label: 'All Jobs', icon: Briefcase, count: stats.total },
    { id: 'pending', label: 'Pending', icon: Clock, count: stats.pending },
    { id: 'approved', label: 'Approved', icon: CheckCircle, count: stats.approved },
    { id: 'rejected', label: 'Rejected', icon: XCircle, count: stats.rejected },
    { id: 'featured', label: 'Featured', icon: Star, count: stats.featured },
    { id: 'expired', label: 'Expired', icon: AlertCircle, count: stats.expired },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <Briefcase className="h-7 w-7 text-indigo-600" />
            Jobs & Sponsorship Portal
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage sponsored job opportunities across regions and employers.</p>
        </div>
        <Button onClick={() => { setModalMode('add'); setShowJobModal(true); }}>
          <Plus className="h-4 w-4" /> Post Job
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Total Jobs</span>
            <Briefcase className="h-4 w-4 text-indigo-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-1">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Pending</span>
            <Clock className="h-4 w-4 text-amber-500" />
          </div>
          <p className="text-2xl font-bold text-amber-600 mt-1">{stats.pending}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Approved</span>
            <CheckCircle className="h-4 w-4 text-emerald-500" />
          </div>
          <p className="text-2xl font-bold text-emerald-600 mt-1">{stats.approved}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Rejected</span>
            <XCircle className="h-4 w-4 text-red-500" />
          </div>
          <p className="text-2xl font-bold text-red-600 mt-1">{stats.rejected}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Featured</span>
            <Star className="h-4 w-4 text-amber-500" />
          </div>
          <p className="text-2xl font-bold text-amber-600 mt-1">{stats.featured}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Applications</span>
            <Users className="h-4 w-4 text-purple-500" />
          </div>
          <p className="text-2xl font-bold text-purple-600 mt-1">{stats.totalApplications}</p>
        </div>
      </div>

      {/* Employer, Lawyer, Advisor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-white/80">Total Employers</p>
              <p className="text-3xl font-bold">{EMPLOYERS.length}</p>
              <p className="text-xs text-white/70 mt-1">Active sponsors</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <Building className="h-6 w-6" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <UserCheck className="h-4 w-4" />
            <span>{EMPLOYERS.filter(e => e.verified).length} verified</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-white/80">Immigration Lawyers</p>
              <p className="text-3xl font-bold">{LAWYERS.length}</p>
              <p className="text-xs text-white/70 mt-1">Legal experts</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <Shield className="h-6 w-6" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Award className="h-4 w-4" />
            <span>Avg rating: {(LAWYERS.reduce((acc, l) => acc + l.rating, 0) / LAWYERS.length).toFixed(1)}⭐</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-white/80">Career Advisors</p>
              <p className="text-3xl font-bold">{ADVISORS.length}</p>
              <p className="text-xs text-white/70 mt-1">Consultation experts</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <MessageSquare className="h-6 w-6" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="h-4 w-4" />
            <span>{ADVISORS.reduce((acc, a) => acc + a.sessions, 0)} total sessions</span>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <Card className="overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-slate-100">
          <div className="flex overflow-x-auto px-4 py-2 gap-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeTab === tab.id ? 'bg-indigo-200 text-indigo-800' : 'bg-slate-100 text-slate-500'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="p-4 border-b border-slate-100 space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search jobs, companies, sponsorship..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex-shrink-0"
              >
                <Filter className="h-4 w-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
                {showFilters ? <ChevronUp className="h-3 w-3 ml-1" /> : <ChevronDown className="h-3 w-3 ml-1" />}
              </Button>
              <Button variant="outline" size="sm" className="flex-shrink-0">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-500 uppercase">Employer:</span>
                <select 
                  value={filterEmployer} 
                  onChange={e => setFilterEmployer(e.target.value)}
                  className="text-xs border border-slate-200 rounded-lg px-3 py-1.5 bg-white focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Employers</option>
                  {EMPLOYERS.map(e => (
                    <option key={e.id} value={e.id}>{e.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-500 uppercase">Type:</span>
                <select 
                  value={filterType} 
                  onChange={e => setFilterType(e.target.value)}
                  className="text-xs border border-slate-200 rounded-lg px-3 py-1.5 bg-white focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Types</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-slate-500">Sort by:</span>
                <select 
                  value={sortBy} 
                  onChange={e => setSortBy(e.target.value)}
                  className="text-xs border border-slate-200 rounded-lg px-3 py-1.5 bg-white focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="date">Date</option>
                  <option value="title">Title</option>
                  <option value="company">Company</option>
                  <option value="applicants">Applicants</option>
                </select>
                <button 
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  {sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Jobs List */}
        <div className="divide-y divide-slate-100">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <Briefcase className="h-12 w-12 mx-auto text-slate-300 mb-3" />
              <p className="font-medium">No jobs found</p>
              <p className="text-sm">Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredJobs.map(job => (
              <div
                key={job.id}
                className="px-6 py-5 hover:bg-slate-50/80 transition-colors group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
                        {job.title}
                      </h3>
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(job.status)}`}>
                        {getStatusIcon(job.status)}
                        {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                      </span>
                      {job.featured && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 border border-amber-200">
                          <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Building className="h-3.5 w-3.5 text-slate-400" />
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                        {job.country}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-800 font-medium">
                        <Banknote className="h-3.5 w-3.5 text-slate-400" />
                        {job.salary}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FileCheck2 className="h-3.5 w-3.5 text-slate-400" />
                        {job.sponsorship}
                      </span>
                      {job.applicants !== undefined && (
                        <span className="flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-slate-400" />
                          {job.applicants} applicants
                        </span>
                      )}
                      {job.type && (
                        <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full text-slate-600">
                          {job.type}
                        </span>
                      )}
                    </div>
                    {job.postedDate && (
                      <p className="text-xs text-slate-400">
                        Posted {new Date(job.postedDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {job.status === 'pending' && (
                      <>
                        <Button 
                          size="sm" 
                          className="bg-emerald-600 hover:bg-emerald-700 text-white"
                          onClick={() => handleApprove(job)}
                        >
                          <CheckCircle className="h-3.5 w-3.5" /> Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-red-200 text-red-600 hover:bg-red-50"
                          onClick={() => handleReject(job)}
                        >
                          <XCircle className="h-3.5 w-3.5" /> Reject
                        </Button>
                      </>
                    )}
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleFeature(job)}
                      className={job.featured ? 'bg-amber-50 border-amber-200 text-amber-700' : ''}
                    >
                      <Star className={`h-3.5 w-3.5 ${job.featured ? 'fill-amber-500 text-amber-500' : ''}`} />
                      {job.featured ? 'Unfeature' : 'Feature'}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => { setSelectedJob(job); setModalMode('view'); setShowJobModal(true); }}
                    >
                      <Eye className="h-3.5 w-3.5" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filteredJobs.length} of {jobs.length} jobs</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Previous</button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">3</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Next</button>
          </div>
        </div>
      </Card>

      {/* Approval Modal */}
      {showApprovalModal && selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-50 rounded-xl">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Approve Job</h3>
                <p className="text-sm text-slate-500">This action will publish the job.</p>
              </div>
            </div>
            <p className="text-slate-600 mb-4">
              Are you sure you want to approve <span className="font-bold">{selectedJob.title}</span> at <span className="font-bold">{selectedJob.company}</span>?
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-6">
              <p className="text-xs text-amber-700 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                This will make the job visible to all candidates and start accepting applications.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3">
              <Button variant="outline" onClick={() => setShowApprovalModal(false)}>Cancel</Button>
              <Button onClick={confirmApprove} className="bg-emerald-600 hover:bg-emerald-700">
                <CheckCircle className="h-4 w-4" /> Approve Job
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-50 rounded-xl">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Reject Job</h3>
                <p className="text-sm text-slate-500">This will reject the job posting.</p>
              </div>
            </div>
            <p className="text-slate-600 mb-4">
              Are you sure you want to reject <span className="font-bold">{selectedJob.title}</span> at <span className="font-bold">{selectedJob.company}</span>?
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-6">
              <p className="text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                This action cannot be undone. The employer will be notified.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3">
              <Button variant="outline" onClick={() => setShowRejectModal(false)}>Cancel</Button>
              <Button onClick={confirmReject} className="bg-red-600 hover:bg-red-700">
                <XCircle className="h-4 w-4" /> Reject Job
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Job View/Edit/Add Modal */}
      {showJobModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-lg font-bold text-slate-900">
                {modalMode === 'view' ? 'Job Details' : modalMode === 'edit' ? 'Edit Job' : 'Post New Job'}
              </h2>
              <button 
                onClick={() => setShowJobModal(false)}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>

            <div className="p-6">
              {modalMode === 'view' && selectedJob && (
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{selectedJob.title}</h3>
                      <p className="text-slate-600">{selectedJob.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedJob.status)}`}>
                        {getStatusIcon(selectedJob.status)}
                        {selectedJob.status}
                      </span>
                      {selectedJob.featured && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 border border-amber-200">
                          <Star className="h-3 w-3 fill-amber-500" /> Featured
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs font-medium text-slate-500 uppercase">Location</p>
                      <p className="text-sm text-slate-800 mt-1">{selectedJob.country}</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs font-medium text-slate-500 uppercase">Salary</p>
                      <p className="text-sm text-slate-800 mt-1">{selectedJob.salary}</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs font-medium text-slate-500 uppercase">Sponsorship</p>
                      <p className="text-sm text-slate-800 mt-1">{selectedJob.sponsorship}</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs font-medium text-slate-500 uppercase">Applicants</p>
                      <p className="text-sm text-slate-800 mt-1">{selectedJob.applicants || 0}</p>
                    </div>
                    {selectedJob.type && (
                      <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-xs font-medium text-slate-500 uppercase">Job Type</p>
                        <p className="text-sm text-slate-800 mt-1">{selectedJob.type}</p>
                      </div>
                    )}
                    {selectedJob.postedDate && (
                      <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-xs font-medium text-slate-500 uppercase">Posted Date</p>
                        <p className="text-sm text-slate-800 mt-1">{new Date(selectedJob.postedDate).toLocaleDateString()}</p>
                      </div>
                    )}
                  </div>

                  {selectedJob.description && (
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs font-medium text-slate-500 uppercase">Description</p>
                      <p className="text-sm text-slate-800 mt-1">{selectedJob.description}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}