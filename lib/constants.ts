export const siteConfig = {
  name: "The People's Prize",
  tagline: "Restoring Belief in Learning, Excellence & Integrity",
  description:
    "A people-owned initiative designed to restore belief in learning, excellence, and integrity among the youth of Kogi East, Nigeria. Through academic competitions, mentorship, and shared life journeys.",
  email: "thepeoplesprize@gmail.com",
  phone: "+2348032915719",
  phone2: "+2348102362843",
  address: "Omaga House, Opposite Federal Polytechnic, Idah, Kogi State",
  year: 2026,
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Competition", href: "#competition" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
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
    date: "Thursday, July 2, 2026",
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
    date: "Thursday, October 8, 2026",
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
          "The Multipurpose Hall, beside Admin., Federal Polytechnic Idah, Kogi State",
      },
    ],
    status: "upcoming" as const,
  },
] as const;

export const speakers = [
  {
    name: "Prof. Sunday Atawodi",
    title: "Fellow, African Academy of Sciences",
    image: "/speakers/atawodi.jpg",
  },
  {
    name: "Dr. Audu Saleh Dogo",
    title: "Chief Research Officer, National Cereals Research Institute, Badeggi",
    image: "/speakers/dogo.jpg",
  },
  {
    name: "Dr. H. Enesi Ozomarisi",
    title: "Co-Founder, NurseryCorp",
    image: "/speakers/ozomarisi.jpg",
  },
  {
    name: "Abdulganiyu Suleiman",
    title: "Founder & CEO, Saaaza Empire Worldwide Limited",
    image: "/speakers/suleiman.jpg",
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
    title: "Mentorship & Guidance",
    description:
      "Distinguished leaders share their journeys, showing students real, attainable paths to fulfilment.",
    icon: "Compass",
  },
  {
    title: "Breaking the Cycle",
    description:
      "We restore the link between diligence and reward, reawakening belief that the future is truly boundless.",
    icon: "Sparkles",
  },
] as const;
