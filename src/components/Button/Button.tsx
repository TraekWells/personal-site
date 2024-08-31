import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

// How do I add the defaul HTML button props to my Button component?

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
