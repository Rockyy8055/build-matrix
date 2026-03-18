import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Build Matrix | Construction & Interior Design",
  description:
    "Build Matrix delivers premium construction and interior solutions for residential and commercial projects.",
  metadataBase: new URL("https://buildmatrix.example"),
  openGraph: {
    title: "Build Matrix | Construction & Interior Design",
    description:
      "End-to-end construction and interior solutions built with precision and innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
