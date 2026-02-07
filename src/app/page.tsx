import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import Tooltip from "@/components/Tooltip";
import PageHeader from "@/components/PageHeader";
import TextWithShimmer from "@/components/TextWithShimmer";
import Link from "next/link";
import Icon from "@/components/Icon";
import Container from "@/layout/Container";
import Section from "@/layout/Section";
import BackgroundCircle from "@/components/BackgroundCircle";

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
      <PageHeader plain>
        <Eyebrow style={{ color: "var(--color-primary-darker)" }}>
          🐜 Howdy
        </Eyebrow>
        <h1 className="header-huge">
          <TextWithShimmer>I'm Traek Wells</TextWithShimmer>
        </h1>
        <p className="lead">
          I’m a <Tooltip message={tooltipMessage}>front-end engineer</Tooltip>{" "}
          from Minnesota. Currently, I’m focused on learning and implementing
          modern web features.
        </p>
      </PageHeader>
      <Section>
        <Container>
          <p>
            <strong>Connect with me</strong>
          </p>
          <div className="d-flex gap-sm">
            <Link
              href="https://bsky.app/profile/traekwells.com"
              target="_blank"
              style={{ paddingBlockStart: "2px" }}
            >
              <Icon type="bluesky" />
            </Link>
            <Link href="https://instagram.com/theuilayer" target="_blank">
              <Icon type="instagram" />
            </Link>
            <Link href="https://github.com/TraekWells" target="_blank">
              <Icon type="github" />
            </Link>
            <Link href="https://www.youtube.com/@theuilayer" target="_blank">
              <Icon type="youtube" />
            </Link>
          </div>
        </Container>
      </Section>
      <BackgroundCircle />
    </main>
  );
};

export default Home;
