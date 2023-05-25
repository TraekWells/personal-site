import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Inter } from "next/font/google";

const bodyFont = Inter({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${bodyFont.style.fontFamily};
        }
      `}</style>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default SiteLayout;
