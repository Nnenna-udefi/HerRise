import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito, Roboto, Merriweather } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "600"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["400", "600"],
});
const recoleta = localFont({
  src: "./fonts/Recoleta-RegularDEMO.otf",
  variable: "--font-recoleta",
  weight: "400 600",
});

export const metadata: Metadata = {
  title: "Home | HerRise Foundation",
  description:
    "HerRise Foundation is a non-profit organisation that empowers girls in underserved communities to become confident leaders and changemakers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${nunito.variable} ${geistMono.variable} ${roboto.variable} ${merriweather.variable} ${recoleta.variable} antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
