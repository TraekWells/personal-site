import slugify from "@/utilities/slugify";
import styles from "./ContentTagFilter.module.scss";
import Link from "next/link";

type ContentTagFilterProps = {
  tags: string[];
};

const ContentTagFilter = ({ tags }: ContentTagFilterProps) => {
  return (
    <aside className={styles.contentTagFilter}>
      <header>
        <h4 className="eyebrowify">Filter By Tag</h4>
      </header>
      <ul>
        {tags.map((tag) => {
          return (
            <li key={tag}>
              <Link href={`/tags/${slugify(tag)}`}>{tag}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ContentTagFilter;
