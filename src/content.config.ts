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

const books = defineCollection({
  loader: glob({
    base: "./src/content/books",
    pattern: "**/*.(md|mdx)",
  }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    summary: z.string().optional(),
    review: z.string(),
    bookCover: z.string(),
    rating: z.number().min(0).max(5),
    dateRead: z.coerce.date().nullable(),
    currentlyReading: z.boolean().optional(),
    didNotFinish: z.boolean().optional(),
  }),
});

const journal = defineCollection({
  loader: glob({
    base: "./src/content/journal",
    pattern: "**/*.(md|mdx)",
  }),
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().nullable().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.(md|mdx)",
  }),
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    summary: z.string(),
    previewImage: z.string(),
    featuredImage: z.string(),
    linkToProject: z.string(),
    linkToCode: z.string(),
    technology: z.array(z.string()),
    type: z.string(),
  }),
});

const todayILearned = defineCollection({
  loader: glob({
    base: "./src/content/today-i-learned",
    pattern: "**/*.(md|mdx)",
  }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    createdAt: z.coerce.date().optional(),
  }),
});

export const collections = {
  blog,
  books,
  journal,
  projects,
  "today-i-learned": todayILearned,
};
