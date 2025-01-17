import React from "react";
import styles from "./BookGrid.module.scss";

type BookGridProps = {
  children: React.ReactNode;
};

const BookGrid = ({ children }: BookGridProps) => {
  return <div className={styles.bookGrid}>{children}</div>;
};

export default BookGrid;
