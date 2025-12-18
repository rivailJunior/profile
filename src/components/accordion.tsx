"use client";

import React, { useState } from "react";

type AccordionProps = {
  data: {
    title: React.ReactElement;
    content: React.ReactElement;
  }[];
};

export function Accordion({ data }: Readonly<AccordionProps>) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heights, setHeights] = useState<number[]>([]);
  const contentRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Store content heights for smooth animations
  React.useEffect(() => {
    const newHeights = contentRefs.current.map((ref) =>
      ref ? ref.scrollHeight : 0
    );
    setHeights(newHeights);
  }, [data]);

  return (
    <div id="accordion-collapse" className="flex flex-col gap-2">
      {data?.map((item, index) => {
        return (
          <div key={index.toString()} className="flex flex-col rounded-lg ">
            <h2 id={`accordion-collapse-heading-` + index}>
              <button
                type="button"
                className={`flex h-auto w-full items-center justify-between gap-3 rounded-lg border border-gray-700 p-5 font-medium text-white dark:hover:bg-white/5 dark:focus:bg-white/5 ${
                  openIndex === index ? "bg-white/20" : ""
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={"accordion-collapse-body-" + index}
              >
                <span className="text-white">{item.title}</span>
                <svg
                  data-accordion-icon
                  className={`h-3 w-3 shrink-0 text-white transition-transform duration-300 ease-in-out ${
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
            <div
              id={"accordion-collapse-body-" + index}
              className="flex overflow-hidden transition-all duration-300"
              style={{
                maxHeight:
                  openIndex === index ? `${heights[index] || 0}px` : "0px",
                opacity: openIndex === index ? 1 : 0,
                transition:
                  "max-height 300ms ease-in-out, opacity 300ms ease-in-out",
              }}
              aria-labelledby={"accordion-collapse-heading-" + index}
              ref={(el) => (contentRefs.current[index] = el)}
            >
              <div className="w-full rounded-lg border border-white/10 p-5 text-white">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
