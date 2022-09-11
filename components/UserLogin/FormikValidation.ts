import { useFormik } from "formik";
import * as Yup from "yup";

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
      .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
      .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
      .matches(/^(?=.*[0-9])/, "Must contain at least one number")
      .matches(/^(?=.*[!@#%&])/, "Must contain at least one special character"),
  }),
  onSubmit: (values: object) => {},
});
