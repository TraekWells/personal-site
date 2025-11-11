import { Switch as RadixSwitch } from "radix-ui";
import styles from "./Switch.module.scss";

type SwitchProps = {
  label: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const Switch = ({ label, checked, setChecked }: SwitchProps) => {
  return (
    <div className={styles.switchWrapper}>
      <label htmlFor="id" className={styles.Label}>
        {label}
      </label>
      <RadixSwitch.Root
        className={styles.Root}
        checked={checked}
        id="id"
        onCheckedChange={() => setChecked(!checked)}
      >
        <RadixSwitch.Thumb className={styles.Thumb} />
      </RadixSwitch.Root>
    </div>
  );
};

export default Switch;
