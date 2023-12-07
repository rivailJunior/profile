import React from "react";
import {
  Footer,
  CardContainer,
  FixedTranslateButton,
  StackExperience,
} from "../../src/components";

export default function Profile() {
  return (
    <div className="bg-gray-700 ">
      <div className="profile-page container mx-auto px-4">
        <CardContainer />
        <StackExperience />
        <FixedTranslateButton />
      </div>
      <Footer />
    </div>
  );
}
