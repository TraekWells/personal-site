"use client";

import React from "react";
import Link from "next/link";
import styles from "./TableOfContents.module.scss";

const TableOfContents = () => {
  const [headers, setHeaders] = React.useState<Element[] | null>(null);

  React.useEffect(() => {
    const headers = Array.from(document.querySelectorAll(".prose h2"));
    setHeaders(headers);
  }, []);
  return (
    <aside className={styles.tableOfContent}>
      <h4>Table of Contents</h4>
      <ul>
        {headers?.map((header, index) => {
          return (
            <li key={index}>
              <Link href={`#${header.id}`}>{header.textContent}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default TableOfContents;
