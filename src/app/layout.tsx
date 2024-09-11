import type { Metadata } from "next";
import "../styles/main.scss";
import { bodyFont, codeFont } from "@/fonts";
import Footer from "@/components/Footer";
import SiteNavigation from "@/components/SiteNavigation";
import { cookies } from "next/headers";

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
  const savedTheme = cookies().get("color-theme");
  const theme = savedTheme?.value || "light";

  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${codeFont.variable}`}
      data-theme={theme}
    >
      <head>
        <link rel="icon" href="favicon.png" sizes="any" />
        <script
          defer
          data-domain="traekwells.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body>
        <SiteNavigation initialTheme={theme} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
