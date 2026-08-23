import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const baseUrl =
  "https://bihanduyevin.github.io/bihandu-gg";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default:
      "Bihandu.gg — Developer, GIS & Creative Technologist",
    template: "%s | Bihandu.gg",
  },

  description:
    "Technology, GIS, urban planning, photography, experiments, and digital experiences by Bihandu.",

  keywords: [
    "Bihandu",
    "Developer",
    "GIS Specialist",
    "GIS",
    "Urban Planning",
    "Creative Technologist",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Spatial Data",
    "Photography",
    "Urban Exploration",
    "Digital Experiences",
  ],

  authors: [
    {
      name: "Bihandu",
    },
  ],

  creator: "Bihandu",
  publisher: "Bihandu.gg",

  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Bihandu.gg",
    title:
      "Bihandu.gg — Developer, GIS & Creative Technologist",
    description:
      "Technology, GIS, urban planning, photography, experiments, and digital experiences by Bihandu.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Bihandu.gg — Developer, GIS & Creative Technologist",
    description:
      "Technology, GIS, urban planning, photography, experiments, and digital experiences by Bihandu.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={`${inter.variable} font-sans flex min-h-screen flex-col`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}