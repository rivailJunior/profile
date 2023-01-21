import Image from "next/image";
import React from "react";

import { PersonalImg } from "../assets/images";

export default function CardContainer() {
  return (
    <section className="relative bg-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                <div className="relative">
                  <Image
                    alt="personal picture"
                    src={PersonalImg}
                    className="absolute -m-16 -ml-20 h-auto rounded-full border-none align-middle shadow-xl lg:-ml-16"
                    style={{ maxWidth: "150px", maxHeight: "200px" }}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:order-3 lg:w-4/12 lg:self-center lg:text-right">
                <div className="mt-32 py-6 px-3 sm:mt-0">
                  <button
                    className="mb-1 rounded bg-green-800 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none hover:shadow-md focus:outline-none active:bg-pink-600 sm:mr-2"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                  >
                    Connect
                  </button>
                </div>
              </div>
              <div className="w-full px-4 lg:order-1 lg:w-4/12">
                <div className="flex justify-center py-4 pt-8 lg:pt-4">
                  <div className="mr-4 p-3 text-center">
                    <span className="block text-xl font-bold uppercase tracking-wide text-gray-700">
                      34
                    </span>
                    <span className="text-sm text-gray-500">Years</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="block text-xl font-bold uppercase tracking-wide text-gray-700">
                      10
                    </span>
                    <span className="text-sm text-gray-500">
                      Years of Experience
                    </span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="block text-xl font-bold uppercase tracking-wide text-gray-700">
                      Addi
                    </span>
                    <span className="text-sm text-gray-500">Current Job</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <h3 className="mb-2 mb-2 text-4xl font-semibold leading-normal text-gray-800">
                Rivail Santos
              </h3>
              <div className="mt-0 mb-2 text-sm font-bold uppercase leading-normal text-gray-500">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                Manaus, Amazonas - Brasil
              </div>
              <div className="mb-2 mt-10 text-gray-700">
                <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                Sr Front-End Engineer
              </div>
              <div className="mb-2 text-gray-700">
                <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                Computer Science - Uninorte Laureate
              </div>
            </div>
            <div className="mt-10 border-t border-gray-300 py-10 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 lg:w-9/12">
                  <p className="mb-4 text-lg leading-relaxed text-gray-800">
                    Software Developer with almost 10 years of experience. Along
                    this journey, I've being improving the way I implement,
                    build and deploy scalable software, and continuing connected
                    with the customer to give them a great experience. In the
                    last 7 years, I've worked as a Front-End Engineer. Having a
                    huge experience with Node (Nestjs, express) and React (CRA,
                    Next, React-Native). I've already worked with ERP platforms,
                    Mobile Maps Apps, Electronic Payment Platforms, Payment
                    Gateway, Cash-Back App and actually I'm working with
                    payments again, with a method called BNPL (Buy Now Pay
                    Later).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
