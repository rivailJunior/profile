/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import React from "react";
import { SunsetImg } from "../assets/images";

export default function HeaderImage() {
  return (
    <section className="relative block" style={{ height: "500px" }}>
      <div className="flex h-full w-4/5 overflow-hidden bg-white">
        <Image
          objectFit="cover"
          fill
          alt="ponta negra"
          className="flex h-full w-auto justify-center"
          src={SunsetImg}
        />
        <span
          id="blackOverlay"
          className="absolute h-full w-full bg-gray-900 opacity-50"
        ></span>
      </div>
    </section>
  );
}
