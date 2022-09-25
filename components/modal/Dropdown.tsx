import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "./Dropdown.module.scss";
let activeItemIndex: number | null;

const Dropdown: React.FC<{
  onSelectQuantity: (itemQuantity: string) => void;
  dropdownStatus: boolean;
}> = (props) => {
  const { pathname } = useRouter();
  const { onSelectQuantity, dropdownStatus } = props;
  const dropdownArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const dropdownParentEl = useRef<HTMLDivElement>(null);

  const itemsRef = useRef<HTMLDivElement[] | null[]>([]);

  useEffect(() => {
    if (!(pathname === "/cart")) return;
    if (activeItemIndex) {
      itemsRef.current.forEach((item) => {
        item!.classList.remove(styles["dropdown-active"]);
      });
      itemsRef.current[activeItemIndex]!.classList.add(
        styles["dropdown-active"]
      );
    }
  }, [pathname]);

  const handleProductQuantity = (event: React.MouseEvent) => {
    itemsRef.current.forEach((item, i) => {
      item!.classList.remove(styles["dropdown-active"]);
      event.currentTarget.innerHTML === item!.innerHTML
        ? (activeItemIndex = i)
        : null;
    });
    onSelectQuantity(event.currentTarget.innerHTML);
    event.currentTarget.classList.add(styles["dropdown-active"]);
  };

  return (
    <div
      className={`${styles["dropdown"]} ${
        !dropdownStatus ? styles["dropdown-close"] : ""
      }`}
      ref={dropdownParentEl}
    >
      {dropdownArr.map((nums, i) => (
        <div
          key={i}
          onClick={handleProductQuantity}
          className={`${styles["dropdown__number"]} ${
            i === 0 ? styles["dropdown-active"] : ""
          }`}
          ref={(el) => {
            return (itemsRef.current[i] = el);
          }}
        >
          {nums}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
