"use client";
import {useParams} from "next/navigation";

export default function useTranslate() {
  const params = useParams();
  const {locale} = params;
  const isBR = locale === "pt";

  return { isBR };
}
