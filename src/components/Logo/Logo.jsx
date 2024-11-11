import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo({ props }) {
  return (
    <Link
      href="/"
      className={styles.a}
    >
      <div
        className={styles.wrapper}
        {...props}
      >
        Sole&amp;Ankle
      </div>
    </Link>
  );
}
