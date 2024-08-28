import Link from "next/link";
import styles from "./BlogCard.module.scss";
import PostTags from "../PostTags";
import ReadMore from "../ReadMore";

export type BlogCardProps = {
  title: string;
  summary: string;
  slug: string;
  tags?: string[];
};

function BlogCard({ title, summary, slug, tags }: BlogCardProps) {
  return (
    <article className={styles.blog}>
      {tags && <PostTags tags={tags} />}
      <h3>
        <Link href={slug}>{title}</Link>
      </h3>
      <p>{summary}</p>
      <ReadMore slug={slug} />
    </article>
  );
}

export default BlogCard;
