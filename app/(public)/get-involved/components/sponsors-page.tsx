"use client";

import BrandLogoGrid from "./brand-logo-grid";
import GetInvolvedPageLayout from "./get-involved-page-layout";
import { sponsorNames } from "../data/get-involved-data";

export default function SponsorsPage() {
  return (
    <GetInvolvedPageLayout sectionId="sponsors">
      <BrandLogoGrid
        brands={sponsorNames}
        disclaimer="Brand examples · Concept only · Not an official sponsor list"
      />
    </GetInvolvedPageLayout>
  );
}
