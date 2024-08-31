import React from "react";
import styles from "./Container.module.scss";

type ContainerProps = {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
};

const Container = ({ children, narrow, className }: ContainerProps) => {
  return (
    <div
      className={`${styles.container} ${narrow ? styles.containerNarrow : ""} ${
        className && className
      } `}
    >
      {children}
    </div>
  );
};

export default Container;
