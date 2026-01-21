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
// import { HoverFillCard } from "../../src/components/hover-card";

export default function Profile() {
  return (
    <div className="bg-white">
      <FixedTranslateButton />
      <CenterContainer classNames="py-10 md:pt-20">
        <CardContainerV2 />
      </CenterContainer>
      <CardContainer />
      <div className="w-full py-5 md:py-10">
        <CenterContainer>
          <Timeline />
        </CenterContainer>
      </div>
      <SkillsSlider />
      {/* <HoverFillCard>
        <p>Test</p>
      </HoverFillCard> */}
      <Footer />
    </div>
  );
}
