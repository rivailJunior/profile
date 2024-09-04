"use client";
import React from "react";
import Slider from "react-slick";
import { StacksExperienceData } from "../mock/stack-data";
import { useTranslations } from "next-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
function SkillsSlider() {
  const t = useTranslations();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: StacksExperienceData.length / 2,
    slidesToScroll: StacksExperienceData.length / 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {StacksExperienceData.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            className="h-auto w-auto rounded-lg bg-white p-5"
            key={`${item.name}-${index}`}
          >
            <div className="flex items-center justify-normal">
              <div className="flex-shrink-0">
                <Icon />
              </div>
              <div className="ms-2 flex-1">
                <div className="lex-shrink-1 truncate text-sm font-medium capitalize text-gray-700">
                  {item.name}
                </div>
                <p className="truncate text-sm text-gray-500">
                  {item.years + " " + t("card_years")}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export { SkillsSlider };
