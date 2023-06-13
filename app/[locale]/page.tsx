import React from "react";
import {
  Footer,
  CardContainer,
  FixedTranslateButton,
} from "../../src/components";

export default function Profile({params: { locale }}) {
  return (
    <div>
      <div className="profile-page">
        <CardContainer />
        <FixedTranslateButton locale={locale}/>
      </div>
      <Footer />
    </div>
  );
}
