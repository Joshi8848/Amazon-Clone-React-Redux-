import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { ProductsInfoObj } from "../../pages/[products]";
import styles from "./Dropdown.module.scss";

type CurrentItemType = {
  item: ProductsInfoObj;
  quantity: number;
  totalPrice: number;
};

interface itemIndex {
  [key: string]: number;
}

const dropdownArr = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];

let activeItemIndex = {} as itemIndex;
let currentActiveNumber: number;

const Dropdown: React.FC<{
  onSelectQuantity: (itemQuantity: string, originalPrice: string) => void;
  dropdownStatus: boolean;
  productId: string;
  currentCartItem: CurrentItemType;
}> = (props) => {
  const { pathname } = useRouter();
  const { onSelectQuantity, dropdownStatus, productId, currentCartItem } =
    props;

  const dropdownParentEl = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[] | null[]>([]);

  useEffect(() => {
    if (!(pathname === "/cart")) return;
    itemsRef.current.forEach((item) => {
      item!.classList.remove(styles["dropdown-active"]);
    });
    for (const key in activeItemIndex) {
      if (productId === key) {
        currentActiveNumber = currentCartItem.quantity - 1;
        itemsRef.current[currentActiveNumber]!.classList.add(
          styles["dropdown-active"]
        );
      }
    }
  }, [pathname]);

  const handleProductQuantity = (event: React.MouseEvent) => {
    itemsRef.current.forEach((item, i) => {
      item!.classList.remove(styles["dropdown-active"]);
      event.currentTarget.innerHTML === item!.innerHTML
        ? (activeItemIndex[productId] = i)
        : null;
    });
    onSelectQuantity(
      event.currentTarget.innerHTML,
      pathname === "/cart" ? currentCartItem.item.original_price : ""
    );
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
