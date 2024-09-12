import Link from "next/link";
import styles from "./SiteNavigation.module.scss";
import Container from "@/layout/Container";
import MobileMenuToggle from "../MobileMenuToggle";
import ColorThemeToggle from "../ColorThemeToggle";

type SiteNavigationProps = {
  initialTheme: string;
};

const SiteNavigation = ({ initialTheme }: SiteNavigationProps) => {
  return (
    <div className={styles.navWrapper}>
      <Container>
        <nav className={styles.nav}>
          <MobileMenuToggle />
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
          <ColorThemeToggle initialTheme={initialTheme} />
        </nav>
      </Container>
    </div>
  );
};

export default SiteNavigation;
