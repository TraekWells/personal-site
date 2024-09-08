import Link from "next/link";
import styles from "./TableOfContents.module.scss";
import slugify from "@/utilities/slugify";

type TableOfContentsProps = {
  headers: string[];
};

const TableOfContents = ({ headers }: TableOfContentsProps) => {
  return (
    <aside className={styles.tableOfContents}>
      <header>
        <h4 className="eyebrowify">Table of Contents</h4>
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
