import {
  Handshake,
  HeartHandshake,
  Mic2,
  Newspaper,
  Radio,
  Utensils,
} from "lucide-react";

export const opportunities = [
  {
    id: "sponsors",
    number: "01",
    label: "SPONSORSHIP",
    title: "Put your name in the mix.",
    description:
      "Bring your brand into a live music experience built around culture, community, and the next generation of festival-goers.",
    detail: "Brand visibility · On-ground activations · Custom collaborations",
    icon: Handshake,
  },
  {
    id: "partners",
    number: "02",
    label: "FESTIVAL PARTNERS",
    title: "Make something happen together.",
    description:
      "For organizations and creative communities ready to add a new idea, useful resource, or unexpected point of view to Z Fest.",
    detail: "Creative projects · Community programs · Experience partners",
    icon: HeartHandshake,
  },
  {
    id: "food-tenant",
    number: "03",
    label: "FOOD & BEVERAGE",
    title: "Feed the in-between moments.",
    description:
      "Bring your signature menu to the festival grounds and become part of what people discover between sets.",
    detail: "Food stalls · Drinks · Independent culinary concepts",
    icon: Utensils,
  },
  {
    id: "media-partners",
    number: "04",
    label: "MEDIA PARTNERS",
    title: "Tell the story with us.",
    description:
      "Pair your platform and audience with the sounds, people, and scenes shaping this year’s festival.",
    detail: "Editorial features · Broadcast · Content collaborations",
    icon: Radio,
  },
  {
    id: "media-registration",
    number: "05",
    label: "MEDIA REGISTRATION",
    title: "Get closer to the story.",
    description:
      "Journalists, photographers, and creators can register their interest in covering Z Fest and its surrounding program.",
    detail: "Press · Photo · Video · Digital creators",
    icon: Newspaper,
  },
  {
    id: "volunteer",
    number: "06",
    label: "VOLUNTEERS",
    title: "Be part of the crew.",
    description:
      "Help make the details feel effortless. Join the people welcoming the crowd, supporting the artists, and bringing the grounds to life.",
    detail: "Guest experience · Festival operations · Community",
    icon: Mic2,
  },
] as const;
