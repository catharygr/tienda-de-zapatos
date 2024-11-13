import styles from "./ShoeSidebar.module.css";
import Link from "next/link";

export default function ShoeSidebar() {
  return (
    <aside className={styles.aside}>
      <Link href="/lifestyle">Lifestyle</Link>
      <Link href="/jordan">Jordan</Link>
      <Link href="/running">Running</Link>
      <Link href="/basketball">Basketball</Link>
      <Link href="/training">Training &amp; Gym</Link>
      <Link href="/football">Football</Link>
      <Link href="/skateboarding">Skateboarding</Link>
      <Link href="/us-football">American Football</Link>
      <Link href="/baseball">Baseball</Link>
      <Link href="/golf">Golf</Link>
      <Link href="/tennis">Tennis</Link>
      <Link href="/athletics">Athletics</Link>
      <Link href="/walking">Walking</Link>
    </aside>
  );
}
