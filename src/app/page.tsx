import type { Metadata } from "next";
import Container from "@/layout/Container";
import Eyebrow from "@/components/Eyebrow";
import Tooltip from "@/components/Tooltip";
import Section from "@/layout/Section";
import BioWithSwitch from "@/components/BioWithSwitch";
import PageHeader from "@/components/PageHeader";
import TextWithShimmer from "@/components/TextWithShimmer";

export const metadata: Metadata = {
  title: "Home | UX Designer & Front-End Developer",
  description:
    "Start building your online presence today by working with me. I'm a freelance User Interface designer and developer who always puts the user first.",
};

const Home = async () => {
  const tooltipMessage =
    "Also known as a Front-end Developer, UI Developer, Web Developer, UX Designer, you get it.";
  return (
    <main id="main">
      <PageHeader huge plain>
        <Eyebrow style={{ color: "var(--color-primary-darker)" }}>
          🐜 Howdy, I'm Traek
        </Eyebrow>
        <h1 className="header-huge">
          <TextWithShimmer>I organize pixels on a screen</TextWithShimmer>✨
        </h1>
        <p className="lead">
          No but seriously, I’m a{" "}
          <Tooltip message={tooltipMessage}>front-end engineer</Tooltip> from
          Minnesota. Currently, I’m focused on learning and implementing modern
          web features.{" "}
        </p>
      </PageHeader>
      <Container>
        <Section>
          <BioWithSwitch />
        </Section>
      </Container>
      <Container>
        <Section>
          <h2>What I'm working now</h2>
          <p>
            Building my wife a website. I'm sure I'll add more details later.
          </p>
        </Section>
      </Container>
    </main>
  );
};

export default Home;
