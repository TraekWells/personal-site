import Book from "@/components/Book";
import PageHeader from "@/components/PageHeader";
import { CONTENT_PATHS } from "@/constants";
import { getContentList, loadContent } from "@/helpers/file-helpers";
import Container from "@/layout/Container";
import Section from "@/layout/Section";
import { BookType } from "@/types/types";
import React from "react";

const Page = async () => {
  const books: BookType[] = (await getContentList(
    CONTENT_PATHS["books"]
  )) as BookType[];

  console.log(books);

  return (
    <>
      <PageHeader>
        <h1>Bookshelf</h1>
        <p className="lead">What goes here?</p>
      </PageHeader>
      <main id="main">
        <Section>
          <Container>
            <h1>Shelf</h1>
            {books.map((book: BookType) => {
              return <Book {...book} key={book.title} />;
            })}
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Page;
