import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const FirebaseAnalytics = dynamic(() => import("@/app/FirebaseAnalytics"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Utility - Ferramentas Online",
  description:
    "Venha explorar ferramentas online úteis para o dia a dia, como: contador de caracteres, conversor de código binário e muito mais!",
  author: "Igor Oliveira",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://utilitytools.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="google-site-verification" content="O_Tl4ypoFmq6AGtwdMmSdep9vE2pkiXvxnhhJLy-a58" />
      </head>
      <body className={inter.className}>
        <FirebaseAnalytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
