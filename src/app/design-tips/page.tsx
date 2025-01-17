import PageHeader from "@/components/PageHeader";
import Container from "@/layout/Container";
import Section from "@/layout/Section";

const DesignTips = () => {
  return (
    <>
      <PageHeader>
        <h1>Design Tips</h1>
        <p>Some design related tips I've learned over the years.</p>
      </PageHeader>
      <main id="main">
        <Section>
          <Container>
            <h2>Check back soon!</h2>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default DesignTips;
