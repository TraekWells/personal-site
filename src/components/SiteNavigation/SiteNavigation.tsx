import Link from "next/link";
import styles from "./SiteNavigation.module.scss";
import VisuallyHidden from "../VisuallyHidden";
import Button from "../Button";

const SiteNavigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link className={styles.navLink} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/blog">
            Writing
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/design-tips">
            Design Tips 🔥
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/journal/impossible-list">
            Impossible List
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/now">
            Now
          </Link>
        </li>
      </ul>
      <Button>
        🎨
        <VisuallyHidden>Swap color mode</VisuallyHidden>
      </Button>
    </nav>
  );
};

export default SiteNavigation;
