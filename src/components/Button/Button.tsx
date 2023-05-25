import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  icon?: boolean;
  type: "primary" | "ghost";
}

const Button = ({ children }: ButtonProps) => {
  return <button className={styles["button"]}>{children}</button>;
};

export default Button;
