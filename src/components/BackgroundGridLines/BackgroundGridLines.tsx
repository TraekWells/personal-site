import React from "react";
import styles from "./BackgroundGridLines.module.scss";
import Container from "@/layout/Container";

const BackgroundGridLines = () => {
  return (
    <Container>
      <div className={styles.backgroundGridLines}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
    </Container>
  );
};

export default BackgroundGridLines;
