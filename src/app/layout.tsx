import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mriganka Mahanta | Full-Stack Developer",
  description: "IndiaSkills National Top 10 Web Developer Full-stack developer, co-founder of MechMate, and C++ problem solver from Jorhat, Assam.",
  keywords: ["Mriganka Mahanta", "Full-Stack Developer", "Next.js", "Node.js", "Competitive Programming", "IndiaSkills", "Jorhat Engineering College", "React", "TypeScript", "C++", "Assam Web Developer"],
  authors: [{ name: "Mriganka Mahanta", url: "https://github.com/Mriga195" }],
  creator: "Mriganka Mahanta",
  openGraph: {
    title: "Mriganka Mahanta | Full-Stack Developer",
    description: "IndiaSkills National Top 10 Web Developer Full-stack developer and co-founder of MechMate.",
    url: "https://mriganka-portfolio.mrigank195.workers.dev",
    siteName: "Mriganka Mahanta Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mriganka Mahanta | Full-Stack Developer",
    description: "IndiaSkills National Top 10 Web Developer Full-stack developer and co-founder of MechMate.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
