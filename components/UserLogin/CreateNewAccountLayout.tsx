import React, { useState } from "react";

import Image from "next/image";
import AmazonLogo from "../../images/amazon1.svg";
import { AmazonPolicy } from "./UsernameLogin";
import styles from "./LoginLayout.module.scss";
import classes from "./CreateNewAccountLayout.module.scss";
import { LoginParams } from "../../context/login-context";
import { formikObj } from "./LoginLayout";

let confirmPassword: string;

const CreateNewAccountLayout: React.FC<{
  formik: formikObj;
  onCreateAccount: (loginObj: LoginParams) => void;
  checkPasswordError: (error: boolean) => void;
}> = (props) => {
  const [pwError, setPwError] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    props.formik;

  const handlePasswordMatch = (event: React.ChangeEvent<HTMLInputElement>) => {
    confirmPassword = event.target.value;
    if (
      confirmPassword.length === values.password.length &&
      confirmPassword !== values.password
    ) {
      setPwError(true);
      props.checkPasswordError(true);
    } else if (confirmPassword.length > values.password.length) {
      setPwError(true);
      props.checkPasswordError(true);
    } else {
      setPwError(false);
      props.checkPasswordError(false);
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
};

export default CreateNewAccountLayout;
