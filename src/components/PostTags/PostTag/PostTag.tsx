import styles from "./PostTag.module.scss";

type PostTagProps = {
  tag: string;
};

const PostTag = ({ tag }: PostTagProps) => {
  return <li className={styles.postTag}>{tag}</li>;
};

export default PostTag;
