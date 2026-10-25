import type { Metadata } from "next";
import { Martian_Mono, Red_Hat_Mono } from "next/font/google";
import "./globals.css";

const redHatMono = Red_Hat_Mono({
  variable: "--font-red-hat-mono",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: "Mriganka Mahanta | C++ & Systems Engineer",
  description: "C++ and systems software engineer in training. Full-stack engineer at Encamp Adventures, co-founder of MechMate, IndiaSkills National Top 10.",
  keywords: ["Mriganka Mahanta", "Full-Stack Developer", "Next.js", "Node.js", "Competitive Programming", "IndiaSkills", "Jorhat Engineering College", "React", "TypeScript", "C++", "Assam Web Developer"],
  authors: [{ name: "Mriganka Mahanta", url: "https://github.com/Mriga195" }],
  creator: "Mriganka Mahanta",
  openGraph: {
    title: "Mriganka Mahanta | C++ & Systems Engineer",
    description: "C++ and systems software engineer in training. Full-stack engineer at Encamp Adventures, co-founder of MechMate, IndiaSkills National Top 10.",
    url: "https://mriganka-portfolio.mrigank195.workers.dev",
    siteName: "Mriganka Mahanta Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mriganka Mahanta | C++ & Systems Engineer",
    description: "C++ and systems software engineer in training. Full-stack engineer at Encamp Adventures, co-founder of MechMate, IndiaSkills National Top 10.",
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
    <html lang="en">
      <body
        className={`${redHatMono.variable} ${martianMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
