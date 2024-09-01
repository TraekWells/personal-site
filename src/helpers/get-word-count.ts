// Function to calculate word count from markdown content
export const getWordCount = (markdownContent: string): number => {
  // Remove front matter
  const contentWithoutFrontMatter = markdownContent.replace(
    /^---[\s\S]*?---\n/,
    ""
  );

  // Remove any markdown syntax that shouldn't be counted (e.g., headings, links)
  const plainText = contentWithoutFrontMatter
    .replace(/!\[.*\]\(.*\)/g, "") // Remove images
    .replace(/\[.*\]\(.*\)/g, "") // Remove links
    .replace(/`{3}.*\n/g, "") // Remove code blocks
    .replace(/`.*`/g, "") // Remove inline code
    .replace(/[*_~>#+-=|]/g, ""); // Remove markdown symbols

  // Split by whitespace and filter out empty strings
  const words = plainText
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  return words.length;
};
