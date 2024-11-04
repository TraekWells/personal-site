import styles from "./Grid.module.scss";

type GridProps = {
  children: React.ReactNode;
};

const Grid = ({ children }: GridProps) => {
  return <div className={styles.grid}>{children}</div>;
};

export default Grid;
