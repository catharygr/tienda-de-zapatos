import Link from "next/link";
import styles from "./Header.module.css";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import { ESCRITORIO_LINK } from "@/constants";

export default function Header() {
  // El sitio presenta dos encabezados visuales, pero deberían
  // agruparse semánticamente como un solo encabezado.
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
      </div>
    </header>
  );
}
