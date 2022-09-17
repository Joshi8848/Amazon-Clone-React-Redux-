import LoginLogic from "./LoginLogic";
import styles from "./PasswordLogin.module.scss";

const PasswordLoginPage = () => {
  return (
    <div className={styles["password-page"]}>
      <LoginLogic />
    </div>
  );
};

export default PasswordLoginPage;
