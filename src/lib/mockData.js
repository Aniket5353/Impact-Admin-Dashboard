export const stats = {
  totalCandidates: 12847,
  activeJobs: 3241,
  sponsorsVerified: 892,
  applicationsThisMonth: 4108,
  aiMatchScore: 78,
  pendingVisaCases: 267,
  advisorsAvailable: 143,
  revenueMTD: 184200,
};

export const candidates = [
  {
    id: 1,
    name: "Amir Hassan",
    country: "Pakistan",
    visaType: "Skilled Worker",
    profileScore: 87,
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Sharma",
    country: "India",
    visaType: "Graduate Route",
    profileScore: 92,
    status: "Pending Docs",
  },
  {
    id: 3,
    name: "Carlos Mendes",
    country: "Brazil",
    visaType: "Intra-company",
    profileScore: 74,
    status: "Interview Scheduled",
  },
  {
    id: 4,
    name: "Liu Wei",
    country: "China",
    visaType: "Global Talent",
    profileScore: 96,
    status: "Offer Received",
  },
  {
    id: 5,
    name: "Fatima Al-Rashid",
    country: "UAE",
    visaType: "Health & Care",
    profileScore: 81,
    status: "Visa Applied",
  },
  {
    id: 6,
    name: "Mohammed Idris",
    country: "Nigeria",
    visaType: "Skilled Worker",
    profileScore: 79,
    status: "Active",
  },
  {
    id: 7,
    name: "Sofia Reyes",
    country: "Mexico",
    visaType: "Graduate Route",
    profileScore: 88,
    status: "Pending Docs",
  },
];

export const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp UK",
    country: "United Kingdom",
    salary: "£65,000",
    sponsorship: "Skilled Worker",
    status: "Active",
  },
  {
    id: 2,
    title: "ICU Nurse",
    company: "NHS Trust",
    country: "United Kingdom",
    salary: "£42,000",
    sponsorship: "Health & Care",
    status: "Active",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "CanadaTech Inc",
    country: "Canada",
    salary: "CA$95,000",
    sponsorship: "LMIA",
    status: "Paused",
  },
  {
    id: 4,
    title: "Civil Engineer",
    company: "AusBuilders Pty",
    country: "Australia",
    salary: "AU$110,000",
    sponsorship: "TSS 482",
    status: "Active",
  },
  {
    id: 5,
    title: "Financial Analyst",
    company: "Dubai Finance LLC",
    country: "UAE",
    salary: "AED 180,000",
    sponsorship: "Employment Visa",
    status: "Draft",
  },
  {
    id: 6,
    title: "Electrical Engineer",
    company: "GermaTech GmbH",
    country: "Germany",
    salary: "€72,000",
    sponsorship: "EU Blue Card",
    status: "Active",
  },
];

export const pipeline = {
  applied: 1842,
  shortlisted: 634,
  interview: 289,
  offer: 127,
  visaProcessing: 94,
  onboarded: 58,
};

// mockData.js

export const sponsors = [
  {
    id: 1,
    company: "NHS Trust",
    country: "UK",
    license: "Tier 2",
    licenseStatus: "Active",
    activeJobs: 47,
    rating: 4.9,
    reviewCount: 234,
    status: "Verified",
    industry: "Healthcare",
    companyInitials: "NT",
    website: "https://www.nhs.uk",
    description:
      "The National Health Service (NHS) is the publicly funded healthcare system in the UK, offering sponsorships for skilled healthcare professionals.",
    yearEstablished: 1948,
    employees: 1500000,
    contactEmail: "sponsorship@nhs.uk",
    contactPhone: "+44 20 1234 5678",
  },
  {
    id: 2,
    company: "TechCorp UK",
    country: "UK",
    license: "Tier 2",
    licenseStatus: "Active",
    activeJobs: 23,
    rating: 4.7,
    reviewCount: 156,
    status: "Verified",
    industry: "Technology",
    companyInitials: "TC",
    website: "https://www.techcorp.co.uk",
    description:
      "TechCorp is a leading software development company specializing in AI and machine learning solutions.",
    yearEstablished: 2012,
    employees: 450,
    contactEmail: "hr@techcorp.co.uk",
    contactPhone: "+44 20 8765 4321",
  },
  {
    id: 3,
    company: "CanadaTech Inc",
    country: "Canada",
    license: "LMIA",
    licenseStatus: "Active",
    activeJobs: 14,
    rating: 4.5,
    reviewCount: 98,
    status: "Verified",
    industry: "Technology",
    companyInitials: "CT",
    website: "https://www.canadatech.ca",
    description:
      "CanadaTech is a fast-growing technology company providing innovative IT solutions to businesses across North America.",
    yearEstablished: 2015,
    employees: 280,
    contactEmail: "careers@canadatech.ca",
    contactPhone: "+1 416 555 0199",
  },
  {
    id: 4,
    company: "AusBuilders Pty",
    country: "Australia",
    license: "TSS",
    licenseStatus: "Active",
    activeJobs: 31,
    rating: 4.6,
    reviewCount: 187,
    status: "Verified",
    industry: "Construction",
    companyInitials: "AB",
    website: "https://www.ausbuilders.com.au",
    description:
      "AusBuilders is a premier construction company delivering large-scale infrastructure and residential projects across Australia.",
    yearEstablished: 2008,
    employees: 850,
    contactEmail: "recruitment@ausbuilders.com.au",
    contactPhone: "+61 2 9123 4567",
  },
  {
    id: 5,
    company: "Gulf Petroleum Co",
    country: "UAE",
    license: "Emp Visa",
    licenseStatus: "Pending",
    activeJobs: 18,
    rating: 4.2,
    reviewCount: 45,
    status: "Pending",
    industry: "Oil & Gas",
    companyInitials: "GP",
    website: "https://www.gulfpetroleum.ae",
    description:
      "Gulf Petroleum is one of the leading oil and gas companies in the Middle East, with operations across the Gulf region.",
    yearEstablished: 2005,
    employees: 1200,
    contactEmail: "careers@gulfpetroleum.ae",
    contactPhone: "+971 4 567 8901",
  },
  {
    id: 6,
    company: "GermaTech GmbH",
    country: "Germany",
    license: "Blue Card",
    licenseStatus: "Active",
    activeJobs: 11,
    rating: 4.8,
    reviewCount: 132,
    status: "Verified",
    industry: "Engineering",
    companyInitials: "GT",
    website: "https://www.germatech.de",
    description:
      "GermaTech is a leading engineering firm specializing in automotive and industrial automation solutions.",
    yearEstablished: 2010,
    employees: 520,
    contactEmail: "jobs@germatech.de",
    contactPhone: "+49 30 1234 5678",
  },
  {
    id: 7,
    company: "Global Health Org",
    country: "Switzerland",
    license: "G Permit",
    licenseStatus: "Active",
    activeJobs: 9,
    rating: 4.9,
    reviewCount: 213,
    status: "Verified",
    industry: "Healthcare",
    companyInitials: "GH",
    website: "https://www.globalhealth.org",
    description:
      "Global Health Organization provides healthcare services and research facilities across multiple countries.",
    yearEstablished: 2000,
    employees: 2400,
    contactEmail: "careers@globalhealth.org",
    contactPhone: "+41 22 555 0199",
  },
  {
    id: 8,
    company: "Singapore Fintech",
    country: "Singapore",
    license: "S Pass",
    licenseStatus: "Active",
    activeJobs: 25,
    rating: 4.4,
    reviewCount: 76,
    status: "Verified",
    industry: "Finance",
    companyInitials: "SF",
    website: "https://www.sgfintech.com",
    description:
      "Singapore Fintech is revolutionizing the financial services industry with cutting-edge digital solutions.",
    yearEstablished: 2016,
    employees: 320,
    contactEmail: "hr@sgfintech.com",
    contactPhone: "+65 6789 0123",
  },
];

export const advisors = [
  {
    id: 1,
    name: "Sarah Mitchell",
    specialization: "UK Immigration Law",
    rating: 4.9,
    reviewCount: 245,
    fee: "£150/hr",
    availability: "Available",
    initials: "SM",
    color: "bg-indigo-500",
    location: "London, UK",
    experience: "10+ years",
    yearsExp: 12,
    clientsServed: 850,
    languages: ["English", "French"],
    successRate: 96,
    isVerified: true,
    sponsorId: 1,
    routeSpecialization: ["express-entry", "uk-skilled-worker"],
    email: "sarah.mitchell@advisor.com",
    phone: "+44 20 1234 5678",
    bio: "Senior immigration lawyer with extensive experience in UK visa applications and sponsorship management.",
  },
  {
    id: 2,
    name: "Dr. Raj Patel",
    specialization: "Canadian PR",
    rating: 4.8,
    reviewCount: 198,
    fee: "CA$200/hr",
    availability: "Busy",
    initials: "RP",
    color: "bg-amber-500",
    location: "Toronto, Canada",
    experience: "8+ years",
    yearsExp: 8,
    clientsServed: 620,
    languages: ["English", "Hindi", "Punjabi"],
    successRate: 92,
    isVerified: true,
    sponsorId: 3,
    routeSpecialization: ["express-entry", "canadian-pr"],
    email: "raj.patel@advisor.ca",
    phone: "+1 416 555 0199",
    bio: "PhD in Immigration Law with a focus on Canadian Permanent Residency pathways and provincial nominee programs.",
  },
  {
    id: 3,
    name: "Emma Hoffman",
    specialization: "EU Work Permits",
    rating: 4.7,
    reviewCount: 167,
    fee: "€180/hr",
    availability: "Available",
    initials: "EH",
    color: "bg-emerald-500",
    location: "Berlin, Germany",
    experience: "7+ years",
    yearsExp: 7,
    clientsServed: 490,
    languages: ["English", "German", "Spanish"],
    successRate: 94,
    isVerified: true,
    sponsorId: 6,
    routeSpecialization: ["eu-work-permit", "germany-blue-card"],
    email: "emma.hoffman@advisor.de",
    phone: "+49 30 1234 5678",
    bio: "Expert in European work permits and Blue Card applications, with a particular focus on Germany and the EU.",
  },
  {
    id: 4,
    name: "James Okafor",
    specialization: "Australian Visas",
    rating: 4.6,
    reviewCount: 134,
    fee: "AU$220/hr",
    availability: "Available",
    initials: "JO",
    color: "bg-sky-500",
    location: "Sydney, Australia",
    experience: "6+ years",
    yearsExp: 6,
    clientsServed: 410,
    languages: ["English"],
    successRate: 90,
    isVerified: true,
    sponsorId: 4,
    routeSpecialization: ["australian-visa", "tss-visa"],
    email: "james.okafor@advisor.com.au",
    phone: "+61 2 9123 4567",
    bio: "Australian immigration specialist focusing on skilled worker visas and employer-sponsored pathways.",
  },
  {
    id: 5,
    name: "Nadia Al-Farsi",
    specialization: "UAE/GCC Visas",
    rating: 4.9,
    reviewCount: 156,
    fee: "AED 600/hr",
    availability: "Available",
    initials: "NA",
    color: "bg-rose-500",
    location: "Dubai, UAE",
    experience: "9+ years",
    yearsExp: 9,
    clientsServed: 560,
    languages: ["English", "Arabic", "French"],
    successRate: 95,
    isVerified: true,
    sponsorId: 5,
    routeSpecialization: ["uae-visa", "gcc-visa"],
    email: "nadia.alfarsi@advisor.ae",
    phone: "+971 4 567 8901",
    bio: "Specialist in UAE and GCC visa regulations with a strong track record in employee sponsorships and residency permits.",
  },
  {
    id: 6,
    name: "Dr. Maria Santos",
    specialization: "US H1-B & Green Card",
    rating: 4.8,
    reviewCount: 189,
    fee: "$250/hr",
    availability: "Busy",
    initials: "MS",
    color: "bg-purple-500",
    location: "New York, USA",
    experience: "11+ years",
    yearsExp: 11,
    clientsServed: 780,
    languages: ["English", "Spanish", "Portuguese"],
    successRate: 93,
    isVerified: true,
    sponsorId: null,
    routeSpecialization: ["us-h1b", "us-green-card"],
    email: "maria.santos@advisor.com",
    phone: "+1 212 555 0199",
    bio: "Former US immigration officer with extensive experience in H1-B, L-1, and Green Card applications.",
  },
  {
    id: 7,
    name: "Chen Wei",
    specialization: "Asian Visas & Work Permits",
    rating: 4.5,
    reviewCount: 98,
    fee: "$180/hr",
    availability: "Available",
    initials: "CW",
    color: "bg-cyan-500",
    location: "Singapore",
    experience: "5+ years",
    yearsExp: 5,
    clientsServed: 280,
    languages: ["English", "Mandarin", "Malay"],
    successRate: 88,
    isVerified: true,
    sponsorId: 8,
    routeSpecialization: ["singapore-work-visa", "asian-immigration"],
    email: "chen.wei@advisor.sg",
    phone: "+65 6789 0123",
    bio: "Asian immigration specialist with deep knowledge of work permits and visa processes across Southeast Asia.",
  },
];

export const immigrationRoutes = [
  {
    id: "express-entry",
    name: "Express Entry",
    flag: "🇨🇦",
    eligible: 1250,
    avgCost: "$2,500",
    color: "bg-blue-500",
    status: "Open",
    processingTime: "6-8 months",
    description:
      "Federal skilled worker program for qualified immigrants looking to obtain Canadian Permanent Residency.",
    requirements: [
      "Minimum 1 year of skilled work experience",
      "CLB 7 in English or French (IELTS 6.0+)",
      "Post-secondary education (ECA required)",
      "Valid job offer (optional - adds 50-200 points)",
      "Provincial Nominee Program (PNP) nomination (optional)",
    ],
    documentChecklist: [
      "Valid passport",
      "Language test results",
      "Educational Credential Assessment (ECA)",
      "Work experience documents",
      "Police clearance certificate",
      "Medical examination results",
    ],
  },
  {
    id: "uk-skilled-worker",
    name: "UK Skilled Worker",
    flag: "🇬🇧",
    eligible: 980,
    avgCost: "£2,200",
    color: "bg-red-600",
    status: "Open",
    processingTime: "3-4 months",
    description:
      "UK visa route for skilled workers with a job offer from an approved sponsor.",
    requirements: [
      "Job offer from licensed UK sponsor",
      "Minimum salary requirement (£26,200 or £10.10/hr)",
      "English language requirement (B1 level)",
      "Sufficient maintenance funds",
      "Certificate of Sponsorship (CoS) from employer",
    ],
    documentChecklist: [
      "Certificate of Sponsorship reference number",
      "Valid passport",
      "Proof of English proficiency",
      "Bank statements (maintenance funds)",
      "TB test results (if applicable)",
      "Criminal record certificate",
    ],
  },
  {
    id: "australian-visa",
    name: "Australian Visas",
    flag: "🇦🇺",
    eligible: 850,
    avgCost: "AU$3,000",
    color: "bg-yellow-600",
    status: "Open",
    processingTime: "8-12 months",
    description:
      "Australian visa pathways including skilled migration, employer sponsorship, and family reunification.",
    requirements: [
      "Skill assessment for nominated occupation",
      "Points test (minimum 65 points required)",
      "English language proficiency (IELTS 6.0+)",
      "Age between 18-45 years",
      "Meet health and character requirements",
    ],
    documentChecklist: [
      "Positive skills assessment",
      "Valid passport",
      "English test results",
      "Work reference letters",
      "Police clearance certificates",
      "Medical examination results",
    ],
  },
  {
    id: "uae-visa",
    name: "UAE Work Visa",
    flag: "🇦🇪",
    eligible: 650,
    avgCost: "AED 8,500",
    color: "bg-green-600",
    status: "Open",
    processingTime: "2-3 months",
    description:
      "Work visa and residency permit for employment in the United Arab Emirates.",
    requirements: [
      "Valid job offer from UAE company",
      "Degree attested by UAE embassy",
      "Labor contract approval",
      "Medical fitness test",
      "Emirates ID registration",
    ],
    documentChecklist: [
      "Employment offer letter",
      "Attested educational certificates",
      "Valid passport",
      "Medical test results",
      "Police clearance certificate",
      "Emirates ID application",
    ],
  },
  {
    id: "germany-blue-card",
    name: "Germany Blue Card",
    flag: "🇩🇪",
    eligible: 720,
    avgCost: "€2,800",
    color: "bg-amber-600",
    status: "Open",
    processingTime: "4-6 weeks",
    description:
      "EU Blue Card for highly skilled non-EU nationals wanting to work in Germany.",
    requirements: [
      "German university degree or equivalent",
      "Minimum salary of €56,800/year (shortage occupations: €44,304)",
      "Employment contract or binding job offer",
      "A1 German language certificate for certain occupations",
      "Valid passport",
    ],
    documentChecklist: [
      "University degree and ECTS certificate",
      "Employment contract",
      "Valid passport",
      "Proof of language proficiency",
      "Professional experience certificates",
      "Health insurance proof",
    ],
  },
  {
    id: "canadian-pr",
    name: "Canadian PR",
    flag: "🇨🇦",
    eligible: 1100,
    avgCost: "$2,300",
    color: "bg-teal-600",
    status: "Open",
    processingTime: "12-16 months",
    description:
      "Canadian Permanent Residency through various economic immigration pathways.",
    requirements: [
      "Minimum CRS score for Express Entry draw",
      "Valid job offer (optional)",
      "Provincial nomination (optional)",
      "Minimum 1 year skilled work experience",
      "Language proficiency (CLB 7 minimum)",
    ],
    documentChecklist: [
      "IELTS/CELPIP test results",
      "ECA for foreign education",
      "Work experience letters",
      "Police certificates from all countries lived",
      "Medical exam results",
      "Proof of settlement funds",
    ],
  },
  {
    id: "singapore-work-visa",
    name: "Singapore Work Visa",
    flag: "🇸🇬",
    eligible: 560,
    avgCost: "SGD 4,200",
    color: "bg-red-500",
    status: "Open",
    processingTime: "3-5 weeks",
    description:
      "Singapore work passes for skilled professionals, including EP, S Pass, and EntrePass.",
    requirements: [
      "Valid job offer from Singapore company",
      "Minimum salary of S$4,500/month (EP)",
      "Relevant qualifications (degree/diploma)",
      "Company quota requirements (S Pass)",
      "Medical examination",
    ],
    documentChecklist: [
      "Employment contract",
      "Educational certificates",
      "Valid passport",
      "Company registration documents",
      "Medical test results",
      "Police clearance certificate",
    ],
  },
];

// Helper function to get advisors by sponsor
export const getAdvisorsBySponsor = (sponsorId) => {
  return advisors.filter((advisor) => advisor.sponsorId === sponsorId);
};

// Helper function to get sponsors by advisor
export const getSponsorsByAdvisor = (advisorId) => {
  const advisor = advisors.find((a) => a.id === advisorId);
  if (!advisor || !advisor.sponsorId) return [];
  return sponsors.filter((sponsor) => sponsor.id === advisor.sponsorId);
};

// Helper function to get routes by advisor specialization
export const getRoutesByAdvisor = (advisorId) => {
  const advisor = advisors.find((a) => a.id === advisorId);
  if (!advisor || !advisor.routeSpecialization) return [];
  return immigrationRoutes.filter((route) =>
    advisor.routeSpecialization.includes(route.id),
  );
};

// Helper function to get advisors by route
export const getAdvisorsByRoute = (routeId) => {
  return advisors.filter(
    (advisor) =>
      advisor.routeSpecialization &&
      advisor.routeSpecialization.includes(routeId),
  );
};

// Helper function to get sponsors by route
export const getSponsorsByRoute = (routeId) => {
  // Map route IDs to industries
  const routeToIndustry = {
    "express-entry": ["Technology", "Healthcare"],
    "canadian-pr": ["Technology", "Healthcare"],
    "uk-skilled-worker": ["Healthcare"],
    "australian-visa": ["Construction"],
    "uae-visa": ["Oil & Gas"],
    "germany-blue-card": ["Engineering"],
    "singapore-work-visa": ["Finance"],
  };

  const industries = routeToIndustry[routeId] || [];
  return sponsors.filter(
    (sponsor) =>
      industries.includes(sponsor.industry) && sponsor.status === "Verified",
  );
};

// Helper function to get route status by score
export const getRoutesByScore = (score) => {
  if (score >= 70) return immigrationRoutes.filter((r) => r.status === "Open");
  if (score >= 50)
    return immigrationRoutes.filter(
      (r) => r.status === "Open" && r.id !== "express-entry",
    );
  return [];
};

export const notifications = [
  {
    id: 1,
    message:
      "New AI match: 92% match for Priya Sharma → Senior Data Analyst at CanadaTech",
    time: "2 mins ago",
    type: "match",
  },
  {
    id: 2,
    message: "Application update: Carlos Mendes interview scheduled for Dec 15",
    time: "15 mins ago",
    type: "update",
  },
  {
    id: 3,
    message: "Visa approved: Liu Wei — UK Global Talent visa granted",
    time: "1 hour ago",
    type: "success",
  },
  {
    id: 4,
    message: "New sponsor verified: Gulf Petroleum Co — UAE",
    time: "3 hours ago",
    type: "info",
  },
  {
    id: 5,
    message:
      "Immigration alert: UK Skilled Worker threshold increased to £38,700",
    time: "Yesterday",
    type: "alert",
  },
  {
    id: 6,
    message:
      "Consultation booked: Amir Hassan with Sarah Mitchell — Dec 18 at 2:00 PM",
    time: "Yesterday",
    type: "info",
  },
];

export const applicationChartData = [
  { name: "Jan", count: 1200 },
  { name: "Feb", count: 1900 },
  { name: "Mar", count: 2400 },
  { name: "Apr", count: 2100 },
  { name: "May", count: 2800 },
  { name: "Jun", count: 3200 },
  { name: "Jul", count: 4108 },
];

export const revenueChartData = [
  { name: "Jan", amount: 84000 },
  { name: "Feb", amount: 96000 },
  { name: "Mar", amount: 110000 },
  { name: "Apr", amount: 105000 },
  { name: "May", amount: 142000 },
  { name: "Jun", amount: 165000 },
  { name: "Jul", amount: 184200 },
];

export const countryChartData = [
  { name: "UK", count: 420 },
  { name: "Canada", count: 310 },
  { name: "Australia", count: 280 },
  { name: "UAE", count: 150 },
  { name: "Germany", count: 90 },
];

export const visaTypeData = [
  { name: "Skilled Worker", value: 45 },
  { name: "Student/Grad", value: 25 },
  { name: "Intra-company", value: 15 },
  { name: "Global Talent", value: 10 },
  { name: "Other", value: 5 },
];


// mockData.js - Messages section

export const messages = [
  // ============ CANDIDATE CHATS ============
  {
    id: 1,
    type: 'candidate',
    name: 'Sarah Johnson',
    initials: 'SJ',
    color: 'bg-blue-500',
    role: 'Senior Software Engineer Candidate',
    status: 'online',
    lastMessage: 'Thank you! When can we schedule the final interview?',
    time: '2 min ago',
    read: false,
    unreadCount: 3,
    memberSince: 'Mar 2024',
    messages: [
      { sender: 'them', text: 'Hi there! I saw your job posting for the Senior Software Engineer position.', time: '10:30 AM' },
      { sender: 'them', text: 'I have 8 years of experience with React and Node.js.', time: '10:31 AM' },
      { sender: 'me', text: 'That sounds great! Can you share your portfolio?', time: '10:35 AM' },
      { sender: 'them', text: 'Sure! Here\'s my GitHub: github.com/sarahjohnson', time: '10:38 AM', attachment: 'Portfolio Link' },
      { sender: 'me', text: 'I\'ve reviewed your work. Impressive!', time: '10:45 AM' },
      { sender: 'them', text: 'Thank you! When can we schedule the final interview?', time: '10:48 AM', read: false },
    ]
  },
  {
    id: 2,
    type: 'candidate',
    name: 'Michael Chen',
    initials: 'MC',
    color: 'bg-cyan-500',
    role: 'Data Scientist Candidate',
    status: 'away',
    lastMessage: 'I\'ve attached my resume and cover letter.',
    time: '1 hour ago',
    read: true,
    unreadCount: 0,
    memberSince: 'Apr 2024',
    messages: [
      { sender: 'them', text: 'Good morning! I\'m applying for the Data Scientist role.', time: '9:00 AM' },
      { sender: 'me', text: 'Good morning Michael. Tell me about your experience.', time: '9:15 AM' },
      { sender: 'them', text: 'I have 5 years of experience in ML and AI.', time: '9:20 AM' },
      { sender: 'them', text: 'I\'ve attached my resume and cover letter.', time: '9:22 AM', attachment: 'Resume_MichaelChen.pdf' },
      { sender: 'me', text: 'Thanks! I\'ll review and get back to you.', time: '9:30 AM', read: true },
    ]
  },
  {
    id: 3,
    type: 'candidate',
    name: 'Emma Watson',
    initials: 'EW',
    color: 'bg-indigo-500',
    role: 'Product Manager Candidate',
    status: 'online',
    lastMessage: 'I\'m available for an interview tomorrow.',
    time: '30 min ago',
    read: false,
    unreadCount: 2,
    memberSince: 'Jan 2024',
    messages: [
      { sender: 'them', text: 'Hello! I\'m interested in the Product Manager position.', time: '2:00 PM' },
      { sender: 'me', text: 'Hi Emma. Can you tell me about your experience?', time: '2:10 PM' },
      { sender: 'them', text: 'I\'ve led product teams at 2 startups.', time: '2:15 PM' },
      { sender: 'them', text: 'I\'m available for an interview tomorrow.', time: '2:20 PM', read: false },
    ]
  },
  {
    id: 4,
    type: 'candidate',
    name: 'David Kim',
    initials: 'DK',
    color: 'bg-purple-500',
    role: 'UX Designer Candidate',
    status: 'offline',
    lastMessage: 'I\'ve sent you my design portfolio.',
    time: '2 hours ago',
    read: true,
    unreadCount: 0,
    memberSince: 'Feb 2024',
    messages: [
      { sender: 'them', text: 'Hi! I\'m very interested in the UX Designer role.', time: '1:00 PM' },
      { sender: 'me', text: 'Great! Can you share your portfolio?', time: '1:15 PM' },
      { sender: 'them', text: 'I\'ve sent you my design portfolio.', time: '1:30 PM', attachment: 'Portfolio_DavidKim.pdf' },
      { sender: 'me', text: 'Your work looks amazing!', time: '1:45 PM', read: true },
    ]
  },

  // ============ EMPLOYER CHATS ============
  {
    id: 5,
    type: 'employer',
    name: 'NHS Trust',
    initials: 'NT',
    color: 'bg-emerald-500',
    role: 'Healthcare Employer',
    status: 'online',
    lastMessage: 'We need to fill 3 nursing positions urgently.',
    time: '15 min ago',
    read: false,
    unreadCount: 4,
    memberSince: 'Jan 2023',
    messages: [
      { sender: 'them', text: 'Hi! We need immediate hiring support.', time: '11:00 AM' },
      { sender: 'me', text: 'Of course. What positions are you looking for?', time: '11:05 AM' },
      { sender: 'them', text: 'We need 5 nurses and 2 doctors.', time: '11:10 AM' },
      { sender: 'me', text: 'I\'ll start sourcing candidates right away.', time: '11:15 AM' },
      { sender: 'them', text: 'We need to fill 3 nursing positions urgently.', time: '11:20 AM', read: false },
    ]
  },
  {
    id: 6,
    type: 'employer',
    name: 'TechCorp UK',
    initials: 'TC',
    color: 'bg-teal-500',
    role: 'Technology Employer',
    status: 'busy',
    lastMessage: 'When can we expect the first batch of candidates?',
    time: '45 min ago',
    read: true,
    unreadCount: 0,
    memberSince: 'Mar 2023',
    messages: [
      { sender: 'them', text: 'We\'re expanding our AI team.', time: '9:30 AM' },
      { sender: 'me', text: 'How many positions do you need to fill?', time: '9:35 AM' },
      { sender: 'them', text: '10 developers and 3 AI researchers.', time: '9:40 AM' },
      { sender: 'them', text: 'When can we expect the first batch of candidates?', time: '9:45 AM', read: true },
    ]
  },
  {
    id: 7,
    type: 'employer',
    name: 'CanadaTech Inc',
    initials: 'CT',
    color: 'bg-emerald-400',
    role: 'Tech Employer',
    status: 'away',
    lastMessage: 'The LMIA application is ready for review.',
    time: '1 hour ago',
    read: true,
    unreadCount: 0,
    memberSince: 'Jun 2023',
    messages: [
      { sender: 'them', text: 'We need to process LMIA for 5 employees.', time: '10:00 AM' },
      { sender: 'me', text: 'I can help you with that.', time: '10:15 AM' },
      { sender: 'them', text: 'The LMIA application is ready for review.', time: '10:30 AM', attachment: 'LMIA_Application_CanadaTech.pdf' },
      { sender: 'me', text: 'I\'ll review it today.', time: '10:45 AM', read: true },
    ]
  },
  {
    id: 8,
    type: 'employer',
    name: 'Gulf Petroleum Co',
    initials: 'GP',
    color: 'bg-amber-500',
    role: 'Oil & Gas Employer',
    status: 'offline',
    lastMessage: 'We need to renew visas for 15 employees.',
    time: '3 hours ago',
    read: true,
    unreadCount: 0,
    memberSince: 'Aug 2023',
    messages: [
      { sender: 'them', text: 'Our employee visas are expiring soon.', time: '8:00 AM' },
      { sender: 'me', text: 'How many employees need renewal?', time: '8:15 AM' },
      { sender: 'them', text: 'We need to renew visas for 15 employees.', time: '8:30 AM' },
      { sender: 'me', text: 'I\'ll start the process immediately.', time: '8:45 AM', read: true },
    ]
  },

  // ============ ADVISOR CHATS ============
  {
    id: 9,
    type: 'advisor',
    name: 'Sarah Mitchell',
    initials: 'SM',
    color: 'bg-violet-500',
    role: 'UK Immigration Advisor',
    status: 'online',
    lastMessage: 'Your UK visa application has been submitted.',
    time: '5 min ago',
    read: false,
    unreadCount: 2,
    memberSince: 'Sep 2023',
    messages: [
      { sender: 'them', text: 'Good morning! I\'ve completed your UK visa assessment.', time: '9:00 AM' },
      { sender: 'them', text: 'Everything looks good to proceed.', time: '9:05 AM' },
      { sender: 'me', text: 'That\'s great! What\'s the next step?', time: '9:10 AM' },
      { sender: 'them', text: 'Your UK visa application has been submitted.', time: '9:15 AM', read: false },
    ]
  },
  {
    id: 10,
    type: 'advisor',
    name: 'Dr. Raj Patel',
    initials: 'RP',
    color: 'bg-amber-500',
    role: 'Canadian PR Advisor',
    status: 'busy',
    lastMessage: 'Your Express Entry profile has been updated.',
    time: '20 min ago',
    read: true,
    unreadCount: 0,
    memberSince: 'Oct 2023',
    messages: [
      { sender: 'them', text: 'Your CRS score is 485.', time: '10:00 AM' },
      { sender: 'me', text: 'Is that enough for the next draw?', time: '10:05 AM' },
      { sender: 'them', text: 'Your Express Entry profile has been updated.', time: '10:10 AM', read: true },
    ]
  },
  {
    id: 11,
    type: 'advisor',
    name: 'Emma Hoffman',
    initials: 'EH',
    color: 'bg-emerald-500',
    role: 'EU Work Permit Advisor',
    status: 'online',
    lastMessage: 'Your Blue Card application is ready for submission.',
    time: '1 hour ago',
    read: false,
    unreadCount: 1,
    memberSince: 'Nov 2023',
    messages: [
      { sender: 'them', text: 'All documents for your Blue Card are ready.', time: '11:00 AM' },
      { sender: 'me', text: 'Can we submit the application today?', time: '11:15 AM' },
      { sender: 'them', text: 'Your Blue Card application is ready for submission.', time: '11:30 AM', read: false },
    ]
  },
  {
    id: 12,
    type: 'advisor',
    name: 'Nadia Al-Farsi',
    initials: 'NA',
    color: 'bg-rose-500',
    role: 'UAE/GCC Visa Advisor',
    status: 'away',
    lastMessage: 'I\'ve attached the visa application checklist.',
    time: '2 hours ago',
    read: true,
    unreadCount: 0,
    memberSince: 'Dec 2023',
    messages: [
      { sender: 'them', text: 'Your UAE visa application is almost complete.', time: '8:00 AM' },
      { sender: 'me', text: 'What documents do I still need?', time: '8:15 AM' },
      { sender: 'them', text: 'I\'ve attached the visa application checklist.', time: '8:30 AM', attachment: 'UAE_Visa_Checklist.pdf' },
      { sender: 'me', text: 'Thanks! I\'ll gather the remaining documents.', time: '8:45 AM', read: true },
    ]
  },

  // ============ LAWYER CHATS ============
  {
    id: 13,
    type: 'lawyer',
    name: 'James Thompson',
    initials: 'JT',
    color: 'bg-amber-600',
    role: 'Immigration Lawyer',
    status: 'online',
    lastMessage: 'Your documents have been reviewed and approved.',
    time: '10 min ago',
    read: false,
    unreadCount: 3,
    memberSince: 'Feb 2024',
    messages: [
      { sender: 'them', text: 'I\'ve reviewed your case thoroughly.', time: '2:00 PM' },
      { sender: 'me', text: 'What\'s your recommendation?', time: '2:05 PM' },
      { sender: 'them', text: 'We have a strong case for approval.', time: '2:10 PM' },
      { sender: 'them', text: 'Your documents have been reviewed and approved.', time: '2:15 PM', read: false },
    ]
  },
  {
    id: 14,
    type: 'lawyer',
    name: 'Maria Santos',
    initials: 'MS',
    color: 'bg-purple-500',
    role: 'US Immigration Lawyer',
    status: 'busy',
    lastMessage: 'Your H1-B petition is ready for filing.',
    time: '1 hour ago',
    read: true,
    unreadCount: 0,
    memberSince: 'Jan 2024',
    messages: [
      { sender: 'them', text: 'Your H1-B application is complete.', time: '9:30 AM' },
      { sender: 'me', text: 'When can we file it?', time: '9:45 AM' },
      { sender: 'them', text: 'Your H1-B petition is ready for filing.', time: '10:00 AM', read: true },
    ]
  },
  {
    id: 15,
    type: 'lawyer',
    name: 'Chen Wei',
    initials: 'CW',
    color: 'bg-cyan-500',
    role: 'Asian Immigration Lawyer',
    status: 'offline',
    lastMessage: 'The legal opinion letter has been drafted.',
    time: '3 hours ago',
    read: true,
    unreadCount: 0,
    memberSince: 'Mar 2024',
    messages: [
      { sender: 'them', text: 'I\'ve reviewed your Singapore work visa case.', time: '7:30 AM' },
      { sender: 'me', text: 'Any issues I should be aware of?', time: '7:45 AM' },
      { sender: 'them', text: 'The legal opinion letter has been drafted.', time: '8:00 AM', attachment: 'Legal_Opinion_Singapore.pdf' },
      { sender: 'me', text: 'Thank you! I\'ll review it today.', time: '8:15 AM', read: true },
    ]
  },
  {
    id: 16,
    type: 'lawyer',
    name: 'Alexandra Novak',
    initials: 'AN',
    color: 'bg-pink-500',
    role: 'European Immigration Lawyer',
    status: 'online',
    lastMessage: 'I need one more document to complete your case.',
    time: '30 min ago',
    read: false,
    unreadCount: 1,
    memberSince: 'Apr 2024',
    messages: [
      { sender: 'them', text: 'Your Germany Blue Card case is progressing well.', time: '3:00 PM' },
      { sender: 'me', text: 'That\'s good to hear! Any updates?', time: '3:10 PM' },
      { sender: 'them', text: 'I need one more document to complete your case.', time: '3:20 PM', read: false },
    ]
  },
  {
    id: 17,
    type: 'lawyer',
    name: 'Omar Hassan',
    initials: 'OH',
    color: 'bg-orange-500',
    role: 'Middle East Immigration Lawyer',
    status: 'away',
    lastMessage: 'Your UAE golden visa application is in final review.',
    time: '2 hours ago',
    read: true,
    unreadCount: 0,
    memberSince: 'May 2024',
    messages: [
      { sender: 'them', text: 'I\'m reviewing your UAE golden visa application.', time: '1:00 PM' },
      { sender: 'me', text: 'How long will the process take?', time: '1:15 PM' },
      { sender: 'them', text: 'Your UAE golden visa application is in final review.', time: '1:30 PM', read: true },
    ]
  },
  {
    id: 18,
    type: 'lawyer',
    name: 'Sophie Anderson',
    initials: 'SA',
    color: 'bg-sky-500',
    role: 'Commonwealth Immigration Lawyer',
    status: 'online',
    lastMessage: 'Your Australian PR application has been submitted.',
    time: '5 min ago',
    read: false,
    unreadCount: 2,
    memberSince: 'Jun 2024',
    messages: [
      { sender: 'them', text: 'All documents for your Australian PR are ready.', time: '4:30 PM' },
      { sender: 'me', text: 'Am I eligible for 189 visa?', time: '4:35 PM' },
      { sender: 'them', text: 'Yes, you meet all requirements.', time: '4:40 PM' },
      { sender: 'them', text: 'Your Australian PR application has been submitted.', time: '4:45 PM', read: false },
    ]
  },
]

// Chat users (for quick reference)
export const chatUsers = [
  // Candidate Users
  { id: 1, type: 'candidate', name: 'Sarah Johnson', initials: 'SJ', color: 'bg-blue-500', status: 'online', role: 'Senior Software Engineer Candidate' },
  { id: 2, type: 'candidate', name: 'Michael Chen', initials: 'MC', color: 'bg-cyan-500', status: 'away', role: 'Data Scientist Candidate' },
  { id: 3, type: 'candidate', name: 'Emma Watson', initials: 'EW', color: 'bg-indigo-500', status: 'online', role: 'Product Manager Candidate' },
  { id: 4, type: 'candidate', name: 'David Kim', initials: 'DK', color: 'bg-purple-500', status: 'offline', role: 'UX Designer Candidate' },
  
  // Employer Users
  { id: 5, type: 'employer', name: 'NHS Trust', initials: 'NT', color: 'bg-emerald-500', status: 'online', role: 'Healthcare Employer' },
  { id: 6, type: 'employer', name: 'TechCorp UK', initials: 'TC', color: 'bg-teal-500', status: 'busy', role: 'Technology Employer' },
  { id: 7, type: 'employer', name: 'CanadaTech Inc', initials: 'CT', color: 'bg-emerald-400', status: 'away', role: 'Tech Employer' },
  { id: 8, type: 'employer', name: 'Gulf Petroleum Co', initials: 'GP', color: 'bg-amber-500', status: 'offline', role: 'Oil & Gas Employer' },
  
  // Advisor Users
  { id: 9, type: 'advisor', name: 'Sarah Mitchell', initials: 'SM', color: 'bg-violet-500', status: 'online', role: 'UK Immigration Advisor' },
  { id: 10, type: 'advisor', name: 'Dr. Raj Patel', initials: 'RP', color: 'bg-amber-500', status: 'busy', role: 'Canadian PR Advisor' },
  { id: 11, type: 'advisor', name: 'Emma Hoffman', initials: 'EH', color: 'bg-emerald-500', status: 'online', role: 'EU Work Permit Advisor' },
  { id: 12, type: 'advisor', name: 'Nadia Al-Farsi', initials: 'NA', color: 'bg-rose-500', status: 'away', role: 'UAE/GCC Visa Advisor' },
  
  // Lawyer Users
  { id: 13, type: 'lawyer', name: 'James Thompson', initials: 'JT', color: 'bg-amber-600', status: 'online', role: 'Immigration Lawyer' },
  { id: 14, type: 'lawyer', name: 'Maria Santos', initials: 'MS', color: 'bg-purple-500', status: 'busy', role: 'US Immigration Lawyer' },
  { id: 15, type: 'lawyer', name: 'Chen Wei', initials: 'CW', color: 'bg-cyan-500', status: 'offline', role: 'Asian Immigration Lawyer' },
  { id: 16, type: 'lawyer', name: 'Alexandra Novak', initials: 'AN', color: 'bg-pink-500', status: 'online', role: 'European Immigration Lawyer' },
  { id: 17, type: 'lawyer', name: 'Omar Hassan', initials: 'OH', color: 'bg-orange-500', status: 'away', role: 'Middle East Immigration Lawyer' },
  { id: 18, type: 'lawyer', name: 'Sophie Anderson', initials: 'SA', color: 'bg-sky-500', status: 'online', role: 'Commonwealth Immigration Lawyer' },
]

// Helper functions for messages
export const getMessagesByType = (type) => {
  return messages.filter(m => m.type === type)
}

export const getUnreadCountByType = (type) => {
  return messages.filter(m => m.type === type && !m.read).length
}

export const getChatById = (id) => {
  return messages.find(m => m.id === id)
}

export const getMessagesByRole = (role) => {
  const roleMap = {
    candidate: 'candidate',
    employer: 'employer', 
    advisor: 'advisor',
    lawyer: 'lawyer'
  }
  const type = roleMap[role.toLowerCase()]
  return type ? getMessagesByType(type) : []
}

export const getTotalUnread = () => {
  return messages.filter(m => !m.read).length
}

export const getOnlineUsers = () => {
  return messages.filter(m => m.status === 'online')
}

export const getChatStats = () => {
  return {
    total: messages.length,
    candidates: messages.filter(m => m.type === 'candidate').length,
    employers: messages.filter(m => m.type === 'employer').length,
    advisors: messages.filter(m => m.type === 'advisor').length,
    lawyers: messages.filter(m => m.type === 'lawyer').length,
    unread: messages.filter(m => !m.read).length,
    online: messages.filter(m => m.status === 'online').length
  }
}

// Export all messages as default
export default messages