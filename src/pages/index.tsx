import React from "react";
import {
  Footer,
  CardContainer,
  FixedTranslateButton,
  DescriptionCard,
} from "../components";

export default function Profile() {
  return (
    <div className="relative min-h-screen w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <main className="profile-page">
        <DescriptionCard />
        <FixedTranslateButton />
      </main>
      <Footer />
    </div>
  );
}
