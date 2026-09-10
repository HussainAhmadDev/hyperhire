import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hyperhire",
    template: "%s | Hyperhire",
  },
  description:
    "Hyperhire connects businesses with talented professionals to build and scale their teams.",
  metadataBase: new URL("https://hyperhire.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Hyperhire",
    description:
      "Hyperhire connects businesses with talented professionals to build and scale their teams.",
    type: "website",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
