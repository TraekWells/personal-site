import React from "react";
import PageHeader from "@/components/PageHeader";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import Link from "next/link";
import { getContentList } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";
import { Metadata } from "next";
import GridWithSidebar from "@/layout/GridWithSidebar";
import ContentWrapper from "@/layout/ContentWrapper";
import ContentCardList from "@/components/ContentCardList";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "This is a place for me to share anything that doesn't fit into my normal blog topics. Most likely about life, being productive and ants.",
};

const Journal = async () => {
  const journals = await getContentList(CONTENT_PATHS["journal"]);
  return (
    <>
      <PageHeader title="Other thoughts">
        <p className="lead">
          This is a place for me to share anything that doesn't fit into my
          normal <Link href="/blog">blog</Link> topics. Most likely about life,
          being productive and ants.
        </p>
      </PageHeader>
      <ContentWrapper>
        <Section>
          <Container>
            <ContentCardList content={journals} type="journal" />
          </Container>
        </Section>
      </ContentWrapper>
    </>
  );
};

export default Journal;
