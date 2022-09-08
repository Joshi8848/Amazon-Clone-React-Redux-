import styles from "../styles/login.module.css";
import UsernameLoginPage from "../components/UserLogin/UsernameLogin";

const LoginPage = () => {
  return (
    <section className={styles["username-page__container"]}>
      <UsernameLoginPage />
    </section>
  );
};

export default LoginPage;
