import React from "react";
import { Footer, CardContainer, HeaderImage } from "../components";

export default function Profile() {
  return (
    <>
      <main className="profile-page">
        <HeaderImage />
        <CardContainer />
      </main>
      <Footer />
    </>
  );
}
