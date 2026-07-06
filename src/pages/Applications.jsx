import { useState } from "react";
import { pipeline } from "../lib/mockData";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Avatar from "../components/ui/Avatar";
import StatusBadge from "../components/ui/StatusBadge";
import {
  MoreVertical,
  Search,
  Filter,
  Eye,
  Edit2,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
  Users,
  Briefcase,
  MapPin,
  Mail,
  Phone,
  FileText,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Download,
  UserPlus,
  MessageSquare,
  Star,
  Award,
  TrendingUp,
  PieChart,
  BarChart3,
  Activity,
  Zap,
  Shield,
} from "lucide-react";

// Mock applications data with detailed information
const APPLICATIONS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Data Scientist",
    company: "CanadaTech",
    stage: "applied",
    email: "priya.sharma@email.com",
    phone: "+1 234 567 890",
    country: "India",
    appliedDate: "2026-07-01",
    experience: "5 years",
    education: "M.Sc. Data Science",
    skills: ["Python", "TensorFlow", "SQL", "AWS"],
    status: "pending",
    score: 85,
    notes: "Strong technical background, good communication skills",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Civil Engineer",
    company: "AusBuilders",
    stage: "shortlisted",
    email: "carlos.mendes@email.com",
    phone: "+61 234 567 891",
    country: "Brazil",
    appliedDate: "2026-06-28",
    experience: "7 years",
    education: "B.E. Civil Engineering",
    skills: ["AutoCAD", "Revit", "Project Management", "Structural Analysis"],
    status: "shortlisted",
    score: 78,
    notes: "Extensive project experience in infrastructure",
  },
  {
    id: 3,
    name: "Liu Wei",
    role: "Senior Developer",
    company: "TechCorp UK",
    stage: "interview",
    email: "liu.wei@email.com",
    phone: "+44 234 567 892",
    country: "China",
    appliedDate: "2026-06-25",
    experience: "8 years",
    education: "B.Sc. Computer Science",
    skills: ["React", "Node.js", "TypeScript", "Docker", "Kubernetes"],
    status: "interview",
    score: 92,
    notes: "Scheduled for technical interview on July 15th",
  },
  {
    id: 4,
    name: "Fatima Al-Rashid",
    role: "ICU Nurse",
    company: "NHS Trust",
    stage: "offer",
    email: "fatima.rashid@email.com",
    phone: "+44 234 567 893",
    country: "UAE",
    appliedDate: "2026-06-20",
    experience: "6 years",
    education: "B.Sc. Nursing",
    skills: ["Critical Care", "Patient Care", "Emergency Response", "ECG"],
    status: "offered",
    score: 88,
    notes: "Offer extended, waiting for acceptance",
  },
  {
    id: 5,
    name: "James Okafor",
    role: "DevOps Engineer",
    company: "CloudWorks",
    stage: "visa",
    email: "james.okafor@email.com",
    phone: "+234 567 890 123",
    country: "Nigeria",
    appliedDate: "2026-06-15",
    experience: "4 years",
    education: "B.Sc. Computer Engineering",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Python"],
    status: "visa_processing",
    score: 76,
    notes: "Visa application submitted, awaiting approval",
  },
  {
    id: 6,
    name: "Emma Thompson",
    role: "Product Manager",
    company: "InnovateHub",
    stage: "onboarded",
    email: "emma.thompson@email.com",
    phone: "+1 345 678 901",
    country: "USA",
    appliedDate: "2026-06-10",
    experience: "9 years",
    education: "MBA, B.A. Economics",
    skills: ["Agile", "Product Strategy", "Data Analysis", "Leadership"],
    status: "onboarded",
    score: 94,
    notes: "Successfully onboarded, started on July 1st",
  },
  {
    id: 7,
    name: "Maria Garcia",
    role: "UX Designer",
    company: "DesignStudio",
    stage: "applied",
    email: "maria.garcia@email.com",
    phone: "+34 678 901 234",
    country: "Spain",
    appliedDate: "2026-07-02",
    experience: "3 years",
    education: "B.Des. Interaction Design",
    skills: ["Figma", "Sketch", "User Research", "Prototyping"],
    status: "pending",
    score: 72,
    notes: "Portfolio shows strong UI/UX skills",
  },
  {
    id: 8,
    name: "David Kim",
    role: "Financial Analyst",
    company: "Global Finance",
    stage: "interview",
    email: "david.kim@email.com",
    phone: "+82 123 456 789",
    country: "South Korea",
    appliedDate: "2026-06-29",
    experience: "6 years",
    education: "M.S. Finance",
    skills: ["Excel", "SQL", "Financial Modeling", "Tableau"],
    status: "interview",
    score: 81,
    notes: "Second round interview scheduled",
  },
  {
    id: 9,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    company: "BrandWorks",
    stage: "shortlisted",
    email: "sarah.johnson@email.com",
    phone: "+1 456 789 012",
    country: "UK",
    appliedDate: "2026-06-27",
    experience: "7 years",
    education: "B.A. Marketing",
    skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
    status: "shortlisted",
    score: 79,
    notes: "Shortlisted for final round",
  },
  {
    id: 10,
    name: "Ahmed Hassan",
    role: "Electrical Engineer",
    company: "PowerTech",
    stage: "rejected",
    email: "ahmed.hassan@email.com",
    phone: "+20 123 456 789",
    country: "Egypt",
    appliedDate: "2026-06-18",
    experience: "4 years",
    education: "B.E. Electrical Engineering",
    skills: ["Circuit Design", "MATLAB", "AutoCAD", "Power Systems"],
    status: "rejected",
    score: 62,
    notes: "Lacks required experience in renewable energy",
  },
];

const STAGES = [
  {
    id: "applied",
    label: "Applied",
    icon: Clock,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    id: "shortlisted",
    label: "Shortlisted",
    icon: Star,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
  },
  {
    id: "interview",
    label: "Interview",
    icon: MessageSquare,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    id: "offer",
    label: "Offer",
    icon: Award,
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    id: "visa",
    label: "Visa Processing",
    icon: Shield,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    id: "onboarded",
    label: "Onboarded",
    icon: CheckCircle,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    id: "rejected",
    label: "Rejected",
    icon: XCircle,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
  },
];

export default function Applications() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [applications, setApplications] = useState(APPLICATIONS);
  const [selectedApp, setSelectedApp] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filterCompany, setFilterCompany] = useState("all");
  const [filterCountry, setFilterCountry] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  // Statistics
  const stats = {
    total: applications.length,
    applied: applications.filter((a) => a.stage === "applied").length,
    shortlisted: applications.filter((a) => a.stage === "shortlisted").length,
    interview: applications.filter((a) => a.stage === "interview").length,
    offer: applications.filter((a) => a.stage === "offer").length,
    visa: applications.filter((a) => a.stage === "visa").length,
    onboarded: applications.filter((a) => a.stage === "onboarded").length,
    rejected: applications.filter((a) => a.stage === "rejected").length,
    avgScore: Math.round(
      applications.reduce((acc, a) => acc + a.score, 0) / applications.length,
    ),
  };

  // Filter applications
  const getFilteredApplications = () => {
    let filtered = applications.filter((a) => {
      const matchesSearch =
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.role.toLowerCase().includes(search.toLowerCase()) ||
        a.company.toLowerCase().includes(search.toLowerCase()) ||
        a.country.toLowerCase().includes(search.toLowerCase());

      const matchesCompany =
        filterCompany === "all" || a.company === filterCompany;
      const matchesCountry =
        filterCountry === "all" || a.country === filterCountry;

      return matchesSearch && matchesCompany && matchesCountry;
    });

    // Tab filtering
    if (activeTab !== "all") {
      filtered = filtered.filter((a) => a.stage === activeTab);
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return sortOrder === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        case "score":
          return sortOrder === "asc" ? a.score - b.score : b.score - a.score;
        case "date":
        default:
          return sortOrder === "asc"
            ? new Date(a.appliedDate) - new Date(b.appliedDate)
            : new Date(b.appliedDate) - new Date(a.appliedDate);
      }
    });

    return filtered;
  };

  const filteredApps = getFilteredApplications();

  // Get unique companies and countries for filters
  const uniqueCompanies = [...new Set(applications.map((a) => a.company))];
  const uniqueCountries = [...new Set(applications.map((a) => a.country))];

  const handleView = (app) => {
    setSelectedApp(app);
    setShowDetailsModal(true);
  };

  const handleMoveStage = (app, newStage) => {
    setApplications(
      applications.map((a) =>
        a.id === app.id ? { ...a, stage: newStage, status: newStage } : a,
      ),
    );
  };

  const getStageConfig = (stageId) => {
    return STAGES.find((s) => s.id === stageId) || STAGES[0];
  };

  // Tab configuration
  const tabs = [
    { id: "all", label: "All Applications", icon: Users, count: stats.total },
    { id: "applied", label: "Applied", icon: Clock, count: stats.applied },
    {
      id: "shortlisted",
      label: "Shortlisted",
      icon: Star,
      count: stats.shortlisted,
    },
    {
      id: "interview",
      label: "Interview",
      icon: MessageSquare,
      count: stats.interview,
    },
    { id: "offer", label: "Offer", icon: Award, count: stats.offer },
    { id: "visa", label: "Visa Processing", icon: Shield, count: stats.visa },
    {
      id: "onboarded",
      label: "Onboarded",
      icon: CheckCircle,
      count: stats.onboarded,
    },
    { id: "rejected", label: "Rejected", icon: XCircle, count: stats.rejected },
  ];
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <FileText className="h-7 w-7 text-indigo-600" />
            Application Tracker
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Complete pipeline view of all candidate applications across stages.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4" /> Export
          </Button>
          <Button>
            <UserPlus className="h-4 w-4" /> Add Application
          </Button>
        </div>
      </div>
      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
        <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">
              Total
            </span>
            <Users className="h-3.5 w-3.5 text-indigo-500" />
          </div>
          <p className="text-xl font-bold text-slate-900 mt-0.5">
            {stats.total}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">
              Applied
            </span>
            <Clock className="h-3.5 w-3.5 text-blue-500" />
          </div>
          <p className="text-xl font-bold text-blue-600 mt-0.5">
            {stats.applied}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">
              Shortlisted
            </span>
            <Star className="h-3.5 w-3.5 text-indigo-500" />
          </div>
          <p className="text-xl font-bold text-indigo-600 mt-0.5">
            {stats.shortlisted}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">
              Interview
            </span>
            <MessageSquare className="h-3.5 w-3.5 text-purple-500" />
          </div>
          <p className="text-xl font-bold text-purple-600 mt-0.5">
            {stats.interview}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">
              Offer
            </span>
            <Award className="h-3.5 w-3.5 text-pink-500" />
          </div>
          <p className="text-xl font-bold text-pink-600 mt-0.5">
            {stats.offer}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">
              Visa
            </span>
            <Shield className="h-3.5 w-3.5 text-amber-500" />
          </div>
          <p className="text-xl font-bold text-amber-600 mt-0.5">
            {stats.visa}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">
              Onboarded
            </span>
            <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
          </div>
          <p className="text-xl font-bold text-emerald-600 mt-0.5">
            {stats.onboarded}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 uppercase">
              Rejected
            </span>
            <XCircle className="h-3.5 w-3.5 text-red-500" />
          </div>
          <p className="text-xl font-bold text-red-600 mt-0.5">
            {stats.rejected}
          </p>
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
                    ? "bg-indigo-50 text-indigo-700 shadow-sm"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    activeTab === tab.id
                      ? "bg-indigo-200 text-indigo-800"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
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
                placeholder="Search applications..."
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
                {showFilters ? "Hide Filters" : "Show Filters"}
                {showFilters ? (
                  <ChevronUp className="h-3 w-3 ml-1" />
                ) : (
                  <ChevronDown className="h-3 w-3 ml-1" />
                )}
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
                <span className="text-xs font-medium text-slate-500 uppercase">
                  Company:
                </span>
                <select
                  value={filterCompany}
                  onChange={(e) => setFilterCompany(e.target.value)}
                  className="text-xs border border-slate-200 rounded-lg px-3 py-1.5 bg-white focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Companies</option>
                  {uniqueCompanies.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-500 uppercase">
                  Country:
                </span>
                <select
                  value={filterCountry}
                  onChange={(e) => setFilterCountry(e.target.value)}
                  className="text-xs border border-slate-200 rounded-lg px-3 py-1.5 bg-white focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Countries</option>
                  {uniqueCountries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-slate-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs border border-slate-200 rounded-lg px-3 py-1.5 bg-white focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="date">Date</option>
                  <option value="name">Name</option>
                  <option value="score">Score</option>
                </select>
                <button
                  onClick={() =>
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                  }
                  className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  {sortOrder === "asc" ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Applications Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Applicant
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Country
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Score
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Stage
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredApps.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center py-12 text-slate-500">
                    <Users className="h-12 w-12 mx-auto text-slate-300 mb-3" />
                    <p className="font-medium">No applications found</p>
                    <p className="text-sm">
                      Try adjusting your search or filters
                    </p>
                  </td>
                </tr>
              ) : (
                filteredApps.map((app) => {
                  const stage = getStageConfig(app.stage);
                  return (
                    <tr
                      key={app.id}
                      className="hover:bg-slate-50/80 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar
                            initials={app.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                            color="bg-gradient-to-br from-indigo-500 to-blue-600"
                            size="sm"
                          />
                          <div>
                            <p className="font-medium text-slate-800">
                              {app.name}
                            </p>
                            <p className="text-xs text-slate-400">
                              {app.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-slate-700">
                          {app.role}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-slate-600">
                          {app.company}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-slate-600">
                          {app.country}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                app.score >= 80
                                  ? "bg-emerald-500"
                                  : app.score >= 60
                                    ? "bg-amber-500"
                                    : "bg-red-500"
                              }`}
                              style={{ width: `${app.score}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium text-slate-600">
                            {app.score}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${stage.color} ${stage.bg}`}
                        >
                          {stage.icon && <stage.icon className="h-3 w-3" />}
                          {stage.label}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-xs text-slate-500">
                          {new Date(app.appliedDate).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleView(app)}
                            className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                            title="View Details"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <div className="relative group/stage">
                            <button
                              className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                              title="Move Stage"
                            >
                              <MoreVertical className="h-4 w-4" />
                            </button>
                            <div className="absolute right-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-slate-200 opacity-0 invisible group-hover/stage:opacity-100 group-hover/stage:visible transition-all z-10">
                              <div className="p-1">
                                {STAGES.map((s) => (
                                  <button
                                    key={s.id}
                                    onClick={() => handleMoveStage(app, s.id)}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 ${
                                      app.stage === s.id
                                        ? "bg-indigo-50 text-indigo-700"
                                        : "text-slate-600 hover:bg-slate-50"
                                    }`}
                                  >
                                    <s.icon className="h-3 w-3" />
                                    Move to {s.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>
            Showing {filteredApps.length} of {applications.length} applications
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg">
              1
            </button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              2
            </button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              3
            </button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </Card>

      {showDetailsModal && selectedApp && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileText className="h-5 w-5 text-indigo-600" />
                Application Details
              </h2>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Profile Header */}
              <div className="flex items-start gap-6">
                <Avatar
                  initials={selectedApp.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                  color="bg-gradient-to-br from-indigo-500 to-blue-600"
                  size="lg"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {selectedApp.name}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {selectedApp.role} at {selectedApp.company}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        {/* Fixed: Safely get stage config */}
                        {(() => {
                          const stageConfig = getStageConfig(selectedApp.stage);
                          const StageIcon = stageConfig.icon;
                          return (
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${stageConfig.color} ${stageConfig.bg}`}
                            >
                              {StageIcon && <StageIcon className="h-3 w-3" />}
                              {stageConfig.label}
                            </span>
                          );
                        })()}
                        <span className="text-xs text-slate-400">
                          Score: {selectedApp.score}%
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit2 className="h-3 w-3" /> Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5" /> Email
                  </p>
                  <p className="text-sm text-slate-800 mt-1">
                    {selectedApp.email}
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5" /> Phone
                  </p>
                  <p className="text-sm text-slate-800 mt-1">
                    {selectedApp.phone}
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5" /> Country
                  </p>
                  <p className="text-sm text-slate-800 mt-1">
                    {selectedApp.country}
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" /> Applied
                  </p>
                  <p className="text-sm text-slate-800 mt-1">
                    {new Date(selectedApp.appliedDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2">
                    <Briefcase className="h-3.5 w-3.5" /> Experience
                  </p>
                  <p className="text-sm text-slate-800 mt-1">
                    {selectedApp.experience}
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2">
                    <Award className="h-3.5 w-3.5" /> Education
                  </p>
                  <p className="text-sm text-slate-800 mt-1">
                    {selectedApp.education}
                  </p>
                </div>
              </div>

              {/* Skills */}
              {selectedApp.skills && (
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs font-medium text-slate-500 uppercase flex items-center gap-2 mb-2">
                    <Star className="h-3.5 w-3.5" /> Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedApp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white rounded-full text-xs font-medium text-slate-700 border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes */}
              {selectedApp.notes && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-medium text-amber-700 uppercase flex items-center gap-2">
                    <FileText className="h-3.5 w-3.5" /> Notes
                  </p>
                  <p className="text-sm text-amber-800 mt-1">
                    {selectedApp.notes}
                  </p>
                </div>
              )}

              {/* Stage Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <span className="text-xs font-medium text-slate-500 uppercase">
                  Move to:
                </span>
                {STAGES.map((s) => (
                  <Button
                    key={s.id}
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      handleMoveStage(selectedApp, s.id);
                      setSelectedApp({ ...selectedApp, stage: s.id });
                    }}
                    className={
                      selectedApp.stage === s.id
                        ? `border-${s.color} text-${s.color}`
                        : ""
                    }
                  >
                    <s.icon className="h-3 w-3" />
                    {s.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
