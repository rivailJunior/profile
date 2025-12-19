/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React from "react";
import { MdLocationPin, MdSchool, MdComputer } from "react-icons/md";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function CardContainerV2() {
  const t = useTranslations("");
  return (
    <div className="flex flex-col justify-between gap-10  text-white md:flex-row">
      <div className="flex h-auto w-full justify-center  md:hidden">
        <Image
          src="/personal.jpg"
          width={400}
          height={400}
          alt="personal"
          className="h-auto w-2/3  rounded-full"
        ></Image>
      </div>
      <div className="md:w-2/3">
        <h3 className="mb-1 text-3xl font-thin leading-normal md:text-5xl">
          {t("card_introduce")}{" "}
          <span className="font-normal text-blue-500">Rivail Pinto - </span>
          <p>{t("card_introduce2")}</p>
        </h3>
        <div className="mb-2 mt-5 flex flex-row justify-start space-x-2 font-light">
          <MdLocationPin
            size={20}
            className="fas fa-briefcase text-lg text-gray-200"
          />
          <span className="ml-2">{t("card_location")}</span>
          <MdSchool
            size={20}
            className="fas fa-university  text-lg text-gray-200"
          />
          <span className="ml-2">{t("card_degree_title")}</span>
          <MdComputer
            size={20}
            className="fas fa-briefcase text-lg text-gray-200"
          />
          <span className="ml-2">{t("card_job_title")}</span>
        </div>
        <div className="mt-5 text-justify text-lg font-thin leading-normal text-gray-100">
          {t("card_short_description")}
          <p>
            {t("card_short_description2")}{" "}
            <span className="font-light text-blue-500">
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
          className="h-auto w-2/3  rounded-full"
        ></Image>
      </div>
    </div>
  );
}
