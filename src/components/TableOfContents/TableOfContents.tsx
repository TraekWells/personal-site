import React from "react";
import Link from "next/link";

interface TableOfContentProps {
  headers: Element[] | undefined;
}

const TableOfContents = ({ headers }: TableOfContentProps) => {
  return (
    <>
      <p className="eyebrow">Table of Contents</p>
      <ul>
        {headers?.map((header, index) => {
          return (
            <li key={index}>
              <Link href={`#${header.id}`}>{header.textContent}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TableOfContents;
