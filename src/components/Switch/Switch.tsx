import * as RadixSwitch from "@radix-ui/react-switch";
import styles from "./Switch.module.scss";

type SwitchProps = {
  label: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const Switch = ({ label, checked, setChecked }: SwitchProps) => {
  return (
    <div className={styles.switchWrapper}>
      <RadixSwitch.Root
        className={styles.Root}
        id="id"
        onCheckedChange={() => setChecked(!checked)}
      >
        <RadixSwitch.Thumb className={styles.Thumb} />
      </RadixSwitch.Root>
      <label htmlFor="id" className={styles.Label}>
        {label}
      </label>
    </div>
  );
};

export default Switch;
