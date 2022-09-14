import styles from "./Main-Search.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { Fragment, useRef } from "react";
import { useState } from "react";
import Backdrop from "../modal/Backdrop";

const MainSearchBar = () => {
  const [searchBarFocused, setSearchBarFocus] = useState(false);
  const divEl = useRef<HTMLDivElement>(null);

  const inputFocusHandler = () => {
    setSearchBarFocus(true);
    divEl.current!.classList.add(styles.active);
  };

  const inputBlurHandler = () => {
    setSearchBarFocus(false);
    divEl.current!.classList.remove(styles.active);
  };

  return (
    <Fragment>
      {searchBarFocused && <Backdrop />}
      <div
        className={styles["main-search__container"]}
        ref={divEl}
        tabIndex={-1}
      >
        <input
          className={styles["main-search__container--search-bar"]}
          type="text"
          onFocus={inputFocusHandler}
          onBlur={inputBlurHandler}
        />
        <div className={styles["search-icon__container"]}>
          {/* <input type="submit" value="" /> */}
          <AiOutlineSearch className={styles["search-icon__container--icon"]} />
        </div>
      </div>
    </Fragment>
  );
};

export default MainSearchBar;
