import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/layout/Container";
import Section from "@/layout/Section";
import Icon from "@/components/Icon";
import CallToAction from "@/components/CallToAction";
import FancyHeader from "@/components/FancyHeader";
import CalloutBox from "@/components/CalloutBox";
import Testimonial from "@/components/Testimonial";
import ProjectCard from "@/components/ProjectCard";
import { getContentList } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";

export const metadata: Metadata = {
  title: "Home | UX Designer & Front-End Developer",
  description:
    "Start building your online presence today by working with me. I'm a freelance User Interface designer and developer who always puts the user first.",
};

const Home = async () => {
  const projects = await getContentList(CONTENT_PATHS["projects"]);
  return (
    <main id="main">
      <p>under construction</p>
    </main>
  );
};

export default Home;
