"use client"
import "./globals.css";
import Navbar from '@/components/Navbar'
import { ThemeProvider } from 'next-themes'
import Head from "./head";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <Head />
        <div className="">
          <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            {children}
          </ThemeProvider>
        </div>

      </body>
    </html>
  );
}
