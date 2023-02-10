import React from "react";
import Image from "next/image";
import { PersonalImg } from "../assets/images";
import useTranslate from "../hooks/useTranslate";
import FadeInComponent from "./fadeInComponent";
import { Transition } from "@headlessui/react";
import { MdOutlineSchool } from "react-icons/md";
import { BiMap, BiBriefcase } from "react-icons/bi";

const DescriptionText = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="mr-4 text-center">
      <span className="text-sm text-gray-500">{title}</span>

      <span className="block text-xl font-bold capitalize tracking-wide text-gray-700">
        {subtitle}
      </span>
    </div>
  );
};

const DescriptionWithIcon = ({
  children,
  title,
}: {
  title: string;
  children: JSX.Element;
}) => {
  return (
    <div className="mb-2 text-sm font-bold capitalize leading-normal text-gray-500">
      <div className="flex flex-row justify-center">
        {children}
        <span className="ml-2">{title}</span>
      </div>
    </div>
  );
};

export default function DescriptionCard() {
  const { t } = useTranslate();
  return (
    <section className="max-w-xs:w-full relative mx-auto bg-white px-10 py-10 md:h-5/6 md:w-5/6">
      <div className="container mx-auto">
        <section className="relative flex h-full flex-col items-center align-middle md:flex-row">
          <div
            id="img_container"
            className="relative h-60 w-full md:h-40 md:w-2/12"
          >
            <Image
              src={PersonalImg}
              alt="Rivail Santos"
              objectFit="cover"
              fill
              className="rounded-full border-none align-middle shadow-xl"
            />
          </div>

          <div
            id="description_container"
            className="mx-auto w-full md:ml-10 md:w-2/3 "
          >
            <Transition show={true} appear>
              <FadeInComponent delay="delay-[300ms]">
                <h3 className="mb-2 mb-2 bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-center text-4xl font-semibold leading-normal text-transparent md:text-left">
                  Rivail Santos
                </h3>
              </FadeInComponent>
            </Transition>
            <div className="flex flex-row">
              <DescriptionText title={t.card_fav_stack} subtitle="Javascript" />
              <DescriptionText title={t.card_experience} subtitle="10" />
              <DescriptionText title={t.card_current_job} subtitle="Addi" />
            </div>
            <div className="flex flex-col items-start justify-start pt-5 align-middle">
              <DescriptionWithIcon title="Manaus, Am - Brasil">
                <BiMap size={20} />
              </DescriptionWithIcon>
              <DescriptionWithIcon title={t.card_job_title}>
                <BiBriefcase
                  size={20}
                  className="fas fa-briefcase mr-2 text-lg text-gray-500"
                />
              </DescriptionWithIcon>
              <DescriptionWithIcon title={t.card_degree_title}>
                <MdOutlineSchool
                  size={20}
                  className="fas fa-university mr-2 text-lg text-gray-500"
                />
              </DescriptionWithIcon>
            </div>
          </div>
        </section>
        <section
          id="about_me_container"
          className="relative flex h-full flex-row items-center py-10 md:ml-32 lg:ml-44 xl:ml-72"
        >
          <div className="container flex flex-wrap">
            <div className="text-md text-justify leading-relaxed text-gray-600">
              {t.card_about_me}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
