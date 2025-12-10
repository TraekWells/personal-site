import React from "react";
import styles from "./SubNavigation.module.scss";
import Link from "next/link";

type SubNavigationProps = {
  items: {
    type: string;
    label: string;
    href: string;
  }[];
};

const SubNavigation = ({ items }: SubNavigationProps) => {
  return (
    <ul className={styles.subNavigationMenu}>
      {items.map((item) => (
        <li key={item.label}>
          <Link href={item.href} className={styles.desktopNavigationLink}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubNavigation;
