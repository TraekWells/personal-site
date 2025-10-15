import { Fira_Code, Permanent_Marker, Figtree } from "next/font/google";

export const headerFont = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-family-header",
});

export const bodyFont = Figtree({
  subsets: ["latin"],
  variable: "--font-family-body",
});

export const codeFont = Fira_Code({
  subsets: ["latin"],
  variable: "--font-family-code",
});
