import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Youssef KHEMIRA | Portfolio - Étudiant en Informatique",
  description:
    "Portfolio de Youssef KHEMIRA, étudiant en informatique. Découvrez mes projets personnels, académiques et mon parcours.",
  keywords: [
    "Youssef KHEMIRA",
    "portfolio",
    "informatique",
    "développeur",
    "étudiant",
    "projets",
    "WebMDS",
  ],
  authors: [{ name: "Youssef KHEMIRA" }],
  creator: "Youssef KHEMIRA",
  openGraph: {
    title: "Youssef KHEMIRA | Portfolio",
    description:
      "Portfolio de Youssef KHEMIRA - Étudiant en Informatique",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef KHEMIRA | Portfolio",
    description:
      "Portfolio de Youssef KHEMIRA - Étudiant en Informatique",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased dark`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <HeroHeader />
          <main>{children}</main>
          <FooterSection />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
