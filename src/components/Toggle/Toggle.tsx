import styles from "./Toggle.module.scss";

type ToggleProps = {
  mode: "professional" | "casual";
  setMode: React.Dispatch<React.SetStateAction<"professional" | "casual">>;
};

const Toggle = ({ mode, setMode }: ToggleProps) => {
  return (
    <div className={styles.toggle}>
      <input
        type="checkbox"
        name="bio-mode"
        id="bio-mode"
        onChange={(e) => setMode(e.target.checked ? "casual" : "professional")}
      />
      <label htmlFor="bio-mode">
        {mode.charAt(0).toUpperCase() + mode.slice(1)}
      </label>
    </div>
  );
};

export default Toggle;
