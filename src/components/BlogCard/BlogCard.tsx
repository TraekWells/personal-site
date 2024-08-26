import Link from "next/link";
import Icon from "../Icon";
import styles from "./BlogCard.module.scss";
import PostTags from "../PostTags";

type BlogCardProps = {
  title: string;
  summary: string;
  slug: string;
  tags?: string[];
};

function BlogCard({ title, summary, slug, tags }: BlogCardProps) {
  return (
    <article className={styles.blog}>
      <div className="blog__content">
        <h3>
          <Link href={slug}>{title}</Link>
        </h3>
        <p>{summary}</p>
        <Link href={slug} className="read-more">
          Read This Post <Icon type="arrowRight" />
        </Link>
      </div>
      {tags && <PostTags tags={tags} />}
    </article>
  );
}

export default BlogCard;
