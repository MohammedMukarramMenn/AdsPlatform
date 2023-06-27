"use client";
import Link from "next/link";
import styles from "@/app/styles/navbar.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  library.add(faBars);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLogged(!!token);
  }, []);

  const handleLogin = () => {
    setIsLogged(false);
    router.push("/session/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.topnav} ${isMenuOpen ? styles.responsive : ""}`}>
      <div className={styles.logoContainer}>
        <Link className={styles.navImageLink} href="/">
          <Image
            className={styles.logo}
            src="/logo.jpg"
            width={50}
            height={40}
            alt="Logo"
          />
        </Link>
      </div>
      <div className={styles.linksContainer}>
        <Link className={styles.navbarLink} href="/">
          Marketing Ads
        </Link>
        {isLogged ? (
          <>
            <Link className={styles.navbarLink} href="/createPost">
              Post Your Ad
            </Link>
            <Link className={styles.navbarLink} href="/dashboard">
              Dashboard
            </Link>
          </>
        ) : (
          <Link className={styles.navbarLink} href="/session/login">
            Post Your Ad
          </Link>
        )}
        <Link className={styles.navbarLink} href="/session/login">
          <button className={`btn btn-warning `} onClick={handleLogin}>
            {isLogged ? "Logout" : "Login"}
          </button>
        </Link>
        <a
          href="javascript:void(0);"
          className={styles.icon}
          onClick={toggleMenu}
        >
         <FontAwesomeIcon className={styles.navImageLink}icon="bars" size="2x" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
