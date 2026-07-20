import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fluxbot Panel | Operativa del chatbot",
    template: "%s | Fluxbot Panel",
  },
  description: "Panel operativo para administrar clientes, entrenamiento y auditoría del chatbot.",
  metadataBase: new URL("https://panel.tu-dominio.com"),
  openGraph: {
    title: "Fluxbot Panel",
    description: "Gestiona la operativa del chatbot en un panel separado de la web pública.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f4f7f5] text-[#173b4d]">
        <SiteHeader />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 md:px-10 md:py-10">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
