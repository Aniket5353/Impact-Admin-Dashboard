import { useState } from 'react'
import { notifications as initialNotifications } from '../lib/mockData'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import { 
  Bell, 
  Sparkles, 
  UserCheck, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2,
  Mail,
  Smartphone,
  Monitor,
  Send,
  Clock,
  Filter,
  Search,
  Trash2,
  Eye,
  Copy,
  BarChart3,
  Users,
  Calendar,
  Plus,
  X,
  ChevronDown,
  ChevronRight,
  RefreshCw,
  Download,
  Archive,
  AlertTriangle,
  TrendingUp,
  TrendingDown
} from 'lucide-react'

const ICON_MAP = {
  match:   <Sparkles className="h-5 w-5 text-violet-500" />,
  update:  <UserCheck className="h-5 w-5 text-blue-500" />,
  success: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
  info:    <ShieldCheck className="h-5 w-5 text-sky-500" />,
  alert:   <AlertCircle className="h-5 w-5 text-amber-500" />,
  warning: <AlertTriangle className="h-5 w-5 text-orange-500" />,
}

const BG_MAP = {
  match:   'bg-violet-50 border-violet-100',
  update:  'bg-blue-50 border-blue-100',
  success: 'bg-emerald-50 border-emerald-100',
  info:    'bg-sky-50 border-sky-100',
  alert:   'bg-amber-50 border-amber-100',
  warning: 'bg-orange-50 border-orange-100',
}

const STATUS_COLORS = {
  sent: 'bg-emerald-100 text-emerald-700',
  delivered: 'bg-blue-100 text-blue-700',
  read: 'bg-slate-100 text-slate-700',
  failed: 'bg-red-100 text-red-700',
  pending: 'bg-amber-100 text-amber-700',
  scheduled: 'bg-purple-100 text-purple-700',
}

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('inbox') // inbox | create | history | analytics
  const [selectedType, setSelectedType] = useState('all')
  const [selectedChannel, setSelectedChannel] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [notifications, setNotifications] = useState(initialNotifications)
  const [isCreating, setIsCreating] = useState(false)
  const [selectedNotification, setSelectedNotification] = useState(null)
  const [showDetails, setShowDetails] = useState(false)
  
  // New notification form state
  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    type: 'info',
    channel: ['inapp'],
    audience: 'all',
    scheduledFor: '',
    priority: 'normal'
  })

  // Filter notifications
  const filteredNotifications = notifications.filter(n => {
    const matchesType = selectedType === 'all' || n.type === selectedType
    const matchesSearch = n.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          n.title?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesChannel = selectedChannel === 'all' || n.channel === selectedChannel
    return matchesType && matchesSearch && matchesChannel
  })

  // Statistics
  const totalNotifications = notifications.length
  const unreadCount = notifications.filter(n => !n.read).length
  const sentToday = notifications.filter(n => {
    const today = new Date().toDateString()
    return new Date(n.timestamp).toDateString() === today
  }).length
  const openRate = Math.round((notifications.filter(n => n.read).length / totalNotifications) * 100)

  // Handle create notification
  const handleCreateNotification = () => {
    const newNotif = {
      id: Date.now(),
      ...newNotification,
      timestamp: new Date().toISOString(),
      read: false,
      status: 'sent'
    }
    setNotifications([newNotif, ...notifications])
    setIsCreating(false)
    setNewNotification({
      title: '',
      message: '',
      type: 'info',
      channel: ['inapp'],
      audience: 'all',
      scheduledFor: '',
      priority: 'normal'
    })
  }

  // Handle mark as read
  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ))
  }

  // Handle mark all as read
  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  // Handle delete notification
  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  // Handle resend notification
  const handleResendNotification = (id) => {
    const notif = notifications.find(n => n.id === id)
    if (notif) {
      const newNotif = {
        ...notif,
        id: Date.now(),
        timestamp: new Date().toISOString(),
        status: 'sent'
      }
      setNotifications([newNotif, ...notifications])
    }
  }

  // Notification channels
  const channels = [
    { id: 'inapp', label: 'In-App', icon: Monitor },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'push', label: 'Push', icon: Smartphone },
  ]

  // Notification types for filter
  const types = ['all', 'match', 'update', 'success', 'info', 'alert', 'warning']

  // Audience options
  const audiences = [
    { id: 'all', label: 'All Users' },
    { id: 'advisors', label: 'Advisors Only' },
    { id: 'sponsors', label: 'Sponsors Only' },
    { id: 'applicants', label: 'Applicants Only' },
    { id: 'verified', label: 'Verified Users' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Notifications</h1>
          <p className="text-sm text-slate-500 mt-1">Manage platform alerts, updates, and communications.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Download className="h-4 w-4" /> Export
          </Button>
          <Button onClick={() => setIsCreating(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" /> Create Notification
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 font-medium">Total</p>
              <p className="text-2xl font-bold text-slate-900">{totalNotifications}</p>
            </div>
            <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center">
              <Bell className="h-5 w-5 text-blue-500" />
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 font-medium">Unread</p>
              <p className="text-2xl font-bold text-amber-600">{unreadCount}</p>
            </div>
            <div className="h-10 w-10 bg-amber-50 rounded-full flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-amber-500" />
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 font-medium">Sent Today</p>
              <p className="text-2xl font-bold text-emerald-600">{sentToday}</p>
            </div>
            <div className="h-10 w-10 bg-emerald-50 rounded-full flex items-center justify-center">
              <Send className="h-5 w-5 text-emerald-500" />
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 font-medium">Open Rate</p>
              <p className="text-2xl font-bold text-purple-600">{openRate}%</p>
            </div>
            <div className="h-10 w-10 bg-purple-50 rounded-full flex items-center justify-center">
              <Eye className="h-5 w-5 text-purple-500" />
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200">
        <nav className="flex gap-6">
          {[
            { id: 'inbox', label: 'Inbox', icon: Bell },
            { id: 'create', label: 'Create', icon: Plus },
            { id: 'history', label: 'History', icon: Clock },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 pb-3 px-1 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
              {tab.id === 'inbox' && unreadCount > 0 && (
                <Badge variant="destructive" className="text-xs px-1.5 py-0.5 min-w-[20px]">
                  {unreadCount}
                </Badge>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      {activeTab === 'inbox' && (
        <div>
          {/* Filters */}
          <div className="flex items-center gap-4 flex-wrap mb-4">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search notifications..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <select
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
            <select
              value={selectedChannel}
              onChange={e => setSelectedChannel(e.target.value)}
              className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Channels</option>
              <option value="inapp">In-App</option>
              <option value="email">Email</option>
              <option value="push">Push</option>
            </select>
            <Button variant="outline" size="sm" onClick={handleMarkAllAsRead}>
              Mark all as read
            </Button>
          </div>

          {/* Notification List */}
          <div className="space-y-3">
            {filteredNotifications.length === 0 ? (
              <Card className="p-12 text-center">
                <Bell className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500 font-medium">No notifications found</p>
                <p className="text-sm text-slate-400">Try adjusting your filters or create a new notification</p>
              </Card>
            ) : (
              filteredNotifications.map(n => (
                <div
                  key={n.id}
                  className={`flex gap-4 p-4 rounded-xl border ${BG_MAP[n.type] ?? 'bg-white border-slate-200'} hover:shadow-sm transition-shadow ${
                    !n.read ? 'border-l-4 border-l-blue-500' : ''
                  }`}
                >
                  <div className="bg-white rounded-full p-2.5 shadow-sm h-fit mt-0.5">
                    {ICON_MAP[n.type] ?? <Bell className="h-5 w-5 text-slate-400" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        {n.title && (
                          <p className="text-sm font-semibold text-slate-900">{n.title}</p>
                        )}
                        <p className="text-sm text-slate-800 leading-relaxed">{n.message}</p>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {n.channel && n.channel.map((ch, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {ch}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <p className="text-xs text-slate-400">{n.time || new Date(n.timestamp).toLocaleString()}</p>
                      {n.status && (
                        <Badge className={`text-xs ${STATUS_COLORS[n.status] || 'bg-slate-100 text-slate-700'}`}>
                          {n.status}
                        </Badge>
                      )}
                      {!n.read && (
                        <Badge variant="outline" className="text-xs text-blue-600 border-blue-200 bg-blue-50">
                          New
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {!n.read && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleMarkAsRead(n.id)}
                        className="h-8 w-8 p-0"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                      </Button>
                    )}
                    {n.type === 'match' && (
                      <Button variant="secondary" size="sm" className="shrink-0">
                        View Match
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedNotification(n)
                        setShowDetails(true)
                      }}
                      className="h-8 w-8 p-0"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteNotification(n.id)}
                      className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Create Tab */}
      {activeTab === 'create' && (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Create New Notification</h2>
              <p className="text-sm text-slate-500">Send important updates to your audience</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsCreating(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {/* Title */}
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                Notification Title
              </label>
              <Input
                placeholder="e.g., New Sponsor Verified"
                value={newNotification.title}
                onChange={e => setNewNotification({ ...newNotification, title: e.target.value })}
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                Message Content
              </label>
              <textarea
                placeholder="Write your notification message here..."
                rows={4}
                value={newNotification.message}
                onChange={e => setNewNotification({ ...newNotification, message: e.target.value })}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* Type */}
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                Notification Type
              </label>
              <select
                value={newNotification.type}
                onChange={e => setNewNotification({ ...newNotification, type: e.target.value })}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="info">Information</option>
                <option value="alert">Alert</option>
                <option value="success">Success</option>
                <option value="match">Match</option>
                <option value="update">Update</option>
                <option value="warning">Warning</option>
              </select>
            </div>

            {/* Channels */}
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                Delivery Channels
              </label>
              <div className="flex gap-3">
                {channels.map(channel => (
                  <label key={channel.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newNotification.channel.includes(channel.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setNewNotification({
                            ...newNotification,
                            channel: [...newNotification.channel, channel.id]
                          })
                        } else {
                          setNewNotification({
                            ...newNotification,
                            channel: newNotification.channel.filter(c => c !== channel.id)
                          })
                        }
                      }}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <channel.icon className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-700">{channel.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Audience */}
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                Target Audience
              </label>
              <select
                value={newNotification.audience}
                onChange={e => setNewNotification({ ...newNotification, audience: e.target.value })}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {audiences.map(aud => (
                  <option key={aud.id} value={aud.id}>{aud.label}</option>
                ))}
              </select>
            </div>

            {/* Schedule */}
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                Schedule (Optional)
              </label>
              <Input
                type="datetime-local"
                value={newNotification.scheduledFor}
                onChange={e => setNewNotification({ ...newNotification, scheduledFor: e.target.value })}
              />
            </div>

            {/* Priority */}
            <div>
              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                Priority Level
              </label>
              <select
                value={newNotification.priority}
                onChange={e => setNewNotification({ ...newNotification, priority: e.target.value })}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-slate-100">
              <Button 
                onClick={handleCreateNotification}
                className="flex-1 flex items-center gap-2"
                disabled={!newNotification.message}
              >
                <Send className="h-4 w-4" /> Send Notification
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 flex items-center gap-2"
              >
                <Clock className="h-4 w-4" /> Schedule Later
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => {
                  setIsCreating(false)
                  setNewNotification({
                    title: '',
                    message: '',
                    type: 'info',
                    channel: ['inapp'],
                    audience: 'all',
                    scheduledFor: '',
                    priority: 'normal'
                  })
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* History Tab */}
      {activeTab === 'history' && (
        <Card>
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-slate-400" />
              <span className="font-semibold text-slate-900">Notification History</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" /> Filter
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <RefreshCw className="h-4 w-4" /> Refresh
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-slate-500 text-xs uppercase tracking-wide">
                  <th className="text-left px-6 py-3 font-semibold">Title</th>
                  <th className="text-left px-4 py-3 font-semibold">Type</th>
                  <th className="text-left px-4 py-3 font-semibold">Channels</th>
                  <th className="text-left px-4 py-3 font-semibold">Audience</th>
                  <th className="text-left px-4 py-3 font-semibold">Sent</th>
                  <th className="text-left px-4 py-3 font-semibold">Status</th>
                  <th className="text-left px-4 py-3 font-semibold">Open Rate</th>
                  <th className="text-right px-4 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {notifications.slice(0, 10).map(n => (
                  <tr key={n.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-800">
                      {n.title || 'Untitled'}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1.5">
                        {ICON_MAP[n.type] ?? <Bell className="h-4 w-4 text-slate-400" />}
                        <span className="text-slate-600 capitalize">{n.type}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex gap-1">
                        {n.channel && n.channel.map((ch, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {ch}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {n.audience || 'All Users'}
                    </td>
                    <td className="px-4 py-4 text-slate-600 text-xs">
                      {n.time || new Date(n.timestamp).toLocaleString()}
                    </td>
                    <td className="px-4 py-4">
                      <Badge className={`text-xs ${STATUS_COLORS[n.status || 'sent']}`}>
                        {n.status || 'sent'}
                      </Badge>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-emerald-500 rounded-full"
                            style={{ width: `${Math.round(Math.random() * 60 + 20)}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-slate-600">
                          {Math.round(Math.random() * 60 + 20)}%
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0"
                          onClick={() => handleResendNotification(n.id)}
                        >
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteNotification(n.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between p-4 border-t border-slate-100">
            <p className="text-sm text-slate-500">
              Showing 10 of {notifications.length} notifications
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
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-4">
              <p className="text-xs text-slate-500 font-medium">Total Sent</p>
              <p className="text-2xl font-bold text-slate-900">{totalNotifications}</p>
              <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" /> +12% this month
              </p>
            </Card>
            <Card className="p-4">
              <p className="text-xs text-slate-500 font-medium">Open Rate</p>
              <p className="text-2xl font-bold text-slate-900">{openRate}%</p>
              <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" /> +5% improvement
              </p>
            </Card>
            <Card className="p-4">
              <p className="text-xs text-slate-500 font-medium">Click Rate</p>
              <p className="text-2xl font-bold text-slate-900">34%</p>
              <p className="text-xs text-amber-600 flex items-center gap-1 mt-1">
                <TrendingDown className="h-3 w-3" /> -2% this month
              </p>
            </Card>
            <Card className="p-4">
              <p className="text-xs text-slate-500 font-medium">Bounce Rate</p>
              <p className="text-2xl font-bold text-slate-900">2.4%</p>
              <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
                <TrendingDown className="h-3 w-3" /> -0.8% improvement
              </p>
            </Card>
          </div>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-slate-900">Engagement Overview</h3>
              <select className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
              </select>
            </div>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-slate-200 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-slate-300 mx-auto mb-2" />
                <p className="text-slate-500">Analytics Chart</p>
                <p className="text-xs text-slate-400">Notification engagement data will appear here</p>
              </div>
            </div>
          </Card>

          <div className="grid lg:grid-cols-2 gap-4">
            <Card className="p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Top Performing Types</h3>
              <div className="space-y-3">
                {['match', 'alert', 'success'].map(type => (
                  <div key={type} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {ICON_MAP[type]}
                      <span className="text-sm text-slate-700 capitalize">{type}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${Math.random() * 60 + 40}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-700">
                        {Math.round(Math.random() * 60 + 40)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Channel Performance</h3>
              <div className="space-y-3">
                {channels.map(channel => (
                  <div key={channel.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <channel.icon className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-700">{channel.label}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${Math.random() * 50 + 30}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-700">
                        {Math.round(Math.random() * 50 + 30)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Notification Details Modal */}
      {showDetails && selectedNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">Notification Details</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowDetails(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-2 shadow-sm">
                  {ICON_MAP[selectedNotification.type] ?? <Bell className="h-5 w-5 text-slate-400" />}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{selectedNotification.title || 'Notification'}</p>
                  <Badge className={`text-xs ${STATUS_COLORS[selectedNotification.status || 'sent']}`}>
                    {selectedNotification.status || 'sent'}
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-slate-700">{selectedNotification.message}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs text-slate-500">Type</p>
                  <p className="font-medium text-slate-700 capitalize">{selectedNotification.type}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Channels</p>
                  <p className="font-medium text-slate-700">
                    {selectedNotification.channel?.join(', ') || 'In-App'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Audience</p>
                  <p className="font-medium text-slate-700">{selectedNotification.audience || 'All Users'}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Sent</p>
                  <p className="font-medium text-slate-700">
                    {selectedNotification.time || new Date(selectedNotification.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 pt-4 border-t border-slate-100">
                <Button size="sm" className="flex-1">View Analytics</Button>
                <Button variant="outline" size="sm" className="flex-1">Resend</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}