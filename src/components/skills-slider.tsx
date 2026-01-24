"use client";
import React from "react";
import type { ComponentType } from "react";
import type { Settings } from "react-slick";
import Slider from "react-slick";
import { StacksExperienceData } from "../mock/stack-data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HoverFillCard } from "./hover-card";

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
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="gap-5 bg-brand-cyan-gradient">
      <SliderWorker {...settings}>
        {bloxItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="mx-auto py-10 md:py-16 "
          >
            <HoverFillCard className="flex h-36 w-36 items-center justify-center rounded-full bg-white">
              <div
                className={`flex flex-col items-center justify-center gap-2 `}
              >
                <div className="flex h-auto w-auto items-center justify-center text-brand-black">
                  <item.icon className="h-12 w-12 text-brand-cyan group-hover:text-white group-focus:text-brand-cyan group-active:text-white md:h-20 md:w-20" />
                </div>
              </div>
            </HoverFillCard>
          </div>
        ))}
      </SliderWorker>
    </div>
  );
}

export { SkillsSlider };
