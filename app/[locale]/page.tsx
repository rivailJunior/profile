import React from "react";
import {
  Footer,
  CardContainer,
  FixedTranslateButton,
} from "../../src/components";
import { IPageProps } from "../../src/interfaces/pages";

export default function Profile({params: { locale }}: IPageProps) {
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
