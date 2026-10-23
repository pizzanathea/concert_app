"use client";

import BrandLogoGrid from "./brand-logo-grid";
import GetInvolvedPageLayout from "./get-involved-page-layout";
import { sponsorNames } from "../data/get-involved-data";

export default function PartnersPage() {
  return (
    <GetInvolvedPageLayout sectionId="partners">
      <BrandLogoGrid
        brands={sponsorNames}
        disclaimer="Brand examples · Concept only · Not an official sponsor or partner list"
      />
    </GetInvolvedPageLayout>
  );
}
