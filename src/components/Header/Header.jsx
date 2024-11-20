"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import { ESCRITORIO_LINK } from "@/constants";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
      </div>
      {isOpen && (
        <nav className={styles.menuDesplegable}>
          {ESCRITORIO_LINK.map((link) => (
            <Link
              key={link.slug}
              href={`/${link.href}`}
            >
              {link.href}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
