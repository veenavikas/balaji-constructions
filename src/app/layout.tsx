import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Balaji Constructions | Luxury Real Estate & Construction in Visakhapatnam",
  description: "Premium luxury real estate and construction company in Visakhapatnam.",
  keywords: "Balaji Constructions, luxury real estate, construction, Visakhapatnam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} antialiased noise-bg`}
      >
        <SmoothScrolling>
          <CustomCursor />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
