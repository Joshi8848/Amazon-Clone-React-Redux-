import { useFormik } from "formik";
import * as Yup from "yup";
import AmazonLogo from "../../images/amazon-logo.svg";
import styles from "./LoginLayout.module.css";
import { AmazonPolicy } from "./UsernameLogin";

const CreateNewAccount = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
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
    <div>
      <AmazonLogo className={styles["amazon-logo"]} />
      <div className={styles["sign-in__box"]}>
        <h1>Sign in</h1>

        <form
          onSubmit={formik.handleSubmit}
          className={styles["username-info"]}
        >
          <label htmlFor="name">Your Name</label>

          <input
            id="email"
            type="text"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
          />

          <input
            id="password"
            type="text"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
          />

          <p className={styles["show-error"]}>{formik.errors.email}</p>

          <p className={styles["show-error"]}>{formik.errors.password}</p>

          <p className={styles["show-error"]}>No Email Found</p>

          <button>Continue</button>
        </form>
        <AmazonPolicy str="creating an account" />
      </div>
    </div>
  );
};

export default CreateNewAccount;
