import React from "react";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import CallToAction from "@/components/CallToAction";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import Link from "next/link";
import { getContentList } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "This is a place for me to share anything that doesn't fit into my normal blog topics. Most likely about life, being productive and ants.",
};

const Projects = async () => {
  const journals = await getContentList(CONTENT_PATHS["journal"]);
  return (
    <>
      <PageHeader title="Other thoughts" eyebrow="Journal">
        <p className="lead">
          This is a place for me to share anything that doesn't fit into my
          normal <Link href="/blog">blog</Link> topics. Most likely about life,
          being productive and ants.
        </p>
      </PageHeader>
      <main id="main">
        <Section>
          <Container narrow>
            <div className="blogs">
              {journals.map((journal, index) => {
                return (
                  <BlogCard
                    key={index}
                    title={journal.title}
                    slug={`/journal/${journal.slug}`}
                    summary={journal.summary}
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
