import React from "react";
import PageHeader from "@/components/PageHeader";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import TableOfContents from "@/components/TableOfContents";
import { getContentList, loadContent } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";
import WordCount from "@/components/WordCount";
import { Metadata } from "next";
import GridWithSidebar from "@/layout/GridWithSidebar";
import ContentWrapper from "@/layout/ContentWrapper";
import TextLinkWithIcon from "@/components/TextLinkWithIcon";
import FancyRule from "@/components/FancyRule";
import ProseContainer from "@/layout/ProseContainer";
import { BlogFrontmatterTypes } from "@/types/types";

// Generate static params for blog post slugs
export const generateStaticParams = async () => {
  const blogs = (await getContentList(
    CONTENT_PATHS["blog"]
  )) as BlogFrontmatterTypes[];

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
};

// Generate metadata for each blog post
export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const { slug } = await params;
  const { frontmatter } = await loadContent(`${CONTENT_PATHS["blog"]}/${slug}`);

  return {
    title: frontmatter.title,
    description: frontmatter.summary,
  };
};

// Blog post component
const BlogPost = async ({ params }: any) => {
  const { slug } = await params;
  const { frontmatter, content, headers, wordCount } = await loadContent(
    `${CONTENT_PATHS["blog"]}/${slug}`
  );

  return (
    <>
      <PageHeader tags={frontmatter.tags}>
        <h1>{frontmatter.title}</h1>
      </PageHeader>
      <ContentWrapper>
        <Section>
          <Container>
            <GridWithSidebar>
              <TableOfContents headers={headers} />
              <ProseContainer>
                <WordCount wordCount={wordCount} />
                <p className="lead">{frontmatter.summary}</p>
                {content}
                <FancyRule />
              </ProseContainer>
            </GridWithSidebar>
            <TextLinkWithIcon href="/blog">Back to all posts</TextLinkWithIcon>
          </Container>
        </Section>
      </ContentWrapper>
    </>
  );
};

export default BlogPost;
