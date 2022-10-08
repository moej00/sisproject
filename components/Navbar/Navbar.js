import LoginButton from "../loginButton/loginButton";
import classes from "./Navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = ({ children }) => {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/");
  };
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.sisLogo}>
          <Link href="/">
            <img className={classes.logo} src="/ESA.jpg" alt="ESA" width="40" />
          </Link>
          <LoginButton />
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
