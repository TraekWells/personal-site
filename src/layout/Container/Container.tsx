import React from "react";
import styles from "./Container.module.scss";

type ContainerProps = {
  children: React.ReactNode;
  narrow?: boolean;
};

const Container = ({ children, narrow }: ContainerProps) => {
  return (
    <div className={`${styles.container} ${narrow && styles.containerNarrow} `}>
      {children}
    </div>
  );
};

export default Container;
