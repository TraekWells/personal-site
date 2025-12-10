"use client";

import React from "react";
import Icon from "../Icon";
import Button from "../Button";
import Eyebrow from "../Eyebrow";
import ColorThemeToggle from "../ColorThemeToggle";
import Popover from "@/components/Popover";

const SiteSettings = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Popover align="end">
      <Eyebrow>Site Settings</Eyebrow>
      <ColorThemeToggle />
    </Popover>
    // <Popover.Root>
    //   <Popover.Trigger asChild>
    //     <Button unstyled onClick={handleClick}>
    //       <Icon type="settings" className="animation-spin" />
    //     </Button>
    //   </Popover.Trigger>
    //   <Popover.Portal>
    //     <Popover.Content className={styles.content} sideOffset={5} align="end">
    //       <Eyebrow>Site Settings</Eyebrow>
    //       <ColorThemeToggle />
    //       <Popover.Arrow className={styles.arrow} />
    //     </Popover.Content>
    //   </Popover.Portal>
    // </Popover.Root>
  );
};

export default SiteSettings;
