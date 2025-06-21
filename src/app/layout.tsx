
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Movie Explorer",
  description:
    "Explore trending, top-rated, and popular movies with trailers, reviews, and more.",
  keywords: [
    "movies",
    "TMDb",
    "explore",
    "trailers",
    "reviews",
    "actors",
    "top rated",
  ],
  authors: [{ name: "Abdelrahman Mostafa" }],
  openGraph: {
    title: "Movie Explorer",
    description:
      "Discover trending and top-rated movies with trailers and cast info.",
    url: "https://movie-explorer-smoky-pi.vercel.app/",
    siteName: "Movie Explorer",
    images: [
      {
        url: "https://miro.medium.com/v2/resize:fit:512/1*UaUZmFbQmQ4ZstvGQ-JFeA.png",
        width: 1200,
        height: 630,
        alt: "Movie Explorer App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://movie-explorer-smoky-pi.vercel.app/"), 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="antialiased bg-background text-foreground">
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
