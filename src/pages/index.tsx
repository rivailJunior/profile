import React from "react";
import {
  Footer,
  CardContainer,
  // HeaderImage,
  FixedTranslateButton,
} from "../components";

export default function Profile() {
  return (
    <div className="relative min-h-screen w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-500 via-red-400 to-red-500">
      <main className="profile-page">
        {/* <HeaderImage /> */}
        <CardContainer />
        <FixedTranslateButton />
      </main>
      <Footer />
    </div>
  );
}
