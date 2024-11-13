import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs({ children }) {
  return <nav className={styles.wrapper}>{children}</nav>;
}

Breadcrumbs.Crumb = function Crumb({ href, children, delegated }) {
  return (
    <div className={styles.crumbWrapper}>
      <Link
        className={styles.crumbLink}
        href={href}
        {...delegated}
      >
        {children}
      </Link>
    </div>
  );
};
