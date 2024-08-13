import PageHeader from "@/components/PageHeader";
import TableOfContents from "@/components/TableOfContents";
import { loadContent } from "@/helpers/file-helpers";
import Container from "@/layout/Container";
import Section from "@/layout/Section";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const { frontmatter } = await loadContent("/src/app/now/content");

  return {
    title: frontmatter.title,
    description: frontmatter.summary,
  };
};

const Page = async () => {
  const { content } = await loadContent("/src/app/now/content");
  return (
    <>
      <PageHeader eyebrow="What I'm doing" title="Now"></PageHeader>
      <main className="post">
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
      </main>
    </>
  );
};

export default Page;
