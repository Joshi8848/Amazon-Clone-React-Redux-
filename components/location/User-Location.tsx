import { HiOutlineLocationMarker } from "react-icons/hi";
import { Fragment } from "react";
import styles from "./User-Location.module.scss";

const UserLocation: React.FC<{ userCountry: string }> = (props) => {
  return (
    <div className={styles["location-box"]}>
      <HiOutlineLocationMarker className={styles["location-box__logo"]} />
      <span>
        Deliver To
        <br />
        <h2>{props.userCountry}</h2>
      </span>
    </div>
  );
};

export default UserLocation;
