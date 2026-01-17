"use client";
import React from "react";
import type { ComponentType } from "react";
import type { Settings } from "react-slick";
import Slider from "react-slick";
import { StacksExperienceData } from "../mock/stack-data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

// Take first 6 items from StacksExperienceData for the slider
const bloxItems = StacksExperienceData.map((item, index) => ({
  ...item,
  active: index > 0 && index < 5, // First and last items are inactive to match the design
}));

const SliderWorker = Slider as unknown as ComponentType<Settings>;

function SkillsSlider() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 10,
    slidesToScroll: 10,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="mt-6 gap-5">
      <SliderWorker {...settings}>
        {bloxItems.map((item, index) => (
          <div key={`${item.name}-${index}`} className="p-2 pb-5">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              animate={{ scale: 1 }}
              className={`flex h-24 w-24 items-center justify-center rounded-full border-2 shadow-sm hover:cursor-pointer hover:shadow-md md:h-32 md:w-32`}
            >
              <div
                className={`flex flex-col items-center justify-center gap-2`}
              >
                <div className="flex h-4 w-4 items-center justify-center text-brand-black md:h-8 md:w-8">
                  <item.icon className="text-inherit" size={36} />
                </div>
                {/* <span
                  className={`text-center font-mono text-sm capitalize text-brand-black md:text-xl`}
                >
                  {item.name}
                </span> */}
              </div>
            </motion.div>
          </div>
        ))}
      </SliderWorker>
    </div>
  );
}

export { SkillsSlider };
