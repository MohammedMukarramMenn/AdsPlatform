"use client";
import Link from "next/link";
import styles from "@/app/styles/navbar.module.css"; 
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
const Nav = () => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLogged(!!token); // Update isLog ged based on the presence of token
  }, []); // Add an empty dependency array to run the effect only once on mount

  const handleLogin = () => {
    setIsLogged(false);
    router.push("/session/login");
  };

  return (
    <nav className={styles.navbar}>
      <input type="checkbox" id="check"/>
      <label htmlFor="check">
        <i className="fas fa-bars"></i>
      </label>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link className={styles.navbarLink} href="/">
            Marketing Ads
          </Link>
        </li>
        <li className={styles.navbarItem}>
          {isLogged ? (
            <Link className={styles.navbarLink} href="/createPost">
              Post Your Ad
            </Link>
          ) : (
            <Link className={styles.navbarLink} href="/session/login">
              Post Your Ad
            </Link>
          )}
        </li>
        {isLogged && (
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/dashboard">
              Dashboard
            </Link>
          </li>
        )}
        <li className={styles.navbarItem}>
          <Link className={styles.navbarLink} href="/session/login">
            <button className={`btn btn-warning btn-lg`} onClick={handleLogin}>
              {isLogged ? "Logout" : "Login"}
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
