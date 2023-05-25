import React from "react";
import { getAllJournalPostsData } from "@/../lib/posts";
import { JournalType } from "@/types/types";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import CallToAction from "@/components/CallToAction";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import Link from "next/link";
import { NextSeo } from "next-seo";

interface JournalPageProps {
  journals: JournalType[];
}

export const getStaticProps = () => {
  let journals = getAllJournalPostsData();
  journals = JSON.parse(JSON.stringify(journals));

  return {
    props: {
      journals,
    },
  };
};

const Projects = ({ journals }: JournalPageProps) => {
  return (
    <>
      <NextSeo
        title="Journal"
        description="This is a place for me to share anything that doesn't fit into my normal blog topics. Most likely about life, being productive and ants."
        openGraph={{
          url: "https://www.traekwells.com/journal",
        }}
        canonical="https://www.traekwells.com/journal"
      />
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
                    title={journal.params.title}
                    slug={journal.params.slug}
                    summary={journal.params.summary}
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
