import Link from "next/link";
import Icon from "../Icon";
import styles from "./ReadMore.module.scss";

type ReadMoreProps = {
  slug: string;
};

const ReadMore = ({ slug }: ReadMoreProps) => {
  return (
    <Link href={slug} className={styles.readMore}>
      Read This Post
      <Icon type="arrowRight" />
    </Link>
  );
};

export default ReadMore;
