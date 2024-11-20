import styles from "./Select.module.css";
import { ChevronDown } from "react-feather";
import React from "react";

export default function Select({ label, value, children, ...delegated }) {
  const chilArray = React.Children.toArray(children);
  const selectedChild = chilArray.find((child) => child.props.value === value);

  const displayedValue = selectedChild.props.children;

  return (
    <div className={styles.wrapper}>
      <label>
        <span className={styles.visibleLabel}>{label}</span>
      </label>
      <div className={styles.selectWrapper}>
        <select
          className={styles.nativeSelect}
          value={value}
          {...delegated}
        >
          {children}
        </select>
        <span className={styles.displayedBit}>
          {displayedValue}
          <ChevronDown
            id="chevron-down"
            size={24}
            strokeWidth={1.5}
            className={styles.chevronIcon}
          />
        </span>
      </div>
    </div>
  );
}
