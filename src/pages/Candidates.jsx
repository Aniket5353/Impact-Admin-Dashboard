import { useState } from 'react';
import { candidates as initialCandidates } from '../lib/mockData';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Avatar from '../components/ui/Avatar';
import Progress from '../components/ui/Progress';
import StatusBadge from '../components/ui/StatusBadge';
import {
  Search, Filter, UserPlus, MoreHorizontal, Eye, Edit2, Trash2,
  Shield, ShieldCheck, ShieldAlert, X, Check, AlertTriangle,
  User, Mail, Phone, MapPin, Globe, Calendar, Award, Star,
  Download, Upload, RefreshCw, ChevronDown, ChevronUp,
  UserCheck, UserX, Clock, Briefcase, FileText, MessageSquare,
  Users
} from 'lucide-react';

export default function Candidates() {
  const [search, setSearch] = useState('');
  const [candidates, setCandidates] = useState(initialCandidates);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [modalMode, setModalMode] = useState('view'); // view, edit, add
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showFilters, setShowFilters] = useState(false);

  // Form state for add/edit
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    visaType: '',
    status: 'active',
    profileScore: 50,
    experience: '',
    skills: '',
    education: ''
  });

  // Stats for candidates
  const stats = {
    total: candidates.length,
    active: candidates.filter(c => c.status === 'active' || c.status === 'verified').length,
    blocked: candidates.filter(c => c.status === 'blocked').length,
    pending: candidates.filter(c => c.status === 'pending').length,
    verified: candidates.filter(c => c.status === 'verified').length,
    avgScore: Math.round(candidates.reduce((acc, c) => acc + c.profileScore, 0) / candidates.length)
  };

  const filtered = candidates.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.country.toLowerCase().includes(search.toLowerCase()) ||
      c.visaType.toLowerCase().includes(search.toLowerCase()) ||
      c.email?.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || c.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Sort candidates
  const sorted = [...filtered].sort((a, b) => {
    let aVal = a[sortBy] || '';
    let bVal = b[sortBy] || '';
    if (typeof aVal === 'string') aVal = aVal.toLowerCase();
    if (typeof bVal === 'string') bVal = bVal.toLowerCase();
    if (sortOrder === 'asc') return aVal > bVal ? 1 : -1;
    return aVal < bVal ? 1 : -1;
  });

  const handleView = (candidate) => {
    setSelectedCandidate(candidate);
    setModalMode('view');
    setShowModal(true);
  };

  const handleEdit = (candidate) => {
    setSelectedCandidate(candidate);
    setFormData({
      name: candidate.name,
      email: candidate.email || '',
      phone: candidate.phone || '',
      country: candidate.country,
      city: candidate.city || '',
      visaType: candidate.visaType,
      status: candidate.status,
      profileScore: candidate.profileScore,
      experience: candidate.experience || '',
      skills: candidate.skills || '',
      education: candidate.education || ''
    });
    setModalMode('edit');
    setShowModal(true);
  };

  const handleAdd = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      visaType: '',
      status: 'pending',
      profileScore: 50,
      experience: '',
      skills: '',
      education: ''
    });
    setModalMode('add');
    setShowModal(true);
  };

  const handleDelete = (candidate) => {
    setSelectedCandidate(candidate);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setCandidates(candidates.filter(c => c.id !== selectedCandidate.id));
    setShowDeleteModal(false);
    setSelectedCandidate(null);
  };

  const handleBlock = (candidate) => {
    setCandidates(candidates.map(c => 
      c.id === candidate.id 
        ? { ...c, status: c.status === 'blocked' ? 'active' : 'blocked' }
        : c
    ));
  };

  const handleVerify = (candidate) => {
    setCandidates(candidates.map(c => 
      c.id === candidate.id 
        ? { ...c, status: c.status === 'verified' ? 'active' : 'verified' }
        : c
    ));
  };

  const handleSave = () => {
    if (modalMode === 'add') {
      const newCandidate = {
        id: Date.now(),
        name: formData.name,
        country: formData.country,
        visaType: formData.visaType,
        profileScore: formData.profileScore,
        status: formData.status,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        experience: formData.experience,
        skills: formData.skills.split(',').map(s => s.trim()),
        education: formData.education,
        appliedDate: new Date().toISOString().split('T')[0]
      };
      setCandidates([newCandidate, ...candidates]);
    } else if (modalMode === 'edit') {
      setCandidates(candidates.map(c => 
        c.id === selectedCandidate.id 
          ? { ...c, ...formData, skills: formData.skills.split(',').map(s => s.trim()) }
          : c
      ));
    }
    setShowModal(false);
    setSelectedCandidate(null);
  };

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      verified: 'bg-blue-100 text-blue-700 border-blue-200',
      pending: 'bg-amber-100 text-amber-700 border-amber-200',
      blocked: 'bg-red-100 text-red-700 border-red-200',
      inactive: 'bg-slate-100 text-slate-700 border-slate-200'
    };
    return colors[status] || colors.inactive;
  };

  const getStatusIcon = (status) => {
    const icons = {
      active: <UserCheck className="h-3 w-3" />,
      verified: <ShieldCheck className="h-3 w-3" />,
      pending: <Clock className="h-3 w-3" />,
      blocked: <UserX className="h-3 w-3" />,
      inactive: <User className="h-3 w-3" />
    };
    return icons[status] || icons.inactive;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <User className="h-7 w-7 text-indigo-600" />
            Candidates
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage job seekers and their immigration status.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Download className="h-4 w-4" /> Export
          </Button>
          <Button onClick={handleAdd}>
            <UserPlus className="h-4 w-4" /> Add Candidate
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Total</span>
            <Users className="h-4 w-4 text-slate-400" />
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-1">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Active</span>
            <UserCheck className="h-4 w-4 text-emerald-500" />
          </div>
          <p className="text-2xl font-bold text-emerald-600 mt-1">{stats.active}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Verified</span>
            <ShieldCheck className="h-4 w-4 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-blue-600 mt-1">{stats.verified}</p>
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
            <span className="text-xs font-medium text-slate-500 uppercase">Blocked</span>
            <ShieldAlert className="h-4 w-4 text-red-500" />
          </div>
          <p className="text-2xl font-bold text-red-600 mt-1">{stats.blocked}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Avg Score</span>
            <Award className="h-4 w-4 text-purple-500" />
          </div>
          <p className="text-2xl font-bold text-purple-600 mt-1">{stats.avgScore}%</p>
        </div>
      </div>

      {/* Main Table */}
      <Card className="overflow-hidden">
        {/* Search and Filters */}
        <div className="p-4 border-b border-slate-100 space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search by name, country, visa..."
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
              <span className="text-xs font-medium text-slate-500 uppercase">Filter by status:</span>
              {['all', 'active', 'verified', 'pending', 'blocked'].map(status => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    filterStatus === status
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-slate-500">Sort by:</span>
                <select 
                  value={sortBy} 
                  onChange={e => setSortBy(e.target.value)}
                  className="text-xs border border-slate-200 rounded-lg px-2 py-1 bg-white"
                >
                  <option value="name">Name</option>
                  <option value="country">Country</option>
                  <option value="profileScore">Score</option>
                  <option value="status">Status</option>
                </select>
                <button 
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="p-1 hover:bg-slate-100 rounded"
                >
                  {sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Candidate</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Target Visa</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Score</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {sorted.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-12 text-slate-500">
                    <Users className="h-12 w-12 mx-auto text-slate-300 mb-3" />
                    <p className="font-medium">No candidates found</p>
                    <p className="text-sm">Try adjusting your search or filters</p>
                  </td>
                </tr>
              ) : (
                sorted.map(c => (
                  <tr key={c.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar
                          initials={c.name.split(' ').map(n => n[0]).join('')}
                          color="bg-gradient-to-br from-indigo-500 to-blue-600"
                          size="sm"
                        />
                        <div>
                          <p className="font-medium text-slate-800">{c.name}</p>
                          <p className="text-xs text-slate-400">{c.appliedDate || 'Applied recently'}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-xs text-slate-600">
                        {c.email && <p className="flex items-center gap-1"><Mail className="h-3 w-3" /> {c.email}</p>}
                        {c.phone && <p className="flex items-center gap-1"><Phone className="h-3 w-3" /> {c.phone}</p>}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm text-slate-600">
                        <p>{c.country}</p>
                        {c.city && <p className="text-xs text-slate-400">{c.city}</p>}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-slate-700">{c.visaType}</span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2 min-w-[80px]">
                        <Progress value={c.profileScore} size="sm" />
                        <span className="text-xs font-medium text-slate-600 w-10">{c.profileScore}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(c.status)}`}>
                        {getStatusIcon(c.status)}
                        {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1">
                        <button 
                          onClick={() => handleView(c)}
                          className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                          title="View"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleEdit(c)}
                          className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                          title="Edit"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleVerify(c)}
                          className={`p-1.5 rounded-lg transition-all ${
                            c.status === 'verified' 
                              ? 'text-blue-600 hover:text-blue-700 hover:bg-blue-50' 
                              : 'text-slate-400 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                          title={c.status === 'verified' ? 'Unverify' : 'Verify'}
                        >
                          <ShieldCheck className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleBlock(c)}
                          className={`p-1.5 rounded-lg transition-all ${
                            c.status === 'blocked'
                              ? 'text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50'
                              : 'text-slate-400 hover:text-red-600 hover:bg-red-50'
                          }`}
                          title={c.status === 'blocked' ? 'Unblock' : 'Block'}
                        >
                          {c.status === 'blocked' ? <UserCheck className="h-4 w-4" /> : <ShieldAlert className="h-4 w-4" />}
                        </button>
                        <button 
                          onClick={() => handleDelete(c)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {sorted.length} of {candidates.length} candidates</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Previous</button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">3</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Next</button>
          </div>
        </div>
      </Card>

      {/* View/Edit/Add Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-lg font-bold text-slate-900">
                {modalMode === 'view' ? 'Candidate Details' : 
                 modalMode === 'edit' ? 'Edit Candidate' : 'Add New Candidate'}
              </h2>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>

            <div className="p-6">
              {modalMode === 'view' && selectedCandidate && (
                <div className="space-y-6">
                  {/* Profile Header */}
                  <div className="flex items-start gap-6">
                    <Avatar
                      initials={selectedCandidate.name.split(' ').map(n => n[0]).join('')}
                      color="bg-gradient-to-br from-indigo-500 to-blue-600"
                      size="lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{selectedCandidate.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedCandidate.status)}`}>
                              {getStatusIcon(selectedCandidate.status)}
                              {selectedCandidate.status}
                            </span>
                            <span className="text-xs text-slate-400">ID: #{selectedCandidate.id}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => { setModalMode('edit'); setFormData(selectedCandidate); }}>
                            <Edit2 className="h-3 w-3" /> Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs font-medium text-slate-500 uppercase">Email</p>
                      <p className="text-sm text-slate-800 mt-1">{selectedCandidate.email || 'N/A'}</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs font-medium text-slate-500 uppercase">Phone</p>
                      <p className="text-sm text-slate-800 mt-1">{selectedCandidate.phone || 'N/A'}</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs font-medium text-slate-500 uppercase">Location</p>
                      <p className="text-sm text-slate-800 mt-1">{selectedCandidate.country}{selectedCandidate.city ? `, ${selectedCandidate.city}` : ''}</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs font-medium text-slate-500 uppercase">Target Visa</p>
                      <p className="text-sm text-slate-800 mt-1">{selectedCandidate.visaType}</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 col-span-2">
                      <p className="text-xs font-medium text-slate-500 uppercase">Profile Score</p>
                      <div className="flex items-center gap-3 mt-1">
                        <Progress value={selectedCandidate.profileScore} />
                        <span className="text-sm font-bold text-slate-800">{selectedCandidate.profileScore}%</span>
                      </div>
                    </div>
                    {selectedCandidate.experience && (
                      <div className="bg-slate-50 rounded-xl p-4 col-span-2">
                        <p className="text-xs font-medium text-slate-500 uppercase">Experience</p>
                        <p className="text-sm text-slate-800 mt-1">{selectedCandidate.experience}</p>
                      </div>
                    )}
                    {selectedCandidate.skills && selectedCandidate.skills.length > 0 && (
                      <div className="bg-slate-50 rounded-xl p-4 col-span-2">
                        <p className="text-xs font-medium text-slate-500 uppercase">Skills</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {selectedCandidate.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-slate-700 border border-slate-200">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <Button 
                      variant={selectedCandidate.status === 'verified' ? 'outline' : 'default'}
                      onClick={() => { handleVerify(selectedCandidate); setShowModal(false); }}
                      className={selectedCandidate.status === 'verified' ? 'border-blue-200 text-blue-600' : ''}
                    >
                      <ShieldCheck className="h-4 w-4" />
                      {selectedCandidate.status === 'verified' ? 'Unverify' : 'Verify'}
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => { handleBlock(selectedCandidate); setShowModal(false); }}
                      className={selectedCandidate.status === 'blocked' ? 'border-emerald-200 text-emerald-600' : 'border-red-200 text-red-600'}
                    >
                      {selectedCandidate.status === 'blocked' ? <UserCheck className="h-4 w-4" /> : <ShieldAlert className="h-4 w-4" />}
                      {selectedCandidate.status === 'blocked' ? 'Unblock' : 'Block'}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-red-200 text-red-600 hover:bg-red-50"
                      onClick={() => { setShowModal(false); handleDelete(selectedCandidate); }}
                    >
                      <Trash2 className="h-4 w-4" /> Delete
                    </Button>
                  </div>
                </div>
              )}

              {/* Add/Edit Form */}
              {(modalMode === 'add' || modalMode === 'edit') && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-slate-600 block mb-1">Full Name *</label>
                      <Input 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-600 block mb-1">Email</label>
                      <Input 
                        value={formData.email} 
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        type="email"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-600 block mb-1">Phone</label>
                      <Input 
                        value={formData.phone} 
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        placeholder="+1 234 567 890"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-600 block mb-1">Country *</label>
                      <Input 
                        value={formData.country} 
                        onChange={e => setFormData({...formData, country: e.target.value})}
                        placeholder="United States"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-600 block mb-1">City</label>
                      <Input 
                        value={formData.city} 
                        onChange={e => setFormData({...formData, city: e.target.value})}
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-600 block mb-1">Target Visa *</label>
                      <Input 
                        value={formData.visaType} 
                        onChange={e => setFormData({...formData, visaType: e.target.value})}
                        placeholder="H-1B, L-1, etc."
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-600 block mb-1">Status</label>
                      <select 
                        value={formData.status} 
                        onChange={e => setFormData({...formData, status: e.target.value})}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2 text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="pending">Pending</option>
                        <option value="active">Active</option>
                        <option value="verified">Verified</option>
                        <option value="blocked">Blocked</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-600 block mb-1">Profile Score (%)</label>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={formData.profileScore}
                        onChange={e => setFormData({...formData, profileScore: parseInt(e.target.value)})}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>0%</span>
                        <span className="font-bold text-indigo-600">{formData.profileScore}%</span>
                        <span>100%</span>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <label className="text-xs font-medium text-slate-600 block mb-1">Experience</label>
                      <Input 
                        value={formData.experience} 
                        onChange={e => setFormData({...formData, experience: e.target.value})}
                        placeholder="5 years in software development"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="text-xs font-medium text-slate-600 block mb-1">Skills (comma separated)</label>
                      <Input 
                        value={formData.skills} 
                        onChange={e => setFormData({...formData, skills: e.target.value})}
                        placeholder="React, Node.js, Python, Docker"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="text-xs font-medium text-slate-600 block mb-1">Education</label>
                      <Input 
                        value={formData.education} 
                        onChange={e => setFormData({...formData, education: e.target.value})}
                        placeholder="B.Sc. Computer Science, MIT"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                    <Button variant="outline" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button onClick={handleSave}>
                      {modalMode === 'add' ? 'Add Candidate' : 'Save Changes'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedCandidate && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-50 rounded-xl">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Delete Candidate</h3>
                <p className="text-sm text-slate-500">This action cannot be undone.</p>
              </div>
            </div>
            <p className="text-slate-600 mb-6">
              Are you sure you want to delete <span className="font-bold">{selectedCandidate.name}</span>? 
              All associated data will be permanently removed.
            </p>
            <div className="flex items-center justify-end gap-3">
              <Button variant="outline" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
              <Button onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
                <Trash2 className="h-4 w-4" /> Delete Permanently
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}