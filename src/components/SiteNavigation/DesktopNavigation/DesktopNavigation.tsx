import Link from "next/link";
import { NavItemTypes } from "../SiteNavigation";
import ColorThemeToggle from "@/components/ColorThemeToggle";
import styles from "./DesktopNavigation.module.scss";

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
              <Link href={item.href} className={styles.desktopNavigationLink}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <ColorThemeToggle initialTheme={initialTheme} /> */}
    </>
  );
};

export default DesktopNavigation;
