"use client";

import React from "react";
import { NavItemTypes } from "../SiteNavigation";
import Button from "@/components/Button";
import { Menu } from "react-feather";
import MobileMenu from "../MobileMenu";
import { usePathname } from "next/navigation";

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
      {isOpen ? (
        <MobileMenu items={items} isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <Button unstyled onClick={handleMobileToggle}>
          <Menu color="var(--color-text)" />
        </Button>
      )}
    </>
  );
};

export default MobileNavigation;
