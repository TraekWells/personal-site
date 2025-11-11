"use client";
import styles from "./SiteNavigation.module.scss";
import Container from "@/layout/Container";
import { useWindowSize } from "@uidotdev/usehooks";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import Avatar from "../Avatar";
import Link from "next/link";

type SiteNavigationProps = {
  initialTheme: string;
};

export type NavItemTypes = {
  label: string;
  href?: string;
  children?: NavItemTypes[];
};

const navItems: NavItemTypes[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Writing",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about-me",
  },
  {
    label: "🔥 Design Tips",
    href: "/design-tips",
  },
  {
    label: "Side Notes",
    children: [
      {
        label: "Bookshelf",
        href: "/bookshelf",
      },
      {
        label: "Now",
        href: "/now",
      },
    ],
  },
];

const SiteNavigation = ({ initialTheme }: SiteNavigationProps) => {
  const size = useWindowSize();
  // Is this too slow?
  const isMobile = size.width && size.width <= 749;

  return (
    <Container className={styles.siteNavigationWrapper}>
      <Link href="/">
        <Avatar />
      </Link>
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
