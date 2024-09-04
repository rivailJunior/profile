import React from "react";
import {
  Footer,
  CardContainer,
  FixedTranslateButton,
  Timeline,
  DividerSkills,
  DividerJobs,
  CardContainerV2,
  DividerAboutMe,
  SkillsSlider,
} from "../../src/components";

export default function Profile() {
  return (
    <div className="bg-gray-800 ">
      <div className="profile-page container mx-auto px-32 py-24">
        <CardContainerV2 />
        <DividerAboutMe />
        <CardContainer />
        <DividerSkills />
        <SkillsSlider />
        <DividerJobs />
        <Timeline />
        <FixedTranslateButton />
      </div>
      <Footer />
    </div>
  );
}
