import React from "react";

import PageHeader from "@/components/PageHeader";
import Container from "@/layout/Container";
import Section from "@/layout/Section";
import TableOfContents from "@/components/TableOfContents";
import ProjectCard from "@/components/ProjectCard";
import { getContentList, loadContent } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";
import { Metadata } from "next";

type ProjectPostProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () => {
  const projects = await getContentList(CONTENT_PATHS["projects"]);

  return projects.map((project) => ({
    slug: project.slug,
  }));
};

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const { frontmatter } = await loadContent(
    `${CONTENT_PATHS["projects"]}/${params.slug}`
  );

  return {
    title: frontmatter.title,
    description: frontmatter.summary,
  };
};

const ProjectPost = async ({ params }: ProjectPostProps) => {
  const { frontmatter, content, headers } = await loadContent(
    `${CONTENT_PATHS["projects"]}/${params.slug}`
  );
  const projects = await getContentList(CONTENT_PATHS["projects"]);
  const moreProjects = projects
    .filter((project) => project.draft === false)
    .filter((project) => project.title !== frontmatter.title)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
  return (
    <>
      <PageHeader>
        <h1>{frontmatter.title}</h1>
        <p className="lead">{frontmatter.summary}</p>
      </PageHeader>
      <main className="post">
        <Section>
          <img
            src={frontmatter.featuredImage}
            alt={frontmatter.title}
            className="featured-image"
            style={{ marginTop: -8 + "rem" }}
          />
          <Container narrow>
            <div className="content">
              <div className="content__text">{content}</div>
              <div className="content__sidebar">
                <p className="eyebrow">Technology Used</p>
                <ul className="technology">
                  {frontmatter.technology.map((tech: string, index: number) => {
                    return (
                      <li className="technology__item" key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="technology__icon-wrapper"
                          fill="currentColor"
                          stroke="none"
                        >
                          <g fill="none">
                            <path d="M0 0h24v24H0Z"></path>
                            <g
                              strokeLinecap="round"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinejoin="round"
                            >
                              <path d="M4.48 11.98h14.99"></path>
                              <path d="M13.483 5.988L19.513 12l-6.04 6.01"></path>
                            </g>
                          </g>
                        </svg>
                        <span>{tech}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className="eyebrow">Project Links</p>
                <ul>
                  {frontmatter.linkToProject && (
                    <li>
                      <a
                        href={frontmatter.linkToProject}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        View Live Project
                      </a>
                    </li>
                  )}
                  {frontmatter.linkToCode && (
                    <li>
                      <a
                        href={frontmatter.linkToCode}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        View Code
                      </a>
                    </li>
                  )}
                </ul>
                <TableOfContents headers={headers} />
              </div>
            </div>
          </Container>
        </Section>
        <Section slim>
          <Container narrow>
            <h2>More Projects</h2>
            <div className="projects">
              {moreProjects.map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    previewImage={project.previewImage}
                    title={project.title}
                    slug={project.slug}
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

export default ProjectPost;
