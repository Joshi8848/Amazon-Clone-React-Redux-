import LoginLayout from "./LoginLayout";
import styles from "./PasswordLogin.module.css";

const PasswordLoginPage = () => {
  return (
    <div className={styles["password-page"]}>
      <LoginLayout />
    </div>
  );
};

export default PasswordLoginPage;
