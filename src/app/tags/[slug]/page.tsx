import React from "react";
import PageHeader from "@/components/PageHeader";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import { getContentList } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";
import { Metadata } from "next";
import ContentWrapper from "@/layout/ContentWrapper";
import slugify from "@/utilities/slugify";
import unslug from "@/utilities/unslug";
import ContentCard from "@/components/ContentCard";
import TextLinkWithIcon from "@/components/TextLinkWithIcon";
import ProseContainer from "@/layout/ProseContainer";
import { BlogFrontmatterTypes } from "@/types/types";

export const generateStaticParams = async () => {
  const blogs = (await getContentList(
    CONTENT_PATHS["blog"]
  )) as BlogFrontmatterTypes[];
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
  const { slug } = await params;
  return {
    title: `Posts tagged ${unslug(slug)}`,
    description: "Test description",
  };
};

const Tag = async ({ params }: any) => {
  const { slug } = await params;
  const unsluged = unslug(slug);
  const blogs = (await getContentList(
    CONTENT_PATHS["blog"]
  )) as BlogFrontmatterTypes[];

  const taggedBlogs = blogs.filter((blog) => {
    if (blog.tags) {
      const lowered = blog.tags.map((tag: string) => tag.toLowerCase());
      return lowered.includes(unsluged.toLowerCase());
    }
  });

  return (
    <>
      <PageHeader>
        <h1>{`Posts tagged ${unsluged}`}</h1>
      </PageHeader>
      <ContentWrapper>
        <Section>
          <Container>
            <ProseContainer>
              <TextLinkWithIcon href="/blog">
                Back to all posts
              </TextLinkWithIcon>
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
            </ProseContainer>
          </Container>
        </Section>
      </ContentWrapper>
    </>
  );
};

export default Tag;
