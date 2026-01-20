import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-4259681f.vercel.app"),
  title: "PushpaVerse | Rishab's Ode",
  description:
    "A vibrant digital keepsake crafted by Rishab to celebrate Pushpa's glow, featuring shared moments, promises, and a radiant love story." ,
  openGraph: {
    title: "PushpaVerse | Rishab's Ode",
    description:
      "A vibrant digital keepsake crafted by Rishab to celebrate Pushpa's glow, featuring shared moments, promises, and a radiant love story.",
    url: "https://agentic-4259681f.vercel.app",
    siteName: "PushpaVerse",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PushpaVerse | Rishab's Ode",
    description:
      "A vibrant digital keepsake crafted by Rishab to celebrate Pushpa's glow, featuring shared moments, promises, and a radiant love story."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
