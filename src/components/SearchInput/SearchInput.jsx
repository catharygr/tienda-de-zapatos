import VisuallyHidden from "../VisuallyHidden";
import Icon from "../Icon";
import styles from "./SearchInput.module.css";

export default function SearchInput({ label, ...delegated }) {
  return (
    <form className={styles.wrapperForm}>
      <label
        htmlFor="input"
        className={styles.label}
      >
        <VisuallyHidden>Search</VisuallyHidden>
        <input
          className={styles.input}
          {...delegated}
          placeholder="Search"
        />
        <Icon
          id="search"
          className={styles.icon}
        />
      </label>
    </form>
  );
}
