import React from "react";
import styles from "./BookGrid.module.scss";

type BookGridProps = {
  children: React.ReactNode;
  header: string;
  booksRead?: number;
};

const BookGrid = ({ children, header, booksRead }: BookGridProps) => {
  return (
    <>
      <h2>{header}</h2>
      {booksRead && (
        <small>
          📖 {booksRead} {booksRead > 1 ? "books" : "book"} in total
        </small>
      )}
      <div className={styles.bookGrid}>{children}</div>
    </>
  );
};

export default BookGrid;
