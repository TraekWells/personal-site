"use client";
import styles from "./SiteNavigation.module.scss";
import Container from "@/layout/Container";
import { useWindowSize } from "@uidotdev/usehooks";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import Avatar from "../Avatar";
import Link from "next/link";

type LinkNavItem = {
  type: "link";
  label: string;
  href: string;
};

type ButtonNavItem = {
  type: "button";
  label: string;
  children?: LinkNavItem[];
};

export type NavItemTypes = LinkNavItem | ButtonNavItem;

const navItems: NavItemTypes[] = [
  {
    type: "link",
    label: "Home",
    href: "/",
  },
  {
    type: "link",
    label: "Writing",
    href: "/blog",
  },
  {
    type: "link",
    label: "About Me",
    href: "/about-me",
  },
  // {
  //   label: "🔥 Design Tips",
  //   href: "/design-tips",
  // },
  {
    type: "button",
    label: "Side Notes",
    children: [
      {
        type: "link",
        label: "Today I Learned",
        href: "/today-i-learned",
      },
      {
        type: "link",
        label: "Impossible List",
        href: "/journal/impossible-list",
      },
    ],
  },
  {
    type: "link",
    label: "Bookshelf",
    href: "/bookshelf",
  },
];

const SiteNavigation = () => {
  const size = useWindowSize();
  // Is this too slow?
  const isMobile = size.width && size.width <= 749;

  return (
    <Container className={styles.siteNavigationWrapper}>
      <Link href="/">
        <Avatar />
      </Link>
      <nav className={`${styles.nav} gap-sm`}>
        {isMobile ? (
          <MobileNavigation items={navItems} />
        ) : (
          <DesktopNavigation items={navItems} />
        )}
      </nav>
    </Container>
  );
};

export default SiteNavigation;
