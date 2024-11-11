import styles from "./SuperHeader.module.css";

import SearchInput from "../SearchInput";
import Icon from "../Icon";

export default function SuperHeader() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.marketingMessage}>
        {" "}
        Free shipping on domestic orders over $75!
      </span>
      <SearchInput />
      <button className={styles.button}>
        <Icon id="shopping-bag" />
      </button>
    </div>
  );
}
