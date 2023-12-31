import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roomvu Task",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "42rem",
              padding: "0 1rem",
            }}
          >
            <header style={{ padding: 2 }}>
              <Header />
            </header>
            <main style={{ paddingTop: 20 }}>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
