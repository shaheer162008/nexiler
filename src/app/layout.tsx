import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Nexiler - Complete Digital Solutions for Your Business",
  description: "Transform your ideas into powerful digital experiences with Nexiler. We offer web development, mobile apps, AI automation, e-commerce, and custom solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}> 
        <Navbar />
        <main className="animate-fadeIn">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
