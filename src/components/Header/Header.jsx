"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import { ESCRITORIO_LINK } from "@/constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500); 
  };

  return (
    <header>
      <SuperHeader />
      <div className={styles.mainHeader}>
        <Logo />
        <nav className={styles.enlaces}>
          {ESCRITORIO_LINK.map((link) => (
            <Link
              key={link.slug}
              href={`/${link.href}`}
            >
              {link.href}
            </Link>
          ))}
        </nav>
        <div
          className={styles.hamburguesa}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav
          className={`${styles.menuDesplegable} ${
            isOpen ? styles.abierto : styles.cerrado
          }`}
        >
          {ESCRITORIO_LINK.map((link) => (
            <Link
              key={link.slug}
              href={`/${link.href}`}
            >
              {link.href}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
