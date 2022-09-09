import React, { Fragment } from "react";
import styles from "./Main-Nav.module.css";
import AmazonLogo from "../../images/amazon-logo.svg";
import MainSearchBar from "./Main-Search-Bar";
import SignUpModal from "../modal/SignUpModal";
import UserLocation from "../location/User-Location";

interface NavProps {
  userCountry: string | null;
}

const MainNavigation: React.FC<NavProps> = React.memo((props) => {
  return (
    <nav className={styles.nav}>
      <AmazonLogo className={styles.logo} />
      {props.userCountry && <UserLocation userCountry={props.userCountry} />}
      <MainSearchBar />
      <div className={styles["sign-in__link"]}>
        <h3>Hello, sign in</h3>
      </div>
      <SignUpModal />
    </nav>
  );
});

export default MainNavigation;
