import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./libs/redux/StoreProvider";

export const metadata: Metadata = {
  title: "Redux Studies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>{children} </body>
      </html>
    </StoreProvider>
  );
}
