import React from "react";
import styles from "./BackgroundGridLines.module.scss";
import Container from "@/layout/Container";

const BackgroundGridLines = () => {
  return (
    <Container>
      <div className={styles.backgroundGridLines}>
        {Array.from({ length: 4 }).map((_, index) => (
          <span key={index} className={styles.line}></span>
        ))}
      </div>
    </Container>
  );
};

export default BackgroundGridLines;
