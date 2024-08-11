import PageHeader from "@/components/PageHeader";
import TableOfContents from "@/components/TableOfContents";
import Container from "@/layout/Container";
import Section from "@/layout/Section";

const Page = () => {
  return (
    <>
      <PageHeader eyebrow="What I'm doing" title="Now"></PageHeader>
      <main className="post">
        <Section>
          <Container narrow>
            <div className="content">
              <div className="content__text">
                <h2>⏱️ Currently</h2>
                <ul>
                  <li>Learning the electric guitar</li>
                  <li>Building my little brother a website</li>
                  <li>Learning about modern CSS stuff</li>
                  <li>Training for a half-marathon</li>
                </ul>
                <h2>🤔 What's next?</h2>
                <ul>
                  <li>Probably going to re-design this website again</li>
                </ul>
              </div>
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
