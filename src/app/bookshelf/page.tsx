import Book from "@/components/Book";
import BookGrid from "@/components/BookGrid";
import PageHeader from "@/components/PageHeader";
import { CONTENT_PATHS } from "@/constants";
import { getContentList } from "@/helpers/file-helpers";
import Container from "@/layout/Container";
import Section from "@/layout/Section";
import { BookType } from "@/types/types";
import React from "react";

const Page = async () => {
  const books: BookType[] = (await getContentList(
    CONTENT_PATHS["books"]
  )) as BookType[];

  return (
    <>
      <PageHeader>
        <h1>Bookshelf</h1>
      </PageHeader>
      <main id="main">
        <Section>
          <Container>
            <BookGrid>
              {books.map((book: BookType) => {
                return (
                  <Book
                    title={book.title}
                    image={book.bookCover}
                    author={book.author}
                    rating={book.rating}
                    summary={book.summary}
                    review={book.review}
                    key={book.title}
                  />
                );
              })}
            </BookGrid>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Page;
