import { notFound } from "next/navigation";
import ScheduleDayContent from "../schedule-day-content";
import { scheduleDays } from "../schedule-data";

export function generateStaticParams() {
  return scheduleDays.map((day) => ({ day: day.slug }));
}

export default async function ScheduleDayPage({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const { day: daySlug } = await params;
  const day = scheduleDays.find((item) => item.slug === daySlug);

  if (!day) {
    notFound();
  }

  return <ScheduleDayContent day={day} />;
}
