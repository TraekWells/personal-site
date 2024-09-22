"use client";
import styles from "./SiteNavigation.module.scss";
import Container from "@/layout/Container";
import ColorThemeToggle from "../ColorThemeToggle";
import { useWindowSize } from "@uidotdev/usehooks";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

type SiteNavigationProps = {
  initialTheme: string;
};

export type NavItemTypes = {
  label: string;
  href: string;
};

const navItems: NavItemTypes[] = [
  {
    label: "🛖 Home",
    href: "/",
  },
  {
    label: "✏️ Writing",
    href: "/blog",
  },
  {
    label: "🔥 Design Tips ",
    href: "/design-tips",
  },
  {
    label: "👀 Now",
    href: "/now",
  },
];

const SiteNavigation = ({ initialTheme }: SiteNavigationProps) => {
  const size = useWindowSize();
  // Is this too slow?
  const isMobile = size.width && size.width <= 749;

  return (
    <Container>
      <nav className={styles.nav}>
        {isMobile ? (
          <MobileNavigation items={navItems} initialTheme={initialTheme} />
        ) : (
          <DesktopNavigation items={navItems} initialTheme={initialTheme} />
        )}
      </nav>
    </Container>
  );
};

export default SiteNavigation;
