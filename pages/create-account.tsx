import CreateNewAccount from "../components/UserLogin/CreateNewAccount";
import { useContext } from "react";
import { LoginContext } from "../context/login-context";
import { LoginParams } from "../context/login-context";

const CreateAccountPage = () => {
  const { shareLoginCredentials } = useContext(LoginContext);
  const newAccountHandler = (loginObj: LoginParams) => {
    shareLoginCredentials(loginObj);
  };

  return <CreateNewAccount onCreateAccount={newAccountHandler} />;
};

export default CreateAccountPage;
