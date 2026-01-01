import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Prince Rest | Luxury Hotel & Resort",
  description: "Experience unparalleled luxury and comfort at Prince Rest. Discover elegant rooms, world-class dining, spa treatments, and exceptional hospitality in the heart of the city.",
  keywords: "luxury hotel, resort, accommodation, fine dining, spa, wellness, booking, rooms, suites",
  authors: [{ name: "Prince Rest Hotel" }],
  openGraph: {
    title: "Prince Rest | Luxury Hotel & Resort",
    description: "Experience unparalleled luxury and comfort at Prince Rest.",
    type: "website",
    locale: "en_US",
    siteName: "Prince Rest",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Rest | Luxury Hotel & Resort",
    description: "Experience unparalleled luxury and comfort at Prince Rest.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
