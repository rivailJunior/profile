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
    <div className="bg-gray-800">
      <div className="mx-auto max-w-xs py-20 sm:max-w-sm md:max-w-7xl md:py-32">
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
