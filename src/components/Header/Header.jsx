import Link from "next/link";
import styles from "./Header.module.css";
import Logo from "../Logo";

export default function Header() {
  return (
    <header>
      <div className={styles.mainHeader}>
        <Logo />
        <nav className={styles.a}>
          <Link href="/sale">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </nav>
      </div>
    </header>
  );
}
