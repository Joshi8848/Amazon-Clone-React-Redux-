import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { LoginParams } from "../../context/login-context";
import { useRouter } from "next/router";
import CreateNewAccountLayout from "./CreateNewAccountLayout";

interface SignInCreds {
  name: string;
  email: string;
  password: string;
}

let checkPwError: boolean = false;

const CreateNewAccountLogic: React.FC<{
  onCreateAccount: (loginObj: LoginParams) => void;
}> = React.memo((props) => {
  const Router = useRouter();
  const { onCreateAccount } = props;

  const formik = useFormik({
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
      if (checkPwError) return;
      const loginObj = { name: values.name, email: values.email };
      props.onCreateAccount(loginObj);
      Router.push("/");
    },
  });

  const checkPasswordError = (error: boolean) => {
    checkPwError = error;
  };

  return (
    <CreateNewAccountLayout
      {...{ formik, onCreateAccount, checkPasswordError }}
    />
  );
});

export default CreateNewAccountLogic;
