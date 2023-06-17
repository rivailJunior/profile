/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import { FaTwitter, FaInstagram, FaGit, FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const handleClickSocial = (url: string) => {
    window.open(url, "_target");
  };
  return (
    <div className="relative mt-10 pb-5">
      <div className="container mx-auto flex flex-col items-center justify-center text-white">
        <div className="mb-2 font-light capitalize text-gray-200">
          {t("social_midia_call_to_action")}
        </div>
        <div className="mt-2 flex flex-row items-center justify-between  align-middle">
          <button
            className="m-1 h-10 w-10 rounded-full bg-blue-400 p-3 font-normal text-white shadow-lg hover:bg-blue-300"
            type="button"
            onClick={() =>
              handleClickSocial("https://twitter.com/rivaildossantos")
            }
          >
            <FaTwitter />
          </button>
          <button
            className="m-1 h-10 w-10 rounded-full bg-pink-600 p-3 font-normal text-white shadow-lg hover:bg-pink-500"
            type="button"
            onClick={() =>
              handleClickSocial("https://www.instagram.com/rivailpinto/")
            }
          >
            <FaInstagram />
          </button>
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

          <button
            className="m-1 h-10 w-10  rounded-full bg-gray-800 p-3 font-normal text-white shadow-lg outline-none hover:bg-gray-700 focus:outline-none"
            type="button"
            onClick={() => handleClickSocial("https://github.com/rivailJunior")}
          >
            <FaGit />
          </button>
        </div>
      </div>
    </div>
  );
}
