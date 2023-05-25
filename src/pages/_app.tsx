import type { AppProps } from "next/app";
import SiteLayout from "@/layout/SiteLayout";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import PlausibleProvider from "next-plausible";
import "../styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="traekwells.com">
      <SiteLayout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </SiteLayout>
    </PlausibleProvider>
  );
}
