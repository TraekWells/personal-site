import styles from "./FancyRule.module.scss";

const FancyRule = () => {
  return (
    <span className={styles.fancyRule}>
      <svg
        width="348"
        height="30"
        viewBox="0 0 348 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 19C105 -33 212 48 347 24"
          stroke="black"
          stroke-dasharray="10 10"
        />
      </svg>
      🐜
    </span>
  );
};

export default FancyRule;
