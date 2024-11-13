import styles from "./Select.module.css";
import Icon from "../Icon/Icon";
import React from "react";

export default function Select({ label, value, children, ...delegated }) {
  const chilArray = React.Children.toArray(children);
  const selectedChild = chilArray.find((child) => child.props.value === value);

  const displayedValue = selectedChild.props.children;

  return (
    <div>
      <label className={styles.wrapper}>
        <span className={styles.visibleLabel}>{label}</span>
      </label>
      <div className={styles.selectWrapper}>
        <select
          className={styles.nativeSelect}
          value={value}
          {...delegated}
        ></select>
        <span>
          {displayedValue}
          <Icon
            id="chevron-down"
            className={styles.chevronIcon}
          />
        </span>
        {children}
      </div>
    </div>
  );
}
