export const stats = {
  totalCandidates: 12847,
  activeJobs: 3241,
  sponsorsVerified: 892,
  applicationsThisMonth: 4108,
  aiMatchScore: 78,
  pendingVisaCases: 267,
  advisorsAvailable: 143,
  revenueMTD: 184200,
}

export const candidates = [
  { id: 1, name: 'Amir Hassan',       country: 'Pakistan',  visaType: 'Skilled Worker',  profileScore: 87, status: 'Active' },
  { id: 2, name: 'Priya Sharma',      country: 'India',     visaType: 'Graduate Route',  profileScore: 92, status: 'Pending Docs' },
  { id: 3, name: 'Carlos Mendes',     country: 'Brazil',    visaType: 'Intra-company',   profileScore: 74, status: 'Interview Scheduled' },
  { id: 4, name: 'Liu Wei',           country: 'China',     visaType: 'Global Talent',   profileScore: 96, status: 'Offer Received' },
  { id: 5, name: 'Fatima Al-Rashid',  country: 'UAE',       visaType: 'Health & Care',   profileScore: 81, status: 'Visa Applied' },
  { id: 6, name: 'Mohammed Idris',    country: 'Nigeria',   visaType: 'Skilled Worker',  profileScore: 79, status: 'Active' },
  { id: 7, name: 'Sofia Reyes',       country: 'Mexico',    visaType: 'Graduate Route',  profileScore: 88, status: 'Pending Docs' },
]

export const jobs = [
  { id: 1, title: 'Senior Software Engineer', company: 'TechCorp UK',      country: 'United Kingdom', salary: '£65,000',     sponsorship: 'Skilled Worker',  status: 'Active' },
  { id: 2, title: 'ICU Nurse',               company: 'NHS Trust',         country: 'United Kingdom', salary: '£42,000',     sponsorship: 'Health & Care',   status: 'Active' },
  { id: 3, title: 'Data Scientist',          company: 'CanadaTech Inc',    country: 'Canada',         salary: 'CA$95,000',   sponsorship: 'LMIA',            status: 'Paused' },
  { id: 4, title: 'Civil Engineer',          company: 'AusBuilders Pty',   country: 'Australia',      salary: 'AU$110,000',  sponsorship: 'TSS 482',         status: 'Active' },
  { id: 5, title: 'Financial Analyst',       company: 'Dubai Finance LLC', country: 'UAE',            salary: 'AED 180,000', sponsorship: 'Employment Visa', status: 'Draft' },
  { id: 6, title: 'Electrical Engineer',     company: 'GermaTech GmbH',    country: 'Germany',        salary: '€72,000',     sponsorship: 'EU Blue Card',    status: 'Active' },
]

export const pipeline = {
  applied:        1842,
  shortlisted:    634,
  interview:      289,
  offer:          127,
  visaProcessing: 94,
  onboarded:      58,
}

export const sponsors = [
  { id: 1, company: 'NHS Trust',         country: 'UK',        license: 'Tier 2',    activeJobs: 47, rating: 4.9, status: 'Verified' },
  { id: 2, company: 'TechCorp UK',       country: 'UK',        license: 'Tier 2',    activeJobs: 23, rating: 4.7, status: 'Verified' },
  { id: 3, company: 'CanadaTech Inc',    country: 'Canada',    license: 'LMIA',      activeJobs: 14, rating: 4.5, status: 'Verified' },
  { id: 4, company: 'AusBuilders Pty',   country: 'Australia', license: 'TSS',       activeJobs: 31, rating: 4.6, status: 'Verified' },
  { id: 5, company: 'Gulf Petroleum Co', country: 'UAE',       license: 'Emp Visa',  activeJobs: 18, rating: 4.2, status: 'Pending' },
  { id: 6, company: 'GermaTech GmbH',    country: 'Germany',   license: 'Blue Card', activeJobs: 11, rating: 4.8, status: 'Verified' },
]

export const immigrationRoutes = [
  { id: 1, name: 'UK Skilled Worker',          eligible: 1204, avgCost: '£3,840',    flag: '🇬🇧', color: 'bg-blue-500' },
  { id: 2, name: 'Canada Express Entry',        eligible: 876,  avgCost: 'CA$2,300',  flag: '🇨🇦', color: 'bg-red-500' },
  { id: 3, name: 'Australia 482 TSS',           eligible: 643,  avgCost: 'AU$4,100',  flag: '🇦🇺', color: 'bg-yellow-500' },
  { id: 4, name: 'UAE Employment Visa',         eligible: 512,  avgCost: 'AED 8,000', flag: '🇦🇪', color: 'bg-green-500' },
  { id: 5, name: 'Germany Skilled Immigration', eligible: 341,  avgCost: '€2,800',    flag: '🇩🇪', color: 'bg-slate-500' },
]

export const advisors = [
  { id: 1, name: 'Sarah Mitchell', specialization: 'UK Immigration Law', rating: 4.9, fee: '£150/hr',    availability: 'Available', initials: 'SM', color: 'bg-indigo-500' },
  { id: 2, name: 'Dr. Raj Patel',  specialization: 'Canadian PR',        rating: 4.8, fee: 'CA$200/hr',  availability: 'Busy',      initials: 'RP', color: 'bg-amber-500' },
  { id: 3, name: 'Emma Hoffman',   specialization: 'EU Work Permits',    rating: 4.7, fee: '€180/hr',    availability: 'Available', initials: 'EH', color: 'bg-emerald-500' },
  { id: 4, name: 'James Okafor',   specialization: 'Australian Visas',   rating: 4.6, fee: 'AU$220/hr',  availability: 'Available', initials: 'JO', color: 'bg-sky-500' },
  { id: 5, name: 'Nadia Al-Farsi', specialization: 'UAE/GCC Visas',      rating: 4.9, fee: 'AED 600/hr', availability: 'Available', initials: 'NA', color: 'bg-rose-500' },
]

export const notifications = [
  { id: 1, message: 'New AI match: 92% match for Priya Sharma → Senior Data Analyst at CanadaTech', time: '2 mins ago',  type: 'match' },
  { id: 2, message: 'Application update: Carlos Mendes interview scheduled for Dec 15',              time: '15 mins ago', type: 'update' },
  { id: 3, message: 'Visa approved: Liu Wei — UK Global Talent visa granted',                        time: '1 hour ago',  type: 'success' },
  { id: 4, message: 'New sponsor verified: Gulf Petroleum Co — UAE',                                 time: '3 hours ago', type: 'info' },
  { id: 5, message: 'Immigration alert: UK Skilled Worker threshold increased to £38,700',           time: 'Yesterday',   type: 'alert' },
  { id: 6, message: 'Consultation booked: Amir Hassan with Sarah Mitchell — Dec 18 at 2:00 PM',     time: 'Yesterday',   type: 'info' },
]

export const applicationChartData = [
  { name: 'Jan', count: 1200 }, { name: 'Feb', count: 1900 },
  { name: 'Mar', count: 2400 }, { name: 'Apr', count: 2100 },
  { name: 'May', count: 2800 }, { name: 'Jun', count: 3200 },
  { name: 'Jul', count: 4108 },
]

export const revenueChartData = [
  { name: 'Jan', amount: 84000  }, { name: 'Feb', amount: 96000  },
  { name: 'Mar', amount: 110000 }, { name: 'Apr', amount: 105000 },
  { name: 'May', amount: 142000 }, { name: 'Jun', amount: 165000 },
  { name: 'Jul', amount: 184200 },
]

export const countryChartData = [
  { name: 'UK',        count: 420 },
  { name: 'Canada',    count: 310 },
  { name: 'Australia', count: 280 },
  { name: 'UAE',       count: 150 },
  { name: 'Germany',   count: 90  },
]

export const visaTypeData = [
  { name: 'Skilled Worker', value: 45 },
  { name: 'Student/Grad',   value: 25 },
  { name: 'Intra-company',  value: 15 },
  { name: 'Global Talent',  value: 10 },
  { name: 'Other',          value: 5  },
]
