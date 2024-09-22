import React from "react";
import PageHeader from "@/components/PageHeader";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import TableOfContents from "@/components/TableOfContents";
import { getContentList, loadContent } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";
import WordCount from "@/components/WordCount";
import { Metadata } from "next";
import ContentWrapper from "@/layout/ContentWrapper";
import GridWithSidebar from "@/layout/GridWithSidebar";
import TextLinkWithIcon from "@/components/TextLinkWithIcon";
import ProseContainer from "@/layout/ProseContainer";
import FancyRule from "@/components/FancyRule";

export const generateStaticParams = async () => {
  const journal = await getContentList(CONTENT_PATHS["journal"]);

  return journal.map((journal) => ({
    slug: journal.slug,
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
  const { frontmatter, content, headers, wordCount } = await loadContent(
    `${CONTENT_PATHS["journal"]}/${params.slug}`
  );

  return (
    <>
      <PageHeader title={frontmatter.title}>
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
            <TextLinkWithIcon href="/journal">
              Back to all posts
            </TextLinkWithIcon>
          </Container>
        </Section>
      </ContentWrapper>
    </>
  );
};

export default JournalPost;
