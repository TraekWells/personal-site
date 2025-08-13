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
            {currentlyReading.length > 0 && (
              <BookGrid header="Currently Reading">
                {currentlyReading.map((book) => {
                  return (
                    <Book
                      title={book.title}
                      author={book.author}
                      key={book.title}
                      image={book.bookCover}
                    />
                  );
                })}
              </BookGrid>
            )}
            {booksByYearArray.map((currentYear) => {
              const year = currentYear[0];
              const books = currentYear[1].sort(
                (a, b) =>
                  new Date(b.dateRead).getTime() -
                  new Date(a.dateRead).getTime()
              );
              const didNotFinishCount = currentYear[1].filter((book) => {
                return book.didNotFinish === true;
              });

              const booksReadCount = books.length - didNotFinishCount.length;

              return (
                <BookGrid
                  header={`Read in ${year}`}
                  key={year}
                  booksRead={booksReadCount}
                  didNotFinishCount={
                    didNotFinishCount.length !== 0
                      ? didNotFinishCount.length
                      : undefined
                  }
                >
                  {books.map((book) => {
                    return (
                      <Book
                        title={book.title}
                        image={book.bookCover}
                        author={book.author}
                        rating={
                          book.rating !== undefined ? book.rating : undefined
                        }
                        didNotFinish={book.didNotFinish}
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
