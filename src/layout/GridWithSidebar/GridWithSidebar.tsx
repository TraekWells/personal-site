import styles from "./GridWithSidebar.module.scss";

type GridWithSidebarProps = {
  children: React.ReactNode;
};

const GridWithSidebar = ({ children }: GridWithSidebarProps) => {
  return <div className={styles.gridWithSidebar}>{children}</div>;
};

export default GridWithSidebar;
