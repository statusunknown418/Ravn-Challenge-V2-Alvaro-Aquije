import { FC } from "react";
import styles from "../styles/spinnerLoader.module.css";
type Props = {};

export const LoadingSpinner: FC<Props> = () => {
  return (
    <div className="flex items-center justify-center mt-3">
      <div className={styles.spinner}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
        <div className={styles.bar4}></div>
        <div className={styles.bar5}></div>
        <div className={styles.bar6}></div>
        <div className={styles.bar7}></div>
        <div className={styles.bar8}></div>
        <div className={styles.bar9}></div>
        <div className={styles.bar10}></div>
        <div className={styles.bar11}></div>
        <div className={styles.bar12}></div>
      </div>
      <h3 className="text-light-text font-semibold">Loading ...</h3>
    </div>
  );
};
