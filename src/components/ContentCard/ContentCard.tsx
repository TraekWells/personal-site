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
      <h2 className="header-4">
        <Link href={slug}>{title}</Link>
      </h2>
      <p>{summary}</p>
    </article>
  );
}

export default ContentCard;
