import Link from "next/link";
import styles from "./ContentCard.module.scss";

export type ContentCardProps = {
  title: string;
  summary: string;
  slug: string;
};

function ContentCard({ title, summary, slug }: ContentCardProps) {
  return (
    <article className={styles.contentCard}>
      <h3>
        <Link href={slug}>{title}</Link>
      </h3>
      <p>{summary}</p>
    </article>
  );
}

export default ContentCard;
