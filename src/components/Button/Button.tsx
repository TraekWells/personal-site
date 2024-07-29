import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button className={styles["button"]}>{children}</button>;
};

export default Button;
