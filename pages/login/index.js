import Link from "next/link";
import Register from "../register";
import classes from "./Login.module.css";
import { Field, useFormik } from "formik";
import { loginSchema } from "../../Schemas";

const onSubmit = (values, actions) => {
  actions.resetForm();
  console.log(values);
};

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={classes.loginForm}>
          <div className={classes.items}>
            <h1>Enter your Email and Password</h1>
            <div>
              <label>Username</label>
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="email@email.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email ? `${classes.inputError}` : ""
                }
              />
              {errors.email && touched.email && (
                <span className={classes.error}>{errors.email}</span>
              )}
            </div>
            <div>
              <label>Password</label>
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password
                    ? `${classes.inputError}`
                    : ""
                }
              />
              {errors.password && touched.password && (
                <span className={classes.error}>{errors.password}</span>
              )}
            </div>

            <div>
              <Link href="/">
                <label className={classes.forgetP}>Forget Password?</label>
              </Link>
              <button type="submit">Login</button>
            </div>
          </div>
        </div>
      </form>
      <Register />
    </>
  );
};
export default Login;
