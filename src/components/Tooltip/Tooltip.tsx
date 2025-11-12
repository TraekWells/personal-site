import styles from "./Tooltip.module.scss";
import { Tooltip as RadixTooltip } from "radix-ui";

type TooltipProps = {
  children: React.ReactNode;
  message: string;
  unstyled?: boolean;
  classList?: string;
};

const Tooltip = ({ children, message, unstyled, classList }: TooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={400}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger
          className={`${styles.tooltipTrigger} ${classList}`}
          style={{ borderBottom: unstyled ? "none" : "" }}
        >
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className={styles.tooltipContent}>
            {message}
            <RadixTooltip.Arrow className={styles.tooltipArrow} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
