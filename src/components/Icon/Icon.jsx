import styles from "./Icon.module.css";
import { Search, Menu, ShoppingBag, ChevronDown } from "react-feather";

const icons = {
  search: Search,
  menu: Menu,
  "shopping-bag": ShoppingBag,
  "chevron-down": ChevronDown,
};

export default function Icon({ id, color, size, strokeWidth, ...delegated }) {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <div
      strokeWidth={strokeWidth}
      className={styles.wrapper}
      {...delegated}
    >
      <Component
        color={color}
        size={size}
      />
    </div>
  );
}
