export const getReadingTime = (content: string) => {
  const averageReadingSpeed = 240;
  const wordCount = content.split(" ").length;
  const readingTime = Math.ceil(wordCount / averageReadingSpeed);
  if (readingTime <= 1) return "About a minute read";
  return `${readingTime} min read`;
};
