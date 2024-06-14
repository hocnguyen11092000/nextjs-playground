import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { i18n, Locale } from "./i18n-config";
import { Links } from "./components/links";

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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={inter.className}>
        <div className="p-8">
          <Links lang={params.lang}></Links>
          {children}
        </div>
      </body>
    </html>
  );
}
