import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkLoaded, ClerkProvider, GoogleOneTap } from "@clerk/nextjs";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Learn Lab",
  description:
    "AI Learn Lab is a platform that allows users to easily create and generate educational courses using artificial intelligence...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 
        'dark' class will be toggled here by your ThemeSwitcher 
        (document.documentElement.classList.add/remove('dark'))
      */}
      <body
        className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen`}
      >
        <ClerkProvider>
          <GoogleOneTap />
          <ClerkLoaded>{children}</ClerkLoaded>
        </ClerkProvider>
      </body>
    </html>
  );
}
