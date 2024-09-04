/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React from "react";
import { MdLocationPin, MdSchool, MdComputer } from "react-icons/md";
import { useTranslations } from "next-intl";

export function CardContainerV2() {
  const t = useTranslations("");
  return (
    <>
      <div className="flex rounded-full"></div>
      <div className="flex h-1/2 flex-row text-white">
        <div className="w-1/2 ">
          <h3 className="mb-1 text-5xl font-thin leading-normal">
            {t("card_introduce")}{" "}
            <span className="font-normal text-blue-500">Rivail Pinto.</span>
            <p>{t("card_introduce2")}</p>
          </h3>
          <div className="mb-2 flex flex-row justify-start space-x-2 font-light">
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
          <div className="mb-2 text-justify text-lg font-thin leading-normal text-gray-100">
            {t("card_short_description")}
            <p>
              {t("card_short_description2")}{" "}
              <span className="font-light text-blue-500">Javascript</span>,{" "}
              <span className="font-light text-blue-500">Typescript</span>,{" "}
              <span className="font-light text-blue-500">React-Native</span> and{" "}
              <span className="font-light text-blue-500">Node.js</span>
            </p>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </>
  );
}
