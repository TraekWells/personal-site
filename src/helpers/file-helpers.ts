import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents, mdxOptions } from "./mdx-config";
import React from "react";
import { extractHeaders } from "./extract-headers";
import { getWordCount } from "./get-word-count";

export const getContentList = async (directory: string): Promise<any[]> => {
  const fileNames = await readDirectory(directory);
  const contentArray = [];
  for (let fileName of fileNames) {
    const rawContent = await readFile(`${directory}/${fileName}`);
    const { data: frontmatter } = matter(rawContent);

    const contentObject = {
      slug: fileName.replace(".mdx", ""),
      ...frontmatter,
    };

    contentArray.push(contentObject);
  }

  return contentArray;
};

export const loadContent = async (slug: string): Promise<any> => {
  const rawContent = await readFile(`${slug}.mdx`);
  const headers = extractHeaders(rawContent);
  const wordCount = getWordCount(rawContent);

  const { frontmatter, content } = await compileMDX({
    source: rawContent,
    ...mdxComponents,
    ...mdxOptions,
  });

  return { frontmatter, content, headers, wordCount };
};

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
