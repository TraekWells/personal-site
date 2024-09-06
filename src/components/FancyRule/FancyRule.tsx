import styles from "./FancyRule.module.scss";

const FancyRule = () => {
  return (
    <span className={styles.fancyRule}>
      🐜
      <svg
        width="348"
        height="30"
        viewBox="0 0 348 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M347 19C243 -33 136 48 1 24"
          stroke="var(--color-base-darkest)"
          strokeDasharray="10 10"
        />
      </svg>
    </span>
  );
};

export default FancyRule;
