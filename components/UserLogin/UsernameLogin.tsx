import styles from "./UsernameLogin.module.css";
import AmazonLogo from "../../images/amazon-logo.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

const UsernameLoginPage = () => {
  const router = useRouter();

  const handleAccountCreation = () => {
    router.push("/create-account");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(30, "Email must be 30 characters or less")
        .required("Required!")
        .email("Invalid Email"),
    }),
    onSubmit: (values: object) => {
      console.log(values);
    },
  });

  console.log(formik.errors);

  return (
    <div className={styles["username-page"]}>
      <AmazonLogo className={styles["amazon-logo"]} />
      <div className={styles["sign-in__box"]}>
        <h1>Sign in</h1>
        <form
          onSubmit={formik.handleSubmit}
          className={styles["username-info"]}
        >
          <label htmlFor="email">Email or mobile phone number</label>
          <input
            id="email"
            type="text"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <p className={styles["email-error"]}>{formik.errors.email}</p>
          )}
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
      <div className={styles["sign-up__footer"]}>
        <span>
          {/* <hr /> */}
          New to Amazon?
          {/* <hr /> */}
        </span>
        <button onClick={handleAccountCreation}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default UsernameLoginPage;
