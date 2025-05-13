import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Landing page formula",
  description: "Create model for landing page, autoconversion",
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
