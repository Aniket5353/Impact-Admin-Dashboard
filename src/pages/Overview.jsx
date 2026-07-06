import React from "react";
import {
  Users,
  Briefcase,
  Building2,
  FileText,
  TrendingUp,
  BadgeCheck,
  GraduationCap,
  Banknote,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Clock,
  Activity,
  Zap,
  Shield,
  Server,
  CheckCircle,
  AlertCircle,
  PieChart,
  BarChart3,
  UserPlus,
  Eye,
  MessageSquare,
  Star,
  Award,
  Bell,
  Filter,
  Download,
  MoreHorizontal,
  Scale,
  UserCheck,
  UserCog,
  Users as UsersIcon,
  Target,
  Sparkles,
  Crown,
  Medal,
  Trophy,
  Gift,
  Heart,
  Coffee,
  BookOpen,
  Headphones,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
} from "lucide-react";

// Mock data for lawyers, advisors, and candidates
const TEAM_DATA = {
  lawyers: {
    total: 47,
    active: 42,
    onLeave: 5,
    newThisMonth: 3,
    specialization: {
      "Skilled Worker Visa": 22,
      "Sponsored Worker Visa": 18,
      "Employer Sponsorship": 15,
      "Permanent Residency": 12,
      "Student Visa": 10,
      "Family Immigration": 8,
      "Business Immigration": 7,
      Citizenship: 6,
      "Immigration Appeals": 5,
      "Compliance & Documentation": 4,
    },
    topPerformers: [
      { name: "Sarah Mitchell", cases: 34, rating: 4.9 },
      { name: "James Rodriguez", cases: 28, rating: 4.8 },
      { name: "Emma Watson", cases: 25, rating: 4.7 },
    ],
    recentHires: [
      {
        name: "Dr. Lisa Chen",
        joined: "2 days ago",
        specialization: "Immigration Law",
      },
      {
        name: "Mark Thompson",
        joined: "1 week ago",
        specialization: "Corporate Law",
      },
    ],
  },
  advisors: {
    total: 23,
    active: 19,
    available: 12,
    busy: 7,
    newThisMonth: 2,
    expertise: {
      "Visa Consultation": 8,
      "Career Guidance": 6,
      "Legal Advice": 5,
      Documentation: 4,
    },
    topAdvisors: [
      { name: "Dr. Robert Kim", sessions: 156, rating: 4.9 },
      { name: "Patricia Davis", sessions: 143, rating: 4.8 },
      { name: "Michael O'Brien", sessions: 128, rating: 4.7 },
    ],
    availability: {
      "Available Now": 12,
      "In Session": 7,
      Offline: 4,
    },
  },
  candidates: {
    total: 284,
    active: 198,
    newThisWeek: 34,
    newThisMonth: 142,
    status: {
      Applied: 86,
      "In Review": 72,
      "Interview Scheduled": 54,
      Offered: 42,
      Onboarded: 30,
    },
    topSkills: [
      { skill: "Skilled Worker Visa", count: 84 },
      { skill: "Employer Sponsorship", count: 78 },
      { skill: "Visa Documentation", count: 71 },
      { skill: "Immigration Law", count: 65 },
      { skill: "Permanent Residency", count: 57 },
    ],
    recentApplicants: [
      { name: "Alex Johnson", role: "Senior Developer", applied: "1 hour ago" },
      { name: "Maria Garcia", role: "DevOps Engineer", applied: "3 hours ago" },
      { name: "David Lee", role: "Product Manager", applied: "5 hours ago" },
    ],
  },
};

// Combined stats cards for all three groups
const TEAM_STATS = [
  {
    title: "Total Lawyers",
    value: TEAM_DATA.lawyers.total,
    Icon: Scale,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    trend: "+6.4%",
    up: true,
    description: "Active legal professionals",
  },
  {
    title: "Total Advisors",
    value: TEAM_DATA.advisors.total,
    Icon: Headphones,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    trend: "+4.2%",
    up: true,
    description: "Career & visa advisors",
  },
  {
    title: "Total Candidates",
    value: TEAM_DATA.candidates.total,
    Icon: UsersIcon,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    trend: "+18.6%",
    up: true,
    description: "Active job seekers",
  },
];

// Specialized cards for detailed metrics
const SPECIALIZED_METRICS = [
  {
    title: "Active Lawyers",
    value: TEAM_DATA.lawyers.active,
    subtitle: "Currently working",
    Icon: UserCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    progress: (TEAM_DATA.lawyers.active / TEAM_DATA.lawyers.total) * 100,
  },
  {
    title: "Available Advisors",
    value: TEAM_DATA.advisors.available,
    subtitle: "Ready for consultation",
    Icon: UserCog,
    color: "text-amber-600",
    bg: "bg-amber-50",
    progress: (TEAM_DATA.advisors.available / TEAM_DATA.advisors.total) * 100,
  },
  {
    title: "New Candidates",
    value: TEAM_DATA.candidates.newThisWeek,
    subtitle: "This week only",
    Icon: UserPlus,
    color: "text-rose-600",
    bg: "bg-rose-50",
    progress:
      (TEAM_DATA.candidates.newThisWeek / TEAM_DATA.candidates.total) * 100,
  },
];

// Individual detailed cards with gradient backgrounds
const DETAILED_PERSONNEL_CARDS = [
  {
    type: "Lawyers",
    total: TEAM_DATA.lawyers.total,
    icon: Scale,
    gradient: "from-indigo-500 to-blue-600",
    stats: [
      { label: "Active", value: TEAM_DATA.lawyers.active },
      { label: "On Leave", value: TEAM_DATA.lawyers.onLeave },
      { label: "New This Month", value: TEAM_DATA.lawyers.newThisMonth },
    ],
    topSpecialization: Object.entries(TEAM_DATA.lawyers.specialization)[0],
    topPerformer: TEAM_DATA.lawyers.topPerformers[0],
  },
  {
    type: "Advisors",
    total: TEAM_DATA.advisors.total,
    icon: Headphones,
    gradient: "from-purple-500 to-pink-600",
    stats: [
      { label: "Available", value: TEAM_DATA.advisors.available },
      { label: "Busy", value: TEAM_DATA.advisors.busy },
      { label: "New This Month", value: TEAM_DATA.advisors.newThisMonth },
    ],
    topSpecialization: Object.entries(TEAM_DATA.advisors.expertise)[0],
    topPerformer: TEAM_DATA.advisors.topAdvisors[0],
  },
  {
    type: "Candidates",
    total: TEAM_DATA.candidates.total,
    icon: UsersIcon,
    gradient: "from-blue-500 to-cyan-600",
    stats: [
      { label: "Active", value: TEAM_DATA.candidates.active },
      { label: "New This Week", value: TEAM_DATA.candidates.newThisWeek },
      { label: "New This Month", value: TEAM_DATA.candidates.newThisMonth },
    ],
    topSpecialization: TEAM_DATA.candidates.topSkills[0],
    topPerformer: TEAM_DATA.candidates.recentApplicants[0],
  },
];

export default function TeamOverview() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <UsersIcon className="h-7 w-7 text-indigo-600" />
            Team & Talent Overview
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Complete view of your legal team, advisors, and candidate pool
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Main Stats Cards - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TEAM_STATS.map(
          (
            { title, value, Icon, color, bg, border, trend, up, description },
            index,
          ) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border ${border} p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <span
                      className={`w-1 h-1 rounded-full ${color.replace("text-", "bg-")}`}
                    />
                    {title}
                  </p>
                  <p className="text-3xl font-bold text-slate-900">
                    {value.toLocaleString()}
                  </p>
                  <p className="text-xs text-slate-500">{description}</p>
                  <div
                    className={`flex items-center gap-1 text-xs font-medium ${up ? "text-emerald-600" : "text-red-500"}`}
                  >
                    {up ? (
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    ) : (
                      <ArrowDownRight className="h-3.5 w-3.5" />
                    )}
                    {trend}
                    <span className="text-slate-400 font-normal">
                      vs last month
                    </span>
                  </div>
                </div>
                <div
                  className={`${bg} ${color} p-3.5 rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      {/* Specialized Metrics - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SPECIALIZED_METRICS.map(
          ({ title, value, subtitle, Icon, color, bg, progress }, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className={`${bg} ${color} p-3 rounded-xl`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-600">
                      {title}
                    </p>
                    <span className="text-xs font-medium text-slate-400">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{value}</p>
                  <p className="text-xs text-slate-500">{subtitle}</p>
                  <div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${color.replace("text-", "from-")} to-${color.replace("text-", "to-")}`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      {/* Detailed Personnel Cards with Gradient Backgrounds */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DETAILED_PERSONNEL_CARDS.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-90`}
            />
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="relative p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <card.icon className="h-5 w-5 text-white/80" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                      {card.type}
                    </h3>
                  </div>
                  <p className="text-3xl font-bold mt-1">{card.total}</p>
                  <p className="text-xs text-white/70">
                    Total {card.type.toLowerCase()}
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-1">
                  <span className="text-xs font-medium text-white">+12%</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {card.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-2 text-center"
                  >
                    <p className="text-lg font-bold">{stat.value}</p>
                    <p className="text-[10px] text-white/70 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div>
                  <p className="text-[10px] text-white/60 uppercase tracking-wider">
                    Top{" "}
                    {card.type === "Candidates" ? "Skill" : "Specialization"}
                  </p>
                  <p className="text-sm font-semibold">
                    {card.topSpecialization[0]}
                    <span className="text-xs font-normal text-white/70 ml-1">
                      ({card.topSpecialization[1]})
                    </span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-white/60 uppercase tracking-wider">
                    Top {card.type === "Candidates" ? "Applicant" : "Performer"}
                  </p>
                  <p className="text-sm font-semibold truncate max-w-[120px]">
                    {card.topPerformer.name}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Breakdown Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Lawyers Specialization */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-50 rounded-xl">
              <Scale className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">
                Lawyers by Specialization
              </h4>
              <p className="text-xs text-slate-500">
                Breakdown of legal expertise
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {Object.entries(TEAM_DATA.lawyers.specialization).map(
              ([specialty, count]) => (
                <div key={specialty}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">{specialty}</span>
                    <span className="font-medium text-slate-700">{count}</span>
                  </div>
                  <div className="h-2 bg-indigo-50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{
                        width: `${(count / TEAM_DATA.lawyers.total) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Advisors Availability */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-xl">
              <Headphones className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Advisors Status</h4>
              <p className="text-xs text-slate-500">Real-time availability</p>
            </div>
          </div>
          <div className="space-y-3">
            {Object.entries(TEAM_DATA.advisors.availability).map(
              ([status, count]) => {
                const colors = {
                  "Available Now": "text-emerald-600 bg-emerald-50",
                  "In Session": "text-amber-600 bg-amber-50",
                  Offline: "text-slate-400 bg-slate-50",
                };
                const dotColors = {
                  "Available Now": "bg-emerald-500",
                  "In Session": "bg-amber-500",
                  Offline: "bg-slate-400",
                };
                return (
                  <div
                    key={status}
                    className={`flex items-center justify-between p-3 rounded-xl ${colors[status]}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${dotColors[status]} animate-pulse`}
                      />
                      <span className="text-sm font-medium">{status}</span>
                    </div>
                    <span className="text-lg font-bold">{count}</span>
                  </div>
                );
              },
            )}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Total Advisors</span>
              <span className="font-bold text-slate-900">
                {TEAM_DATA.advisors.total}
              </span>
            </div>
          </div>
        </div>

        {/* Candidates Status */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-xl">
              <UsersIcon className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">
                Candidates Pipeline
              </h4>
              <p className="text-xs text-slate-500">
                Application status breakdown
              </p>
            </div>
          </div>
          <div className="space-y-2.5">
            {Object.entries(TEAM_DATA.candidates.status).map(
              ([status, count]) => {
                const colors = {
                  Applied: "bg-blue-500",
                  "In Review": "bg-indigo-500",
                  "Interview Scheduled": "bg-purple-500",
                  Offered: "bg-amber-500",
                  Onboarded: "bg-emerald-500",
                };
                return (
                  <div key={status} className="flex items-center gap-3">
                    <span className="w-24 text-xs font-medium text-slate-600">
                      {status}
                    </span>
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${colors[status]} rounded-full transition-all duration-1000`}
                        style={{
                          width: `${(count / TEAM_DATA.candidates.total) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-700 w-8 text-right">
                      {count}
                    </span>
                  </div>
                );
              },
            )}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Active Candidates</span>
              <span className="font-bold text-slate-900">
                {TEAM_DATA.candidates.active}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Skills / Recent Activity Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Skills */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-cyan-50 rounded-xl">
              <Sparkles className="h-5 w-5 text-cyan-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">
                Top Candidate Skills
              </h4>
              <p className="text-xs text-slate-500">
                Most in-demand technical skills
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {TEAM_DATA.candidates.topSkills.map(({ skill, count }, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-700 w-20">
                    {skill}
                  </span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden w-32">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{
                        width: `${(count / TEAM_DATA.candidates.topSkills[0].count) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-600">
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Top Performers */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-50 rounded-xl">
              <Trophy className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Top Performers</h4>
              <p className="text-xs text-slate-500">
                Highest rated professionals
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {TEAM_DATA.lawyers.topPerformers.map((performer, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      idx === 0
                        ? "bg-amber-100 text-amber-700"
                        : idx === 1
                          ? "bg-slate-200 text-slate-700"
                          : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {performer.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {performer.cases} cases · {performer.rating}⭐
                    </p>
                  </div>
                </div>
                <div className="bg-emerald-50 px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-emerald-600">
                    Top {idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
          s
        </div>
      </div>
    </div>
  );
}
