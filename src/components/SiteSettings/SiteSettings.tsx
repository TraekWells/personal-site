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
    <Popover
      align="end"
      trigger={
        <Button unstyled onClick={handleClick}>
          <Icon type="settings" className="animation-spin" />
        </Button>
      }
    >
      <Eyebrow>Site Settings</Eyebrow>
      <ColorThemeToggle />
    </Popover>
  );
};

export default SiteSettings;
