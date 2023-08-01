import React from "react";

type TSkills = {
  name: string;
  value: number;
};

const skills: TSkills[] = [
  {
    name: "javascript",
    value: 9,
  },
  {
    name: "typescript",
    value: 8,
  },
  {
    name: "react js",
    value: 9,
  },
  {
    name: "html",
    value: 10,
  },
  {
    name: "css",
    value: 7,
  },
  {
    name: "jsx",
    value: 8,
  },
  {
    name: "react-native",
    value: 8,
  },
  {
    name: "expo",
    value: 8,
  },
  {
    name: "nodejs",
    value: 7,
  },
  {
    name: "express js",
    value: 7,
  },
  {
    name: "nestjs",
    value: 7,
  },
  {
    name: "aws",
    value: 5,
  },
  {
    name: "git",
    value: 9,
  },
  {
    name: "agile",
    value: 7,
  },
  {
    name: "figma",
    value: 7,
  },
];

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
  return (
    <div className="container mx-auto px-4 shadow-xl">
      <div className="rounded-lg bg-white p-10 ">
        <h5 className="pb-5 font-semibold leading-normal text-gray-500">
          Skills
        </h5>
        <div className="gap-5 sm:grid sm:grid-cols-2">
          {skills.map((skill) => {
            return (
              <SkillItem
                key={skill.name}
                name={skill.name}
                value={skill.value}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
