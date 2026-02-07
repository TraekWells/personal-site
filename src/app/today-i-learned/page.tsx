import React from "react";
import PageHeader from "@/components/PageHeader";
import Section from "@/layout/Section";
import Container from "@/layout/Container";
import { getContentList } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";
import { Metadata } from "next";
import ContentWrapper from "@/layout/ContentWrapper";
import ContentCardList from "@/components/ContentCardList";
import { BlogFrontmatterTypes } from "@/types/types";

export const metadata: Metadata = {
  title: "Today I Learned",
  description:
    "This is a collection of some of the web development things I learned while stumbling around the internet. ",
};

const Learnings = async () => {
  const learnings = (await getContentList(
    CONTENT_PATHS.todayILearned
  )) as BlogFrontmatterTypes[];
  return (
    <>
      <PageHeader>
        <h1>Today I learned</h1>
        <p className="lead">todo</p>
      </PageHeader>
      <ContentWrapper>
        <Section>
          <Container>
            <ContentCardList content={learnings} type="today-i-learned" />
          </Container>
        </Section>
      </ContentWrapper>
    </>
  );
};

export default Learnings;
