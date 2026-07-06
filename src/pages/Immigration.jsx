import { useState } from "react";
import { immigrationRoutes, advisors, sponsors } from "../lib/mockData";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Badge from "../components/ui/Badge";
import Avatar from "../components/ui/Avatar";
import StarRating from "../components/ui/StarRating";
import {
  Calculator,
  Users2,
  Coins,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Award,
  Briefcase,
  FileCheck,
  Globe,
  Mail,
  Phone,
  Calendar,
  BookOpen,
  Target,
  BarChart3,
  Download,
  Share2,
  Building2,
} from "lucide-react";

export default function Immigration() {
  // Calculator state
  const [age, setAge] = useState("");
  const [exp, setExp] = useState("");
  const [ielts, setIelts] = useState("");
  const [edu, setEdu] = useState("Bachelor");
  const [score, setScore] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [showRouteDetails, setShowRouteDetails] = useState(false);

  // Calculate eligibility score
  const calculate = () => {
    let s = 0;
    const a = parseInt(age) || 0;
    const e = parseInt(exp) || 0;
    const i = parseFloat(ielts) || 0;

    // Age points
    if (a >= 18 && a <= 35) s += 30;
    else if (a <= 45) s += 20;
    else s += 5;

    // Experience points
    if (e >= 10) s += 35;
    else if (e >= 5) s += 30;
    else if (e >= 3) s += 20;
    else s += 10;

    // Language points
    if (i >= 8.5) s += 30;
    else if (i >= 7.5) s += 25;
    else if (i >= 6.5) s += 15;
    else s += 5;

    // Education points
    if (edu === "PhD") s += 20;
    else if (edu === "Master") s += 15;
    else if (edu === "Bachelor") s += 10;
    else s += 5;

    setScore(Math.min(s, 100));
  };

  // Get score status
  const getScoreStatus = () => {
    if (score === null) return null;
    if (score >= 70)
      return {
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        msg: "Strong candidate — eligible for most routes.",
        icon: CheckCircle,
      };
    if (score >= 50)
      return {
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200",
        msg: "Moderate — eligible for selected routes.",
        icon: AlertCircle,
      };
    return {
      color: "text-red-500",
      bg: "bg-red-50",
      border: "border-red-200",
      msg: "Needs improvement — contact an advisor.",
      icon: AlertCircle,
    };
  };

  const scoreStatus = getScoreStatus();

  // Get eligible routes based on score
  const getEligibleRoutes = () => {
    if (score === null) return [];
    if (score >= 70) return immigrationRoutes;
    if (score >= 50)
      return immigrationRoutes.filter((r) => r.id !== "express-entry");
    return [];
  };

  const eligibleRoutes = getEligibleRoutes();

  // Handle route details view
  const handleViewRouteDetails = (route) => {
    setSelectedRoute(route);
    setShowRouteDetails(true);
  };

  const getAdvisorsForRoute = (routeId = "") => {
    return (advisors || []).filter((a) =>
      a.specialization?.toLowerCase().includes(routeId.toLowerCase()),
    );
  };

  const getSponsorsForRoute = (routeId = "") => {
    return (sponsors || []).filter((s) =>
      s.industry?.toLowerCase().includes(routeId.toLowerCase()),
    );
  };

  return (
    <div className="space-y-7">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Immigration Routes
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Assess eligibility and view active immigration pathways.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" /> Export Guide
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" /> Share
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 font-medium">Total Routes</p>
              <p className="text-2xl font-bold text-slate-900">
                {immigrationRoutes.length}
              </p>
            </div>
            <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center">
              <FileCheck className="h-5 w-5 text-blue-500" />
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 font-medium">
                Active Advisors
              </p>
              <p className="text-2xl font-bold text-slate-900">
                {advisors.filter((a) => a.availability === "Available").length}
              </p>
            </div>
            <div className="h-10 w-10 bg-emerald-50 rounded-full flex items-center justify-center">
              <Users2 className="h-5 w-5 text-emerald-500" />
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 font-medium">
                Verified Sponsors
              </p>
              <p className="text-2xl font-bold text-slate-900">
                {sponsors.filter((s) => s.status === "Verified").length}
              </p>
            </div>
            <div className="h-10 w-10 bg-amber-50 rounded-full flex items-center justify-center">
              <Building2 className="h-5 w-5 text-amber-500" />
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 font-medium">Success Rate</p>
              <p className="text-2xl font-bold text-slate-900">87%</p>
            </div>
            <div className="h-10 w-10 bg-purple-50 rounded-full flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-purple-500" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Route cards - Left column */}
        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-4">
            {immigrationRoutes.map((route) => {
              const routeAdvisors = getAdvisorsForRoute(route.id);
              const routeSponsors = getSponsorsForRoute(route.id);

              return (
                <Card
                  key={route.id}
                  className="p-5 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {route.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {route.processingTime || "6-12 months"}
                      </p>
                    </div>
                    <span className="text-2xl">{route.flag}</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Users2 className="h-3.5 w-3.5" /> Eligible Pool
                      </span>
                      <span className="font-semibold text-slate-800">
                        {route.eligible.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Coins className="h-3.5 w-3.5" /> Avg Cost
                      </span>
                      <span className="font-semibold text-slate-800">
                        {route.avgCost}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> Processing
                      </span>
                      <span className="font-semibold text-slate-800">
                        {route.processingTime || "6-12 months"}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${route.color} rounded-full`}
                        style={{ width: `${(route.eligible / 1500) * 100}%` }}
                      />
                    </div>

                    {/* Quick stats */}
                    <div className="flex items-center gap-3 pt-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Users2 className="h-3 w-3" /> {routeAdvisors.length}{" "}
                        Advisors
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Building2 className="h-3 w-3" /> {routeSponsors.length}{" "}
                        Sponsors
                      </Badge>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleViewRouteDetails(route)}
                    >
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      className={route.status === "Open" ? "flex-1" : "flex-1"}
                      variant={
                        route.status === "Open" ? "primary" : "secondary"
                      }
                      disabled={route.status !== "Open"}
                    >
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Calculator - Right column */}
        <div>
          <Card className="p-6 border-blue-200 sticky top-24">
            <div className="flex items-center gap-2 mb-1">
              <Calculator className="h-5 w-5 text-blue-600" />
              <h2 className="font-semibold text-slate-900">Quick Assessment</h2>
            </div>
            <p className="text-sm text-slate-500 mb-5">
              Calculate your eligibility score
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                  Age
                </label>
                <Input
                  type="number"
                  placeholder="e.g. 28"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                  Years of Experience
                </label>
                <Input
                  type="number"
                  placeholder="e.g. 5"
                  value={exp}
                  onChange={(e) => setExp(e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                  English Score (IELTS)
                </label>
                <Input
                  type="number"
                  step="0.5"
                  placeholder="e.g. 7.5"
                  value={ielts}
                  onChange={(e) => setIelts(e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                  Education Level
                </label>
                <select
                  value={edu}
                  onChange={(e) => setEdu(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Bachelor">Bachelor's Degree</option>
                  <option value="Master">Master's Degree</option>
                  <option value="PhD">PhD</option>
                  <option value="Diploma">Diploma</option>
                </select>
              </div>
              <Button onClick={calculate} className="w-full" size="lg">
                Calculate Score
              </Button>
            </div>

            {score !== null && (
              <div
                className={`mt-5 p-4 rounded-xl ${scoreStatus.bg} border ${scoreStatus.border} text-center`}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  {scoreStatus.icon && (
                    <scoreStatus.icon
                      className={`h-5 w-5 ${scoreStatus.color}`}
                    />
                  )}
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Your Eligibility Score
                  </p>
                </div>
                <div className={`text-4xl font-bold ${scoreStatus.color}`}>
                  {score}%
                </div>
                <p className={`text-sm mt-2 ${scoreStatus.color}`}>
                  {scoreStatus.msg}
                </p>

                {/* Eligible routes based on score */}
                {eligibleRoutes.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <p className="text-xs font-medium text-slate-600 mb-2">
                      Eligible for:
                    </p>
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {eligibleRoutes.map((route) => (
                        <Badge
                          key={route.id}
                          variant="outline"
                          className="text-xs"
                        >
                          {route.flag} {route.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Quick contact */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500 text-center">
                Need personalized advice?
                <Button
                  variant="link"
                  className="text-xs text-blue-600 p-0 ml-1"
                >
                  Connect with an advisor
                </Button>
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Route Details Modal */}
      {showRouteDetails && selectedRoute && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selectedRoute.flag}</span>
                  <h2 className="text-xl font-bold text-slate-900">
                    {selectedRoute.name}
                  </h2>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <Badge
                    variant={
                      selectedRoute.status === "Open" ? "success" : "warning"
                    }
                  >
                    {selectedRoute.status || "Open"}
                  </Badge>
                  <span className="text-xs text-slate-500">
                    Processing: {selectedRoute.processingTime || "6-12 months"}
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowRouteDetails(false)}
              >
                ✕
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {/* Quick Info */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-slate-500">Eligible Pool</p>
                  <p className="text-xl font-bold text-slate-900">
                    {selectedRoute.eligible.toLocaleString()}
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-slate-500">Avg Cost</p>
                  <p className="text-xl font-bold text-slate-900">
                    {selectedRoute.avgCost}
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-slate-500">Success Rate</p>
                  <p className="text-xl font-bold text-slate-900">85%</p>
                </div>
              </div>

              {/* Description */}
              {selectedRoute.description && (
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    About this Route
                  </h3>
                  <p className="text-sm text-slate-600">
                    {selectedRoute.description}
                  </p>
                </div>
              )}

              {/* Requirements */}
              {selectedRoute.requirements && (
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Requirements
                  </h3>
                  <ul className="space-y-1">
                    {selectedRoute.requirements.map((req, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-slate-600 flex items-start gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Associated Advisors */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">
                  Expert Advisors
                </h3>
                <div className="space-y-2">
                  {getAdvisorsForRoute(selectedRoute.id).map((advisor) => (
                    <div
                      key={advisor.id}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar
                          initials={advisor.initials}
                          color={advisor.color}
                          size="sm"
                        />
                        <div>
                          <p className="font-medium text-slate-800">
                            {advisor.name}
                          </p>
                          <div className="flex items-center gap-2">
                            <StarRating rating={advisor.rating} size="sm" />
                            <span className="text-xs text-slate-400">
                              ({advisor.reviewCount || 120})
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            advisor.availability === "Available"
                              ? "success"
                              : "warning"
                          }
                        >
                          {advisor.availability}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  {getAdvisorsForRoute(selectedRoute.id).length === 0 && (
                    <p className="text-sm text-slate-500 italic">
                      No advisors currently available for this route
                    </p>
                  )}
                </div>
              </div>

              {/* Sponsors */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Sponsors</h3>
                <div className="space-y-2">
                  {getSponsorsForRoute(selectedRoute.id).map((sponsor) => (
                    <div
                      key={sponsor.id}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Building2 className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">
                            {sponsor.company}
                          </p>
                          <p className="text-xs text-slate-500 flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {sponsor.country}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          sponsor.status === "Verified" ? "success" : "warning"
                        }
                      >
                        {sponsor.status}
                      </Badge>
                    </div>
                  ))}
                  {getSponsorsForRoute(selectedRoute.id).length === 0 && (
                    <p className="text-sm text-slate-500 italic">
                      No sponsors currently available for this route
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <Button
                  className="flex-1"
                  disabled={selectedRoute.status !== "Open"}
                >
                  {selectedRoute.status === "Open"
                    ? "Start Application"
                    : "Coming Soon"}
                </Button>
                <Button variant="outline" className="flex-1">
                  Download Guide
                </Button>
                <Button variant="outline">Contact Advisor</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
