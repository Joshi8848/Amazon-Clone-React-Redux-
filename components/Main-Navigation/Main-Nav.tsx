import React, { useState, useContext } from "react";
import Image from "next/image";
import ShoppingCartLogo from "../../images/shopping-cart-icon.png";
import styles from "./Main-Nav.module.css";
import AmazonLogo from "../../images/amazon-logo.svg";
import MainSearchBar from "./Main-Search-Bar";
import SignUpModal from "../modal/SignUpModal";
import UserLocation from "../location/User-Location";
import { LoginContext } from "../../context/login-context";

interface NavProps {
  userCountry: string | null;
}

const MainNavigation: React.FC<NavProps> = React.memo((props) => {
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const { loginInfo, loggedInStatus } = useContext(LoginContext);
  const { email } = loginInfo;

  console.log(email);
  const ifLoggedIn = (
    <h3>
      <span>Hello, {email}</span> <br />
      <span>Welcome to Amazon</span>
    </h3>
  );
  const ifNotLoggedIn = (
    <h3>
      <span>Hello, Guest</span>
      <br />
      <span>Sign in</span>
    </h3>
  );

  return (
    <nav className={styles.nav}>
      <AmazonLogo className={styles.logo} />
      {props.userCountry && <UserLocation userCountry={props.userCountry} />}
      <MainSearchBar />
      <div className={styles["sign-in__link"]}>
        {!loggedInStatus ? ifNotLoggedIn : ifLoggedIn}
      </div>
      <SignUpModal />
      <div className={styles["cart-container"]}>
        <Image
          width={50}
          height={50}
          src={ShoppingCartLogo}
          className={styles.cart}
        />
        <span className={styles["number-ofItems"]}>{numberOfCartItems}</span>
      </div>
    </nav>
  );
});

export default MainNavigation;
