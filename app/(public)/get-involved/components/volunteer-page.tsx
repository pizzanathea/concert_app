"use client";

import GetInvolvedPageLayout from "./get-involved-page-layout";
import OpportunityDetails from "./opportunity-details";

export default function VolunteerPage() {
  return (
    <GetInvolvedPageLayout sectionId="volunteer">
      <OpportunityDetails sectionId="volunteer" />
    </GetInvolvedPageLayout>
  );
}
