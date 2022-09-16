import styles from "./Header.module.scss";

import { Fragment, useEffect, useState } from "react";

import getLocation from "../location/Location";
import MainNavigation from "../Main-Navigation/Main-Nav";

const Header = () => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    return;
    const currentUserCountry = async () => {
      const location = await getLocation();
      setCountry(location);
    };
    currentUserCountry();
  }, []);

  return (
    <Fragment>
      <MainNavigation userCountry={country} />
    </Fragment>
  );
};

export default Header;
