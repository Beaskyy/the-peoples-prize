export const siteConfig = {
  name: "The People's Prize Foundation",
  tagline: "Restoring Belief in Learning, Excellence & Integrity",
  description:
    "A people-owned foundation designed to restore belief in learning, excellence, and integrity among the youth of Kogi East, Nigeria. Through academic competitions, mentorship, and shared life journeys.",
  email: "thepeoplesprize@gmail.com",
  phone: "+2348032915719",
  phone2: "+2348102362843",
  address: "Beside Senator(Dr.) Ahmadu Ali House, Federal Polytechnic Idah, Kogi State",
  year: 2026,
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Competition", href: "#competition" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
] as const;

export const prizes = [
  {
    place: "1st",
    amount: "₦1,000,000",
    description: "Champion Prize",
    color: "from-yellow-400 to-amber-500",
    icon: "🏆",
  },
  {
    place: "2nd",
    amount: "₦500,000",
    description: "First Runner-up",
    color: "from-gray-300 to-gray-400",
    icon: "🥈",
  },
  {
    place: "3rd",
    amount: "₦250,000",
    description: "Second Runner-up",
    color: "from-amber-600 to-amber-700",
    icon: "🥉",
  },
] as const;

export const schedule = [
  {
    round: "Round 1",
    date: "Thursday, July 2, 2026 at 10:00 AM",
    description: "Federal Constituency Qualifying Round",
    venues: [
      {
        constituency: "Idah Federal Constituency",
        venue: "Polytechnic Secondary School, Idah",
      },
      {
        constituency: "Ankpa Federal Constituency",
        venue: "St. Charles, Ankpa",
      },
      {
        constituency: "Dekina Federal Constituency",
        venue: "Our Lady of School, Anyigba",
      },
    ],
    status: "upcoming" as const,
  },
  {
    round: "Final Round",
    date: "Thursday, October 8, 2026 at 10:00 AM",
    description: "Top 3 from each constituency compete",
    venues: [
      {
        constituency: "All Constituencies",
        venue: "Polytechnic Secondary School, Idah, Kogi State",
      },
    ],
    status: "upcoming" as const,
  },
  {
    round: "Boundless Horizon Day",
    date: "Friday, October 9, 2026",
    description:
      "Finale & Celebration — prizes awarded, distinguished leaders speak to students",
    venues: [
      {
        constituency: "Grand Finale",
        venue:
          "The Multipurpose Hall, beside Senator(Dr.) Ahmadu Ali House, Federal Polytechnic Idah, Kogi State",
      },
    ],
    status: "upcoming" as const,
  },
] as const;

export const speakers = [
  {
    name: "Prof. Sunday Atawodi",
    title: "Fellow, African Academy of Sciences",
    image: "/sunday.png",
  },
  {
    name: "Dr. Audu Saleh Dogo",
    title: "Chief Research Officer, National Cereals Research Institute, Badeggi",
    image: "/saleh.png",
  },
  {
    name: "Dr. H. Enesi Ozomarisi",
    title: "Co-Founder, NurseryCorp",
    image: "/enesi.png",
  },
  {
    name: "Abdulganiyu Suleiman",
    title: "Founder & CEO, Saaaza Empire Worldwide Limited",
    image: "/abdulganiyu.png",
  },
] as const;

export const impactStats = [
  { value: "3", label: "Federal Constituencies" },
  { value: "₦1.75M+", label: "Total Prize Pool" },
  { value: "100+", label: "Competing Students" },
  { value: "4+", label: "Distinguished Speakers" },
] as const;

export const whyItMatters = [
  {
    title: "Rewarding Excellence",
    description:
      "Outstanding students receive substantial cash prizes — proving that honest effort is valuable and rewarding.",
    icon: "Trophy",
  },
  {
    title: "Empowering Teachers",
    description:
      "Teachers of winning students receive 50% of the prize — because those who shape great minds deserve recognition too.",
    icon: "GraduationCap",
  },
  {
    title: "Mentorship",
    description:
      "Distinguished leaders share their journeys, showing students real, attainable paths to fulfilment.",
    icon: "Compass",
  },
  {
    title: "The Grand Finale",
    description:
      "A powerful platform where authentic details on how things truly work are shared by people who have walked the path.",
    icon: "Sparkles",
  },
] as const;

export const examResults = [
  {
    year: "2025",
    title: "The People's Prize 2025 - Final Results",
    description: "Official results for the 2025 Mathematics competition.",
    fileUrl: "https://docs.google.com/spreadsheets/d/1ChVbChOMAT5h0LiPnuSnLf9NbZDayjAp8_Qy18HdU8s/edit?gid=1018966691#gid=1018966691",
    dateUploaded: "2025-10-15",
  },
  {
    year: "2024",
    title: "The People's Prize 2024 - Final Results",
    description: "Official results for the 2024 Mathematics competition.",
    fileUrl: "#",
    dateUploaded: "2024-10-12",
  },
] as const;
