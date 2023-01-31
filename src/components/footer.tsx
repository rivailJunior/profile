/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { FaFacebook, FaTwitter, FaYoutube, FaGit } from "react-icons/fa";
import useTranslate from "../hooks/useTranslate";

export default function Footer() {
  const { t } = useTranslate();
  return (
    <footer className="relative bg-gradient-to-r from-pink-500 to-rose-500 pt-8 pb-6">
      <div className="container mx-auto flex flex-col items-center justify-center text-white">
        <div className="text-lg font-bold uppercase leading-normal">
          {t.footer.social_midia_call_to_action}
        </div>
        <div className="mt-6 flex w-2/12 flex-row items-center justify-between  align-middle">
          <button
            className="h-10 w-10  rounded-full bg-blue-400 p-3 font-normal text-white shadow-lg outline-none focus:outline-none"
            type="button"
          >
            <FaTwitter />
          </button>
          <button
            className="h-10 w-10  rounded-full bg-blue-500 p-3 font-normal text-white shadow-lg outline-none focus:outline-none"
            type="button"
          >
            <FaFacebook />
          </button>
          <button
            className="h-10 w-10  rounded-full bg-red-500 p-3 font-normal text-white shadow-lg outline-none focus:outline-none"
            type="button"
          >
            <FaYoutube />
          </button>
          <button
            className="h-10 w-10  rounded-full bg-gray-800 p-3 font-normal text-white shadow-lg outline-none focus:outline-none"
            type="button"
          >
            <FaGit />
          </button>
        </div>
      </div>
    </footer>
  );
}
