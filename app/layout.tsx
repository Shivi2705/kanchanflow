import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DemoProvider } from "@/components/demo/DemoProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const display = localFont({ src: "./fonts/display.woff2", weight: "700", variable: "--font-display" });
const body = localFont({ src: [{ path: "./fonts/body-400.woff2", weight: "400" }, { path: "./fonts/body-600.woff2", weight: "600" }], variable: "--font-body" });
const mono = localFont({ src: "./fonts/mono.woff2", weight: "500", variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kanchanflow.example"),
  title: { default: "KanchanFlow — Manufacturing CRM", template: "%s | KanchanFlow" },
  description: "A manufacturing CRM concept for quotations, BOMs, sales pipelines and work orders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <DemoProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </DemoProvider>
      </body>
    </html>
  );
}
