import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import { ThemeProvider } from "../context/ThemeContext";
import { CurrencyPairsProvider } from "../context/CurrencyPairsContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Binance Market Data Viewer",
  description: "Application to view Binance market data",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <CurrencyPairsProvider>
            <StyledComponentsRegistry>
              {children}
            </StyledComponentsRegistry>
          </CurrencyPairsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
