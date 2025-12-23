import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jesus Caraballo - Software Engineer & ML Enthusiast",
  description: "CS student at MIT with experience in Software Engineering at Netflix, Machine Learning Engineering at NASA and ArcellAI, and Machine Learning Research at Harvard Medical School",
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

