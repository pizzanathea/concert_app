import {
  Handshake,
  HeartHandshake,
  Mic2,
  Utensils,
} from "lucide-react";

export const sponsorNames = [
  { name: "TUKU", logo: "/images/sponsors/Tuku.png" },
  { name: "Coca-Cola", logo: "/images/sponsors/Coca-Cola_logo.svg.webp" },
  { name: "Sprite", logo: "/images/sponsors/Sprite_2022.svg.webp" },
  { name: "AQUA", logo: "/images/sponsors/Logo_Air_Mineral_Aqua.png" },
  { name: "Indomie", logo: "/images/sponsors/Indomie.png" },
  {
    name: "Telkomsel",
    logo: "/images/sponsors/Telkomsel-baru.DYhv_uL8_1mDBsA.webp",
  },
  {
    name: "BCA",
    logo: "/images/sponsors/Bank_Central_Asia.svg.webp",
  },
  {
    name: "GoPay",
    logo: "/images/sponsors/Gopay_logo_(2019).svg.webp",
  },
  { name: "Kopi Kenangan", logo: "/images/sponsors/Kopi_Kenangan.svg.webp" },
  {
    name: "Traveloka",
    logo: "/images/sponsors/Traveloka_Primary_Logo.webp",
  },
] as const;

export const foodTenantBrands = [
  {
    name: "YOSHINOYA",
    logo: "/images/food-tenant/Yoshinoya-01.png",
    category: "Japanese beef bowls",
  },
  {
    name: "Shihlin Taiwan Street Snacks",
    logo: "/images/food-tenant/SHIHLIN-100%20(1).svg",
    category: "Taiwanese street food",
  },
  {
    name: "Gindaco",
    logo: "/images/food-tenant/5c19e5942a63953d3d7f228b4f5c1c79.webp",
    category: "Japanese takoyaki",
  },
  {
    name: "HokBen",
    logo: "/images/food-tenant/HokBen_new_logo.png",
    category: "Japanese-inspired meals",
  },
  {
    name: "Richeese Factory",
    logo: "/images/food-tenant/Richeese_Factory_Logo.jpg",
    category: "Chicken & cheesy snacks",
  },
  {
    name: "Bakmi GM",
    logo: "/images/food-tenant/images%20(1).jpeg",
    category: "Noodles & comfort food",
  },
  {
    name: "Chatime",
    logo: "/images/food-tenant/chatime-logo-png_seeklogo-338394.svg",
    category: "Tea & refreshments",
  },
  {
    name: "Sour Sally",
    logo: "/images/food-tenant/LOGO-SOUR-SALLY-04.png",
    category: "Frozen yogurt",
  },
  {
    name: "Burger Bangor",
    logo: "/images/food-tenant/burgerbangor-izdqf2-xl.svg",
    category: "Burgers",
  },
  {
    name: "Doner Kebab",
    logo: "/images/food-tenant/A8EWW01.svg",
    category: "Kebab & wraps",
  },
] as const;

export const opportunities = [
  {
    id: "sponsors",
    number: "01",
    label: "SPONSORSHIP",
    menuLabel: "Sponsors",
    title: "Put your name in the mix.",
    description:
      "Bring your brand into a live music experience built around culture, community, and the next generation of festival-goers.",
    detail: "Brand visibility · On-ground activations · Custom collaborations",
    icon: Handshake,
    pageTitle: "Sponsors",
    pageIntro:
      "A concept lineup featuring brands familiar to Indonesian festival-goers. These names are visual references only—not confirmed Z Fest sponsors.",
    pageSectionTitle: "A shared stage",
    pageDetails: [
      "Presenting partners",
      "Official festival partners",
      "Experience and community partners",
    ],
  },
  {
    id: "partners",
    number: "02",
    label: "FESTIVAL PARTNERS",
    menuLabel: "Partners",
    title: "Make something happen together.",
    description:
      "For organizations and creative communities ready to add a new idea, useful resource, or unexpected point of view to Z Fest.",
    detail: "Creative projects · Community programs · Experience partners",
    icon: HeartHandshake,
    pageTitle: "Festival Partners",
    pageIntro:
      "A preview of brands that could join Z Fest as festival partners. These names are visual references only—not confirmed Z Fest partners.",
    pageSectionTitle: "Ways to collaborate",
    pageDetails: [
      "Build a cultural or community program",
      "Create an interactive festival experience",
      "Support access, sustainability, or artist development",
      "Bring a useful service to the festival grounds",
    ],
  },
  {
    id: "food-tenant",
    number: "03",
    label: "FOOD & BEVERAGE",
    menuLabel: "Food Tenant",
    title: "Feed the in-between moments.",
    description:
      "Bring your signature menu to the festival grounds and become part of what people discover between sets.",
    detail: "Food stalls · Drinks · Independent culinary concepts",
    icon: Utensils,
    pageTitle: "Food Tenants",
    pageIntro:
      "From Japanese comfort food to quick festival snacks, here are a few familiar brands imagined at Z Fest. This is a concept lineup, not a confirmed tenant list.",
    pageSectionTitle: "What makes a good fit",
    pageDetails: [
      "A focused menu that can be served efficiently",
      "Clear ingredient and allergen information",
      "Thoughtful packaging and waste reduction",
      "A team ready for a high-energy festival environment",
    ],
  },
  {
    id: "volunteer",
    number: "04",
    label: "VOLUNTEERS",
    menuLabel: "Volunteer",
    title: "Be part of the crew.",
    description:
      "Help make the details feel effortless. Join the people welcoming the crowd, supporting the artists, and bringing the grounds to life.",
    detail: "Guest experience · Festival operations · Community",
    icon: Mic2,
    pageTitle: "Volunteer Crew",
    pageIntro:
      "Find your place behind the scenes—from guest services and F&B to creative production and access control. Bring your curiosity, care, and team spirit.",
    pageSectionTitle: "Find your crew",
    pageDetails: [
      "Guest welcome and information",
      "Stage and artist support",
      "Wayfinding and festival operations",
      "Community and sustainability crew",
    ],
  },
] as const;
