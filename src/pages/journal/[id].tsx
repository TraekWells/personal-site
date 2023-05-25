import React from "react";
import {
  getAllJournalPostsData,
  getSingleJournalPostData,
} from "@/../lib/posts";
import { getMDXComponent } from "mdx-bundler/client";
import { JournalType } from "@/types/types";
import PageHeader from "@/components/PageHeader";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import FancyHeader from "@/components/FancyHeader";
import CallToAction from "@/components/CallToAction";
import BlogCard from "@/components/BlogCard";
import Note from "@/components/Note";
import Video from "@/components/Video";
import useGetHeaders from "@/hooks/useGetHeaders";
import TableOfContents from "@/components/TableOfContents";
import useGetWordCount from "@/hooks/useGetWordCount";
import MetaData from "@/components/MetaData";
import { useRouter } from "next/router";

interface JournalPostProps {
  code: string;
  frontmatter: any;
  journals: JournalType[];
}

export const getStaticProps = async ({ params }: any) => {
  // Get the review for this dynamic URL
  let journal = await getSingleJournalPostData(params.id);
  journal = JSON.parse(JSON.stringify(journal));

  // Get all reviews and pass to Post
  let journals = await getAllJournalPostsData();
  journals = JSON.parse(JSON.stringify(journals));

  return {
    props: {
      ...journal,
      journals,
    },
  };
};

export const getStaticPaths = () => {
  const paths = getAllJournalPostsData();
  return {
    paths,
    fallback: false,
  };
};

const JournalPost = ({ code, frontmatter, journals }: JournalPostProps) => {
  const route = useRouter();
  const pageHeaders = useGetHeaders();
  const wordCount = useGetWordCount();
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const moreJournals = journals
    .filter((journal) => journal.params.draft === false)
    .filter((journal) => journal.params.title !== frontmatter.title)
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
      <PageHeader title={frontmatter.title}>
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
                    Video,
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
              {moreJournals.map((journal, index) => {
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

export default JournalPost;
