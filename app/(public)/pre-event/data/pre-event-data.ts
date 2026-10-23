import {
  AudioLines,
  Headphones,
  Mic2,
  Radio,
} from "lucide-react";

export const experiences = [
  {
    number: "01",
    type: "LISTEN",
    icon: Headphones,
    title: "The listening room",
    description:
      "A shared listening session for deep cuts, first loves, and the stories hiding between the notes. Bring a track suggestion; leave with a new favorite.",
    date: "07 NOV · 16:30—18:00",
    venue: "M Bloc Space",
    area: "Jakarta Selatan",
    prompts: ["Bring one song", "Hosted listening circle", "All ears welcome"],
    accent: "bg-amber-100",
  },
  {
    number: "02",
    type: "MAKE",
    icon: AudioLines,
    title: "Rhythm lab",
    description:
      "Turn everyday sounds into a beat. Make a loop with found objects, trade rhythms with someone new, then build one shared track together.",
    date: "14 NOV · 14:00—16:00",
    venue: "Taman Ismail Marzuki",
    area: "Jakarta Pusat",
    prompts: ["Hands-on beat making", "No experience needed", "Make it together"],
    accent: "bg-orange-100",
  },
  {
    number: "03",
    type: "WANDER",
    icon: Radio,
    title: "Jakarta, in stereo",
    description:
      "Take a slow soundwalk through the old city. Collect the little sounds people usually pass by, then bring them back for a spontaneous group listening.",
    date: "21 NOV · 07:00—09:00",
    venue: "Kota Tua",
    area: "Jakarta Barat",
    prompts: ["Guided city soundwalk", "Phone recorder is enough", "Morning pace"],
    accent: "bg-lime-100",
  },
  {
    number: "04",
    type: "PLAY",
    icon: Mic2,
    title: "Open circle",
    description:
      "A low-pressure mic, a loose house band, and room for a poem, a chorus, or a first-time performance. The crowd is part of the set.",
    date: "05 DEC · 16:30—19:00",
    venue: "Urban Forest Cipete",
    area: "Jakarta Selatan",
    prompts: ["Open mic", "Drop-in jam", "Cheer someone on"],
    accent: "bg-rose-100",
  },
] as const;
