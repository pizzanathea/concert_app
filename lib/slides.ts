export type Slide = {
    id: string;
    variant: "center" | "split";
    eyebrow?: string;
    title: string;
    subtitle?: string;
    badgeLabel?: string;
    date?: string;
    image?: string; // path ke /public/images/...
};

export const slides: Slide[] = [
    {
        id: "slide-1",
        variant: "center",
        title: "21st Edition",
        subtitle: "Explore More",
    },
    {
        id: "slide-2",
        variant: "center",
        title: "International Java Jazz Festival",
        subtitle: "myBCA",
    },
    {
        id: "slide-3",
        variant: "split",
        eyebrow: "myBCA International Java Jazz Festival",
        title: "Jon Batiste Live",
        subtitle: "Special Show · Fri, 29 May 2026",
        badgeLabel: "8X Grammy Award Winner",
        date: "29 May 2026",
        image: "/images/jon-batiste.jpg",
    },
    {
        id: "slide-4",
        variant: "split",
        eyebrow: "myBCA International Java Jazz Festival",
        title: "Ella Mai",
        subtitle: "Special Show · Sat, 30 May 2026",
        badgeLabel: "Grammy Winner for Best RnB Song",
        date: "30 May 2026",
        image: "/images/ella-mai.jpg",
    },
    {
        id: "slide-5",
        variant: "split",
        eyebrow: "myBCA International Java Jazz Festival",
        title: "wave to earth",
        subtitle: "Special Show · Sat, 30 May 2026",
        badgeLabel: "34th Seoul Music Awards Best Band Winner",
        date: "30 May 2026",
        image: "/images/wave-to-earth.jpg",
    },
];