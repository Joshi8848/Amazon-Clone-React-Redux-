import { useRouter } from "next/router";
import React, { Fragment, useState, useRef, useContext } from "react";
import Backdrop from "./Backdrop";
import styles from "./SignUpModal.module.scss";
import classes from "../../styles/index.module.scss";
import Link from "next/link";
import { LoginContext } from "../../context/login-context";
import { cartItemsAction } from "../store/cartLogicSlice";
import { useDispatch } from "react-redux";
import shareUserRatingSlice from "../store/shareUserRatingSlice";

let open: boolean = false;

const SignUpModal = React.memo(() => {
  const dispatch = useDispatch();
  const { loggedInStatus, logoutFunc } = useContext(LoginContext);
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);

  const modalEl = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    open = true;
    setModalOpen(true);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setTimeout(() => {
      setModalOpen(false);
      open = false;
    }, 600);
  };

  const handleLeave = () => {
    setTimeout(() => {
      if (open) {
        return;
      } else {
        setModalOpen(false);
        open = false;
      }
    }, 600);
  };

  const handleSignInChange = () => {
    router.push("/login");
  };

  const logoutHandler = () => {
    if (!loggedInStatus) return;
    logoutFunc();
  };

  const redirectToNewAccountCreatePageHandler = () => {
    router.push("/create-account");
  };

  const modal = (
    <div
      className={styles["signin-modal"]}
      ref={modalEl}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <div className={styles.arrow2}></div>

      <Link href={!loggedInStatus ? "/login" : "/"}>
        <button onClick={logoutHandler} className={styles["sign-in__btn"]}>
          {!loggedInStatus ? "Sign in" : "Sign out"}
        </button>
      </Link>

      {!loggedInStatus && (
        <h4 className={classes.noselect}>
          New Customer?{" "}
          <span onClick={redirectToNewAccountCreatePageHandler}>
            Start here
          </span>
        </h4>
      )}
      {loggedInStatus && (
        <h4 className={classes.noselect}>
          <span onClick={handleSignInChange}>Change Account</span>
        </h4>
      )}
    </div>
  );

  return (
    <Fragment>
      {modalOpen && <Backdrop />}
      <div
        className={styles.arrow}
        onMouseEnter={handleModalOpen}
        onMouseLeave={handleLeave}
      >
        {modalOpen && modal}
      </div>
    </Fragment>
  );
});

export default SignUpModal;
