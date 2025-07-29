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
      },
    ],
    shortcut: "/k-Icon.png",
    apple: "/k-Icon.png",
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
        <link rel="icon" href="/k-Icon.png" />
        <link rel="shortcut icon" href="/k-Icon.png" />
        <link rel="apple-touch-icon" href="/k-Icon.png" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
