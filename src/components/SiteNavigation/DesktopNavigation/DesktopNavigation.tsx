import Link from "next/link";
import { NavItemTypes } from "../SiteNavigation";
import styles from "./DesktopNavigation.module.scss";
import Icon from "@/components/Icon";
import Button from "@/components/Button";

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
      <Icon type="settings" />
    </>
  );
};

export default DesktopNavigation;
