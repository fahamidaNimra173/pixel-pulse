import type { Metadata } from "next";
import {Nunito_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const nunitoSans = Nunito_Sans({
 
  subsets: ["latin"],
  display:"swap"
});

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "PixelPulse",
  description: "Digital Marketing solution App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
