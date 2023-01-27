/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import React from "react";
import { PersonalImg } from "../assets/images";
import useTranslate from "../hooks/useTranslate";

export default function CardContainer() {
  const { t } = useTranslate();

  return (
    <section className="relative bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
          <div className="container">
            <div className="flex h-10 w-full justify-center">
              <div className="relative">
                <Image
                  alt="personal picture"
                  src={PersonalImg}
                  className="absolute -m-16 rounded-full border-none align-middle shadow-xl"
                  style={{
                    maxWidth: "150px",
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="relative pt-20">
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
              <h3 className="mb-2 mb-2 text-4xl font-semibold leading-normal text-gray-800">
                Rivail Santos
              </h3>
              <div className="mt-0 mb-2 text-sm font-bold uppercase leading-normal text-gray-500">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                Manaus, Amazonas - Brasil
              </div>
              <div className="mb-2 mt-10 text-gray-700">
                <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                {t.card_job_title}
              </div>
              <div className="mb-2 text-gray-700">
                <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                {t.card_degree_title}
              </div>
            </div>
            <div className="mt-10 border-t border-gray-300 py-10 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 lg:w-9/12">
                  <p className="mb-4 text-lg leading-relaxed text-gray-800">
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
