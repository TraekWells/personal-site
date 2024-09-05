import Link from "next/link";
import styles from "./TableOfContents.module.scss";
import slugify from "@/utilities/slugify";

type TableOfContentsProps = {
  headers: string[];
};

const TableOfContents = ({ headers }: TableOfContentsProps) => {
  return (
    <aside className={styles.tableOfContent}>
      <h4>Table of Contents</h4>
      <ul>
        {headers.map((header, index) => {
          return (
            <li key={index}>
              <Link href={`#${slugify(header)}`}>{header}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default TableOfContents;
