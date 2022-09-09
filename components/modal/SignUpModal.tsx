import { eventNames } from "process";
import { Fragment, useState, useRef } from "react";
import Backdrop from "./Backdrop";
import styles from "./SignUpModal.module.css";

let open: boolean = false;

const SignUpModal = () => {
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
    }, 500);
  };

  const handleLeave = () => {
    setTimeout(() => {
      if (open) {
        return;
      } else {
        setModalOpen(false);
        open = false;
      }
    }, 500);
  };

  const modal = (
    <div
      className={styles["signin-modal"]}
      ref={modalEl}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <div className={styles.arrow2}></div>
      <button className={styles.noselect} onMouseEnter={handleModalOpen}>
        Sign in
      </button>
      <h4 className={styles.noselect}>
        New Customer? <span>Start here</span>
      </h4>
    </div>
  );

  return (
    <Fragment>
      {/* <Backdrop /> */}
      <div
        className={styles.arrow}
        onMouseEnter={handleModalOpen}
        onMouseLeave={handleLeave}
      >
        {modalOpen && modal}
      </div>
    </Fragment>
  );
};

export default SignUpModal;
