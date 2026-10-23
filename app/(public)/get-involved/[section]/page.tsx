import { notFound } from "next/navigation";
import { opportunities } from "../data/get-involved-data";
import SponsorsPage from "../components/sponsors-page";
import PartnersPage from "../components/partners-page";
import FoodTenantPage from "../components/food-tenant-page";
import MediaPartnersPage from "../components/media-partners-page";
import MediaRegistrationPage from "../components/media-registration-page";
import VolunteerPage from "../components/volunteer-page";

const sectionPages = {
  sponsors: SponsorsPage,
  partners: PartnersPage,
  "food-tenant": FoodTenantPage,
  "media-partners": MediaPartnersPage,
  "media-registration": MediaRegistrationPage,
  volunteer: VolunteerPage,
} as const;

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
  const SectionPage =
    sectionPages[section as keyof typeof sectionPages];

  if (!SectionPage || !opportunities.some((item) => item.id === section)) {
    notFound();
  }

  return <SectionPage />;
}
