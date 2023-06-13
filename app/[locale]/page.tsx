import React from "react";
import {
  Footer,
  CardContainer,
  FixedTranslateButton,
} from "../../src/components";

export default function Profile() {
  return (
    <div>
      <div className="profile-page">
        <CardContainer />
        <FixedTranslateButton />
      </div>
      <Footer />
    </div>
  );
}
