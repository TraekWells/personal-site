import PageHeader from "@/components/PageHeader";
import TableOfContents from "@/components/TableOfContents";
import { CONTENT_PATHS } from "@/constants";
import { loadContent } from "@/helpers/file-helpers";
import Container from "@/layout/Container";
import ContentWrapper from "@/layout/ContentWrapper";
import Section from "@/layout/Section";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const { frontmatter } = await loadContent(
    `${CONTENT_PATHS["pages"]}/about-me`
  );

  return {
    title: frontmatter.title,
    description: frontmatter.summary,
  };
};

const AboutMe = async () => {
  const { content } = await loadContent(`${CONTENT_PATHS["pages"]}/about-me`);
  return (
    <>
      <PageHeader title="My story">
        <p className="lead">
          From goals of being a concept artist to a zoologist, life led me to my
          true passion of being a User Interface designer and developer.
        </p>
      </PageHeader>
      <ContentWrapper>
        <Section>
          <Container narrow>
            <div className="content">
              <div className="content__text">{content}</div>
              <div className="content__sidebar">
                <TableOfContents />
              </div>
            </div>
          </Container>
        </Section>
      </ContentWrapper>
    </>
  );
};

export default AboutMe;
