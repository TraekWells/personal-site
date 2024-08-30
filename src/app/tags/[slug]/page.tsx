import React from "react";
import PageHeader from "@/components/PageHeader";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import TableOfContents from "@/components/TableOfContents";
import { getContentList } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";
import { Metadata } from "next";
import GridWithSidebar from "@/layout/GridWithSidebar";
import ContentWrapper from "@/layout/ContentWrapper";
import slugify from "@/utilities/slugify";
import unslug from "@/utilities/unslug";
import ContentCard from "@/components/ContentCard";

export const generateStaticParams = async () => {
  const blogs = await getContentList(CONTENT_PATHS["blog"]);
  const tags = blogs.flatMap((blog) => blog.tags).filter(Boolean);
  // This is sweet, it removes duplicates from the tags array
  const uniqueTags = [...new Set(tags)];

  return uniqueTags.map((tag) => {
    const slugifiedTag = slugify(tag);
    return {
      slug: slugifiedTag,
    };
  });
};

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  return {
    title: "Test title",
    description: "Test description",
  };
};

const Tag = async ({ params }: any) => {
  const unsluged = unslug(params.slug);
  const blogs = await getContentList(CONTENT_PATHS["blog"]);

  const taggedBlogs = blogs.filter((blog) => {
    if (blog.tags) {
      const lowered = blog.tags.map((tag: string) => tag.toLowerCase());
      return lowered.includes(unsluged.toLowerCase());
    }
  });

  return (
    <>
      <PageHeader title={`Posts tagged ${unsluged}`}></PageHeader>
      <ContentWrapper>
        <Section>
          <Container>
            <GridWithSidebar>
              <article className="flow">
                {taggedBlogs.map((blog) => {
                  return (
                    <ContentCard
                      title={blog.title}
                      summary={blog.summary}
                      slug={`/blog/${blog.slug}`}
                      key={blog.slug}
                    />
                  );
                })}
              </article>

              <TableOfContents />
            </GridWithSidebar>
          </Container>
        </Section>
      </ContentWrapper>
    </>
  );
};

export default Tag;
