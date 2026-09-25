// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Figtree",
      cssVariable: "--font-family-figtree",
      weights: ["100 900"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-family-mono",
    },
  ],

  integrations: [mdx()],
});
