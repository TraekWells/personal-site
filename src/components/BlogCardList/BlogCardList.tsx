import styles from "./BlogCardList.module.scss";
import BlogCard, { BlogCardProps } from "@/components/BlogCard";

type BlogCardListProps = {
  blogs: BlogCardProps[];
};

const BlogCardList = ({ blogs }: BlogCardListProps) => {
  return (
    <div className={styles.blogCardList}>
      {blogs.map((blog, index) => {
        return (
          <BlogCard
            key={index}
            title={blog.title}
            slug={`/blog/${blog.slug}`}
            summary={blog.summary}
            tags={blog.tags}
          />
        );
      })}
    </div>
  );
};

export default BlogCardList;
