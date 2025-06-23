import { Analytics } from "@vercel/analytics/react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { DM_Sans, Montserrat, Noto_Sans } from "next/font/google";

const dm = DM_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const noto = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-noto",
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Dessy Dusichka",
  description: "Personal portfolio",
  keywords:
    "portfolio, dessy dusichka, dessy, dusichka, northeastern, computer science, khoury, dessislava dusichka, dessislava",
  icons: {
    icon: "./icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${noto.variable} ${dm.variable} antialiased`}
      >
        <div className="grid grid-rows-[auto,1fr,auto] h-screen font-dmSans">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
