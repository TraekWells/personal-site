"use client";

import React from "react";
import Link from "next/link";
import { NavItemTypes } from "../SiteNavigation";
import Button from "@/components/Button";
import { Menu, X } from "react-feather";
import styles from "./MobileNavigation.module.scss";
import MobileMenu from "../MobileMenu";

type MobileNavigationProps = {
  items: NavItemTypes[];
  initialTheme: string;
};

const MobileNavigation = ({ items, initialTheme }: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMobileToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {!isOpen ? (
        <>
          <p>Good Afternoon</p>
          <Button unstyled onClick={handleMobileToggle}>
            <Menu />
          </Button>
        </>
      ) : (
        <MobileMenu items={items} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </>
  );
};

export default MobileNavigation;
