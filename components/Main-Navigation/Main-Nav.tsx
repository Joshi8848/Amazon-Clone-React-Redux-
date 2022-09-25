import React, { useState, useContext } from "react";
import Image from "next/image";
import ShoppingCartLogo from "../../images/shopping-cart-icon.png";
import styles from "./Main-Nav.module.scss";
import AmazonLogo from "../../images/amazon.svg";
import MainSearchBar from "./Main-Search-Bar";
import SignUpModal from "../modal/SignUpModal";
import UserLocation from "../location/User-Location";
import { LoginContext } from "../../context/login-context";
import Link from "next/link";

interface NavProps {
  userCountry: string | null;
}

const MainNavigation: React.FC<NavProps> = React.memo((props) => {
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const { loginInfo, loggedInStatus } = useContext(LoginContext);
  const { email } = loginInfo;

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
    <nav className={styles["main-nav"]}>
      <div className={styles["main-nav__logo-container"]}>
        <Link href="/">
          <Image
            width={100}
            height={100}
            src={AmazonLogo}
            className={styles["main-nav__amazon-logo"]}
          />
        </Link>
      </div>
      {props.userCountry && <UserLocation userCountry={props.userCountry} />}
      <MainSearchBar />
      <div className={styles["main-nav__sign-in"]}>
        {!loggedInStatus ? ifNotLoggedIn : ifLoggedIn}
      </div>
      <SignUpModal />
      <Link href="/cart">
        <div className={styles["main-nav__cart-container"]}>
          <Image src={ShoppingCartLogo} className={styles.cart} />
          <span className={styles["number-ofItems"]}>{numberOfCartItems}</span>
        </div>
      </Link>
    </nav>
  );
});

export default MainNavigation;
