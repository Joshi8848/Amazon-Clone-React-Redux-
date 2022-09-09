import styles from "../styles/login.module.css";
import UsernameLoginPage from "../components/UserLogin/UsernameLogin";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <section className={styles["username-page__container"]}>
      {<UsernameLoginPage />}
    </section>
  );
};

export default LoginPage;
