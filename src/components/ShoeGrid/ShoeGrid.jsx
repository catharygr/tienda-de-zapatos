import SHOES from "@/data";

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
