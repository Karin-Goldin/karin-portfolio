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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/k-Icon.png", type: "image/png" },
    ],
    apple: { url: "/k-Icon.png", type: "image/png" },
    shortcut: { url: "/k-Icon.png", type: "image/png" },
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  other: {
    "msapplication-TileImage": "/k-Icon.png",
    "msapplication-TileColor": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/k-Icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/k-Icon.png" />
        <link rel="shortcut icon" href="/k-Icon.png" type="image/png" />
        <meta name="msapplication-TileImage" content="/k-Icon.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
