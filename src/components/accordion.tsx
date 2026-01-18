"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type AccordionProps = {
  data: {
    title: React.ReactElement;
    content: React.ReactElement;
  }[];
};

export function Accordion({ data }: Readonly<AccordionProps>) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="accordion-collapse" className="flex flex-col gap-4">
      {data?.map((item, index) => {
        return (
          <div
            key={index.toString()}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <h2 id={`accordion-collapse-heading-` + index}>
              <button
                type="button"
                className="flex h-auto w-full items-center justify-between gap-3 bg-white p-5 font-medium text-brand-black"
                onClick={() => handleToggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={"accordion-collapse-body-" + index}
              >
                <span className="text-brand-black">{item.title}</span>
                <svg
                  data-accordion-icon
                  className={`h-3 w-3 shrink-0 text-brand-black transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-0" : "rotate-180"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>

            <AnimatePresence initial={false}>
              {openIndex === index ? (
                <motion.div
                  id={"accordion-collapse-body-" + index}
                  aria-labelledby={"accordion-collapse-heading-" + index}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="w-full px-5 pb-5 text-brand-black">
                    {item.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
