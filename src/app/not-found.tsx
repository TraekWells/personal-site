import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import Container from "@/layout/Container";
import Section from "@/layout/Section";
import Link from "next/link";
import React from "react";

const FourOhFour = () => {
  return (
    <>
      {/* <NextSeo
        title="404"
        description="Uh oh, you've reached a page that doesn't exist. Sorry about that."
        canonical="https://www.traekwells.com/404"
      /> */}
      <PageHeader eyebrow="Uh oh" title="Page not found" />
      <main id="main">
        <Section>
          <Container>
            <p>You may have clicked on an old link, sorry about that.</p>
            <Link href="/" className="read-more">
              Back to the homepage <Icon type="arrowRight" />
            </Link>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default FourOhFour;
