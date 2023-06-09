import styles from "../../styles/login.module.scss";
import UsernameLoginPage from "../../components/UserLogin/UsernameLogin";

const LoginUsernamePage = () => {
  return (
    <section className={styles["username-page__container"]}>
      <UsernameLoginPage />
    </section>
  );
};

export default LoginUsernamePage;
