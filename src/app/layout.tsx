import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@/styles/globals.css";
import {Poppins} from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Portal de Viagens",
  description: "No Portal de Viagens, você encontra os melhores destinos para suas próximas férias. Explore praias paradisíacas, cidades históricas e aventuras emocionantes. Planeje sua viagem dos sonhos conosco!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}><Header/>
          <main style={{flex: 1}}>{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
