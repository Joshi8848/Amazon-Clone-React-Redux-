import React, { Fragment, useRef } from "react";
import styles from "./Main-Nav.module.css";
import AmazonLogo from "../../images/amazon-logo.svg";
import { BiSearch } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface NavProps {
  userCountry: string | null;
}

const MainNavigation: React.FC<NavProps> = React.memo((props) => {
  const divEl = useRef<HTMLDivElement>(null);

  const inputFocusHandler = () => {
    divEl.current!.classList.add(styles.active);
  };

  const inputBlurHandler = () => {
    divEl.current!.classList.remove(styles.active);
  };

  const locationEl = (
    <Fragment>
      <HiOutlineLocationMarker className={styles.location} />
      <span className={styles.deliver}>
        Deliver To
        <br />
        <h2 className={styles.country}>{props.userCountry}</h2>
      </span>
    </Fragment>
  );

  return (
    <nav className={styles.nav}>
      <AmazonLogo className={styles.logo} />

      {props.userCountry && locationEl}
      <div className={styles["search-container"]} ref={divEl} tabIndex={-1}>
        <input
          className={styles.search}
          type="text"
          onFocus={inputFocusHandler}
          onBlur={inputBlurHandler}
        />
        <div className={styles["search-icon__container"]}>
          {/* <input type="submit" value="" /> */}
          <BiSearch className={styles["search-icon"]} />
        </div>
      </div>
    </nav>
  );
});

export default MainNavigation;
