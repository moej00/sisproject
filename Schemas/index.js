import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstname: yup.string().trim().required("First Name is Required!"),
  lastname: yup.string().trim().required("Last Name is Required!"),
  email: yup
    .string()
    .email("Please enter a valid email address!")
    .required("Email is Required!"),
  program: yup
    .string("Please Select a program!")
    .required("Please Select a Program!"),
  password: yup.string().min(6).required("Password is Required!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password Doesn't Match!")
    .required("Password is Required!"),
  areaCode: yup.string().required("Area Code is Required"),
  mobileNumber: yup.number().required("Mobile Number is Required!"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter your email address!")
    .required("Email is Required!"),
  password: yup.string().required("Please Enter Your Password"),
});
