"use client";
import React from "react";

import type { IExperience } from "../interfaces/experiences";
import { useTranslations } from "next-intl";
import { JobExperienceSkillsData } from "../mock/stack-data";
import { Accordion } from "./accordion";
import { BsPersonWorkspace } from "react-icons/bs";

const Title = (item: IExperience) => {
  return (
    <div className="flex flex-row items-center gap-6">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full  ${
          item.status === "current"
            ? "bg-blue-500 ring-8 ring-blue-400"
            : "bg-blue-200 ring-8 ring-blue-100"
        }`}
      >
        <BsPersonWorkspace />
      </div>
      <div className="flex-start flex flex-col items-start">
        <div className="flex flex-row justify-between">
          <time className="mb-2 block text-sm font-normal leading-none text-white">
            {item.company}{" "}
            <span className="text-white/70">• {item.position}</span>
          </time>
        </div>
        <div className="text-sm font-normal text-white/70">{item.period}</div>
      </div>
    </div>
  );
};

const Content = (item: IExperience) => {
  return (
    <>
      <p className="mb-1 pr-2 text-justify text-base font-normal text-gray-500 dark:text-white">
        {item.description}
      </p>
      <p className="pb-4 text-sm font-normal dark:text-white/80">
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
