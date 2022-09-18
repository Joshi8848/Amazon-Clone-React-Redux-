import { useEffect } from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = () => {
  const dropdownArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <div className={styles["dropdown"]}>
      {dropdownArr.map((nums) => (
        <div className={styles["dropdown__number"]}>{nums}</div>
      ))}
    </div>
  );
};

export default Dropdown;
