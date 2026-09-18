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
        title: "1st Edition",
        subtitle: "Explore More",
    },
    {
        id: "slide-2",
        variant: "center",
        title: "Z FEST 2026",
        subtitle: "First Edition of ",
    },
    {
        id: "slide-3",
        variant: "split",
        eyebrow: "Special Show",
        title: "Jon Batiste Live",
        subtitle: "Special Show · Fri, 29 May 2026",
        badgeLabel: "8X Grammy Award Winner",
        date: "29 May 2026",
        image: "/",
    },
    {
        id: "slide-4",
        variant: "split",
        eyebrow: "Special Show",
        title: "Ella Mai",
        subtitle: "Special Show · Sat, 30 May 2026",
        badgeLabel: "Grammy Winner for Best RnB Song",
        date: "30 May 2026",
        image: "/images/ella-mai.jpg",
    },
    {
        id: "slide-5",
        variant: "split",
        eyebrow: "Special Show",
        title: "The 1975",
        subtitle: "Special Show · Sat, 30 May 2026",
        badgeLabel: "",
        date: "30 May 2026",
        image: "/The 1975 Desktop Wallpaper.svg",
    },
];