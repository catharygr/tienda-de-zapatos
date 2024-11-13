import styles from "./ShoeIndex.module.css";
import Select from "../Select";

export default function ShoeIndex({ sortId, setSortId }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainColumn}>
        <header className={styles.header}>
          <h2>Running</h2>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </header>
        <span className={styles.space}>Hola</span>
      </div>
    </div>
  );
}
