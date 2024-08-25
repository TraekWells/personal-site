import Container from "@/layout/Container";
import styles from "./PageHeader.module.scss";
import PostTags from "../PostTags";

type PageHeaderProps = {
  title: string;
  children?: React.ReactNode;
  tags?: string[];
};

const PageHeader = ({ children, title, tags }: PageHeaderProps) => {
  return (
    <header className={styles.header}>
      <Container>
        {tags && tags.length > 0 && <PostTags tags={tags} />}
        <h1>{title}</h1>
        {children}
      </Container>
    </header>
  );
};

export default PageHeader;
