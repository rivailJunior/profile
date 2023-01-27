import Image from "next/image";
import React from "react";
import { PersonalImg } from "../assets/images";
import { MdLanguage } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import enTrans from "../assets/locales/en/translation.json";
import ptTrans from "../assets/locales/pt/translation.json";

export default function CardContainer() {
  const { asPath, locale } = useRouter();
  const t = locale === "pt" ? ptTrans : enTrans;

  return (
    <section className="relative bg-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                <div className="relative">
                  <Image
                    alt="personal picture"
                    src={PersonalImg}
                    className="absolute -m-16 -ml-20 h-auto rounded-full border-none align-middle shadow-xl lg:-ml-16"
                    style={{ maxWidth: "150px", maxHeight: "200px" }}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:order-3 lg:w-4/12 lg:self-center lg:text-right">
                <div className="mt-32 py-6 px-3 sm:mt-0">
                  <Link
                    href={asPath}
                    locale="en"
                    type="button"
                    className="mr-2 inline-flex items-center rounded-lg bg-blue-700 p-2.5 text-center text-sm font-medium text-white hover:bg-blue-800"
                  >
                    <MdLanguage />
                  </Link>
                  <Link
                    href={asPath}
                    locale="pt"
                    type="button"
                    className="mr-2 inline-flex items-center rounded-lg bg-green-700 p-2.5 text-center text-sm font-medium text-white hover:bg-blue-800"
                  >
                    <MdLanguage />
                  </Link>
                </div>
              </div>
              <div className="w-full px-4 lg:order-1 lg:w-4/12">
                <div className="flex justify-center py-4 pt-8 lg:pt-4">
                  <div className="mr-4 p-3 text-center">
                    <span className="block text-xl font-bold uppercase tracking-wide text-gray-700">
                      34
                    </span>
                    <span className="text-sm text-gray-500">{t.card_age}</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="block text-xl font-bold uppercase tracking-wide text-gray-700">
                      10
                    </span>
                    <span className="text-sm text-gray-500">
                      {t.card_experience}
                    </span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="block text-xl font-bold uppercase tracking-wide text-gray-700">
                      Addi
                    </span>
                    <span className="text-sm text-gray-500">
                      {t.card_current_job}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
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
