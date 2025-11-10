import { Fira_Code, Figtree } from "next/font/google";

export const bodyFont = Figtree({
  subsets: ["latin"],
  variable: "--font-family-body",
});

export const codeFont = Fira_Code({
  subsets: ["latin"],
  variable: "--font-family-code",
});
