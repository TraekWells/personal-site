import Link from "next/link";
import styles from "./SiteNavigation.module.scss";
import VisuallyHidden from "../VisuallyHidden";

const SiteNavigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Writing</Link>
        </li>
        <li>
          <Link href="/design-tips">Design Tips 🔥</Link>
        </li>
        <li>
          <Link href="/journal/impossible-list">Impossible List</Link>
        </li>
        <li>
          <Link href="/now">Now</Link>
        </li>
      </ul>
      <button>
        🎨
        <VisuallyHidden>Swap color mode</VisuallyHidden>
      </button>
    </nav>
  );
};

export default SiteNavigation;
