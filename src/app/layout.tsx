import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import type { Metadata } from "next";

import GTag from "@/scripts/google-tag";
import "./globals.css";
import { montserrat, notoSans } from "./theme/fonts";
export const metadata: Metadata = {
  title: "Bamble",
  description: "Affordable Recruitment as a Service for Start-ups & Companies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GTag />
      <body className={`${montserrat.variable} ${notoSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
