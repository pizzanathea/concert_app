import { notFound } from "next/navigation";
import GetInvolvedSection from "../components/get-involved-section";
import { opportunities } from "../data/get-involved-data";

export function generateStaticParams() {
  return opportunities.map((opportunity) => ({
    section: opportunity.id,
  }));
}

export default async function GetInvolvedSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const opportunityExists = opportunities.some((item) => item.id === section);

  if (!opportunityExists) {
    notFound();
  }

  return <GetInvolvedSection sectionId={section} />;
}
