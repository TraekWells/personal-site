import React from "react";
import PageHeader from "@/components/PageHeader";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import Link from "next/link";
import { getContentList } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";
import { Metadata } from "next";
import GridWithSidebar from "@/layout/GridWithSidebar";
import ContentCardList from "@/components/ContentCardList";
import ContentTagFilter from "@/components/ContentTagFilter";

export const dynamicParams = true;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "A blog where I share what I've learned in the design and front-end development fields.",
};

const Blog = async () => {
  const blogs = (await getContentList(CONTENT_PATHS["blog"])).filter(
    (blog) => blog.draft === false
  );
  const tags = blogs.flatMap((blog) => blog.tags).filter(Boolean);
  // This is sweet, it removes duplicates from the tags array
  const uniqueTags = [...new Set(tags)];

  return (
    <>
      <PageHeader title="Writing">
        <p>
          Posts about topics ranging from User Experience, User Interface
          design, HTML, CSS, JavaScript and accessibility. See my{" "}
          <Link href="/journal">journal</Link> for everything else.
        </p>
      </PageHeader>
      <main id="main">
        <Section>
          <Container>
            <GridWithSidebar>
              <ContentTagFilter tags={uniqueTags} />
              <ContentCardList content={blogs} type="blog" />
            </GridWithSidebar>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Blog;
