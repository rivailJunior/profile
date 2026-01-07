/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React from "react";
import { MdLocationPin, MdSchool, MdComputer } from "react-icons/md";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Zen_Dots } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";

const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
});
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: "400",
});

export function CardContainerV2() {
  const t = useTranslations("");
  return (
    <div className="flex flex-col justify-between gap-2 text-brand-black md:flex-row">
      <div className="flex h-auto w-full justify-center md:hidden">
        <Image
          src="/personal.jpg"
          width={400}
          height={400}
          alt="personal"
          className="h-auto w-full rounded-md shadow-lg"
        ></Image>
      </div>
      <div className="  md:w-2/3">
        <div className="rounded-md bg-brand-cyan p-5 shadow-lg">
          <h3 className="mb-1 text-3xl font-thin leading-normal md:text-5xl">
            {/* {t("card_introduce")}{" "} */}
            <span className="text-white">{t("card_introduce2")} - </span>
            <span
              className={`font-normal text-brand-pink ${libreBaskerville.className}`}
            >{` Rivail Pinto`}</span>
          </h3>
          <div className="mb-2 mt-5 flex flex-row justify-start space-x-2 font-light ">
            <MdLocationPin
              size={20}
              className="fas fa-briefcase text-lg text-white"
            />
            <span className="ml-2 text-white">{t("card_location")}</span>
            <MdSchool
              size={20}
              className="fas fa-university  text-lg text-white"
            />
            <span className="ml-2 text-white">{t("card_degree_title")}</span>
            <MdComputer
              size={20}
              className="fas fa-briefcase text-lg text-white"
            />
            <span className="ml-2 text-white">{t("card_job_title")}</span>
          </div>
        </div>
        <div className="mt-5 rounded-md bg-brand-pink p-5 text-justify text-lg font-thin leading-normal text-white shadow-lg">
          {t("card_short_description")}
          <p>
            {t("card_short_description2")}{" "}
            <span className="font-light text-brand-black">
              {t("card_short_skills")}
            </span>
          </p>
        </div>
      </div>
      <div className="hidden h-auto w-1/3 justify-center md:flex">
        <Image
          src="/personal.jpg"
          priority
          width={400}
          height={400}
          alt="personal"
          className="h-auto w-2/3 rounded-md object-cover shadow-lg"
        ></Image>
      </div>
    </div>
  );
}
