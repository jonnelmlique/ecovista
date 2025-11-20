import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EcoVista - Sustainable Real Estate Solutions",
  description: "Discover eco-friendly properties that combine luxury with sustainability. Find your perfect green home with EcoVista's curated collection of sustainable living spaces.",
  keywords: "sustainable real estate, eco-friendly homes, green properties, sustainable living, eco homes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="ecovista-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
