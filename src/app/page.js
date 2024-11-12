"use client";
import styles from "./page.module.css";
import ShoeIndex from "@/components/ShoeIndex";
import { useState } from "react";

export default function Home() {
  const [sortId, setSortId] = useState("newest");
  return (
    <main className={styles.main}>
      <ShoeIndex
        sortId={sortId}
        setSortId={setSortId}
      />
    </main>
  );
}
