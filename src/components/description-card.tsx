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
    <section className="relative mx-auto h-5/6 w-5/6 bg-white px-10">
      <div className="container mx-auto">
        <div className="relative flex h-full flex-row items-center align-middle">
          <div className="relative h-40 w-2/12">
            <Image
              src={PersonalImg}
              alt="Rivail Santos"
              objectFit="cover"
              fill
              className="rounded-full border-none align-middle shadow-xl"
            />
          </div>

          <div className="mx-auto ml-10 w-2/6 ">
            <Transition show={true} appear>
              <FadeInComponent delay="delay-[300ms]">
                <h3 className="mb-2 mb-2 bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-4xl font-semibold leading-normal text-transparent">
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
        </div>
        <div className="relative ml-60 flex h-full flex-row items-center px-8 py-10">
          <div className="container flex flex-wrap">
            <p className="text-md text-justify leading-relaxed text-gray-600">
              {t.card_about_me}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
