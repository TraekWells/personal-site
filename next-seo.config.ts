import { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  titleTemplate: "%s | UX Designer & Front-end Developer",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.traekwells.com/",
    siteName: "Traek Wells | UX Designer & Front-end Developer",
  },
  twitter: {
    handle: "@TraekWells",
    site: "@TraekWells",
    cardType: "summary_large_image",
  },
};

export default SEO;
