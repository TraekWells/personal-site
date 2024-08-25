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
      <main className="post">
        <Section>
          <Container>
            <div className="content">
              <div className="content__text">
                <WordCount />
                {content}
              </div>
              <div className="content__sidebar">
                <TableOfContents />
              </div>
            </div>
          </Container>
        </Section>
        <Section slim>
          <Container>
            <FancyHeader>More stuff I've written</FancyHeader>
            <div className="blogs">
              <div className="blogs">
                {moreJournals.map((journal) => {
                  return (
                    <BlogCard
                      key={journal.slug}
                      title={journal.title}
                      slug={journal.slug}
                      summary={journal.summary}
                    />
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default JournalPost;
