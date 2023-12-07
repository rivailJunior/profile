import React from "react";
import {
  Footer,
  CardContainer,
  FixedTranslateButton,
  StackExperience,
  Timeline,
  DividerSkills,
  DividerJobs,
} from "../../src/components";

export default function Profile() {
  return (
    <div className="bg-gray-700 ">
      <div className="profile-page container mx-auto px-4">
        <CardContainer />
        <DividerSkills />
        <StackExperience />
        <DividerJobs />
        <Timeline />
        <FixedTranslateButton />
      </div>
      <Footer />
    </div>
  );
}
