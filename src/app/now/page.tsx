import PageHeader from "@/components/PageHeader";
import TableOfContents from "@/components/TableOfContents";
import { CONTENT_PATHS } from "@/constants";
import { loadContent } from "@/helpers/file-helpers";
import Container from "@/layout/Container";
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
  const { content } = await loadContent(`${CONTENT_PATHS["pages"]}/now`);
  return (
    <>
      <PageHeader title="Now"></PageHeader>
      <main>
        <Section>
          <Container narrow>
            <GridWithSidebar>
              <article>{content}</article>
              <TableOfContents />
            </GridWithSidebar>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Page;
