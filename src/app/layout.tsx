import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

import LeftMenu from "@/components/leftMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbitron',
});

// app/layout.tsx or page.tsx
export const metadata: Metadata = {
  title: "Himantha Marasinghe",
  description:
    "Portfolio of Himantha Marasinghe, an undergraduate student specializing in full-stack development, React, Spring Boot, and React-Native applications. Explore my projects and skills.",

  keywords: [
    "Himantha Marasinghe",
    "Software Engineering",
    "Portfolio",
    "React",
    "Spring Boot",
    "Next.js",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Intern",
    "Job Seeker",
    "Sri Lanka Developer",
  ],

  authors: [{ name: "Himantha Marasinghe" }],
  creator: "Himantha Marasinghe",

  openGraph: {
    title: "Himantha Marasinghe | Software Engineering Portfolio",
    description:
      "Showcasing projects in React, Spring Boot, Next.js, and full-stack systems.",
    url: "https://himantha.me", // replace with your domain
    siteName: "Himantha Portfolio",
    images: [
      {
        url: "/preview.png", // put an image in /public
        width: 1200,
        height: 630,
        alt: "Himantha Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Himantha Marasinghe | Software Engineering Portfolio",
    description:
      "Software Engineering student | Full-Stack Developer | React | Spring Boot | Next.js",
    images: ["/preview.png"],
    creator: "@yourtwitterhandle", // optional
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  themeColor: "#00f5d4", // matches your design
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}
        style={{ 
          fontFamily: 'var(--font-orbitron)',
          backgroundImage: "url('/BG.png')",
          backgroundSize: "cover",
          backgroundPosition: "left"
        }}
      >
        <div className="flex md:mx-10" style={{ height: "100svh" }}>
          <LeftMenu />
          <div className="flex-1 w-100 pr-8 md:pr-0 pl-8 md:pl-0 lg:pl-20 my-10 pb-15 lg:pb-0">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
