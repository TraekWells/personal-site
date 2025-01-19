import React from "react";
import styles from "./BookGrid.module.scss";

type BookGridProps = {
  children: React.ReactNode;
  header: string;
};

const BookGrid = ({ children, header }: BookGridProps) => {
  return (
    <>
      <h2>{header}</h2>
      <div className={styles.bookGrid}>{children}</div>
    </>
  );
};

export default BookGrid;
