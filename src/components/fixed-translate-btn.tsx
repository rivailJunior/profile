import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdLanguage } from "react-icons/md";
import useTranslate from "../hooks/useTranslate";
const gradientBR =
  " bg-gradient-to-r from-green-700 via-yellow-400 to-blue-700 text-white";

const gradientEN =
  " bg-gradient-to-r from-blue-800 via-white to-red-500 text-black";

export default function FixedTranslateButton() {
  const { asPath } = useRouter();
  const { t, isBR } = useTranslate();
  return (
    <div className="fixed bottom-10 right-5 mt-32 py-6 px-3 sm:mt-0">
      <Link
        href={asPath}
        locale={isBR ? "en" : "pt"}
        type="button"
        className={`mr-2 inline-flex items-center rounded-full p-2 text-center text-sm font-medium ${
          isBR ? gradientEN : gradientBR
        }`}
      >
        <MdLanguage />
      </Link>
    </div>
  );
}
