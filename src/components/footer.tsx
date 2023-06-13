/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client"
import { FaTwitter, FaInstagram, FaGit, FaLinkedin } from "react-icons/fa";
import {useTranslations} from 'next-intl';
import { Transition } from "@headlessui/react";
import FadeInComponent from "./fadeInComponent";

export default function Footer() {
  const t = useTranslations("footer");

  const handleClickSocial = (url: string) => {
    window.open(url, "_target");
  };
  return (
    <div className="relative mt-10 pb-5">
      <div className="container mx-auto flex flex-col items-center justify-center text-white">
        <div className="mb-2 font-light uppercase">
          {t("social_midia_call_to_action")}
        </div>
        <Transition show appear>
          <div className="mt-2 flex flex-row items-center justify-between  align-middle">
            <FadeInComponent delay="delay-[100ms]">
              <button
                className="m-1 h-10 w-10 rounded-full bg-blue-400 p-3 font-normal text-white shadow-lg hover:bg-blue-300"
                type="button"
                onClick={() =>
                  handleClickSocial("https://twitter.com/rivaildossantos")
                }
              >
                <FaTwitter />
              </button>
            </FadeInComponent>
            <FadeInComponent delay="delay-[200ms]">
              <button
                className="m-1 h-10 w-10 rounded-full bg-pink-600 p-3 font-normal text-white shadow-lg hover:bg-pink-500"
                type="button"
                onClick={() =>
                  handleClickSocial("https://www.instagram.com/rivailpinto/")
                }
              >
                <FaInstagram />
              </button>
            </FadeInComponent>
            <FadeInComponent delay="delay-[300ms]">
              <button
                className="m-1 h-10 w-10 rounded-full bg-blue-600 p-3 font-normal text-white shadow-lg hover:bg-blue-500"
                type="button"
                onClick={() =>
                  handleClickSocial(
                    "https://www.linkedin.com/in/rivail-santos-14373997/"
                  )
                }
              >
                <FaLinkedin />
              </button>
            </FadeInComponent>
            <FadeInComponent delay="delay-[400ms]">
              <button
                className="m-1 h-10 w-10  rounded-full bg-gray-800 p-3 font-normal text-white shadow-lg outline-none hover:bg-gray-700 focus:outline-none"
                type="button"
                onClick={() =>
                  handleClickSocial("https://github.com/rivailJunior")
                }
              >
                <FaGit />
              </button>
            </FadeInComponent>
          </div>
        </Transition>
      </div>
    </div>
  );
}
