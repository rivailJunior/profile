"use client";
import React from "react";

import type { IExperience } from "../interfaces/experiences";
import { useTranslations } from "next-intl";
import { JobExperienceSkillsData } from "../mock/stack-data";
import { Accordion } from "./accordion";
import { BsPersonWorkspace } from "react-icons/bs";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const Title = (item: IExperience) => {
  return (
    <div className="flex flex-row gap-4  md:items-center md:gap-5 md:p-5">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full md:h-14 md:w-14  ${
          item.status === "current"
            ? "bg-brand-cyan ring-8 ring-brand-cyan/50"
            : "bg-brand-pink ring-8 ring-brand-pink/50"
        }`}
      >
        <BsPersonWorkspace className="size-4 text-white md:size-8" />
      </div>
      <div className="flex-start flex flex-col items-start">
        <div className="flex flex-col justify-normal md:flex-row md:justify-between">
          <time className="mb-2 flex flex-col gap-2 text-left text-sm font-thin leading-relaxed text-brand-black md:flex-row md:items-center md:text-justify md:text-xl">
            <div className={`${roboto.className} md:text-2xl`}>
              {item.company}
            </div>{" "}
            <span className="text-brand-pink">• {item.position}</span>
          </time>
        </div>
        <div
          className={`text-left text-sm font-thin text-brand-pink md:text-lg`}
        >
          {item.period}
        </div>
      </div>
    </div>
  );
};

const Content = (item: IExperience) => {
  return (
    <>
      <p className="mb-1 pr-2 text-justify text-base font-thin text-brand-black md:text-xl">
        {item.description}
      </p>
      <p className="pb-4 text-sm font-thin text-brand-black/70 md:text-lg">
        {item.skills?.join(", ")}
      </p>
    </>
  );
};

export default function TimeLine() {
  const t = useTranslations("experience");
  const data: IExperience[] = [
    {
      company: t("trafilea.company"),
      position: t("trafilea.position"),
      period: t("trafilea.period"),
      description: t("trafilea.description"),
      skills: JobExperienceSkillsData[0]?.skills,
      status: "current",
    },
    {
      company: t("addi.company"),
      position: t("addi.position"),
      period: t("addi.period"),
      description: t("addi.description"),
      skills: JobExperienceSkillsData[0]?.skills,
    },
    {
      company: t("olist.company"),
      position: t("olist.position"),
      period: t("olist.period"),
      description: t("olist.description"),
      skills: JobExperienceSkillsData[1]?.skills,
    },
    {
      company: t("tarkuss.company"),
      position: t("tarkuss.position"),
      period: t("tarkuss.period"),
      description: t("tarkuss.description"),
      skills: JobExperienceSkillsData[2]?.skills,
    },
    {
      company: t("itriad.company"),
      position: t("itriad.position"),
      period: t("itriad.period"),
      description: t("itriad.description"),
      skills: JobExperienceSkillsData[3]?.skills,
    },
    {
      company: t("axm.company"),
      position: t("axm.position"),
      period: t("axm.period"),
      description: t("axm.description"),
      skills: JobExperienceSkillsData[4]?.skills,
    },
    {
      company: t("novaera.company"),
      position: t("novaera.position"),
      period: t("novaera.period"),
      description: t("novaera.description"),
      skills: JobExperienceSkillsData[5]?.skills,
    },
    {
      company: t("adptdata.company"),
      position: t("adptdata.position"),
      period: t("adptdata.period"),
      description: t("adptdata.description"),
      skills: JobExperienceSkillsData[6]?.skills,
    },
  ];
  const accordionItems = data.map((item) => {
    return {
      title: Title(item),
      content: Content(item),
    };
  });
  return <Accordion data={accordionItems} />;
}
