import { useState } from 'react'
import { messages, chatUsers } from '../lib/mockData'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import { 
  Search, 
  Send, 
  Paperclip, 
  Smile, 
  MoreVertical,
  Phone,
  Video,
  Info,
  Check,
  CheckCheck,
  Clock,
  Users,
  Briefcase,
  UserCheck,
  Scale,
  MessageCircle,
  Pin,
  Archive,
  Trash2,
  Star,
  Filter,
  ChevronDown,
  ChevronLeft,
  Circle,
  Mic,
  Image as ImageIcon,
  File,
  Link,
  Calendar,
  AlertCircle
} from 'lucide-react'

// Chat type configurations
const CHAT_TYPES = {
  candidate: {
    id: 'candidate',
    label: 'Candidate Chats',
    icon: Users,
    color: 'blue',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600'
  },
  employer: {
    id: 'employer',
    label: 'Employer Chats',
    icon: Briefcase,
    color: 'emerald',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600'
  },
  advisor: {
    id: 'advisor',
    label: 'Advisor Chats',
    icon: UserCheck,
    color: 'violet',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    textColor: 'text-violet-600'
  },
  lawyer: {
    id: 'lawyer',
    label: 'Lawyer Chats',
    icon: Scale,
    color: 'amber',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-600'
  }
}

export default function Messages() {
  const [activeChatType, setActiveChatType] = useState('candidate')
  const [selectedChat, setSelectedChat] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [messageInput, setMessageInput] = useState('')
  const [showChatInfo, setShowChatInfo] = useState(false)
  const [viewMode, setViewMode] = useState('list') // list | grid

  // Get current chat type config
  const currentChatType = CHAT_TYPES[activeChatType]
  
  // Filter chats based on active type and search
  const filteredChats = messages
    .filter(chat => chat.type === activeChatType)
    .filter(chat => {
      const searchLower = searchTerm.toLowerCase()
      return chat.name.toLowerCase().includes(searchLower) ||
             chat.lastMessage.toLowerCase().includes(searchLower) ||
             chat.role?.toLowerCase().includes(searchLower)
    })

  // Get unread count for chat type
  const getUnreadCount = (type) => {
    return messages.filter(m => m.type === type && !m.read).length
  }

  // Get online status
  const getStatusColor = (status) => {
    return status === 'online' ? 'bg-emerald-500' : 
           status === 'away' ? 'bg-amber-500' : 
           status === 'busy' ? 'bg-red-500' : 'bg-slate-400'
  }

  // Handle send message
  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedChat) return
    // In real app, would send to backend
    setMessageInput('')
  }

  // Handle key press for send
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Get selected chat messages
  const getChatMessages = () => {
    if (!selectedChat) return []
    return selectedChat.messages || []
  }

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Messages</h1>
          <p className="text-sm text-slate-500 mt-1">Communicate with candidates, employers, advisors, and lawyers</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filter
          </Button>
          <Button variant="outline" size="sm">
            <Archive className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Chat Type Tabs */}
      <div className="flex gap-1 py-4 overflow-x-auto">
        {Object.values(CHAT_TYPES).map(type => {
          const unreadCount = getUnreadCount(type.id)
          const isActive = activeChatType === type.id
          return (
            <button
              key={type.id}
              onClick={() => {
                setActiveChatType(type.id)
                setSelectedChat(null)
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                isActive
                  ? `${type.bgColor} ${type.textColor} border ${type.borderColor}`
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <type.icon className="h-4 w-4" />
              {type.label}
              {unreadCount > 0 && (
                <Badge variant={isActive ? 'default' : 'secondary'} className="ml-1">
                  {unreadCount}
                </Badge>
              )}
            </button>
          )
        })}
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex gap-4 min-h-0">
        {/* Chat List */}
        <div className={`${selectedChat ? 'hidden md:flex' : 'flex'} flex-col w-full md:w-80 border-r border-slate-200 pr-4`}>
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder={`Search ${currentChatType.label.toLowerCase()}...`}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>

          {/* Chat List Items */}
          <div className="flex-1 overflow-y-auto space-y-1 pr-2">
            {filteredChats.length === 0 ? (
              <div className="text-center py-8">
                <MessageCircle className="h-12 w-12 text-slate-300 mx-auto mb-2" />
                <p className="text-slate-500 font-medium">No chats found</p>
                <p className="text-xs text-slate-400">Try adjusting your search</p>
              </div>
            ) : (
              filteredChats.map(chat => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat)}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all hover:bg-slate-50 ${
                    selectedChat?.id === chat.id ? 'bg-slate-50 border-l-4 border-l-blue-500' : ''
                  }`}
                >
                  <div className="relative flex-shrink-0">
                    <Avatar 
                      initials={chat.initials} 
                      color={chat.color} 
                      size="md"
                    />
                    <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(chat.status)}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-slate-900 truncate">{chat.name}</p>
                      <p className="text-xs text-slate-400 flex-shrink-0">{chat.time}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-500 truncate">{chat.lastMessage}</p>
                      {!chat.read && (
                        <Badge variant="destructive" className="text-xs px-1.5 py-0.5 min-w-[18px]">
                          {chat.unreadCount || 1}
                        </Badge>
                      )}
                    </div>
                    {chat.role && (
                      <p className="text-xs text-slate-400 mt-0.5">{chat.role}</p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Chat Window */}
        {selectedChat ? (
          <div className="flex-1 flex flex-col min-w-0">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-3 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <button
                  className="md:hidden"
                  onClick={() => setSelectedChat(null)}
                >
                  <ChevronLeft className="h-5 w-5 text-slate-500" />
                </button>
                <div className="relative">
                  <Avatar 
                    initials={selectedChat.initials} 
                    color={selectedChat.color} 
                    size="sm"
                  />
                  <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${getStatusColor(selectedChat.status)}`} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{selectedChat.name}</p>
                  <p className="text-xs text-slate-500">
                    {selectedChat.status === 'online' ? 'Online' : 
                     selectedChat.status === 'away' ? 'Away' :
                     selectedChat.status === 'busy' ? 'Busy' : 'Offline'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Video className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0"
                  onClick={() => setShowChatInfo(!showChatInfo)}
                >
                  <Info className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Date divider */}
              <div className="text-center">
                <span className="text-xs text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                  Today
                </span>
              </div>

              {getChatMessages().length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <MessageCircle className="h-12 w-12 text-slate-300 mx-auto mb-2" />
                    <p className="text-slate-500">No messages yet</p>
                    <p className="text-xs text-slate-400">Start the conversation</p>
                  </div>
                </div>
              ) : (
                getChatMessages().map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] ${msg.sender === 'me' ? 'order-2' : 'order-1'}`}>
                      <div className="flex items-end gap-2">
                        {msg.sender !== 'me' && (
                          <Avatar 
                            initials={selectedChat.initials} 
                            color={selectedChat.color} 
                            size="xs"
                          />
                        )}
                        <div
                          className={`rounded-2xl px-4 py-2 ${
                            msg.sender === 'me'
                              ? 'bg-blue-500 text-white rounded-br-none'
                              : 'bg-slate-100 text-slate-800 rounded-bl-none'
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                          {msg.attachment && (
                            <div className="mt-2 flex items-center gap-2 bg-white/10 rounded-lg p-2">
                              <File className="h-4 w-4" />
                              <span className="text-xs">{msg.attachment}</span>
                            </div>
                          )}
                        </div>
                        <span className="text-xs text-slate-400 flex-shrink-0">
                          {msg.time}
                        </span>
                        {msg.sender === 'me' && (
                          <span className="text-slate-400 flex-shrink-0">
                            {msg.read ? <CheckCheck className="h-3 w-3" /> : <Check className="h-3 w-3" />}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Message Input */}
            <div className="border-t border-slate-200 p-3">
              <div className="flex items-end gap-2">
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Paperclip className="h-4 w-4 text-slate-400" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ImageIcon className="h-4 w-4 text-slate-400" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Smile className="h-4 w-4 text-slate-400" />
                  </Button>
                </div>
                <div className="flex-1 relative">
                  <textarea
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={e => setMessageInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    rows={1}
                    className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Button 
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim()}
                  className="flex-shrink-0"
                  size="sm"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between mt-1.5">
                <p className="text-xs text-slate-400">
                  Press <kbd className="px-1 py-0.5 bg-slate-100 rounded text-[10px]">Enter</kbd> to send
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" /> Last active 5 min ago
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* No Chat Selected */
          <div className="hidden md:flex flex-1 items-center justify-center bg-slate-50 rounded-lg border border-slate-200 border-dashed">
            <div className="text-center">
              <MessageCircle className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-700">Select a conversation</h3>
              <p className="text-sm text-slate-500">
                Choose a chat from the list to start messaging
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <Badge variant="outline" className="text-xs">
                  <Users className="h-3 w-3 mr-1" /> {filteredChats.length} chats
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" /> {getUnreadCount(activeChatType)} unread
                </Badge>
              </div>
            </div>
          </div>
        )}

        {/* Chat Info Sidebar */}
        {showChatInfo && selectedChat && (
          <div className="w-64 border-l border-slate-200 p-4 hidden lg:block overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Chat Info</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowChatInfo(false)}
                className="h-6 w-6 p-0"
              >
                <span className="text-slate-400">✕</span>
              </Button>
            </div>

            <div className="text-center mb-4">
              <Avatar 
                initials={selectedChat.initials} 
                color={selectedChat.color} 
                size="lg"
                className="mx-auto mb-2"
              />
              <p className="font-semibold text-slate-900">{selectedChat.name}</p>
              <p className="text-xs text-slate-500">{selectedChat.role || selectedChat.type}</p>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 font-medium">Status</p>
                <div className="flex items-center gap-2 mt-1">
                  <Circle className={`h-2.5 w-2.5 ${getStatusColor(selectedChat.status)}`} />
                  <span className="text-sm text-slate-700 capitalize">{selectedChat.status}</span>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-500 font-medium">Member Since</p>
                <p className="text-sm text-slate-700">{selectedChat.memberSince || 'Jan 2024'}</p>
              </div>

              <div>
                <p className="text-xs text-slate-500 font-medium">Messages</p>
                <p className="text-sm text-slate-700">{getChatMessages().length} messages</p>
              </div>

              <div className="border-t border-slate-200 pt-3">
                <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Quick Actions</h4>
                <div className="space-y-1">
                  <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                    <Star className="h-4 w-4 mr-2" /> Mark as Important
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                    <Pin className="h-4 w-4 mr-2" /> Pin Chat
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                    <Archive className="h-4 w-4 mr-2" /> Archive Chat
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-sm text-red-500 hover:text-red-700">
                    <Trash2 className="h-4 w-4 mr-2" /> Delete Chat
                  </Button>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-3">
                <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Shared Files</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-slate-50 rounded text-xs">
                    <File className="h-4 w-4 text-slate-400" />
                    <span className="text-slate-700 flex-1">Document.pdf</span>
                    <span className="text-slate-400">2 MB</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-slate-50 rounded text-xs">
                    <ImageIcon className="h-4 w-4 text-slate-400" />
                    <span className="text-slate-700 flex-1">Screenshot.png</span>
                    <span className="text-slate-400">1.5 MB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}