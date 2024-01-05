"use client";
import Link from "next/link";
import React from "react";
import { SiGoogletranslate } from "react-icons/si";
import useTranslate from "../hooks/useTranslate";
const gradientBR =
  " bg-gradient-to-r from-emerald-500 to-emerald-600 text-gray-100 ";

const gradientEN =
  " bg-gradient-to-r from-blue-800 to-indigo-900 text-gray-100 ";

export default function FixedTranslateButton() {
  const { isBR } = useTranslate();
  return (
    <div className="fixed right-10 top-4 z-10 ">
      <Link
        aria-label="translate"
        href={`${isBR ? "/en" : "/pt"}`}
        locale={isBR ? "en" : "pt"}
        type="button"
        className={`flex items-center justify-center rounded-full p-2 align-middle text-sm font-light shadow-gray-600 hover:cursor-pointer ${
          isBR ? gradientEN : gradientBR
        }`}
        hrefLang={`${isBR ? "/en" : "/pt"}`}
      >
        <SiGoogletranslate size={20} />
      </Link>
    </div>
  );
}
