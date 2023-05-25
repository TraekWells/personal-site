import React from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  narrow?: boolean;
  wide?: boolean;
}

const Container = ({ children, narrow, wide }: ContainerProps) => {
  return (
    <div
      className={`${styles.container} ${
        narrow ? styles["container--narrow"] : ""
      } ${wide ? styles["container--wide"] : ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
