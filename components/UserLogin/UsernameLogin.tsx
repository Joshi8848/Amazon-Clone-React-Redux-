import styles from "./UsernameLogin.module.css";
import AmazonLogo from "../../images/amazon-logo.svg";

const UsernameLoginPage = () => {
  return (
    <div className={styles["username-page"]}>
      <AmazonLogo className={styles["amazon-logo"]} />
      <div className={styles["sign-in__box"]}>
        <h1>Sign in</h1>
        <form className={styles["username-info"]}>
          <p>Email or mobile phone number</p>
          <input type="text" />
          <button>Continue</button>
        </form>
        <p>
          By continuing, you agree to Amazon's{" "}
          <a
            href="https://www.amazon.sg/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=201909000"
            target="_blank"
          >
            Conditions of Use
          </a>{" "}
          and{" "}
          <a
            href="https://www.amazon.sg/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=201909010"
            target="_blank"
          >
            Privacy Notice.
          </a>
        </p>
      </div>
    </div>
  );
};

export default UsernameLoginPage;
