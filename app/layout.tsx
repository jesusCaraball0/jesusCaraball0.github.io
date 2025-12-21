import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[Your Name] - Software Engineer & ML Enthusiast",
  description: "Software Engineer passionate about Machine Learning and building intelligent systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

