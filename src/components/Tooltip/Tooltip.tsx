import styles from "./Tooltip.module.scss";

type TooltipProps = {
  children: React.ReactNode;
  message: string;
};

const Tooltip = ({ children, message }: TooltipProps) => {
  return <span className={styles.tooltip}>{children}</span>;
};

export default Tooltip;
