import "../../src/styles/globals.css";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import React from "react";
import { type IPageProps } from "../../src/interfaces/pages";
import { type Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

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
  description: "Rivail Pinto's personal website",
  manifest: "../manifest.ts",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: IPageProps) {
  unstable_setRequestLocale(locale);
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
