import { getCollection } from "astro:content";

export const getReadingTime = (content: string) => {
  const averageReadingSpeed = 240;
  const wordCount = content.split(" ").length;
  const readingTime = Math.ceil(wordCount / averageReadingSpeed);
  if (readingTime <= 1) return "About a minute read";
  return `${readingTime} min read`;
};

export const formatDate = (date: Date) => {
  const newDate = new Intl.DateTimeFormat("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return newDate;
};

type DraftableCollection = "blog" | "journal" | "projects";

export const getPublished = <C extends DraftableCollection>(collection: C) => {
  return getCollection(collection, ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });
};
