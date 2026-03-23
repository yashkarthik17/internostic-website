import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Internostic — The Company Behind Blast Tax",
  description:
    "Internostic builds affordable, AI-powered tax resolution software that gives every American access to professional-grade tools — for a fraction of the cost.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
