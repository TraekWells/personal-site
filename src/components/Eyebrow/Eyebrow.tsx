import styles from "./Eyebrow.module.scss";

type EyebrowProps = {
  children: React.ReactNode;
};

const Eyebrow = ({ children }: EyebrowProps) => {
  return <h4 className={styles.eyebrow}>{children}</h4>;
};

export default Eyebrow;
