"use client";
import React from "react";

import type { IExperience } from "../interfaces/experiences";
import { useTranslations } from "next-intl";
import { JobExperienceSkillsData } from "../mock/stack-data";

type ITimeline = {
  data: IExperience[];
};

const TimeLineItem = ({ item }: { item: IExperience }) => {
  return (
    <li className="ms-4 p-5">
      <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-500 dark:ring-gray-200">
        <svg
          className="h-2.5 w-2.5 text-blue-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>

      <time className="mb-2 block text-sm font-normal leading-none text-blue-500">
        {item.company} <span className="text-gray-500">• {item.position}</span>
      </time>
      <p className="mb-1 text-sm font-normal text-gray-500 dark:text-gray-500">
        {item.period}
      </p>
      <p className="mb-1 pr-2 text-justify text-base font-normal text-gray-500 dark:text-gray-600">
        {item.description}
      </p>
      <p className="dark:text-gray-450 mb-1 text-sm font-normal text-gray-500">
        {item.skills?.join(", ")}
      </p>
    </li>
  );
};

function Line({ data }: ITimeline) {
  return (
    <ol className="relative rounded-lg border-gray-200 bg-white">
      {data?.map((item) => {
        return <TimeLineItem item={item} key={item.company} />;
      })}
    </ol>
  );
}

export default function TimeLine() {
  const t = useTranslations("experience");
  const data: IExperience[] = [
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
  return <Line data={data} />;
}
