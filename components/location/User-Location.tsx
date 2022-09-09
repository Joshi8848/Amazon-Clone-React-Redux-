import { HiOutlineLocationMarker } from "react-icons/hi";
import { Fragment } from "react";
import styles from "./User-Location.module.css";

const UserLocation: React.FC<{ userCountry: string }> = (props) => {
  return (
    <Fragment>
      <HiOutlineLocationMarker className={styles.location} />
      <span className={styles.deliver}>
        Deliver To
        <br />
        <h2 className={styles.country}>{props.userCountry}</h2>
      </span>
    </Fragment>
  );
};

export default UserLocation;
