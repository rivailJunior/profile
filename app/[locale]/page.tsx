import React from "react";
import {
  Footer,
  CardContainer,
  FixedTranslateButton,
  Timeline,
  DividerSkills,
  DividerJobs,
  CardContainerV2,
  SkillsSlider,
  CenterContainer,
} from "../../src/components";

export default function Profile() {
  return (
    <div className="bg-white">
      <CenterContainer classNames="py-20">
        <CardContainerV2 />
      </CenterContainer>
      <CardContainer />
      <DividerSkills />
      <SkillsSlider />
      <DividerJobs />
      <Timeline />
      <FixedTranslateButton />

      <Footer />
    </div>
  );
}
