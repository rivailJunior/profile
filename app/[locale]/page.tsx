import React from "react";
import {
  Footer,
  CardContainer,
  FixedTranslateButton,
} from "../../src/components";

export default function Profile() {
  return (
    <div className="bg-gray-700">
      <div className="profile-page">
        <CardContainer />
        <FixedTranslateButton />
      </div>
      <Footer />
    </div>
  );
}
