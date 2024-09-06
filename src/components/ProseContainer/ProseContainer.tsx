import styles from "./ProseContainer.module.scss";

type ProseContainerProps = {
  children: React.ReactNode;
};

const ProseContainer = ({ children }: ProseContainerProps) => {
  return (
    <article className={`${styles.proseContainer} prose flow`}>
      {children}
    </article>
  );
};

export default ProseContainer;
