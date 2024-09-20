"use client";

import React from "react";
import Link from "next/link";
import { NavItemTypes } from "../SiteNavigation";
import Button from "@/components/Button";
import { Menu, X } from "react-feather";
import styles from "./MobileNavigation.module.scss";
import MobileMenu from "../MobileMenu";
import { usePathname } from "next/navigation";
import path from "path";
import Greeting from "@/components/Greeting";

type MobileNavigationProps = {
  items: NavItemTypes[];
  initialTheme: string;
};

const MobileNavigation = ({ items, initialTheme }: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleMobileToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {!isOpen ? (
        <>
          <Greeting />
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
