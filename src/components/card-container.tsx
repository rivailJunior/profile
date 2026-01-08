/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { useTranslations } from "next-intl";
import { CenterContainer } from "./center-container";
export default function CardContainer() {
  const aboutMeTranslations = useTranslations("about_me");

  return (
    <div className="relative rounded-md bg-brand-pink p-5 font-thin shadow-lg">
      <CenterContainer>
        <p className="mb-2 text-justify text-lg leading-relaxed text-gray-100 md:text-3xl">
          {aboutMeTranslations("description_1")}
        </p>
        <p className="mb-2 text-justify text-lg leading-relaxed text-gray-100 md:text-3xl">
          {aboutMeTranslations("description_2")}
        </p>
        <p className="mb-2 text-justify text-lg leading-relaxed text-gray-100 md:text-3xl">
          {aboutMeTranslations("description_3")}
        </p>
      </CenterContainer>
    </div>
  );
}
