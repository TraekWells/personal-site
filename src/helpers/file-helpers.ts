import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents, mdxOptions } from "./mdx-config";
import React from "react";
import { extractHeaders } from "./extract-headers";
import { getWordCount } from "./get-word-count";

// Function to get the list of content (MDX files) from a given directory
export const getContentList = (directory: string): any[] => {
  const fileNames = readDirectory(directory);
  const contentArray = [];

  for (let fileName of fileNames) {
    const rawContent = readFile(`${directory}/${fileName}`);
    const { data: frontmatter } = matter(rawContent);

    const contentObject = {
      slug: fileName.replace(".mdx", ""),
      ...frontmatter,
    };

    contentArray.push(contentObject);
  }

  return contentArray;
};

// Function to load the content of a specific slug
export const loadContent = async (slug: string): Promise<any> => {
  const rawContent = readFile(`${slug}.mdx`);
  const headers = extractHeaders(rawContent);
  const wordCount = getWordCount(rawContent);

  const { frontmatter, content } = await compileMDX({
    source: rawContent,
    ...mdxComponents,
    ...mdxOptions,
  });

  return { frontmatter, content, headers, wordCount };
};

// Function to read a file (synchronously) at build time
function readFile(localPath: string) {
  return fs.readFileSync(path.join(process.cwd(), localPath), "utf8");
}

// Function to read the contents of a directory (synchronously) at build time
function readDirectory(localPath: string) {
  return fs.readdirSync(path.join(process.cwd(), localPath));
}
