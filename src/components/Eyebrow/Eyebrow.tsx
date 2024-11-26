import styles from "./Eyebrow.module.scss";

type EyebrowProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

const Eyebrow = ({ children, ...rest }: EyebrowProps) => {
  return (
    <h4 className={styles.eyebrow} {...rest}>
      {children}
    </h4>
  );
};

export default Eyebrow;
