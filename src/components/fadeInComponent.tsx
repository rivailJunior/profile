import React from "react";
import { Transition } from "@headlessui/react";

export default function FadeInComponent({
  delay,
  children,
}: {
  children: JSX.Element;
  delay: string;
}) {
  return (
    <Transition.Child
      enter={`transition-all ease-in-out duration-500 ${delay}`}
      enterFrom="opacity-0 translate-y-6"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-in-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition.Child>
  );
}
