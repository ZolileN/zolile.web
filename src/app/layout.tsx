import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zolile Nonzapa | Technical Founder & AI Infrastructure Engineer",
  description: "I design, build, and deploy high-performance systems: AI infrastructure, enterprise operating systems, fintech advanced ledgers, and data analytics dashboards.",
  keywords: [
    "Zolile Nonzapa",
    "Technical Founder",
    "Systems Architect",
    "AI Infrastructure",
    "Full-Stack Engineer",
    "Mintry Fabric",
    "PraxisOne",
    "Cape Town Developer",
    "South Africa Tech Founder"
  ],
  authors: [{ name: "Zolile Nonzapa", url: "https://mlkcomputer.com" }],
  openGraph: {
    title: "Zolile Nonzapa | Technical Founder & Systems Architect",
    description: "Building AI Infrastructure, Enterprise Systems, and Digital Products.",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zolile Nonzapa | Technical Founder",
    description: "Building AI Infrastructure, Enterprise Systems, and Digital Products.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg-primary text-white flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
