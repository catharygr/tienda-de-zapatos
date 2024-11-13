import SHOES from "@/data";
import styles from "./ShoeGrid.module.css";

import ShoeCard from "../ShoeCard";

export default function ShoeGrid() {
  return (
    <div className={styles.wrapper}>
      {SHOES.map((shoe) => (
        <ShoeCard
          key={shoe.slug}
          {...shoe}
        />
      ))}
    </div>
  );
}
