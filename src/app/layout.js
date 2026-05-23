import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Akash | Premium Full Stack Developer Portfolio",
  description: "Explore the portfolio of Akash, a passionate Full Stack Developer specializing in Next.js, React, Tailwind CSS, and modern web architectures. View projects, skills, and get in touch.",
  keywords: [
    "Akash", 
    "Akash Portfolio", 
    "Full Stack Developer", 
    "Next.js Developer", 
    "React Developer", 
    "Karanjigar College of Engineering", 
    "Government Polytechnic Sakoli",
    "Web Developer Portfolio"
  ],
  authors: [{ name: "Akash" }],
  creator: "Akash",
  openGraph: {
    title: "Akash | Premium Full Stack Developer Portfolio",
    description: "Explore the interactive portfolio of Akash, showcasing futuristic design, 3D animations, and technical projects.",
    siteName: "Akash Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash | Premium Full Stack Developer Portfolio",
    description: "Explore the interactive portfolio of Akash, showcasing futuristic design, 3D animations, and technical projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { ThemeProvider } from "@/components/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-cyber-bg text-cyber-text antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
