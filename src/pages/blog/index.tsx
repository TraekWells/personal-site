import React from "react";
import { getAllBlogPostsData } from "@/../lib/posts";
import { BlogType } from "@/types/types";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import CallToAction from "@/components/CallToAction";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import Link from "next/link";
import { NextSeo } from "next-seo";

interface BlogPageProps {
  blogs: BlogType[];
}

export const getStaticProps = () => {
  let blogs = getAllBlogPostsData();
  blogs = JSON.parse(JSON.stringify(blogs));

  return {
    props: {
      blogs,
    },
  };
};

const Projects = ({ blogs }: BlogPageProps) => {
  return (
    <>
      <NextSeo
        title="Blog"
        description="A blog where I share what I've learned in the design and front-end development fields."
        openGraph={{
          url: "https://www.traekwells.com/blog",
        }}
        canonical="https://www.traekwells.com/blog"
      />
      <PageHeader title="Some blogs that I’ve written" eyebrow="Writing">
        <p className="lead">
          Posts about topics ranging from User Experience, User Interface
          design, HTML, CSS, JavaScript and accessibility. See my{" "}
          <Link href="/journal">journal</Link> for everything else.
        </p>
      </PageHeader>
      <main id="main">
        <Section>
          <Container narrow>
            <div className="blogs">
              {blogs.map((blog, index) => {
                return (
                  <BlogCard
                    key={index}
                    title={blog.params.title}
                    slug={blog.params.slug}
                    summary={blog.params.summary}
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
