import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import SearchBar from "@/components/SearchBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    url: "https://your-site-url.com", // حط هنا لينك  بعد ما ارفعه
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Wrap out app with ClerkProvider to enable authentication features
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar /> 
          <SearchBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
