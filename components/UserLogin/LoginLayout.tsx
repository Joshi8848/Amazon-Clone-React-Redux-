import React, { Fragment, useState, useContext } from "react";
import { AmazonPolicy } from "./UsernameLogin";
import styles from "./LoginLayout.module.css";
import AmazonLogo from "../../images/amazon-logo.svg";
import {  useFormik } from "formik";
import * as Yup from "yup";
import { LoginContext, LoginParams } from "../../context/login-context";
import { useRouter } from "next/router";

let emailPage: boolean = true;

const emailAddress: { email: string | null; password: string | null } = {
  email: null,
  password: null,
};

const LoginLayout = () => {
  const loginCtx = useContext(LoginContext)
  const [loginCreds, setLoginCreds] = useState();
  const { pathname, push } = useRouter();

  if (pathname === "/login") {
    emailPage = true;
  } else if (pathname === "/login/password") {
    emailPage = false;
  }

  const labelText: string = emailPage
    ? "Email or mobile phone number"
    : "Password";

  const handleFormSubmission = (event: React.FormEvent) => {
    event.preventDefault();
    if (pathname === "/login" && formik.values.email.trim().length > 0) {
      emailPage = false;
      push("/login/password");
      emailAddress.email = formik.values.email;
      return;
    }
    if (
      pathname === "/login/password" &&
      formik.values.password.trim().length > 0
    ) {
      push("/");
      emailAddress.password = formik.values.password;
    }
  };

  const switchToEmailPageHandler = () => {
    emailPage = true;
    push("/login");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(30, "Email must be 30 characters or less")
        .required("Required!")
        .email("Invalid Email"),
      password: Yup.string()
        .min(7, "Password must be at least 7 characters")
        .max(20, "Your password cannot be more than 20 characters long.")
        .required("Required!")
        .matches(
          /^(?=.*[a-z])/,
          "Must contain at least one lowercase character"
        )
        .matches(
          /^(?=.*[A-Z])/,
          "Must contain at least one uppercase character"
        )
        .matches(/^(?=.*[0-9])/, "Must contain at least one number")
        .matches(
          /^(?=.*[!@#%&])/,
          "Must contain at least one special character"
        ),
    }),
    onSubmit: (values: object) => {},
  });

  return (
    <Fragment>
      <AmazonLogo className={styles["amazon-logo"]} />
      <div className={styles["sign-in__box"]}>
        <h1>Sign in</h1>
        {!emailPage && emailAddress.email && (
          <p className={styles["user-email"]}>
            {emailAddress.email}{" "}
            <a
              className={styles["change-email"]}
              onClick={switchToEmailPageHandler}
            >
              Change
            </a>
          </p>
        )}
        <form
          onSubmit={handleFormSubmission}
          className={styles["username-info"]}
        >
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
    </Fragment>
  );
};

export default LoginLayout;
