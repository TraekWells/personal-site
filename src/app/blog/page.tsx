import React from "react";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import Link from "next/link";
import { getContentList } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";
import { Metadata } from "next";
import GridWithSidebar from "@/layout/GridWithSidebar";
import BlogCardList from "@/components/BlogCardList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "A blog where I share what I've learned in the design and front-end development fields.",
};

const Blog = async () => {
  const blogs = await getContentList(CONTENT_PATHS["blog"]);

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
              <BlogCardList blogs={blogs} />
              <p>Sidebar</p>
            </GridWithSidebar>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Blog;
