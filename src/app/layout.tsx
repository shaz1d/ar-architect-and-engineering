import type { Metadata } from "next";
import { Antonio, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "boxicons/css/boxicons.min.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
});
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: {
    default: "AR architect & engineering",
    template: "%s - AR architect & engineering",
  },
  description: "An architecture & engineering company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(antonio.variable, plus_jakarta_sans.variable)}
    >
      <body className="bg-slate-950">{children}</body>
    </html>
  );
}
