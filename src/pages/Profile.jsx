import React, { useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Avatar from "../components/ui/Avatar";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Edit2,
  Save,
  X,
  Camera,
  Lock,
  Bell,
  Shield,
  Globe,
  Link,
  Github,
  Twitter,
  Linkedin,
  CheckCircle,
  AlertCircle,
  Clock,
  Award,
  Star,
  Users,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  Upload,
  Download,
  RefreshCw,
} from "lucide-react";

// Mock profile data
const PROFILE_DATA = {
  id: 1,
  name: "John Anderson",
  email: "john.anderson@example.com",
  phone: "+1 (555) 123-4567",
  role: "Administrator",
  department: "IT & Operations",
  location: "New York, USA",
  timezone: "EST (UTC-5)",
  joinDate: "2024-01-15",
  lastActive: "2026-07-06 14:32",
  status: "active",
  bio: "Senior administrator with 10+ years of experience in immigration management systems. Passionate about technology and process optimization.",
  skills: [
    "Immigration Law",
    "Project Management",
    "Data Analysis",
    "System Administration",
  ],
  languages: [
    "English (Native)",
    "Spanish (Fluent)",
    "French (Conversational)",
  ],
  social: {
    github: "johnanderson",
    twitter: "@johnanderson",
    linkedin: "johnanderson",
  },
  stats: {
    totalApprovals: 2847,
    activeCases: 126,
    successRate: 94.5,
    avgResponseTime: "4.2h",
    reviews: 234,
    rating: 4.8,
  },
  recentActivity: [
    {
      action: "Approved visa application #VISA-2026-0842",
      time: "2 hours ago",
      type: "approval",
    },
    {
      action: "Reviewed candidate profile for Senior Dev",
      time: "4 hours ago",
      type: "review",
    },
    {
      action: "Updated job posting #JOB-2026-0045",
      time: "6 hours ago",
      type: "update",
    },
    {
      action: "Mentored new advisor Sarah Johnson",
      time: "1 day ago",
      type: "mentor",
    },
  ],
  preferences: {
    notifications: {
      email: true,
      push: true,
      sms: false,
      weeklyReport: true,
    },
    privacy: {
      profileVisibility: "private",
      showEmail: false,
      showPhone: false,
    },
  },
};

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: PROFILE_DATA.name,
    email: PROFILE_DATA.email,
    phone: PROFILE_DATA.phone,
    location: PROFILE_DATA.location,
    timezone: PROFILE_DATA.timezone,
    bio: PROFILE_DATA.bio,
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  const handleCancel = () => {
    setFormData({
      name: PROFILE_DATA.name,
      email: PROFILE_DATA.email,
      phone: PROFILE_DATA.phone,
      location: PROFILE_DATA.location,
      timezone: PROFILE_DATA.timezone,
      bio: PROFILE_DATA.bio,
    });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <User className="h-7 w-7 text-indigo-600" />
            Profile Settings
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage your account settings and preferences
          </p>
        </div>
        <div className="flex items-center gap-3">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={handleCancel}>
                <X className="h-4 w-4" /> Cancel
              </Button>
              <Button onClick={handleSave}>
                <Save className="h-4 w-4" /> Save Changes
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              <Edit2 className="h-4 w-4" /> Edit Profile
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Card & Stats */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <Card className="p-6 bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-600 text-white">
            <div className="text-center">
              <div className="relative inline-block">
                <Avatar
                  initials="JA"
                  color="bg-white/20 backdrop-blur-sm"
                  size="xl"
                  className="ring-4 ring-white/30"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-white/20 backdrop-blur-sm p-2 rounded-full border-2 border-white/50 hover:bg-white/30 transition-all">
                    <Camera className="h-4 w-4" />
                  </button>
                )}
              </div>
              <h2 className="text-xl font-bold mt-4">{PROFILE_DATA.name}</h2>
              <p className="text-blue-100 text-sm">{PROFILE_DATA.role}</p>
              <div className="flex items-center justify-center gap-2 mt-2 text-sm">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/30 backdrop-blur-sm rounded-full text-xs">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  Active
                </span>
                <span className="text-blue-100">
                  • {PROFILE_DATA.department}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-blue-200" />
                  <span className="text-blue-50">{PROFILE_DATA.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-blue-200" />
                  <span className="text-blue-50">{PROFILE_DATA.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-blue-200" />
                  <span className="text-blue-50">{PROFILE_DATA.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-blue-200" />
                  <span className="text-blue-50">
                    Joined{" "}
                    {new Date(PROFILE_DATA.joinDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-blue-200" />
                  <span className="text-blue-50">
                    Last active: {PROFILE_DATA.lastActive}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4 text-center hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center gap-2 text-emerald-600">
                <CheckCircle className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold text-slate-900">
                {PROFILE_DATA.stats.totalApprovals}
              </p>
              <p className="text-xs text-slate-500">Total Approvals</p>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <Briefcase className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold text-slate-900">
                {PROFILE_DATA.stats.activeCases}
              </p>
              <p className="text-xs text-slate-500">Active Cases</p>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center gap-2 text-purple-600">
                <Award className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold text-slate-900">
                {PROFILE_DATA.stats.successRate}%
              </p>
              <p className="text-xs text-slate-500">Success Rate</p>
            </Card>
            <Card className="p-4 text-center hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center gap-2 text-amber-600">
                <Star className="h-5 w-5 fill-amber-400" />
              </div>
              <p className="text-2xl font-bold text-slate-900">
                {PROFILE_DATA.stats.rating}
              </p>
              <p className="text-xs text-slate-500">
                {PROFILE_DATA.stats.reviews} Reviews
              </p>
            </Card>
          </div>
        </div>

        {/* Right Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                <User className="h-5 w-5 text-indigo-600" />
                Personal Information
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-slate-600 block mb-1">
                  Full Name
                </label>
                {isEditing ? (
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                  />
                ) : (
                  <p className="text-slate-800">{PROFILE_DATA.name}</p>
                )}
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600 block mb-1">
                  Email
                </label>
                {isEditing ? (
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                ) : (
                  <p className="text-slate-800">{PROFILE_DATA.email}</p>
                )}
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600 block mb-1">
                  Phone
                </label>
                {isEditing ? (
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                ) : (
                  <p className="text-slate-800">{PROFILE_DATA.phone}</p>
                )}
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600 block mb-1">
                  Location
                </label>
                {isEditing ? (
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full"
                  />
                ) : (
                  <p className="text-slate-800">{PROFILE_DATA.location}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-medium text-slate-600 block mb-1">
                  Bio
                </label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-slate-600 text-sm">{PROFILE_DATA.bio}</p>
                )}
              </div>
            </div>
          </Card>

          {/* Skills & Languages */}
          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-amber-500" />
              Skills & Expertise
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase mb-2">
                  Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {PROFILE_DATA.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase mb-2">
                  Languages
                </p>
                <div className="flex flex-wrap gap-2">
                  {PROFILE_DATA.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium border border-emerald-100"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Recent Activity
              </h3>
              <Button variant="outline" size="sm">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-3">
              {PROFILE_DATA.recentActivity.map((activity, i) => {
                const colors = {
                  approval: "text-emerald-600 bg-emerald-50",
                  review: "text-blue-600 bg-blue-50",
                  update: "text-amber-600 bg-amber-50",
                  mentor: "text-purple-600 bg-purple-50",
                };
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${colors[activity.type]}`}
                      >
                        {activity.type === "approval" && (
                          <CheckCircle className="h-4 w-4" />
                        )}
                        {activity.type === "review" && (
                          <Eye className="h-4 w-4" />
                        )}
                        {activity.type === "update" && (
                          <Edit2 className="h-4 w-4" />
                        )}
                        {activity.type === "mentor" && (
                          <Users className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          {activity.action}
                        </p>
                        <p className="text-xs text-slate-500">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Security & Preferences Accordion */}
          <div className="space-y-3">
            {/* Security */}
            <Card className="p-6">
              <button
                onClick={() => setShowSecurity(!showSecurity)}
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-slate-600" />
                  <span className="font-semibold text-slate-900">
                    Security Settings
                  </span>
                </div>
                {showSecurity ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {showSecurity && (
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-4">
                  <div>
                    <label className="text-xs font-medium text-slate-600 block mb-1">
                      Current Password
                    </label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={passwordData.currentPassword}
                        onChange={(e) =>
                          setPasswordData({
                            ...passwordData,
                            currentPassword: e.target.value,
                          })
                        }
                        placeholder="Enter current password"
                        className="pr-10"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-600 block mb-1">
                      New Password
                    </label>
                    <Input
                      type="password"
                      value={passwordData.newPassword}
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          newPassword: e.target.value,
                        })
                      }
                      placeholder="Enter new password"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-600 block mb-1">
                      Confirm New Password
                    </label>
                    <Input
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          confirmPassword: e.target.value,
                        })
                      }
                      placeholder="Confirm new password"
                    />
                  </div>
                  <Button className="w-full">
                    <Save className="h-4 w-4" /> Update Password
                  </Button>
                </div>
              )}
            </Card>

            {/* Preferences */}
            <Card className="p-6">
              <button
                onClick={() => setShowPreferences(!showPreferences)}
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-slate-600" />
                  <span className="font-semibold text-slate-900">
                    Preferences
                  </span>
                </div>
                {showPreferences ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {showPreferences && (
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-3">
                      Notifications
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(
                        PROFILE_DATA.preferences.notifications,
                      ).map(([key, value]) => (
                        <label
                          key={key}
                          className="flex items-center justify-between py-2"
                        >
                          <span className="text-sm text-slate-600 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                          <div className="relative inline-block w-10 h-5">
                            <input
                              type="checkbox"
                              checked={value}
                              className="sr-only peer"
                              onChange={() => {}}
                            />
                            <div className="w-full h-full bg-slate-200 rounded-full peer-checked:bg-indigo-600 transition-colors duration-200"></div>
                            <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-5"></div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-sm font-medium text-slate-700 mb-3">
                      Privacy
                    </h4>
                    <div className="space-y-2">
                      <div>
                        <label className="text-sm text-slate-600 block mb-1">
                          Profile Visibility
                        </label>
                        <select className="w-full border border-slate-200 rounded-xl px-4 py-2 text-sm bg-white focus:ring-2 focus:ring-indigo-500">
                          <option value="public">Public</option>
                          <option value="private" selected>
                            Private
                          </option>
                          <option value="contacts">Contacts Only</option>
                        </select>
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <label className="flex items-center gap-2 text-sm text-slate-600">
                          <input
                            type="checkbox"
                            defaultChecked={
                              PROFILE_DATA.preferences.privacy.showEmail
                            }
                          />
                          Show Email
                        </label>
                        <label className="flex items-center gap-2 text-sm text-slate-600">
                          <input
                            type="checkbox"
                            defaultChecked={
                              PROFILE_DATA.preferences.privacy.showPhone
                            }
                          />
                          Show Phone
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
