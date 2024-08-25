import React from "react";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import { getContentList } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Here are some projects that I've worked on that I had a blast doing. I've had the pleasure of working with some great people.",
};

const Projects = async () => {
  const projects = await getContentList(CONTENT_PATHS["projects"]);
  return (
    <>
      <PageHeader title="Projects">
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
                    previewImage={project.previewImage}
                    title={project.title}
                    slug={`/projects/${project.slug}`}
                    summary={project.summary}
                  />
                );
              })}
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Projects;
