"use client";
import React from "react";
import { StacksExperienceData, type TSkills } from "../mock/stack-data";
import { useTranslations } from "next-intl";
const skills = StacksExperienceData;

const SkillItem = ({ name, value }: TSkills) => {
  const stylePercentage = `${value * 10}%`;
  const stylePercentageColor =
    value > 7 ? "bg-green-500" : value <= 5 ? "bg-red-500" : "bg-blue-500";
  return (
    <div>
      <dl>
        <dt className="text-sm font-medium capitalize text-gray-500 dark:text-gray-400">
          {name}
        </dt>
        <dd className="mb-1 flex items-center">
          <div className="mr-2 h-2 w-full rounded bg-gray-200 dark:bg-gray-700">
            <div
              className={`h-2 rounded ${stylePercentageColor}`}
              style={{ width: stylePercentage }}
            />
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {value}
          </span>
        </dd>
      </dl>
    </div>
  );
};

export default function CardSkills() {
  const t = useTranslations();
  return (
    <div className="rounded-lg bg-white p-10 ">
      <h5 className="pb-5 font-semibold leading-normal text-gray-500">
        {t("card_skills")}
      </h5>
      <div className="gap-5 sm:grid sm:grid-cols-2">
        {skills.map((skill) => {
          return (
            <SkillItem key={skill.name} name={skill.name} value={skill.value} />
          );
        })}
      </div>
    </div>
  );
}
