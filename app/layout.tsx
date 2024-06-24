import { Analytics } from "@vercel/analytics/react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

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
      <body className={dmSans.className}>
        <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
          <Header />
          <div className="flex justify-center my-4 laptop:my-8">
            <div className="w-[90%] laptop:w-[80%]">
              <main className="flex-grow">{children}</main>
            </div>
          </div>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
