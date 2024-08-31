export const extractHeaders = (markdownContent: string): string[] => {
  // Regular expression to match h2 headings
  const h2Regex = /^##\s+(.*)$/gm;
  const headings: string[] = [];
  let match: RegExpExecArray | null;

  // Iterate over all matches
  while ((match = h2Regex.exec(markdownContent)) !== null) {
    headings.push(match[1]);
  }

  return headings;
};
