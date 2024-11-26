import slugify from "@/utilities/slugify";
import styles from "./ContentTagFilter.module.scss";
import Link from "next/link";
import { Tag } from "react-feather";
import Eyebrow from "../Eyebrow";

type ContentTagFilterProps = {
  tags: string[];
};

const ContentTagFilter = ({ tags }: ContentTagFilterProps) => {
  return (
    <aside className={styles.contentTagFilter}>
      <header>
        <Eyebrow>Filter by Tag</Eyebrow>
      </header>
      <ul>
        {tags.map((tag) => {
          return (
            <li className={styles.tagItem} key={tag}>
              <Tag size="16" />
              <Link href={`/tags/${slugify(tag)}`}>{tag}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ContentTagFilter;
