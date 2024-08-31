import slugify from "@/utilities/slugify";
import styles from "./ContentTagFilter.module.scss";
import Link from "next/link";

type ContentTagFilterProps = {
  tags: string[];
};

const ContentTagFilter = ({ tags }: ContentTagFilterProps) => {
  return (
    <div className={styles.contentTagFilter}>
      <h3 className="header-4">Filter By Tag</h3>
      <ul>
        {tags.map((tag) => {
          return (
            <li key={tag}>
              <Link href={`/tags/${slugify(tag)}`}>{tag}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContentTagFilter;
