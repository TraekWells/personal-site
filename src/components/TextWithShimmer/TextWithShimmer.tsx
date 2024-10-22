import styles from "./TextWithShimmer.module.scss";

type TextWithShimmerProps = {
  children: string;
};

const TextWithShimmer = ({ children }: TextWithShimmerProps) => {
  return <span className={styles.shimmer}>{children}</span>;
};

export default TextWithShimmer;
