import * as RadixTooltip from "@radix-ui/react-tooltip";
import styles from "./Tooltip.module.scss";

type TooltipProps = {
  children: React.ReactNode;
  message: string;
};

const Tooltip = ({ children, message }: TooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={400}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger className={styles.tooltipTrigger}>
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
