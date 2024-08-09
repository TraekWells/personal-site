import styles from "./Wave.module.scss";

type WaveProps = {
  color: "purple" | "white";
};

const Wave = ({ color }: WaveProps) => {
  let Component =
    color === "purple" ? (
      <svg
        className={`${styles["wave"]}}`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1440 100"
        xmlSpace="preserve"
        style={{ position: "absolute", bottom: 0, zIndex: -1 }}
      >
        <path
          style={{ fill: "hsl(var(--color-primary-100))" }}
          d="M0,30.3l80-9.3c80-9.4,240-27.7,400-18.6s320,46.6,480,60.4c160,14.1,320,4.5,400,0l80-4.7V100h-80
c-80,0-240,0-400,0s-320,0-480,0s-320,0-400,0H0V30.3z"
        />
      </svg>
    ) : (
      <svg
        className={styles["wave"]}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1440 75"
        xmlSpace="preserve"
      >
        <path
          style={{ fill: "hsl(var(--color-white))" }}
          d="M0,30.3l80-9.3c80-9.4,240-27.7,400-18.6s320,46.6,480,60.4c160,14.1,320,4.5,400,0l80-4.7V100h-80
	c-80,0-240,0-400,0s-320,0-480,0s-320,0-400,0H0V30.3z"
        />
      </svg>
    );

  return Component;
};

export default Wave;
