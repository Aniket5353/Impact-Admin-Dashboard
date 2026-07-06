import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Avatar from '../components/ui/Avatar';
import StatusBadge from '../components/ui/StatusBadge';
import {
  Calendar, Clock, Video, Phone, MessageSquare, Users,
  Search, Filter, Eye, Edit2, Trash2, CheckCircle,
  XCircle, MoreVertical, ChevronDown, ChevronUp,
  RefreshCw, Download, Plus, UserPlus, Star,
  Award, Shield, Briefcase, MapPin, Mail, Phone as PhoneIcon,
  Video as VideoIcon, Mic, MicOff, Camera, CameraOff,
  Share2, MessageCircle, ThumbsUp, ThumbsDown,
  Settings, Maximize2, Minimize2, Volume2, VolumeX,
  Play, Pause, SkipForward, SkipBack, Clock as ClockIcon,
  Calendar as CalendarIcon, Users as UsersIcon
} from 'lucide-react';

// Mock data for consultations
const CONSULTATIONS = {
  advisorBookings: [
    {
      id: 1,
      client: 'Sarah Johnson',
      advisor: 'Dr. Robert Kim',
      type: 'Visa Consultation',
      date: '2026-07-07',
      time: '10:00 AM',
      duration: '45 min',
      status: 'confirmed',
      email: 'sarah.j@email.com',
      phone: '+1 234 567 890',
      notes: 'Initial consultation for work visa application',
      rating: 4.9,
      meetingLink: 'https://meet.example.com/sarah-robert',
      country: 'USA',
      language: 'English'
    },
    {
      id: 2,
      client: 'Michael Chen',
      advisor: 'Patricia Davis',
      type: 'Career Guidance',
      date: '2026-07-07',
      time: '2:30 PM',
      duration: '30 min',
      status: 'pending',
      email: 'michael.c@email.com',
      phone: '+1 345 678 901',
      notes: 'Career transition from engineering to management',
      rating: 4.8,
      meetingLink: 'https://meet.example.com/michael-patricia',
      country: 'Canada',
      language: 'English'
    },
    {
      id: 3,
      client: 'Emma Wilson',
      advisor: 'Michael O\'Brien',
      type: 'Legal Advice',
      date: '2026-07-08',
      time: '11:15 AM',
      duration: '60 min',
      status: 'completed',
      email: 'emma.w@email.com',
      phone: '+1 456 789 012',
      notes: 'Review of employment contract and visa terms',
      rating: 4.7,
      meetingLink: 'https://meet.example.com/emma-michael',
      country: 'UK',
      language: 'English'
    },
    {
      id: 4,
      client: 'David Kim',
      advisor: 'Dr. Robert Kim',
      type: 'Visa Consultation',
      date: '2026-07-08',
      time: '3:00 PM',
      duration: '45 min',
      status: 'cancelled',
      email: 'david.k@email.com',
      phone: '+82 123 456 789',
      notes: 'Cancelled - rescheduling for next week',
      rating: 4.6,
      meetingLink: 'https://meet.example.com/david-robert',
      country: 'South Korea',
      language: 'Korean'
    }
  ],
  lawyerBookings: [
    {
      id: 101,
      client: 'James Rodriguez',
      lawyer: 'Sarah Mitchell',
      type: 'Immigration Law',
      date: '2026-07-07',
      time: '1:00 PM',
      duration: '60 min',
      status: 'confirmed',
      email: 'james.r@email.com',
      phone: '+1 567 890 123',
      notes: 'H-1B visa petition review',
      rating: 4.9,
      meetingLink: 'https://meet.example.com/james-sarah',
      country: 'USA',
      caseNumber: 'CAS-2026-0042'
    },
    {
      id: 102,
      client: 'Maria Garcia',
      lawyer: 'James Rodriguez',
      type: 'Family Law',
      date: '2026-07-08',
      time: '9:30 AM',
      duration: '45 min',
      status: 'pending',
      email: 'maria.g@email.com',
      phone: '+34 678 901 234',
      notes: 'Family sponsorship visa consultation',
      rating: 4.8,
      meetingLink: 'https://meet.example.com/maria-james',
      country: 'Spain',
      caseNumber: 'CAS-2026-0045'
    },
    {
      id: 103,
      client: 'Lisa Thompson',
      lawyer: 'Emma Watson',
      type: 'Employment Law',
      date: '2026-07-09',
      time: '2:00 PM',
      duration: '30 min',
      status: 'confirmed',
      email: 'lisa.t@email.com',
      phone: '+1 789 012 345',
      notes: 'Review of employment contract and non-compete clause',
      rating: 4.7,
      meetingLink: 'https://meet.example.com/lisa-emma',
      country: 'Australia',
      caseNumber: 'CAS-2026-0048'
    }
  ],
  videoMeetings: [
    {
      id: 201,
      title: 'Visa Application Review',
      host: 'Dr. Robert Kim',
      participants: ['Sarah Johnson', 'Michael Chen'],
      date: '2026-07-07',
      time: '10:00 AM',
      duration: '45 min',
      status: 'in-progress',
      meetingLink: 'https://meet.example.com/visa-review',
      recordingAvailable: true,
      participantsCount: 12
    },
    {
      id: 202,
      title: 'Career Development Session',
      host: 'Patricia Davis',
      participants: ['Emma Wilson', 'David Kim', 'Lisa Thompson'],
      date: '2026-07-07',
      time: '2:30 PM',
      duration: '60 min',
      status: 'scheduled',
      meetingLink: 'https://meet.example.com/career-dev',
      recordingAvailable: false,
      participantsCount: 8
    },
    {
      id: 203,
      title: 'Immigration Law Workshop',
      host: 'Sarah Mitchell',
      participants: ['James Rodriguez', 'Maria Garcia', 'John Smith'],
      date: '2026-07-08',
      time: '11:00 AM',
      duration: '90 min',
      status: 'scheduled',
      meetingLink: 'https://meet.example.com/immigration-workshop',
      recordingAvailable: false,
      participantsCount: 25
    },
    {
      id: 204,
      title: 'Client Consultation - H-1B Visa',
      host: 'James Rodriguez',
      participants: ['Sarah Johnson', 'Dr. Robert Kim'],
      date: '2026-07-06',
      time: '3:00 PM',
      duration: '45 min',
      status: 'completed',
      meetingLink: 'https://meet.example.com/h1b-consultation',
      recordingAvailable: true,
      participantsCount: 5
    }
  ]
};

// Statistics
const getStats = () => ({
  totalBookings: CONSULTATIONS.advisorBookings.length + CONSULTATIONS.lawyerBookings.length,
  advisorBookings: CONSULTATIONS.advisorBookings.length,
  lawyerBookings: CONSULTATIONS.lawyerBookings.length,
  videoMeetings: CONSULTATIONS.videoMeetings.length,
  confirmed: [...CONSULTATIONS.advisorBookings, ...CONSULTATIONS.lawyerBookings]
    .filter(b => b.status === 'confirmed').length,
  pending: [...CONSULTATIONS.advisorBookings, ...CONSULTATIONS.lawyerBookings]
    .filter(b => b.status === 'pending').length,
  completed: [...CONSULTATIONS.advisorBookings, ...CONSULTATIONS.lawyerBookings]
    .filter(b => b.status === 'completed').length,
  avgRating: 4.8
});

export default function Consultation() {
  const [activeTab, setActiveTab] = useState('advisor');
  const [search, setSearch] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const stats = getStats();

  const tabs = [
    { id: 'advisor', label: 'Advisor Bookings', icon: Users, count: stats.advisorBookings },
    { id: 'lawyer', label: 'Lawyer Bookings', icon: Shield, count: stats.lawyerBookings },
    { id: 'video', label: 'Video Meetings', icon: Video, count: stats.videoMeetings }
  ];

  const getStatusColor = (status) => {
    const colors = {
      confirmed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      pending: 'bg-amber-100 text-amber-700 border-amber-200',
      completed: 'bg-blue-100 text-blue-700 border-blue-200',
      cancelled: 'bg-red-100 text-red-700 border-red-200',
      'in-progress': 'bg-purple-100 text-purple-700 border-purple-200',
      scheduled: 'bg-indigo-100 text-indigo-700 border-indigo-200'
    };
    return colors[status] || colors.pending;
  };

  const getStatusIcon = (status) => {
    const icons = {
      confirmed: <CheckCircle className="h-3 w-3" />,
      pending: <Clock className="h-3 w-3" />,
      completed: <CheckCircle className="h-3 w-3" />,
      cancelled: <XCircle className="h-3 w-3" />,
      'in-progress': <Video className="h-3 w-3" />,
      scheduled: <Calendar className="h-3 w-3" />
    };
    return icons[status] || icons.pending;
  };

  // Filter data based on active tab
  const getFilteredData = () => {
    let data = [];
    if (activeTab === 'advisor') {
      data = CONSULTATIONS.advisorBookings;
    } else if (activeTab === 'lawyer') {
      data = CONSULTATIONS.lawyerBookings;
    } else {
      data = CONSULTATIONS.videoMeetings;
    }

    // Search filter
    if (search) {
      data = data.filter(item => {
        if (activeTab === 'video') {
          return item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.host.toLowerCase().includes(search.toLowerCase());
        }
        return item.client.toLowerCase().includes(search.toLowerCase()) ||
          item.advisor?.toLowerCase().includes(search.toLowerCase()) ||
          item.lawyer?.toLowerCase().includes(search.toLowerCase()) ||
          item.type.toLowerCase().includes(search.toLowerCase());
      });
    }

    // Status filter for bookings
    if (activeTab !== 'video' && filterStatus !== 'all') {
      data = data.filter(item => item.status === filterStatus);
    }

    return data;
  };

  const filteredData = getFilteredData();

  const handleViewDetails = (item) => {
    setSelectedBooking(item);
    setShowDetailsModal(true);
  };

  const handleJoinMeeting = (meetingLink) => {
    setIsVideoActive(true);
    // In real app, this would open the video meeting
    window.open(meetingLink, '_blank');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <Calendar className="h-7 w-7 text-indigo-600" />
            Consultation Management
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage advisor bookings, lawyer consultations, and video meetings
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4" /> Export
          </Button>
          <Button>
            <Plus className="h-4 w-4" /> New Booking
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Total</span>
            <Calendar className="h-3.5 w-3.5 text-indigo-500" />
          </div>
          <p className="text-xl font-bold text-slate-900 mt-0.5">{stats.totalBookings}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Advisors</span>
            <Users className="h-3.5 w-3.5 text-blue-500" />
          </div>
          <p className="text-xl font-bold text-blue-600 mt-0.5">{stats.advisorBookings}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Lawyers</span>
            <Shield className="h-3.5 w-3.5 text-purple-500" />
          </div>
          <p className="text-xl font-bold text-purple-600 mt-0.5">{stats.lawyerBookings}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Video</span>
            <Video className="h-3.5 w-3.5 text-amber-500" />
          </div>
          <p className="text-xl font-bold text-amber-600 mt-0.5">{stats.videoMeetings}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Confirmed</span>
            <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
          </div>
          <p className="text-xl font-bold text-emerald-600 mt-0.5">{stats.confirmed}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Pending</span>
            <Clock className="h-3.5 w-3.5 text-amber-500" />
          </div>
          <p className="text-xl font-bold text-amber-600 mt-0.5">{stats.pending}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">Rating</span>
            <Star className="h-3.5 w-3.5 text-yellow-500" />
          </div>
          <p className="text-xl font-bold text-yellow-600 mt-0.5">{stats.avgRating}⭐</p>
        </div>
      </div>

      {/* Main Card */}
      <Card className="overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-slate-100">
          <div className="flex overflow-x-auto px-4 py-2 gap-1">
            {tabs.map((tab) => (
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
                placeholder={activeTab === 'video' ? 'Search meetings...' : 'Search bookings...'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
          {showFilters && activeTab !== 'video' && (
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
              <span className="text-xs font-medium text-slate-500 uppercase">Status:</span>
              {['all', 'confirmed', 'pending', 'completed', 'cancelled'].map(status => (
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
            </div>
          )}
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          {activeTab === 'video' ? (
            // Video Meetings Grid View
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredData.length === 0 ? (
                <div className="col-span-2 text-center py-12 text-slate-500">
                  <Video className="h-12 w-12 mx-auto text-slate-300 mb-3" />
                  <p className="font-medium">No video meetings found</p>
                  <p className="text-sm">Try adjusting your search</p>
                </div>
              ) : (
                filteredData.map((meeting) => (
                  <div
                    key={meeting.id}
                    className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-lg transition-shadow group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-50 rounded-lg">
                          <Video className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">{meeting.title}</h4>
                          <p className="text-xs text-slate-500">Hosted by {meeting.host}</p>
                        </div>
                      </div>
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(meeting.status)}`}>
                        {getStatusIcon(meeting.status)}
                        {meeting.status.charAt(0).toUpperCase() + meeting.status.slice(1)}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        {new Date(meeting.date).toLocaleDateString()} at {meeting.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <UsersIcon className="h-4 w-4 text-slate-400" />
                        {meeting.participantsCount} participants
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {meeting.participants.slice(0, 3).map((p, i) => (
                          <span key={i} className="text-xs bg-slate-100 px-2 py-0.5 rounded-full text-slate-600">
                            {p}
                          </span>
                        ))}
                        {meeting.participants.length > 3 && (
                          <span className="text-xs text-slate-400">+{meeting.participants.length - 3} more</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-purple-600 hover:bg-purple-700"
                        onClick={() => handleJoinMeeting(meeting.meetingLink)}
                      >
                        <Video className="h-3.5 w-3.5" /> Join Meeting
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleViewDetails(meeting)}
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : (
            // Bookings Table View
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {activeTab === 'advisor' ? 'Advisor' : 'Lawyer'}
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-12 text-slate-500">
                      <Calendar className="h-12 w-12 mx-auto text-slate-300 mb-3" />
                      <p className="font-medium">No bookings found</p>
                      <p className="text-sm">Try adjusting your search or filters</p>
                    </td>
                  </tr>
                ) : (
                  filteredData.map((booking) => (
                    <tr
                      key={booking.id}
                      className="hover:bg-slate-50/80 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar
                            initials={booking.client.split(' ').map(n => n[0]).join('')}
                            color="bg-gradient-to-br from-indigo-500 to-blue-600"
                            size="sm"
                          />
                          <div>
                            <p className="font-medium text-slate-800">{booking.client}</p>
                            <p className="text-xs text-slate-400">{booking.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-slate-700">
                          {booking.advisor || booking.lawyer}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-slate-600">{booking.type}</span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-sm text-slate-700">
                          <p>{new Date(booking.date).toLocaleDateString()}</p>
                          <p className="text-xs text-slate-400">{booking.time} ({booking.duration})</p>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                          {getStatusIcon(booking.status)}
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleViewDetails(booking)}
                            className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                            title="View Details"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                            title="Edit"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>
                          {booking.status === 'confirmed' && (
                            <button
                              onClick={() => handleJoinMeeting(booking.meetingLink)}
                              className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                              title="Join Meeting"
                            >
                              <Video className="h-4 w-4" />
                            </button>
                          )}
                          <button
                            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                            title="Cancel"
                          >
                            <XCircle className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filteredData.length} of {activeTab === 'advisor' ? stats.advisorBookings : activeTab === 'lawyer' ? stats.lawyerBookings : stats.videoMeetings} items</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Previous</button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">3</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Next</button>
          </div>
        </div>
      </Card>

      {/* Details Modal */}
      {showDetailsModal && selectedBooking && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-indigo-600" />
                Booking Details
              </h2>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{selectedBooking.client}</h3>
                  <p className="text-sm text-slate-600">
                    {selectedBooking.advisor || selectedBooking.lawyer} • {selectedBooking.type}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedBooking.status)}`}>
                      {getStatusIcon(selectedBooking.status)}
                      {selectedBooking.status.charAt(0).toUpperCase() + selectedBooking.status.slice(1)}
                    </span>
                    {selectedBooking.rating && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200">
                        <Star className="h-3 w-3 fill-yellow-400" />
                        {selectedBooking.rating}⭐
                      </span>
                    )}
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => handleJoinMeeting(selectedBooking.meetingLink)}
                >
                  <Video className="h-3.5 w-3.5" /> Join Meeting
                </Button>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" /> Date
                  </p>
                  <p className="text-sm text-slate-800 mt-1">{new Date(selectedBooking.date).toLocaleDateString()}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" /> Time
                  </p>
                  <p className="text-sm text-slate-800 mt-1">{selectedBooking.time} ({selectedBooking.duration})</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5" /> Email
                  </p>
                  <p className="text-sm text-slate-800 mt-1">{selectedBooking.email}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2">
                    <PhoneIcon className="h-3.5 w-3.5" /> Phone
                  </p>
                  <p className="text-sm text-slate-800 mt-1">{selectedBooking.phone}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5" /> Country
                  </p>
                  <p className="text-sm text-slate-800 mt-1">{selectedBooking.country}</p>
                </div>
                {selectedBooking.caseNumber && (
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2">
                      <Briefcase className="h-3.5 w-3.5" /> Case Number
                    </p>
                    <p className="text-sm text-slate-800 mt-1">{selectedBooking.caseNumber}</p>
                  </div>
                )}
                <div className="col-span-2">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2">
                      <MessageSquare className="h-3.5 w-3.5" /> Notes
                    </p>
                    <p className="text-sm text-slate-800 mt-1">{selectedBooking.notes}</p>
                  </div>
                </div>
              </div>

              {/* Meeting Link */}
              {selectedBooking.meetingLink && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-xs font-medium text-blue-700 uppercase flex items-center gap-2">
                    <Video className="h-3.5 w-3.5" /> Meeting Link
                  </p>
                  <a
                    href={selectedBooking.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline mt-1 block truncate"
                  >
                    {selectedBooking.meetingLink}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}