import Head from "next/head";
import Header from "./components/Header";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

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
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
