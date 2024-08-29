"use client";

import React from "react";
import Link from "next/link";

const TableOfContents = () => {
  const [headers, setHeaders] = React.useState<Element[] | null>(null);

  React.useEffect(() => {
    const headers = Array.from(document.querySelectorAll(".content h2"));
    setHeaders(headers);
  }, []);
  return (
    <aside>
      <p>Table of Contents</p>
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
