"use client";

import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import styles from "./Navbar.module.scss";
import Icon from "../Icon/Icon";
import VisuallyHidden from "../VisuallyHidden";
import NavbarItem from "./NavbarItem";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About Me",
    href: "/about-me",
  },
  {
    title: "Writing",
    href: "/blog",
  },
  {
    title: "Now",
    href: "/now",
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const path = usePathname();

  React.useEffect(() => {
    // Close the mobile menu when the user navigates to a new page
    setMobileMenuOpen(false);
  }, [path]);
  return (
    <div
      className={`${styles["navigation-wrapper"]} ${
        mobileMenuOpen ? styles["active"] : ""
      } `}
    >
      <nav className={`${styles["navigation"]}`}>
        <Link href="/" style={{ borderBottom: "none" }}>
          <VisuallyHidden>Company logo</VisuallyHidden>
          <Logo />
        </Link>
        <ul className={styles["navigation__list"]}>
          {navItems.map((item, index) => {
            return (
              <NavbarItem
                key={index}
                title={item.title}
                href={item.href}
                itemClass={styles["navigation__item"]}
                linkClass={styles["navigation__link"]}
              />
            );
          })}
        </ul>
        <Link
          href="/contact-me"
          className="button button--ghost"
          data-navigation-contact-me
        >
          Contact Me <Icon type="arrowRight" />
        </Link>
        <button
          className="button button--ghost"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-mobile-menu-toggle
        >
          {!mobileMenuOpen ? "Menu" : "Close"}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
