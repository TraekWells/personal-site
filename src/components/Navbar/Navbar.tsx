"use client";

import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import styles from "./Navbar.module.scss";
import Icon from "../Icon/Icon";
import VisuallyHidden from "../VisuallyHidden";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
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
          <li className={styles["navigation__item"]}>
            <Link href="/projects">
              <span className={styles["navigation__link"]}>Projects</span>
            </Link>
          </li>
          <li className={styles["navigation__item"]}>
            <Link href="/services">
              <span className={styles["navigation__link"]}>Services</span>
            </Link>
          </li>
          <li className={styles["navigation__item"]}>
            <Link href="/about-me">
              <span className={styles["navigation__link"]}>About Me</span>
            </Link>
          </li>
          <li className={styles["navigation__item"]}>
            <Link href="/blog">
              <span className={styles["navigation__link"]}>Writing</span>
            </Link>
          </li>
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
