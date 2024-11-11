import styles from "./SuperHeader.module.css";

import SearchInput from "../SearchInput";

export default function SuperHeader() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.marketingMessage}>
        {" "}
        Free shipping on domestic orders over $75!
      </span>
      <SearchInput />
      <button></button>
    </div>
  );
}
