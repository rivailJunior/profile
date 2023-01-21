import Image from "next/image";
import React from "react";
import { PordosolAlterImg } from "../assets/images";

export default function HeaderImage() {
  return (
    <section className="relative block" style={{ height: "500px" }}>
      <div className="flex h-full w-4/5 overflow-hidden bg-white">
        <Image
          objectFit="cover"
          fill
          alt="ponta negra"
          className="flex h-full w-auto justify-center"
          src={PordosolAlterImg}
        />
        <span
          id="blackOverlay"
          className="absolute h-full w-full bg-gray-900 opacity-50"
        ></span>
      </div>
      <div
        className="pointer-events-none absolute top-auto bottom-0 left-0 right-0 w-full overflow-hidden"
        style={{ height: "70px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-current text-gray-300"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
  );
}
