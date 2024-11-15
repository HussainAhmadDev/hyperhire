import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const popoing = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hyperhire",
  description: "Hyperhire",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${popoing.variable} antialiased`}>{children}</body>
    </html>
  );
}
