"use client";
import React from "react";

import { StacksExperienceData } from "../mock/stack-data";
import { useTranslations } from "next-intl";

export default function StackExperience() {
  const t = useTranslations();
  return (
    <div className="flow-root">
      <ul role="listbox" className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {StacksExperienceData.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              className="white h-auto w-auto rounded-lg bg-white p-5"
              key={index}
            >
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <Icon />
                </div>
                <div className="ms-4 flex-1">
                  <div className="truncate text-sm font-medium capitalize text-gray-700">
                    {item.name}
                  </div>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {item.years + " " + t("card_years")}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
