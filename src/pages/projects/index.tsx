import React from "react";
import { getAllProjectPostsData } from "@/../lib/posts";
import { ProjectType } from "@/types/types";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import CallToAction from "@/components/CallToAction";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import { NextSeo } from "next-seo";

interface ProjectPageProps {
  projects: ProjectType[];
}

export const getStaticProps = () => {
  let projects = getAllProjectPostsData();
  projects = JSON.parse(JSON.stringify(projects));

  return {
    props: {
      projects,
    },
  };
};

const Projects = ({ projects }: ProjectPageProps) => {
  return (
    <>
      <NextSeo
        title="Projects"
        description="Here are some projects that I've worked on that I had a blast doing. I've had the pleasure of working with some great people."
        openGraph={{
          url: "https://www.traekwells.com/projects",
        }}
        canonical="https://www.traekwells.com/projects"
      />
      <PageHeader title="Projects" eyebrow="Work">
        <p className="lead">
          Here are some of my favorite projects that I've worked on.
        </p>
      </PageHeader>
      <main id="main">
        <Section>
          <Container narrow>
            <div className="projects">
              {projects.map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    previewImage={project.params.previewImage}
                    title={project.params.title}
                    slug={project.params.slug}
                    summary={project.params.summary}
                  />
                );
              })}
            </div>
          </Container>
        </Section>
        <Section>
          <Container narrow>
            <CallToAction />
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Projects;
