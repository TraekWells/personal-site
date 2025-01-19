import Book from "@/components/Book";
import BookGrid from "@/components/BookGrid";
import PageHeader from "@/components/PageHeader";
import { CONTENT_PATHS } from "@/constants";
import { getContentList } from "@/helpers/file-helpers";
import Container from "@/layout/Container";
import Section from "@/layout/Section";
import { BookType } from "@/types/types";
import { p } from "motion/react-client";
import React from "react";

const Page = async () => {
  const books: BookType[] = (await getContentList(
    CONTENT_PATHS["books"]
  )) as BookType[];

  const booksByYear = books.reduce((acc, book) => {
    const year = new Date(book.dateRead).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(book);
    return acc;
  }, {} as Record<string, BookType[]>);

  const booksByYearArray = Object.entries(booksByYear).sort(
    (a, b) => parseInt(b[0]) - parseInt(a[0])
  );

  return (
    <>
      <PageHeader>
        <h1>Bookshelf</h1>
      </PageHeader>
      <main id="main">
        <Section>
          <Container>
            {booksByYearArray.map((year) => {
              return (
                <>
                  <h2>{year[0]}</h2>
                  <BookGrid>
                    {year[1].map((book) => {
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
                </>
              );
            })}
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Page;
