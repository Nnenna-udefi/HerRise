import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const roboto = localFont({
  src: "./fonts/roboto-regular.woff2",
  variable: "--font-roboto",
  weight: "400 600",
});

const merriweather = localFont({
  src: "./fonts/merriweather-regular.woff2",
  variable: "--font-merriweather",
  weight: "400 600",
});

export const metadata: Metadata = {
  title: "HerRise Foundation",
  description: "A Non-Profit Organisation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
