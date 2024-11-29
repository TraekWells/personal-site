import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents, mdxOptions } from "./mdx-config";
import React from "react";
import { extractHeaders } from "./extract-headers";
import { getWordCount } from "./get-word-count";
import { BlogFrontmatterTypes } from "@/types/types";

export const getContentList = async (
  directory: string
): Promise<BlogFrontmatterTypes[]> => {
  const fileNames = await readDirectory(directory);
  const contentArray: BlogFrontmatterTypes[] = [];
  for (let fileName of fileNames) {
    const rawContent = await readFile(`${directory}/${fileName}`);
    const { data: frontmatter } = matter(rawContent);

    const contentObject: BlogFrontmatterTypes = {
      slug: fileName.replace(".mdx", ""),
      title: frontmatter.title,
      summary: frontmatter.summary,
      tags: frontmatter.tags,
      draft: frontmatter.draft,
      createdAt: frontmatter.createdAt,
      updatedAt: frontmatter.updatedAt,
    };

    contentArray.push(contentObject);
  }

  const sortedContent = contentArray.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });

  return sortedContent;
};

export const loadContent = React.cache(async (slug: string): Promise<any> => {
  const rawContent = await readFile(`${slug}.mdx`);
  const headers = extractHeaders(rawContent);
  const wordCount = getWordCount(rawContent);

  const { frontmatter, content } = await compileMDX({
    source: rawContent,
    ...mdxComponents,
    ...mdxOptions,
  });

  return { frontmatter, content, headers, wordCount };
});

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
