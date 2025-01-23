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

  const currentlyReading = books.filter((book) => book.currentlyReading);

  const booksByYear = books
    .filter((book) => !book.currentlyReading)
    .reduce((acc, book) => {
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
          <Container className="flow">
            <BookGrid header="Currently Reading">
              {currentlyReading.map((book) => {
                return (
                  <Book
                    title={book.title}
                    author={book.author}
                    key={book.title}
                    image={book.bookCover}
                    summary={book.summary}
                    review={book.review}
                  />
                );
              })}
            </BookGrid>
            {booksByYearArray.map((currentYear) => {
              const year = currentYear[0];
              const books = currentYear[1];
              return (
                <BookGrid header={`Read in ${year}`} key={year}>
                  {books.map((book) => {
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
              );
            })}
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Page;
