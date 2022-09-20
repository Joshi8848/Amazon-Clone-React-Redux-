import React, { useEffect, useRef } from "react";
import styles from "./Dropdown.module.scss";

let activeElement: (Element & EventTarget) | null = null;

const Dropdown: React.FC<{
  onSelectQuantity: (itemQuantity: string) => void;
  dropdownStatus: boolean;
}> = (props) => {
  const { onSelectQuantity, dropdownStatus } = props;
  const dropdownArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const dropdownParentEl = useRef<HTMLDivElement>(null);
  const activeNumberOne = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(dropdownStatus);
    dropdownParentEl.current!.classList.toggle(styles["dropdown-toggle"]);
  }, [dropdownStatus]);

  const handleProductQuantity = (event: React.MouseEvent) => {
    activeNumberOne.current!.classList.remove(styles["dropdown-active"]);
    activeElement
      ? activeElement.classList.remove(styles["dropdown-active"])
      : null;
    onSelectQuantity(event.currentTarget.innerHTML);
    event.currentTarget.classList.add(styles["dropdown-active"]);
    console.log(event.currentTarget);
    activeElement = event.currentTarget;
  };

  return (
    <div
      className={`${styles["dropdown"]} ${styles["dropdown-toggle"]}`}
      ref={dropdownParentEl}
    >
      {dropdownArr.map((nums, i) => (
        <div
          key={i}
          onClick={handleProductQuantity}
          className={`${styles["dropdown__number"]} ${
            i === 0 ? styles["dropdown-active"] : ""
          }`}
          ref={i === 0 ? activeNumberOne : null}
        >
          {nums}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
