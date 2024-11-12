import Link from "next/link";
import styles from "./Header.module.css";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

export default function Header() {
  // Nuestro sitio presenta dos encabezados visuales, pero deberían
  // agruparse semánticamente como un solo encabezado.
  return (
    <header className={styles.mainHeader}>
      <SuperHeader />
      <Logo />
      <nav className={styles.enlaces}>
        <Link href="/sale">Sale</Link>
        <Link href="/new">New&nbsp;Releases</Link>
        <Link href="/men">Men</Link>
        <Link href="/women">Women</Link>
        <Link href="/kids">Kids</Link>
        <Link href="/collections">Collections</Link>
      </nav>
    </header>
  );
}
