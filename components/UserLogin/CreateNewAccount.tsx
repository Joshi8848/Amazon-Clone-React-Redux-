import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import AmazonLogo from "../../images/amazon1.svg";
import styles from "./LoginLayout.module.scss";
import { AmazonPolicy } from "./UsernameLogin";
import { LoginParams } from "../../context/login-context";
import { useRouter } from "next/router";
import classes from "./CreateNewAccount.module.scss";

interface SignInCreds {
  name: string;
  email: string;
  password: string;
}

let confirmPassword: string;

const CreateNewAccount: React.FC<{
  onCreateAccount: (loginObj: LoginParams) => void;
}> = React.memo((props) => {
  const [pwError, setPwError] = useState(false);
  const Router = useRouter();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .max(20, "Name cannot be more than 20 characters!")
          .required("Required!")
          .min(5, "Name must be at least 5 characters")
          .matches(/^[a-z]+$/i, "Name must contain only letters"),
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
            "Must contain at least one special character (i.e: !@#%&)"
          ),
      }),
      onSubmit: (values: SignInCreds) => {
        if (pwError) return;
        const loginObj = { name: values.name, email: values.email };
        props.onCreateAccount(loginObj);
        Router.push("/");
      },
    });

  const handlePasswordMatch = (event: React.ChangeEvent<HTMLInputElement>) => {
    confirmPassword = event.target.value;
    if (
      confirmPassword.length === values.password.length &&
      confirmPassword !== values.password
    ) {
      setPwError(true);
    } else if (confirmPassword.length > values.password.length) {
      setPwError(true);
    } else {
      setPwError(false);
    }
  };

  return (
    <div className={classes["create-account__page"]}>
      <div className={classes["amazon-logo__container"]}>
        <Image
          width={100}
          height={100}
          src={AmazonLogo}
          className={styles["amazon-logo"]}
        />
      </div>
      <div className={styles["sign-in__box"]}>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit} className={styles["username-info"]}>
          <label htmlFor="name">Your Name</label>

          <input
            id="name"
            type="text"
            onBlur={handleBlur}
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && touched.name && (
            <p className={styles["show-error"]}>{errors.name}</p>
          )}

          <label htmlFor="email">Your Email</label>

          <input
            id="email"
            type="text"
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
          />

          {errors.email && touched.email && (
            <p className={styles["show-error"]}>{errors.email}</p>
          )}

          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            onBlur={handleBlur}
            value={values.password}
            onChange={handleChange}
          />

          {errors.password && touched.password && (
            <p className={styles["show-error"]}>{errors.password}</p>
          )}

          <label htmlFor="confirm-password">Confirm Password</label>

          <input id="password" type="password" onChange={handlePasswordMatch} />

          {pwError && (
            <p className={styles["show-error"]}>Password mismatch.</p>
          )}

          <button>Continue</button>
        </form>
        <AmazonPolicy str="creating an account" />
      </div>
    </div>
  );
});

export default CreateNewAccount;
