/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React from "react";
import { MdLocationPin, MdSchool, MdComputer } from "react-icons/md";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: "700",
});

export function CardContainerV2() {
  const t = useTranslations("");
  return (
    <div className="flex flex-col justify-between text-brand-black md:flex-row md:gap-4">
      <div className="flex justify-center md:hidden">
        <Image
          src="/personal.jpg"
          width={400}
          height={400}
          alt="personal"
          className="h-[200px] w-[200px] rounded-full object-cover"
        ></Image>
      </div>
      <div className="md:w-2/3">
        <div className="gap-4 rounded-md bg-white p-5">
          <h3 className="text-align-justify mb-1 text-4xl font-bold leading-normal md:text-8xl">
            <p className="w-7/10 text-brand-black">{t("card_introduce")} </p>
            <p
              className={` w-7/10 text-brand-cyan ${libreBaskerville.className}`}
            >
              {t("card_introduce2")}
            </p>
          </h3>
          <div className="text-md mt-5 bg-white text-justify font-mono leading-8 text-brand-black md:text-lg">
            {t("card_short_description")}
          </div>
          <div className="mb-2 mt-5 flex flex-col justify-start gap-2 md:flex-row md:gap-4 ">
            <div className="flex flex-row items-center">
              <MdLocationPin
                size={20}
                className="fas fa-briefcase text-lg text-brand-black"
              />
              <span className="md:text-md ml-1 font-mono  text-sm text-brand-black">
                {t("card_location")}
              </span>
            </div>
            <div className="flex flex-row items-center">
              <MdSchool
                size={20}
                className="fas fa-university  text-lg text-brand-black"
              />
              <span className="md:text-md ml-1 font-mono  text-sm text-brand-black  ">
                {t("card_degree_title")}
              </span>
            </div>
            <div className="flex flex-row items-center">
              <MdComputer
                size={20}
                className="fas fa-briefcase text-lg text-brand-black"
              />
              <span className="md:text-md ml-1 font-mono  text-sm text-brand-black ">
                {t("card_job_title")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden h-auto w-1/3 justify-center md:flex">
        <Image
          src="/personal.jpg"
          priority
          alt="personal"
          objectFit="cover"
          width={500}
          height={500}
          className="h-auto  rounded-md object-cover shadow-lg"
        ></Image>
      </div>
    </div>
  );
}
