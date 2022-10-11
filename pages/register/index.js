import { useFormik } from "formik";
import { registerSchema } from "../../Schemas";
import classes from "./Register.module.css";

const onSubmit = async (values, actions) => {
  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify(),
    headers: {
      "Contecnt-Type": "application/json",
    },
  });
  const data = await response.json();
  actions.resetForm();
  console.log(data);
};

const Register = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        program: "",
        password: "",
        confirmPassword: "",
        areaCode: "",
        mobileNumber: "",
      },
      validationSchema: registerSchema,
      onSubmit,
    });
  return (
    <div className={classes.formItems}>
      <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
        <h1>New User? Register</h1>
        <hr></hr>
        <div>
          <label htmlFor="firstname">FirstName</label>
          <span className={classes.req}>*</span>
          <input
            type="text"
            id="firstname"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.firstname && touched.firstname
                ? `${classes.inputError}`
                : ""
            }
          ></input>
        </div>
        {errors.firstname && touched.firstname && (
          <span className={classes.error}>{errors.firstname}</span>
        )}
        <div>
          <label htmlFor="lastname">LastName</label>
          <span className={classes.req}>*</span>
          <input
            type="text"
            id="lastname"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.lastname && touched.lastname ? `${classes.inputError}` : ""
            }
          ></input>
        </div>
        {errors.lastname && touched.lastname && (
          <span className={classes.error}>{errors.lastname}</span>
        )}
        <div>
          <label htmlFor="email">Email</label>
          <span className={classes.req}>*</span>
          <input
            type="text"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.email && touched.email ? `${classes.inputError}` : ""
            }
          ></input>
        </div>
        {errors.email && touched.email && (
          <span className={classes.error}>{errors.email}</span>
        )}
        <div>
          <label htmlFor="program">Program/Programme</label>
          <span className={classes.req}>*</span>
          <select
            id="program"
            value={values.program}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.program && touched.program ? `${classes.inputError}` : ""
            }
          >
            <option value="">Please Select a Program</option>
            <option value="it">IT</option>
            <option value="business">Business</option>
          </select>
        </div>
        {errors.program && touched.program && (
          <span className={classes.error}>{errors.program}</span>
        )}
        <div>
          <label htmlFor="password">Password</label>
          <span className={classes.req}>*</span>
          <input
            type="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.password && touched.password ? `${classes.inputError}` : ""
            }
          ></input>
        </div>
        {errors.password && touched.password && (
          <span className={classes.error}>{errors.password}</span>
        )}
        <div>
          <label htmlFor="confirmPassword">Confrim Password</label>
          <span className={classes.req}>*</span>
          <input
            type="password"
            id="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.confirmPassword && touched.confirmPassword
                ? `${classes.inputError}`
                : ""
            }
          ></input>
        </div>
        {errors.confirmPassword && touched.confirmPassword && (
          <span className={classes.error}>{errors.confirmPassword}</span>
        )}
        <div>
          <label htmlFor="mobileNumber">Mobile number</label>
          <span className={classes.req}>*</span>
          <select
            id="areaCode"
            value={values.areaCode}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.areaCode && touched.areaCode ? `${classes.inputError}` : ""
            }
          >
            <option value="">Area Code</option>
            <option value="+961">+961</option>
            <option value="+254">+254</option>
            <option value="+963">+963</option>
            <option value="+1">+1</option>
          </select>

          <input
            type="phone"
            id="mobileNumber"
            value={values.mobileNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.mobileNumber && touched.mobileNumber
                ? `${classes.inputError}`
                : ""
            }
          ></input>
        </div>
        {errors.areaCode && touched.areaCode && (
          <span className={classes.error}>{errors.areaCode}</span>
        )}
        {errors.mobileNumber && touched.mobileNumber && (
          <span className={classes.error}>{errors.mobileNumber}</span>
        )}

        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
