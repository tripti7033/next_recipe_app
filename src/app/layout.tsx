import "reflect-metadata"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@mui/material";
import { MainTheme } from "../components/MainTheme";
import { AppDataSource } from "@/utils/database";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Adda ",
  description: "The real taste of India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Header/>
        {children}
        <Footer/>
    
        </body>
    </html>
  );
}
