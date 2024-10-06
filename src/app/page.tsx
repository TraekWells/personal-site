import type { Metadata } from "next";
import Container from "@/layout/Container";
import Eyebrow from "@/components/Eyebrow";
import Tooltip from "@/components/Tooltip";
import Section from "@/layout/Section";
import Grid from "@/layout/Grid";
import BioWithToggle from "@/components/BioWithToggle";

export const metadata: Metadata = {
  title: "Home | UX Designer & Front-End Developer",
  description:
    "Start building your online presence today by working with me. I'm a freelance User Interface designer and developer who always puts the user first.",
};

const Home = async () => {
  return (
    <main id="main">
      <Container>
        <Eyebrow>Howdy, I'm Traek</Eyebrow>
        <h1 className="header-huge">I organize pixels on a screen ✨</h1>
        <p className="lead">
          But seriously, I’m a{" "}
          <Tooltip message="test message">front-end engineer</Tooltip> from
          Minnesota. Currently, I’m focused learning and implementing modern web
          features.{" "}
        </p>

        <Section>
          <BioWithToggle />
        </Section>
      </Container>
    </main>
  );
};

export default Home;
