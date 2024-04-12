import type { Metadata } from "next";
import "../styles/main.scss";
import { inter } from "@/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Traek Wells",
    template: "%s | UX Designer & Front-End Developer",
  },
  description: "Generated by create next app",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="favicon.png" sizes="any" />
        <script
          defer
          data-domain="traekwells.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}