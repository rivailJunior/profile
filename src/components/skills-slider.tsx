"use client";
import React from "react";
import type { ComponentType } from "react";
import type { Settings } from "react-slick";
import Slider from "react-slick";
import { StacksExperienceData } from "../mock/stack-data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Take first 6 items from StacksExperienceData for the slider
const bloxItems = StacksExperienceData.map((item, index) => ({
  ...item,
  active: index > 0 && index < 5, // First and last items are inactive to match the design
}));

const SliderWorker = Slider as unknown as ComponentType<Settings>;

function SkillsSlider() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
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
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="rounded-b-lg p-4">
      <SliderWorker {...settings}>
        {bloxItems.map((item, index) => (
          <div key={`${item.name}-${index}`} className="px-2 ">
            <div
              className={`mx-auto flex w-auto items-center justify-center rounded-lg  px-4 py-8 hover:cursor-pointer hover:bg-white/5`}
            >
              <div
                className={`flex flex-row items-center justify-center gap-4`}
              >
                <div className="flex h-8 w-8 items-center justify-center text-white">
                  <item.icon className="text-inherit" size={36} />
                </div>
                <span
                  className={`text-center text-sm font-bold capitalize text-white md:text-lg`}
                >
                  {item.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </SliderWorker>
    </div>
  );
}

export { SkillsSlider };
