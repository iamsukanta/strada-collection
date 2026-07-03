import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://strada-collection50.vercel.app"),
  title: "Strada_Collection50 — Premium Fashion & Lifestyle",
  description:
    "Strada_Collection50 was founded in 2026 by two founders based in Germany. We provide premium products at competitive prices while maintaining the highest standards of quality, professionalism, and customer satisfaction.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Strada_Collection50 — Premium Fashion & Lifestyle",
    description:
      "Premium products. Fair prices. Founded in Germany, 2026. Clothing, watches, fashion accessories and premium lifestyle products — carefully sourced from trusted partners in Italy and France.",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 815,
        height: 780,
        alt: "Strada_Collection50 logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${archivo.variable} antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
