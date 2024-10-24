/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { useTranslations } from "next-intl";
export default function CardContainer() {
  const aboutMeTranslations = useTranslations("about_me");

  return (
    <div className="relative font-thin">
      <p className="mb-2 text-justify text-lg leading-relaxed text-gray-100">
        {aboutMeTranslations("description_1")}
      </p>
      <p className="mb-2 text-justify text-lg leading-relaxed text-gray-100">
        {aboutMeTranslations("description_2")}
      </p>
      <p className="mb-2 text-justify text-lg leading-relaxed text-gray-100">
        {aboutMeTranslations("description_3")}
      </p>
    </div>
  );
}
