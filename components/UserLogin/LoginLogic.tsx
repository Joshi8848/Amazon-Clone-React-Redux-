import React, { Fragment, useCallback, useContext } from "react";
import LoginLayout from "./LoginLayout";
import Image from "next/image";
import styles from "./LoginLogic.module.scss";
import AmazonLogo from "../../images/amazon1.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LoginContext } from "../../context/login-context";
import { useRouter } from "next/router";

let emailPage: boolean = true;

const emailAddress: { email: string | null } = {
  email: null,
};

const LoginLogic = () => {
  const loginCtx = useContext(LoginContext);
  const { pathname, push } = useRouter();

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

  if (pathname === "/login") {
    emailPage = true;
  } else if (pathname === "/login/password") {
    emailPage = false;
  }

  const handleFormSubmission = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      pathname === "/login" &&
      formik.values.email.trim().length > 0 &&
      !formik.errors.email
    ) {
      emailPage = false;
      push("/login/password");
      emailAddress.email = formik.values.email;
      return;
    }
    if (
      pathname === "/login/password" &&
      formik.values.password.trim().length > 0 &&
      !formik.errors.password
    ) {
      const userEmail = { email: emailAddress.email };
      loginCtx.shareLoginCredentials(userEmail);

      push("/");
    }
  };

  const switchToEmailPageHandler = () => {
    emailPage = true;
    push("/login");
  };

  return (
    <Fragment>
      <div className={styles["amazon-logo__box"]}>
        <Image
          width={100}
          height={100}
          src={AmazonLogo}
          className={styles["amazon-logo"]}
        />
      </div>
      <LoginLayout
        emailPage={emailPage}
        emailAddress={emailAddress}
        onSwitchToEmailPage={switchToEmailPageHandler}
        onFormSubmission={handleFormSubmission}
        formik={formik}
      />
    </Fragment>
  );
};

export default LoginLogic;
