// app/layout.jsx
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { profile, socialConfig } from "./data/portfolioData";

// UI & Layout Components
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import CursorLight from "@/app/components/ui/CursorLight";

const font = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata = {
  title: `Ryan | Portofolio`,
  description: `Portofolio milik ${profile.name}, seorang ${profile.title}`,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <CursorLight />
        <div className="stars"></div>
        <div className="twinkling"></div>

        
        {/* Main Layout */}
        <div className="relative z-10">
          <Header profileName={profile.name} />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
          <Footer socialConfig={socialConfig} profileName={profile.name} />
        </div>
      </body>
    </html>
  );
}
