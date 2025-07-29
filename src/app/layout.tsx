import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karin Goldin",
  description:
    "Personal portfolio of Karin Goldin - Frontend Developer and Web Developer",
  icons: {
    icon: [
      {
        url: "/k-Icon.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/k-Icon.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    apple: {
      url: "/k-Icon.png",
      type: "image/png",
    },
    shortcut: "/k-Icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
