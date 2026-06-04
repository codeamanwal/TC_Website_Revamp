import type { Metadata } from "next";
import { Geist, Libre_Baskerville, Poppins, Inter, Plus_Jakarta_Sans, Montserrat, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

/*
  FONTS:
  - Geist: Used for body text (clean, modern)
  - Libre Baskerville: Used for nav links (elegant, italic serif)
  
  next/font loads these fonts at BUILD time, not at runtime.
  This means: no flash of unstyled text, no layout shift, faster page load.
*/
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["600"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata: Metadata = {
  title: "Titan Capital",
  description: "Early stage venture capital fund by Kunal Bahl & Rohit Bansal",
};

/*
  ROOT LAYOUT:
  This wraps EVERY page on the website.
  The Navbar is placed here so it automatically shows on all pages.
  No need to add it to each page individually.
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${libreBaskerville.variable} ${poppins.variable} ${inter.variable} ${plusJakartaSans.variable} ${montserrat.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {/* pt-[115px] pushes content below the navbar since navbar is position:absolute */}
        <main className="flex-1 pt-[115px]">{children}</main>
      </body>
    </html>
  );
}
