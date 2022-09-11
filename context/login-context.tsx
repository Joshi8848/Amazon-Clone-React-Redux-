import React, { useState } from "react";
import { boolean } from "yup/lib/locale";

interface Props {
  children: React.ReactNode;
}

export type LoginParams = {
  email: string | null;
};

type LoginObj = {
  shareLoginCredentials: (creds: LoginParams) => void;
  logoutFunc: () => void;
  loginInfo: LoginParams;
  loggedInStatus: boolean;
};

export const LoginContext = React.createContext<LoginObj>({
  shareLoginCredentials: () => {},
  logoutFunc: () => {},
  loginInfo: {} as LoginParams,
  loggedInStatus: false,
});

const LoginContextProvider: React.FC<Props> = (props) => {
  const [loginCredentials, setLoginCredentials] = useState<LoginParams>(
    {} as LoginParams
  );
  const [isLoggedIn, setLoginStatus] = useState(false);

  const loginCredentialsHandler = (creds: LoginParams) => {
    setLoginCredentials(creds);
    setLoginStatus(true);
  };

  const manageLogoutHandler = () => {
    setLoginStatus(false);
  };

  const contextValue: LoginObj = {
    shareLoginCredentials: loginCredentialsHandler,
    logoutFunc: manageLogoutHandler,
    loginInfo: loginCredentials,
    loggedInStatus: isLoggedIn,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
