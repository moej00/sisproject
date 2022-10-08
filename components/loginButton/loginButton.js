import Link from "next/link";
import { useState } from "react";
import classes from "./loginButton.module.css";

const LoginButton = () => {
  return (
    <div>
      <Link href="/login">
        <button className={classes.btnLogin}>Login / Register</button>
      </Link>
    </div>
  );
};

export default LoginButton;
