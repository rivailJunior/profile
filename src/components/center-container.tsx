"use client";
import React from "react";

export const CenterContainer = ({
  children,
  classNames = "",
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <div className={`mx-auto max-w-xs sm:max-w-sm md:max-w-7xl  ${classNames}`}>
      {children}
    </div>
  );
};
