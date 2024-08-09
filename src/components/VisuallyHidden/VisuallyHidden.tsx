import styles from "./VisuallyHidden.module.scss";

type VisuallyHiddenProps = {
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLElement>;
};

const VisuallyHidden = ({ children, props }: VisuallyHiddenProps) => {
  return (
    <span className={styles["visually-hidden"]} {...props}>
      {children}
    </span>
  );
};

export default VisuallyHidden;
