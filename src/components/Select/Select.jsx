import styles from "./Select.module.css";

export default function Select({ label, value, children, ...delegated }) {
  const chilArray = React.Children.toArray(children);
  const selectedChaild = chilArray.find((child) => child.props.value === value);

  const displayValue = selectedChaild ? selectedChaild.props.children : null;

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
        {children}
      </div>
    </div>
  );
}
