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
      <div className="container mx-auto flex flex-col items-center justify-center text-brand-black">
        <div className="mb-2 font-light capitalize text-brand-pink">
          {t("social_midia_call_to_action")}
        </div>
        <div className="mt-2 flex flex-row items-center justify-between  align-middle">
          <button
            aria-label="Twitter"
            className="m-1 h-10 w-10 rounded-full bg-brand-cyan p-3 font-normal text-brand-black shadow-lg hover:bg-brand-cyan/90"
            type="button"
            onClick={() =>
              handleClickSocial("https://twitter.com/rivaildossantos")
            }
          >
            <FaTwitter />
          </button>
          <button
            aria-label="Instagram"
            className="m-1 h-10 w-10 rounded-full bg-brand-pink p-3 font-normal text-brand-black shadow-lg hover:bg-brand-pink/90"
            type="button"
            onClick={() =>
              handleClickSocial("https://www.instagram.com/rivailpinto/")
            }
          >
            <FaInstagram />
          </button>
          <button
            aria-label="Linkedin"
            className="m-1 h-10 w-10 rounded-full bg-brand-cyan p-3 font-normal text-brand-black shadow-lg hover:bg-brand-cyan/90"
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
            aria-label="Github"
            className="m-1 h-10 w-10  rounded-full bg-brand-black p-3 font-normal text-brand-cyan shadow-lg outline-none hover:bg-brand-black/90 focus:outline-none"
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
