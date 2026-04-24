import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hídrico Química | Adesivos Industriais de Alto Desempenho",
  description:
    "Engenharia química com propósito. Adesivos industriais para pisos de madeira, grama sintética e revestimentos. +30 anos de experiência. Curitiba, PR.",
  keywords: [
    "adesivos industriais",
    "cola PU",
    "pisos de madeira",
    "grama sintética",
    "FabCol",
    "Hídrico Química",
    "Curitiba",
  ],
  openGraph: {
    title: "Hídrico Química | Adesivos Industriais",
    description:
      "Formulações de alta performance para pisos, madeiras e grama sintética. Mais de 30 anos de tradição.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
