import Link from "next/link";
import styles from "./TableOfContents.module.scss";
import slugify from "@/utilities/slugify";
import Eyebrow from "../Eyebrow";

type TableOfContentsProps = {
  headers: string[];
};

const TableOfContents = ({ headers }: TableOfContentsProps) => {
  return (
    <aside className={styles.tableOfContents}>
      <header>
        <Eyebrow>Table of Contents</Eyebrow>
      </header>
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
