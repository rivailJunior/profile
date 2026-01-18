import React from "react";
import {
  Footer,
  CardContainer,
  FixedTranslateButton,
  Timeline,
  CardContainerV2,
  SkillsSlider,
  CenterContainer,
} from "../../src/components";

export default function Profile() {
  return (
    <div className="bg-white">
      <CenterContainer classNames="py-10 md:pt-20">
        <CardContainerV2 />
      </CenterContainer>
      <CardContainer />
      <SkillsSlider />
      <CenterContainer>
        <Timeline />
      </CenterContainer>
      <FixedTranslateButton />

      <Footer />
    </div>
  );
}
