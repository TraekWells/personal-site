import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.(md|mdx)",
  }),
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = { blog };
