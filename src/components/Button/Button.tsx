import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  unstyled?: boolean;
  className?: string;
};

const Button = ({ children, unstyled, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`${unstyled ? styles.buttonUnstyled : styles.button} ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
