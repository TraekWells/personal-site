import React from "react";
import PageHeader from "@/components/PageHeader";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import Link from "next/link";
import { getContentList } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";
import { Metadata } from "next";
import slugify from "@/utilities/slugify";

export const metadata: Metadata = {
  title: "Tags",
  description: "A list of tags used in my blog posts.",
};

const Blog = async () => {
  const blogs = await getContentList(CONTENT_PATHS["blog"]);
  const tags = blogs.flatMap((blog) => blog.tags).filter(Boolean);
  // This is sweet, it removes duplicates from the tags array
  const uniqueTags = [...new Set(tags)];

  return (
    <>
      <PageHeader title="Tags" />
      <main id="main">
        <Section>
          <Container>
            {uniqueTags.map((tag) => {
              return (
                <ul key={tag}>
                  <li>
                    <Link href={`/tags/${slugify(tag)}`}>{tag}</Link>
                  </li>
                </ul>
              );
            })}
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Blog;
