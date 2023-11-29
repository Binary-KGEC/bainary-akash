import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import localFont from 'next/font/local'
import MatrixRain from "@/components/MatrixRain";
// import MatrixRain2 from "@/components/MatrixRainingEffect";
// const inter = Inter({ subsets: ["latin"] });
const sfPixelate = localFont({ src: "../../public/fonts/SFPixelate.ttf" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased bg-black", sfPixelate.className)}
      >
        <main className="relative flex flex-col min-h-screen">
			    {/*<MatrixRain2  />*/}<div className="bg-black/70 ">
          <div className="bg-black/70 opacity-30 ">
            {<MatrixRain timeout={75}/>}</div>
            <div className="flex-grow flex-1">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
