import getMetaData from "./config/getMetaData";

const meta = getMetaData();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: "netlify",
    prerender: { routes: ["/sitemap.xml"] },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Traek Wells",
      titleTemplate: " %s | Traek Wells",
      meta: [
        ...meta,
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:image:width", content: "740" },
        { property: "og:image:height", content: "300" },
        { name: "twitter:site", content: "@TraekWells" },
        { name: "twitter:card", content: "summary" },
      ],
      script: [],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://traekwells.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap",
        },
      ],
    },
  },
  css: ["@/assets/scss/main.scss"],
  modules: ["@nuxt/content", "nuxt-icon"],
});
