import Container from "@/layout/Container";
import styles from "./PageHeader.module.scss";

type PageHeaderProps = {
  title: string;
  children?: React.ReactNode;
  eyebrow?: string;
  tags?: string[];
};

const PageHeader = ({ children, title, eyebrow, tags }: PageHeaderProps) => {
  return (
    <header className={styles.header}>
      {tags && tags.length > 0 && (
        <ul className="post__tags">
          {tags.map((tag: string, index: number) => (
            <li key={index} className="post__tag">
              {tag}
            </li>
          ))}
        </ul>
      )}
      <Container narrow>
        <h1>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title}
        </h1>
        {children}
      </Container>
    </header>
  );
};

export default PageHeader;
