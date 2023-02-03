/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import React from "react";
import { BiMap, BiBriefcase } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { PersonalImg } from "../assets/images";
import useTranslate from "../hooks/useTranslate";

export default function CardContainer() {
  const { t } = useTranslate();

  return (
    <section className="relative pt-36">
      <div className="container mx-auto px-4">
        <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
          <div className="container">
            <div className="flex h-10 w-full justify-center">
              <div className="relative">
                <Image
                  alt="personal picture"
                  src={PersonalImg}
                  className="z-10 -mt-16 rounded-full border-none align-middle shadow-xl"
                  width={150}
                  height={100}
                />
              </div>
            </div>
            <div className="container relative pt-20">
              <div className="flex justify-center  lg:pt-4">
                <div className="mr-4 text-center">
                  <span className="text-sm text-gray-500">
                    {t.card_fav_stack}
                  </span>
                  <span className="block text-xl font-bold capitalize tracking-wide text-gray-700">
                    Javascript
                  </span>
                </div>
                <div className="mr-4 text-center">
                  <span className="text-sm text-gray-500">
                    {t.card_experience}
                  </span>
                  <span className="block text-xl font-bold capitalize tracking-wide text-gray-700">
                    10
                  </span>
                </div>
                <div className="mr-4 text-center">
                  <span className="text-sm text-gray-500">
                    {t.card_current_job}
                  </span>
                  <span className="block text-xl font-bold capitalize tracking-wide text-gray-700">
                    Addi
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <h3 className="mb-2 mb-2 bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-4xl font-semibold leading-normal text-transparent">
                Rivail Santos
              </h3>
              <div className="mt-0 mb-2 text-sm font-bold capitalize leading-normal text-gray-500">
                <div className="mb-2 flex flex-row justify-center">
                  <BiMap size={20} />
                  <span className="ml-2">Manaus, AM - Brasil</span>
                </div>
              </div>
              <div className="mb-2 mt-5 text-sm font-bold capitalize leading-normal text-gray-500">
                <div className="mb-2 flex flex-row justify-center">
                  <BiBriefcase
                    size={20}
                    className="fas fa-briefcase mr-2 text-lg text-gray-500"
                  />
                  <span className="ml-2">{t.card_job_title}</span>
                </div>
              </div>
              <div className="mb-2 mt-5 text-sm font-bold capitalize leading-normal text-gray-500">
                <div className="mb-2 flex flex-row justify-center">
                  <MdOutlineSchool
                    size={20}
                    className="fas fa-university mr-2 text-lg text-gray-500"
                  />
                  <span className="ml-2">{t.card_degree_title}</span>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-gray-300 py-10 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 lg:w-9/12">
                  <p className="mb-2 text-justify text-lg leading-relaxed text-gray-600">
                    {t.card_about_me}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
