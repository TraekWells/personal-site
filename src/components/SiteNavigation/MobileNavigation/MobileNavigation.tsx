"use client";

import React from "react";
import Link from "next/link";
import { NavItemTypes } from "../SiteNavigation";
import Button from "@/components/Button";
import { Menu, X } from "react-feather";
import styles from "./MobileNavigation.module.scss";

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
        <>
          <Button
            unstyled
            className={styles.mobileCloseButton}
            onClick={handleMobileToggle}
          >
            <X />
          </Button>
          <ul className={styles.mobileNavigation}>
            {items.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default MobileNavigation;
