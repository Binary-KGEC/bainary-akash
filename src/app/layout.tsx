import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./fix.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import localFont from 'next/font/local';
import MatrixRain from "@/components/MatrixRain";

const sfPixelate = localFont({ src: "../../public/fonts/SFPixelate.ttf" });

export const metadata: Metadata = {
  title: "Binary-KGEC",
  description: "Binary Hackathon KGEC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full  ">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Add other head elements here */}
      </head>
      <body
        className={cn("relative h-full font-sans antialiased bg-black", sfPixelate.className)}
      >
        <main className="relative flex flex-col min-h-screen  overflow-hidden">
          <div className="bg-black/70 ">
            <div className="bg-black/70 opacity-30 overflow-hidden  font-pixelate">
              {<MatrixRain timeout={75} />}
            </div>
            <div className="flex-grow flex-1">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
