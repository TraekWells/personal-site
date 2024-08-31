import ContentCard from "../ContentCard";
import { ContentCardProps } from "../ContentCard/ContentCard";
import styles from "./ContentCardList.module.scss";

type ContentCardListProps = {
  content: ContentCardProps[];
  type: "blog" | "journal";
};

const ContentCardList = ({ content, type }: ContentCardListProps) => {
  return (
    <div className={styles.contentCardList}>
      {content.map((content, index) => {
        return (
          <ContentCard
            key={index}
            title={content.title}
            slug={`/${type}/${content.slug}`}
            summary={content.summary}
          />
        );
      })}
    </div>
  );
};

export default ContentCardList;
