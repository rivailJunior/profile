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
      <div className="w-full bg-brand-cyan/50 py-5 md:py-10">
        <CenterContainer>
          <Timeline />
        </CenterContainer>
      </div>
      <FixedTranslateButton />

      <Footer />
    </div>
  );
}
