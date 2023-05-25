import React from "react";
import { getAllBlogPostsData, getSingleBlogPostData } from "@/../lib/posts";
import { getMDXComponent } from "mdx-bundler/client";
import { BlogType } from "@/types/types";
import PageHeader from "@/components/PageHeader";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import FancyHeader from "@/components/FancyHeader";
import CallToAction from "@/components/CallToAction";
import BlogCard from "@/components/BlogCard";
import Note from "@/components/Note";
import TableOfContents from "@/components/TableOfContents";
import useGetHeaders from "@/hooks/useGetHeaders";
import useGetWordCount from "@/hooks/useGetWordCount";
import MetaData from "@/components/MetaData";
import { useRouter } from "next/router";

interface BlogPostProps {
  code: string;
  frontmatter: any;
  blogs: BlogType[];
}

export const getStaticProps = async ({ params }: any) => {
  // Get the review for this dynamic URL
  let blog = await getSingleBlogPostData(params.id);
  blog = JSON.parse(JSON.stringify(blog));

  // Get all reviews and pass to Post
  let blogs = await getAllBlogPostsData();
  blogs = JSON.parse(JSON.stringify(blogs));

  return {
    props: {
      ...blog,
      blogs,
    },
  };
};

export const getStaticPaths = () => {
  const paths = getAllBlogPostsData();
  return {
    paths,
    fallback: false,
  };
};

const BlogPost = ({ code, frontmatter, blogs }: BlogPostProps) => {
  const route = useRouter();
  const pageHeaders = useGetHeaders();
  const wordCount = useGetWordCount();
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const moreBlogs = blogs
    .filter((blog) => blog.params.draft === false)
    .filter((blog) => blog.params.title !== frontmatter.title)
    .sort(() => 0.5 - Math.random());

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
      <PageHeader title={frontmatter.title} tags={frontmatter.tags}>
        <p className="lead">{frontmatter.summary}</p>
      </PageHeader>
      <main className="post">
        <Section>
          <Container narrow>
            <div className="content">
              <div className="content__text">
                <div className="content__info">
                  <p>About a {wordCount} minute read.</p>
                </div>
                <Component
                  components={{
                    Note,
                  }}
                />
              </div>
              <div className="content__sidebar">
                <TableOfContents headers={pageHeaders} />
              </div>
            </div>
          </Container>
        </Section>
        <Section>
          <Container narrow>
            <FancyHeader>More stuff I've written</FancyHeader>
            <div className="blogs">
              {moreBlogs.map((blog, index) => {
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

export default BlogPost;
