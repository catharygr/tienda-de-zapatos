import styles from "./ShoeIndex.module.css";
import Select from "../Select";
import ShoeGrid from "../ShoeGrid";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ShoeSidebar from "../ShoeSidebar";

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
        <span className={styles.space}></span>
        <ShoeGrid />
      </div>
      <div className={styles.leftColumn}>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <span className={styles.space}></span>
        <ShoeSidebar />
      </div>
    </div>
  );
}
