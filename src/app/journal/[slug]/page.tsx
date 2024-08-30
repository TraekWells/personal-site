import React from "react";
import PageHeader from "@/components/PageHeader";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import FancyHeader from "@/components/FancyHeader";
import BlogCard from "@/components/BlogCard";
import TableOfContents from "@/components/TableOfContents";
import { getContentList, loadContent } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";
import WordCount from "@/components/WordCount";
import { Metadata } from "next";
import ContentWrapper from "@/layout/ContentWrapper";
import GridWithSidebar from "@/layout/GridWithSidebar";
import BlogCardList from "@/components/BlogCardList";

export const generateStaticParams = async () => {
  const journal = await getContentList(CONTENT_PATHS["journal"]);

  return journal.map((blog) => ({
    slug: blog.slug,
  }));
};

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const { frontmatter } = await loadContent(
    `${CONTENT_PATHS["journal"]}/${params.slug}`
  );

  return {
    title: frontmatter.title,
    description: frontmatter.summary,
  };
};

const JournalPost = async ({ params }: any) => {
  const { frontmatter, content } = await loadContent(
    `${CONTENT_PATHS["journal"]}/${params.slug}`
  );
  const journals = await getContentList(CONTENT_PATHS["journal"]);
  const moreJournals = journals
    .filter((journal) => journal.draft === false)
    .filter((journal) => journal.title !== frontmatter.title)
    .sort(() => 0.5 - Math.random());

  return (
    <>
      <PageHeader title={frontmatter.title} tags={frontmatter.tags}>
        <p className="lead">{frontmatter.summary}</p>
      </PageHeader>
      <ContentWrapper>
        <Section>
          <Container>
            <GridWithSidebar>
              <article className="flow">
                <WordCount />
                {content}
              </article>
              <TableOfContents />
            </GridWithSidebar>
          </Container>
        </Section>
        <Section slim>
          <Container>
            <h2>More stuff I've written</h2>
            <BlogCardList blogs={moreJournals} />
          </Container>
        </Section>
      </ContentWrapper>
    </>
  );
};

export default JournalPost;
