import React from "react";
import LoginLayout from "./LoginLayout";
import { useRouter } from "next/router";
import styles from "./UsernameLogin.module.scss";

export const AmazonPolicy: React.FC<{ str: string }> = (props) => {
  return (
    <p>
      By {props.str}, you agree to Amazon's{" "}
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
  );
};

const UsernameLoginPage = () => {
  const router = useRouter();

  const handleAccountCreation = () => {
    router.push("/create-account");
  };

  return (
    <div className={styles["username-page"]}>
      <LoginLayout />
      <div className={styles["sign-up__footer"]}>
        <span>New to Amazon?</span>
        <button onClick={handleAccountCreation}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default UsernameLoginPage;
