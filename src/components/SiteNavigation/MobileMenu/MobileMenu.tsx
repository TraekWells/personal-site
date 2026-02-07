import React from "react";
import { NavItemTypes } from "../SiteNavigation";
import { createPortal } from "react-dom";
import { X as Close } from "lucide-react";
import Button from "@/components/Button";
import styles from "./MobileMenu.module.scss";
import Link from "next/link";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import Container from "@/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import ColorThemeToggle from "@/components/ColorThemeToggle";

type MobileMenuProps = {
  items: NavItemTypes[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const MobileMenu = ({ items, isOpen, setIsOpen }: MobileMenuProps) => {
  return createPortal(
    <FocusLock returnFocus={true}>
      <RemoveScroll className={styles.mobileMenu}>
        <Container className={styles.mobileMenuContainer}>
          <Button
            unstyled
            className={styles.mobileCloseButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Close />
          </Button>
          <AnimatePresence>
            {isOpen && (
              <React.Fragment>
                <ColorThemeToggle />
                <motion.ul
                  style={{ marginBlockStart: "2rem" }}
                  className={styles.mobileMenuList}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {items.map((item, index) => {
                    if (item.type === "link") {
                      return (
                        <motion.li
                          className={styles.mobileMenuListItem}
                          initial={{ opacity: 0, translateY: 20 }}
                          animate={{ opacity: 1, translateY: 0 }}
                          transition={{ duration: 0.25, delay: 0.1 * index }}
                          key={item.href}
                        >
                          <Link
                            href={item.href}
                            className={styles.mobileMenuLink}
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      );
                    }

                    if (item.type === "button") {
                      return (
                        <React.Fragment key={item.label}>
                          {item.children.map((child, index) => {
                            return (
                              <motion.li
                                className={styles.mobileMenuListItem}
                                initial={{ opacity: 0, translateY: 20 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                  duration: 0.25,
                                  delay: 0.1 * index,
                                }}
                                key={child.href}
                              >
                                <Link
                                  href={child.href}
                                  className={styles.mobileMenuLink}
                                >
                                  {child.label}
                                </Link>
                              </motion.li>
                            );
                          })}
                        </React.Fragment>
                      );
                    }
                  })}
                </motion.ul>
              </React.Fragment>
            )}
          </AnimatePresence>
        </Container>
      </RemoveScroll>
    </FocusLock>,
    document.querySelector("#mobile-menu-portal") as HTMLElement
  );
};

export default MobileMenu;
