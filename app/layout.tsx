import type { Metadata } from "next";
import { Montserrat, Cedarville_Cursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cursive = Cedarville_Cursive({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Founders Friday",
  description: "Connect, Collaborate, Innovate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased w-full max-w-[1728px] relative mx-auto bg-[--baseWhite] overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
