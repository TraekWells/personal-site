import Link from "next/link";
import { NavItemTypes } from "../SiteNavigation";
import styles from "./DesktopNavigation.module.scss";
import Button from "@/components/Button";
import SiteSettings from "@/components/SiteSettings";

type DesktopNavigationProps = {
  items: NavItemTypes[];
  initialTheme: string;
};
const DesktopNavigation = ({ items, initialTheme }: DesktopNavigationProps) => {
  return (
    <>
      <ul className={styles.desktopNavigationList}>
        {items.map((item, index) => {
          return (
            <li key={index}>
              {item.href ? (
                <Link href={item.href} className={styles.desktopNavigationLink}>
                  {item.label}
                </Link>
              ) : (
                <Button className={styles.desktopNavigationLink} unstyled>
                  {item.label}
                </Button>
              )}
            </li>
          );
        })}
      </ul>
      <SiteSettings initialTheme={initialTheme} />
    </>
  );
};

export default DesktopNavigation;
