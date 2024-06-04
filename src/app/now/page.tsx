import PageHeader from "@/components/PageHeader";
import TableOfContents from "@/components/TableOfContents";
import Container from "@/layout/Container";
import Section from "@/layout/Section";

const Page = () => {
  return (
    <>
      <PageHeader eyebrow="What I'm doing" title="Now">
        <p className="lead">
          From goals of being a concept artist to a zoologist, life led me to my
          true passion of being a User Interface designer and developer.{" "}
        </p>
      </PageHeader>
      <main className="post">
        <Section>
          <Container narrow>
            <div className="content">
              <div className="content__text">
                <h2>⏱️ Currently</h2>
                <p>Trying to find my purpose</p>
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
