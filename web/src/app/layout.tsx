import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google"; // Replacing Inter
import "./globals.css";
import { cn } from "@/lib/utils";
import { CookieConsent } from "@/components/CookieConsent";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "iOrderAI Voice AI - Automate Your Restaurant Calls",
  description: "The AI Voice Assistant that saves restaurants $40k/year. Automatic order taking for Chinese & Asian restaurants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased text-message-primary selection:bg-black selection:text-white", outfit.variable, spaceMono.variable)}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
