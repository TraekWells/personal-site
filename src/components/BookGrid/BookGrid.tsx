import React from "react";
import styles from "./BookGrid.module.scss";

type BookGridProps = {
  children: React.ReactNode;
  header: string;
  booksRead?: number;
  didNotFinishCount?: number;
};

const BookGrid = ({
  children,
  header,
  booksRead,
  didNotFinishCount,
}: BookGridProps) => {
  const didNotFinish = didNotFinishCount;

  return (
    <>
      <h2>{header}</h2>
      {booksRead && (
        <small>
          📖 Finished {booksRead} {booksRead > 1 ? "books" : "book"} in total.{" "}
          {didNotFinish &&
            didNotFinish !== 0 &&
            `Couldn't make it through ${didNotFinish}.`}
        </small>
      )}
      <div className={styles.bookGrid}>{children}</div>
    </>
  );
};

export default BookGrid;
