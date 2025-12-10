import React from "react";
import { Popover as RadixPopover } from "radix-ui";
import styles from "./Popover.module.scss";

type PopoverProps = {
  children: React.ReactNode;
  align: "start" | "end";
  hasArrow?: boolean;
};

const Popover = ({ align, hasArrow = true, children }: PopoverProps) => {
  return (
    <RadixPopover.Root>
      {/* <RadixPopover.Trigger asChild>
        <Button unstyled onClick={handleClick}>
          <Icon type="settings" className="animation-spin" />
        </Button>
      </RadixPopover.Trigger> */}
      <RadixPopover.Portal>
        <RadixPopover.Content
          className={styles.content}
          sideOffset={5}
          align={align}
        >
          {children}
          {hasArrow && <RadixPopover.Arrow className={styles.arrow} />}
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};

export default Popover;
