import styles from "./SuperHeader.module.css";

export default function SuperHeader() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.marketingMessage}>
        {" "}
        Free shipping on domestic orders over $75!
      </span>
    </div>
  );
}
