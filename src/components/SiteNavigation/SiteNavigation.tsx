"use client";
import Link from "next/link";
import styles from "./SiteNavigation.module.scss";
import Container from "@/layout/Container";
import ColorThemeToggle from "../ColorThemeToggle";
import MobileMenuToggle from "../MobileMenuToggle";
import { useWindowSize } from "@uidotdev/usehooks";

type SiteNavigationProps = {
  initialTheme: string;
};

const navItems = [
  {
    label: "Home 🛖",
    href: "/",
  },
  {
    label: "✏️ Writing",
    href: "/blog",
  },
  {
    label: "Design Tips 🔥",
    href: "/",
  },
  {
    label: "🤷🏽‍♂️ Impossible List",
    href: "/journal/impossible-list",
  },
  {
    label: "👀 Now",
    href: "/now",
  },
];

const SiteNavigation = ({ initialTheme }: SiteNavigationProps) => {
  const size = useWindowSize();

  return (
    <div className={styles.navWrapper}>
      <Container>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link className={styles.navLink} href="/">
                🛖 Home
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/blog">
                ✏️ Writing
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/design-tips">
                Design Tips 🔥
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/journal/impossible-list">
                🤷🏽‍♂️ Impossible List
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/now">
                👀 Now
              </Link>
            </li>
          </ul>
          <MobileMenuToggle />
          {/* <ColorThemeToggle initialTheme={initialTheme} /> */}
        </nav>
      </Container>
    </div>
  );
};

export default SiteNavigation;
