import styles from "./Main-Search.module.css";
import { BiSearch } from "react-icons/bi";
import { useRef } from "react";

const MainSearchBar = () => {
  const divEl = useRef<HTMLDivElement>(null);

  const inputFocusHandler = () => {
    divEl.current!.classList.add(styles.active);
  };

  const inputBlurHandler = () => {
    divEl.current!.classList.remove(styles.active);
  };

  return (
    <div className={styles["search-container"]} ref={divEl} tabIndex={-1}>
      <input
        className={styles["main-search__bar"]}
        type="text"
        onFocus={inputFocusHandler}
        onBlur={inputBlurHandler}
      />
      <div className={styles["search-icon__container"]}>
        {/* <input type="submit" value="" /> */}
        <BiSearch className={styles["search-icon"]} />
      </div>
    </div>
  );
};

export default MainSearchBar;
