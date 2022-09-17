import React from "react";
import { AmazonPolicy } from "./UsernameLogin";
import styles from "./LoginLayout.module.scss";

type formikObj = {
  values: {
    email: string;
    password: string;
  };
  handleBlur: () => {};
  handleChange: () => {};
  touched: {
    email: boolean;
    password: boolean;
  };
  errors: {
    email: string;
    password: string;
  };
};

const LoginLayout: React.FC<{
  emailPage: boolean;
  emailAddress: { email: string | null };
  onSwitchToEmailPage: () => void;
  onFormSubmission: (event: React.FormEvent) => void;
  formik: formikObj;
}> = (props) => {
  const {
    emailPage,
    emailAddress,
    onSwitchToEmailPage,
    onFormSubmission,
    formik,
  } = props;
  const labelText: string = emailPage
    ? "Email or mobile phone number"
    : "Password";

  return (
    <div className={styles["sign-in__box"]}>
      <h1>Sign in</h1>
      {!emailPage && emailAddress.email && (
        <p className={styles["sign-in__box-email"]}>
          {emailAddress.email}{" "}
          <a
            className={styles["sign-in__box-change-email"]}
            onClick={onSwitchToEmailPage}
          >
            Change
          </a>
        </p>
      )}
      <form onSubmit={onFormSubmission} className={styles["username-info"]}>
        <label htmlFor={`${emailPage ? "email" : "password"}`}>
          {labelText}
        </label>
        {emailPage && (
          <input
            id="email"
            type="text"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        )}
        {!emailPage && (
          <input
            id="password"
            type="text"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        )}
        {emailPage && formik.touched.email && formik.errors.email && (
          <p className={styles["show-error"]}>{formik.errors.email}</p>
        )}
        {!emailPage &&
          formik.touched.password &&
          formik.errors.password &&
          emailAddress.email && (
            <p className={styles["show-error"]}>{formik.errors.password}</p>
          )}
        {!emailPage && emailAddress.email === null && (
          <p className={styles["show-error"]}>No Email Found</p>
        )}
        <button>{emailPage ? "Continue" : "Sing-in"}</button>
      </form>
      {emailPage && <AmazonPolicy str="continuing" />}
    </div>
  );
};

export default LoginLayout;
