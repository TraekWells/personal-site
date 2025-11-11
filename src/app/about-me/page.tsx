import PageHeader from "@/components/PageHeader";
import TableOfContents from "@/components/TableOfContents";
import { CONTENT_PATHS } from "@/constants";
import { loadContent } from "@/helpers/file-helpers";
import Container from "@/layout/Container";
import ContentWrapper from "@/layout/ContentWrapper";
import GridWithSidebar from "@/layout/GridWithSidebar";
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
  const { content, headers } = await loadContent(
    `${CONTENT_PATHS["pages"]}/about-me`
  );
  return (
    <>
      <PageHeader>
        <h1>My Story</h1>
        <p className="lead">
          From goals of being a concept artist to a zoologist, life led me to my
          true passion of being a User Interface designer and developer.
        </p>
      </PageHeader>
      <ContentWrapper>
        <Section>
          <Container>
            <GridWithSidebar>
              <TableOfContents headers={headers} />
              <article className="prose flow">{content}</article>
            </GridWithSidebar>
          </Container>
        </Section>
      </ContentWrapper>
    </>
  );
};

export default AboutMe;
