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
import ProseContainer from "@/components/ProseContainer";

export const generateStaticParams = async () => {
  const blogs = await getContentList(CONTENT_PATHS["blog"]);

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
};

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const { frontmatter } = await loadContent(
    `${CONTENT_PATHS["blog"]}/${params.slug}`
  );

  return {
    title: frontmatter.title,
    description: frontmatter.summary,
  };
};

const BlogPost = async ({ params }: any) => {
  const { frontmatter, content, headers, wordCount } = await loadContent(
    `${CONTENT_PATHS["blog"]}/${params.slug}`
  );

  return (
    <>
      <PageHeader title={frontmatter.title} tags={frontmatter.tags}>
        <p className="lead">{frontmatter.summary}</p>
      </PageHeader>
      <ContentWrapper>
        <Section>
          <Container>
            <GridWithSidebar>
              <TableOfContents headers={headers} />
              <ProseContainer>
                <WordCount wordCount={wordCount} />
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
