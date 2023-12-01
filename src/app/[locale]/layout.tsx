import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Main from "@/app/components/Main";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/middleware";

import "./globals.css";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Argopartners",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header />
        <Main>
          <div id="content">{children}</div>
        </Main>
        <Footer />
      </body>
    </html>
  );
}
