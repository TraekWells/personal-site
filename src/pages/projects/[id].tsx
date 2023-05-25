import React from "react";
import {
  getAllProjectPostsData,
  getSingleProjectPostData,
} from "@/../lib/posts";
import { ProjectType } from "@/types/types";
import { getMDXComponent } from "mdx-bundler/client";
import PageHeader from "@/components/PageHeader";
import Container from "@/layout/Container";
import Section from "@/layout/Section";
import TableOfContents from "@/components/TableOfContents";
import FancyHeader from "@/components/FancyHeader";
import ProjectCard from "@/components/ProjectCard";
import CallToAction from "@/components/CallToAction";
import useGetHeaders from "@/hooks/useGetHeaders";
import MetaData from "@/components/MetaData";
import { useRouter } from "next/router";

interface ProjectPostProps {
  code: string;
  frontmatter: any;
  projects: ProjectType[];
}

export const getStaticProps = async ({ params }: any) => {
  let project = await getSingleProjectPostData(params.id);
  project = JSON.parse(JSON.stringify(project));

  let projects = await getAllProjectPostsData();
  projects = JSON.parse(JSON.stringify(projects));

  return {
    props: {
      ...project,
      projects,
    },
  };
};

export const getStaticPaths = () => {
  const paths = getAllProjectPostsData();
  return {
    paths,
    fallback: false,
  };
};

const ProjectPost = ({ code, frontmatter, projects }: ProjectPostProps) => {
  const route = useRouter();
  const pageHeaders = useGetHeaders();
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const moreProjects = projects
    .filter((project) => project.params.draft === false)
    .filter((project) => project.params.title !== frontmatter.title)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
  return (
    <>
      <MetaData
        title={frontmatter.title}
        description={frontmatter.summary}
        image={`https://www.traekwells.com/images/${frontmatter.image}`}
        type="article"
        url={`https://www.traekwells.com${route.asPath}`}
        createdAt={frontmatter.createdAt}
      />
      <PageHeader title={frontmatter.title}>
        <p className="lead">{frontmatter.summary}</p>
      </PageHeader>
      <main className="post">
        <Section>
          <img
            src={frontmatter.featuredImage}
            alt={frontmatter.title}
            className="featured-image"
          />
          <Container narrow>
            <div className="content">
              <div className="content__text">
                <Component />
              </div>
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
                <TableOfContents headers={pageHeaders} />
              </div>
            </div>
          </Container>
        </Section>
        <Section>
          <Container narrow>
            <FancyHeader>More Projects</FancyHeader>
            <div className="projects">
              {moreProjects.map((project, index) => {
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

export default ProjectPost;
