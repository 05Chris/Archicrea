import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARCHICREA",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {/* <Size /> */}
        {children}
      </body>
    </html>
  );
}