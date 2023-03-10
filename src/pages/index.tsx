import React from "react";
import {
  Footer,
  CardContainer,
  HeaderImage,
  FixedTranslateButton,
} from "../components";

export default function Profile() {
  return (
    <>
      <main className="profile-page ">
        <HeaderImage />
        <CardContainer />
        <FixedTranslateButton />
      </main>
      <Footer />
    </>
  );
}
