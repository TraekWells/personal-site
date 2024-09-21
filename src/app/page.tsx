import type { Metadata } from "next";
import Container from "@/layout/Container";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Home | UX Designer & Front-End Developer",
  description:
    "Start building your online presence today by working with me. I'm a freelance User Interface designer and developer who always puts the user first.",
};

const Home = async () => {
  return (
    <main id="main">
      <Container>
        <Eyebrow>Hello, I'm Traek</Eyebrow>
        <h1>Coming Soon (maybe)</h1>
      </Container>
    </main>
  );
};

export default Home;
