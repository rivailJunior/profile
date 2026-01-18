/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React, { useEffect, useMemo, useState } from "react";
import { MdLocationPin, MdSchool, MdComputer } from "react-icons/md";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";
import { motion } from "motion/react";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: "700",
});

export function CardContainerV2() {
  const t = useTranslations("");
  return (
    <div className="flex flex-col justify-between text-brand-black md:flex-row md:gap-4">
      <div className="flex justify-center md:hidden">
        <Image
          src="/personal.jpg"
          width={400}
          height={400}
          alt="personal"
          className="h-[200px] w-[200px] rounded-full object-cover"
        ></Image>
      </div>
      <div className="md:w-2/3">
        <div className="gap-4 rounded-md bg-white p-5 pb-0">
          <h3 className="text-align-justify mb-1 text-4xl font-bold leading-normal md:text-8xl">
            <p className="w-7/10 text-brand-black">{t("card_introduce")} </p>
            <p className="pt-5">
              <TypingText
                text={t("card_introduce2")}
                className={`w-7/10 ${libreBaskerville.className} text-brand-cyan`}
                speedMs={60}
                cursorClassName="text-brand-cyan"
              />
            </p>
          </h3>
          <div className="text-md mt-5 bg-white text-justify font-mono leading-8 text-brand-black md:text-lg">
            {t("card_short_description")}
          </div>
          <div className="mt-5 flex flex-col justify-start gap-2 md:flex-row md:gap-4 ">
            <div className="flex flex-row items-center">
              <MdLocationPin
                size={20}
                className="fas fa-briefcase text-lg text-brand-black"
              />
              <span className="md:text-md ml-1 font-mono  text-sm text-brand-black">
                {t("card_location")}
              </span>
            </div>
            <div className="flex flex-row items-center">
              <MdSchool
                size={20}
                className="fas fa-university  text-lg text-brand-black"
              />
              <span className="md:text-md ml-1 font-mono  text-sm text-brand-black  ">
                {t("card_degree_title")}
              </span>
            </div>
            <div className="flex flex-row items-center">
              <MdComputer
                size={20}
                className="fas fa-briefcase text-lg text-brand-black"
              />
              <span className="md:text-md ml-1 font-mono  text-sm text-brand-black ">
                {t("card_job_title")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden max-h-[500px] w-1/3 justify-center md:flex">
        <Image
          src="/personal.jpg"
          priority
          alt="personal"
          objectFit="cover"
          width={500}
          height={500}
          className="h-auto max-h-[500px]  rounded-md object-cover shadow-lg"
        ></Image>
      </div>
    </div>
  );
}

type TypingTextProps = {
  text: string;
  speedMs?: number;
  className?: string;
  cursorClassName?: string;
};

const TypingText = ({
  text,
  speedMs = 50,
  className,
  cursorClassName,
}: TypingTextProps) => {
  const letters = useMemo(() => Array.from(text), [text]);
  const [index, setIndex] = useState(0);
  const isDone = index >= letters.length;

  useEffect(() => {
    if (isDone) return;

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speedMs);

    return () => clearTimeout(timeout);
  }, [index, isDone, speedMs]);

  return (
    <span
      className={className}
      style={{
        whiteSpace: "pre-wrap",
      }}
    >
      {letters.slice(0, index).map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}

      {/* Caret */}
      <motion.span
        aria-hidden
        animate={
          isDone
            ? {
                opacity: [1, 0, 1],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
            : { opacity: 1 }
        }
        className={cursorClassName}
        style={{
          display: "inline-block",
          marginLeft: 1,
        }}
      >
        |
      </motion.span>
    </span>
  );
};