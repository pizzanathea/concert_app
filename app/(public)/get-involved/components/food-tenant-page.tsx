"use client";

import BrandLogoGrid from "./brand-logo-grid";
import GetInvolvedPageLayout from "./get-involved-page-layout";
import { foodTenantBrands } from "../data/get-involved-data";

export default function FoodTenantPage() {
  return (
    <GetInvolvedPageLayout sectionId="food-tenant">
      <BrandLogoGrid
        brands={foodTenantBrands}
        disclaimer="Brand examples · Concept only · Not a confirmed tenant list"
        showCategories
      />
    </GetInvolvedPageLayout>
  );
}
