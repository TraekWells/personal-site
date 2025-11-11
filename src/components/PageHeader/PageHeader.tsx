import Container from "@/layout/Container";
import styles from "./PageHeader.module.scss";
import PostTags from "../PostTags";
import classNames from "classnames";

type PageHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  tags?: string[];
  plain?: boolean;
};

const PageHeader = ({ children, tags, plain, ...props }: PageHeaderProps) => {
  const headerClasses = classNames(styles.header, {
    [styles.headerPlain]: plain,
  });

  return (
    <header className={headerClasses} {...props}>
      <Container>
        {tags && tags.length > 0 && <PostTags tags={tags} />}
        {children}
      </Container>
    </header>
  );
};

export default PageHeader;
