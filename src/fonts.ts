import { Manrope, Fira_Code } from "next/font/google";

export const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-family-body",
});

export const codeFont = Fira_Code({
  subsets: ["latin"],
  variable: "--font-family-code",
});
