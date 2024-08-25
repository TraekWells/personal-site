import PostTag from "./PostTag";
import styles from "./PostTags.module.scss";

type PostTags = {
  tags: string[];
};

const PostTags = ({ tags }: PostTags) => {
  return (
    <ul className={styles.postTags}>
      {tags.map((tag: string) => (
        <PostTag tag={tag} key={tag} />
      ))}
    </ul>
  );
};

export default PostTags;
