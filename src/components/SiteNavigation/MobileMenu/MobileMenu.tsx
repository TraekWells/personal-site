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
              <motion.ul
                className={styles.mobileMenuList}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {items.map((item, index) => {
                  return (
                    <motion.li
                      className={styles.mobileMenuListItem}
                      initial={{ opacity: 0, translateY: 30 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.25, delay: 0.1 * index }}
                      exit={{ opacity: 0, translateY: 30 }}
                      key={index}
                    >
                      {/* <Link href={item.href} className={styles.mobileMenuLink}>
                        {item.label}
                      </Link> */}
                    </motion.li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </Container>
      </RemoveScroll>
    </FocusLock>,
    document.querySelector("#mobile-menu-portal") as HTMLElement
  );
};

export default MobileMenu;
