import React from "react";
import styles from "./Container.module.scss";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={`${styles.container} ${className ? className : ""}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
