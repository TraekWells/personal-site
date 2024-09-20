import React from "react";
import { NavItemTypes } from "../SiteNavigation";
import { createPortal } from "react-dom";
import Button from "@/components/Button";
import styles from "./MobileMenu.module.scss";
import { X as Close } from "react-feather";
import Link from "next/link";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

type MobileMenuProps = {
  items: NavItemTypes[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const MobileMenu = ({ items, isOpen, setIsOpen }: MobileMenuProps) => {
  return createPortal(
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className="mobile-test">
          <Button
            unstyled
            className={styles.mobileCloseButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Close />
          </Button>
          <ul className={styles.mobileMenu}>
            {items.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </RemoveScroll>
    </FocusLock>,
    document.querySelector("#mobile-menu-portal") as HTMLElement
  );
};

export default MobileMenu;
