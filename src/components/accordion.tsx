"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

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
    <div
      id="accordion-collapse"
      className="mx-2 flex flex-col gap-2 md:mx-0 md:gap-4"
    >
      {data?.map((item, index) => {
        return (
          <motion.div
            whileHover={{ scale: 1.02 }}
            key={index.toString()}
            className={`overflow-hidden rounded-lg border border-gray-200 bg-white hover:shadow-lg ${
              openIndex === index ? "shadow-lg" : ""
            }`}
          >
            <h2 id={`accordion-collapse-heading-` + index}>
              <button
                type="button"
                className="flex h-auto w-full justify-between gap-2 bg-white p-5 font-medium text-brand-black md:items-center"
                onClick={() => handleToggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={"accordion-collapse-body-" + index}
              >
                <span className="text-brand-black">{item.title}</span>
                <AnimatePresence mode="wait" initial={false}>
                  {openIndex === index ? (
                    <motion.span
                      key="minus"
                      initial={{ opacity: 0, rotate: -90, scale: 0.9 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.9 }}
                      transition={{ duration: 0.18, ease: "linear" }}
                      className="shrink-0"
                    >
                      <BiMinusCircle className="h-8 w-8 text-brand-pink md:h-10 md:w-10" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="plus"
                      initial={{ opacity: 0, rotate: 90, scale: 0.9 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.9 }}
                      transition={{ duration: 0.18, ease: "linear" }}
                      className="shrink-0"
                    >
                      <BiPlusCircle className="h-8 w-8 text-brand-pink md:h-10 md:w-10" />
                    </motion.span>
                  )}
                </AnimatePresence>
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
                  transition={{ duration: 0.25, ease: "linear" }}
                  className="overflow-hidden"
                >
                  <div className="w-full px-5 pb-5 text-brand-black">
                    {item.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
