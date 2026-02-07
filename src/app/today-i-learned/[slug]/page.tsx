import React from "react";
import PageHeader from "@/components/PageHeader";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import { getContentList, loadContent } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";
import WordCount from "@/components/WordCount";
import { Metadata } from "next";
import ContentWrapper from "@/layout/ContentWrapper";
import TextLinkWithIcon from "@/components/TextLinkWithIcon";
import ProseContainer from "@/layout/ProseContainer";
import FancyRule from "@/components/FancyRule";
import parseDate from "@/utilities/parse-date";
import { BlogFrontmatterTypes } from "@/types/types";
import Grid from "@/layout/Grid";

export const generateStaticParams = async () => {
  const learnings = (await getContentList(
    CONTENT_PATHS.todayILearned
  )) as BlogFrontmatterTypes[];

  return learnings.map((learning) => ({
    slug: learning.slug,
  }));
};

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const { slug } = await params;
  const { frontmatter } = await loadContent(
    `${CONTENT_PATHS.todayILearned}/${slug}`
  );

  return {
    title: frontmatter.title,
    description: frontmatter.summary,
  };
};

const LearningPost = async ({ params }: any) => {
  const { slug } = await params;
  const { frontmatter, content, wordCount } = await loadContent(
    `${CONTENT_PATHS.todayILearned}/${slug}`
  );

  const updatedDate = frontmatter.updatedAt
    ? parseDate(frontmatter.updatedAt)
    : null;

  return (
    <>
      <PageHeader>
        <h1>{frontmatter.title}</h1>
        <p className="lead">{frontmatter.summary}</p>
      </PageHeader>
      <ContentWrapper>
        <Section>
          <Container>
            <Grid>
              <ProseContainer>
                <WordCount wordCount={wordCount} />
                {frontmatter.updatedAt && (
                  <small>Last updated: {updatedDate}</small>
                )}
                {content}
                <FancyRule />
              </ProseContainer>
            </Grid>
            <TextLinkWithIcon href="/today-i-learned">
              Back to all posts
            </TextLinkWithIcon>
          </Container>
        </Section>
      </ContentWrapper>
    </>
  );
};

export default LearningPost;
