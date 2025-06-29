import "./globals.css";

// Ambil nama dari data untuk metadata
import { profile } from "./data/portfolioData";

export const metadata = {
  title: `${profile.name} | Portofolio`,
  description: `Portofolio milik ${profile.name}, seorang ${profile.title}`,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}