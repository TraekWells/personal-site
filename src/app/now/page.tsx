import PageHeader from "@/components/PageHeader";
import ProseContainer from "@/layout/ProseContainer";
import TableOfContents from "@/components/TableOfContents";
import { CONTENT_PATHS } from "@/constants";
import { loadContent } from "@/helpers/file-helpers";
import Container from "@/layout/Container";
import ContentWrapper from "@/layout/ContentWrapper";
import GridWithSidebar from "@/layout/GridWithSidebar";
import Section from "@/layout/Section";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const { frontmatter } = await loadContent(`${CONTENT_PATHS["pages"]}/now`);

  return {
    title: frontmatter.title,
    description: frontmatter.summary,
  };
};

const Page = async () => {
  const { content, headers } = await loadContent(
    `${CONTENT_PATHS["pages"]}/now`
  );
  return (
    <>
      <PageHeader>
        <h1>Now</h1>
        <p>What I've been up to.</p>
      </PageHeader>
      <ContentWrapper>
        <Section>
          <Container>
            <GridWithSidebar>
              <TableOfContents headers={headers} />
              <ProseContainer>{content}</ProseContainer>
            </GridWithSidebar>
          </Container>
        </Section>
      </ContentWrapper>
    </>
  );
};

export default Page;
