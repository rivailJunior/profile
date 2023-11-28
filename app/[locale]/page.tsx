import React from "react";
import {
  Footer,
  CardContainer,
  FixedTranslateButton,
  CardSkills,
  StackExperience,
} from "../../src/components";

export default function Profile() {
  return (
    <div className="bg-gray-700 ">
      <div className="profile-page container mx-auto px-4">
        <CardContainer />
        {/* <CardSkills /> */}
        <StackExperience />
        <FixedTranslateButton />
      </div>
      <Footer />
    </div>
  );
}
