import Link from "next/link";
import { NavItemTypes } from "../SiteNavigation";
import styles from "./DesktopNavigation.module.scss";
import Button from "@/components/Button";
import SiteSettings from "@/components/SiteSettings";

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
              <Link
                href={item.href}
                key={item.label}
                className={styles.desktopNavigationLink}
              >
                {item.label}
              </Link>
            );
          }

          return (
            <Button
              key={item.label}
              className={styles.desktopNavigationLink}
              unstyled
            >
              {item.label}
            </Button>
          );
        })}
      </ul>
      <SiteSettings />
    </>
  );
};

export default DesktopNavigation;
