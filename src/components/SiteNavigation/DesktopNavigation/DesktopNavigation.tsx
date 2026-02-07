import React from "react";
import Link from "next/link";
import { NavItemTypes } from "../SiteNavigation";
import styles from "./DesktopNavigation.module.scss";
import Button from "@/components/Button";
import SiteSettings from "@/components/SiteSettings";
import SubNavigation from "./SubNavigation/SubNavigation";
import Popover from "@/components/Popover";

type DesktopNavigationProps = {
  items: NavItemTypes[];
};
const DesktopNavigation = ({ items }: DesktopNavigationProps) => {
  return (
    <>
      <ul className={styles.desktopNavigationList}>
        {items.map((item) => {
          if (item.type === "link") {
            return (
              <li key={item.label}>
                <Link href={item.href} className={styles.desktopNavigationLink}>
                  {item.label}
                </Link>
              </li>
            );
          }

          if (item.type === "button") {
            return (
              <li
                className={styles.desktopSubnavigationWrapper}
                key={item.label}
              >
                <Popover
                  align="end"
                  trigger={
                    <Button className={styles.desktopNavigationLink} unstyled>
                      {item.label}
                    </Button>
                  }
                >
                  <SubNavigation items={item.children} />
                </Popover>
              </li>
            );
          }

          return null;
        })}
      </ul>
      <SiteSettings />
    </>
  );
};

export default DesktopNavigation;
