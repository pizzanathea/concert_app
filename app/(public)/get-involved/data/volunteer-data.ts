import {
  Camera,
  CreditCard,
  HeartHandshake,
  IdCard,
  MonitorCog,
  PackageCheck,
  ScanLine,
  Utensils,
} from "lucide-react";

export const volunteerPrinciples = {
  title: "Show up with care. Leave every space better.",
  description:
    "Volunteers help the festival feel welcoming, safe, and well-organized. You will receive a role briefing and work with a coordinator so you know where to be, what to do, and who to ask for help.",
  responsibilities: [
    "Arrive on time, attend briefings, and follow your shift plan.",
    "Treat guests, artists, vendors, and fellow crew with respect.",
    "Keep credentials, guest information, and internal updates private.",
    "Follow safety instructions and report issues to your coordinator.",
    "Stay within your assigned access areas and never lend your pass.",
    "Ask before taking or sharing identifiable photos or videos.",
  ],
} as const;

export const volunteerDivisions = [
  {
    number: "02",
    title: "Food & Beverage",
    icon: Utensils,
    description:
      "Help food vendors and guests move smoothly through busy service periods.",
    tasks: [
      "Guide guests to food stalls and queue entrances.",
      "Support vendor coordination and keep shared areas clear.",
      "Flag spills, waste, or service issues to the assigned lead.",
    ],
  },
  {
    number: "03",
    title: "Marketing",
    icon: HeartHandshake,
    description:
      "Help the festival team share useful, on-brand updates with the crowd.",
    tasks: [
      "Assist with approved on-site campaign activities.",
      "Help distribute event information and direct audience questions.",
      "Follow the brand guide and get consent before featuring guests.",
    ],
  },
  {
    number: "04",
    title: "Merchandise",
    icon: PackageCheck,
    description:
      "Keep the merch area organized and make browsing easy for festival-goers.",
    tasks: [
      "Arrange products and keep the display area tidy.",
      "Support stock counts and restocking with the merch lead.",
      "Use only the assigned sales process and escalate payment issues.",
    ],
  },
  {
    number: "05",
    title: "Ticketing",
    icon: CreditCard,
    description:
      "Welcome ticket holders and help the entry process stay clear and orderly.",
    tasks: [
      "Assist with ticket scanning under the ticketing lead's direction.",
      "Guide guests to the correct entry and help point out queue lanes.",
      "Refer invalid tickets or entry disputes to authorized staff.",
    ],
  },
  {
    number: "06",
    title: "IT & Access Control",
    icon: MonitorCog,
    description:
      "Support event devices and help protect staff-only and restricted areas.",
    tasks: [
      "Help prepare and check assigned scanners or crew devices.",
      "Direct access questions to authorized security or IT staff.",
      "Never bypass access controls; report device or credential issues.",
    ],
  },
  {
    number: "07",
    title: "ID Card Division",
    icon: IdCard,
    description:
      "Help distribute crew credentials accurately and keep attendee data private.",
    tasks: [
      "Check names against the approved credential list.",
      "Distribute the correct ID card and explain where it is valid.",
      "Keep lists secure and report lost or incorrect cards promptly.",
    ],
  },
  {
    number: "08",
    title: "Photographer",
    icon: Camera,
    description:
      "Capture the atmosphere while respecting people, performers, and venue rules.",
    tasks: [
      "Work only in approved photo zones and assigned time slots.",
      "Follow artist, guest, and event restrictions on photography.",
      "Transfer and publish images only through the agreed workflow.",
    ],
  },
  {
    number: "09",
    title: "Videographer",
    icon: ScanLine,
    description:
      "Record the energy of the festival while following production guidance.",
    tasks: [
      "Follow the shot list and production lead's directions.",
      "Respect restricted areas and recording or consent requests.",
      "Store and share footage only through approved channels.",
    ],
  },
] as const;

export const volunteerClosing = {
  eyebrow: "Your people. Your pace. One festival.",
  title: "Let’s join the crew.",
  description:
    "Find the division that fits you, bring a team-first mindset, and help make Z Fest a great experience for everyone. Volunteer registration details will be announced through official Z Fest channels.",
} as const;
