/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import { FaTwitter, FaInstagram, FaGit, FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export default function Footer() {
  const t = useTranslations("footer");

  const handleClickSocial = (url: string) => {
    window.open(url, "_target");
  };
  return (
    <div className="relative mt-10 pb-5">
      <div className="container mx-auto flex flex-col items-center justify-center text-brand-black">
        <div
          className={`mb-2 text-3xl font-bold leading-7 text-brand-black ${roboto.className}`}
        >
          {t("social_midia_call_to_action")}
        </div>
        <div className="mt-2 flex flex-row items-center justify-between  align-middle">
          <motion.button
            aria-label="Twitter"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="m-1 flex h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-brand-black shadow-lg outline-none transition-colors duration-200 hover:bg-brand-pink hover:text-white focus-visible:bg-brand-pink focus-visible:text-white"
            type="button"
            onClick={() =>
              handleClickSocial("https://twitter.com/rivaildossantos")
            }
          >
            <FaTwitter />
          </motion.button>
          <motion.button
            aria-label="Instagram"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="m-1 flex h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-brand-black shadow-lg outline-none transition-colors duration-200 hover:bg-brand-pink hover:text-white focus-visible:bg-brand-pink focus-visible:text-white"
            type="button"
            onClick={() =>
              handleClickSocial("https://www.instagram.com/rivailpinto/")
            }
          >
            <FaInstagram />
          </motion.button>
          <motion.button
            aria-label="Linkedin"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="m-1 flex h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-brand-black shadow-lg outline-none transition-colors duration-200 hover:bg-brand-pink hover:text-white focus-visible:bg-brand-pink focus-visible:text-white"
            type="button"
            onClick={() =>
              handleClickSocial(
                "https://www.linkedin.com/in/rivail-santos-14373997/"
              )
            }
          >
            <FaLinkedin />
          </motion.button>

          <motion.button
            aria-label="Github"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="m-1 flex h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-brand-black shadow-lg outline-none transition-colors duration-200 hover:bg-brand-pink hover:text-white focus-visible:bg-brand-pink focus-visible:text-white"
            type="button"
            onClick={() => handleClickSocial("https://github.com/rivailJunior")}
          >
            <FaGit />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
