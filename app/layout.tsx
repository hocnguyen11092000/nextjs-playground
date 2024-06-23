import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { i18n, Locale } from "./i18n-config";
import { Links } from "../components/links";
import { getLocale } from "@/i18n/server";
import { LocaleProvider } from "@/hooks/locale-provider";
import ChangeLocale from "@/components/ChangeLocale";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home page",
  description: "",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <LocaleProvider value={locale}>
          <ChangeLocale />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
