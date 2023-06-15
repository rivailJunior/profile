import "../../src/styles/globals.css";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import React from "react";
import { IPageProps } from "../../src/interfaces/pages";
import { Metadata } from "next";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export const metadata: Metadata = {
  title: "Rivail Pinto",
  alternates: {
    languages: {
      en: "/en-US",
      pt: "pt-BR",
    },
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: IPageProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
