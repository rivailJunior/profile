import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdLanguage } from "react-icons/md";
import useTranslate from "../hooks/useTranslate";
const gradientBR =
  " bg-gradient-to-r from-emerald-500 to-emerald-600 text-gray-100";

const gradientEN =
  " bg-gradient-to-r from-slate-50 to-slate-100 text-gray-800 ";

export default function FixedTranslateButton() {
  const { asPath } = useRouter();
  const { isBR } = useTranslate();
  return (
    <div className="fixed bottom-5 right-5 z-10 mt-32 py-6 px-3 sm:mt-0">
      <Link
        href={asPath}
        locale={isBR ? "en" : "pt"}
        type="button"
        className={`inline-flex items-center rounded-full p-4 text-center shadow-2xl shadow-gray-600 hover:cursor-pointer ${
          isBR ? gradientEN : gradientBR
        }`}
      >
        <MdLanguage size={22} />
        &nbsp;
        {isBR ? "En" : "Pt"}
      </Link>
    </div>
  );
}
