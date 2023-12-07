/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import Image from "next/image";
import { BiBriefcase } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { PersonalImg } from "../assets/images";
import { useTranslations } from "next-intl";

export default function CardContainer() {
  const t = useTranslations("");
  const aboutMeTranslations = useTranslations("about_me");

  return (
    <div className="relative pt-36">
      <div className="relative flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
        <div className="container">
          <div className="flex h-10 w-full justify-center">
            <div className="relative">
              <Image
                alt="personal picture"
                src={PersonalImg}
                className="h-50 w-50 z-10 -mt-16 rounded-full border-none align-middle shadow-xl"
                width={150}
                height={100}
              />
            </div>
          </div>
          <div className="mt-5 pt-20 text-center">
            <h3 className="mb-1 text-3xl font-semibold leading-normal text-blue-500">
              Rivail Pinto
            </h3>
            <div className="mb-2 text-center text-sm font-normal leading-normal text-gray-500 max-sm:px-10">
              {t("card_experience")}
            </div>

            <div className="text-sm font-normal capitalize leading-normal text-gray-500">
              <div className="mb-2 flex flex-row justify-center space-x-2">
                <>
                  <MdOutlineSchool
                    size={20}
                    className="fas fa-university  text-lg text-gray-500"
                  />
                  <span className="ml-2">{t("card_degree_title")}</span>
                </>
                <>
                  <BiBriefcase
                    size={20}
                    className="fas fa-briefcase text-lg text-gray-500"
                  />
                  <span className="ml-2">{t("card_job_title")}</span>
                </>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-300 px-10 py-10 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12">
                <p className="mb-2 text-justify text-lg leading-relaxed text-gray-600">
                  {aboutMeTranslations("description_1")}
                </p>
                <p className="mb-2 text-justify text-lg leading-relaxed text-gray-600">
                  {aboutMeTranslations("description_2")}
                </p>
                <p className="mb-2 text-justify text-lg leading-relaxed text-gray-600">
                  {aboutMeTranslations("description_3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
