import type React from "react";

export interface IPageProps {
  children?: React.ReactNode;
  params: { locale: string };
}
