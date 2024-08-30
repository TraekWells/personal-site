import React from "react";
import PageHeader from "@/components/PageHeader";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import BlogCard from "@/components/BlogCard";
import TableOfContents from "@/components/TableOfContents";
import { getContentList, loadContent } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";
import WordCount from "@/components/WordCount";
import { Metadata } from "next";
import GridWithSidebar from "@/layout/GridWithSidebar";

export const generateStaticParams = async () => {
  const blogs = await getContentList(CONTENT_PATHS["blog"]);

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
};

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const { frontmatter } = await loadContent(
    `${CONTENT_PATHS["blog"]}/${params.slug}`
  );

  return {
    title: frontmatter.title,
    description: frontmatter.summary,
  };
};

const BlogPost = async ({ params }: any) => {
  const { frontmatter, content } = await loadContent(
    `${CONTENT_PATHS["blog"]}/${params.slug}`
  );
  const blogs = await getContentList(CONTENT_PATHS["blog"]);
  const moreBlogs = blogs
    .filter((blog) => blog.draft === false)
    .filter((blog) => blog.title !== frontmatter.title)
    .sort(() => 0.5 - Math.random());

  return (
    <>
      <PageHeader title={frontmatter.title} tags={frontmatter.tags}>
        <p className="lead">{frontmatter.summary}</p>
      </PageHeader>
      <main className="post">
        <Section>
          <Container>
            <GridWithSidebar>
              <article className="flow">
                <WordCount />
                {content}
              </article>

              <TableOfContents />
            </GridWithSidebar>
          </Container>
        </Section>
        <Section slim>
          <Container>
            <h2>More stuff I've written</h2>
            <div className="blogs">
              <div className="blogs">
                {moreBlogs.map((blog, index) => {
                  return (
                    <BlogCard
                      key={index}
                      title={blog.title}
                      slug={blog.slug}
                      summary={blog.summary}
                    />
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default BlogPost;
