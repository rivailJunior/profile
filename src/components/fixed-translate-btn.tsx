import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdLanguage } from "react-icons/md";
import useTranslate from "../hooks/useTranslate";
const gradientBR =
  " bg-gradient-to-r from-emerald-500 to-emerald-600 text-gray-100";

const gradientEN =
  " bg-gradient-to-r from-blue-800 to-indigo-900 text-gray-100 ";

export default function FixedTranslateButton() {
  const { asPath } = useRouter();
  const { isBR } = useTranslate();
  return (
    <div className="fixed top-4 right-5 z-10 ">
      <Link
        href={asPath}
        locale={isBR ? "en" : "pt"}
        type="button"
        className={`flex items-center justify-center rounded-full p-2 align-middle text-sm font-light shadow-gray-600 hover:cursor-pointer ${
          isBR ? gradientEN : gradientBR
        }`}
      >
        <MdLanguage size={22} />
        {isBR ? "En" : "Pt"}
      </Link>
    </div>
  );
}
