"use client";
import { useTranslations } from "next-intl";

export default function Divider({ text }: { text: string }) {
  return (
    <div className="inline-flex w-full items-center justify-center p-5">
      <hr className="my-8 h-px w-2/3 border-0 bg-gray-200 " />
      <span className="absolute left-1/2 -translate-x-1/2 bg-gray-700 px-3 font-medium capitalize text-white">
        {text}
      </span>
    </div>
  );
}

export function DividerSkills() {
  const t = useTranslations("home");
  return <Divider text={t("skills")} />;
}

export function DividerJobs() {
  const t = useTranslations("home");
  return <Divider text={t("experience")} />;
}
