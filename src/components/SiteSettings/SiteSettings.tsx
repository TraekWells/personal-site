"use client";

import React from "react";
import Icon from "../Icon";
import { Popover } from "radix-ui";
import Button from "../Button";
import styles from "./SiteSettings.module.scss";
import Eyebrow from "../Eyebrow";
import ColorThemeToggle from "../ColorThemeToggle";

const SiteSettings = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button unstyled onClick={handleClick}>
          <Icon type="settings" className="animation-spin" />
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.content} sideOffset={5} align="end">
          <Eyebrow>Site Settings</Eyebrow>
          <ColorThemeToggle />
          <Popover.Arrow className={styles.arrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default SiteSettings;
