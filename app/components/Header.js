import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/navbar.module.css";
import Nav from "@/app/components/Nav";

const Header = () => {
  return (
    <header className={`${styles.main_header} ${styles.fixed_header}`}>
        <div className={styles.navbar_brand}>
            <Link href="/">
                <Image src="/logo.png" width={150} height={40} alt="Something"></Image>
            </Link>
        </div>
        <Nav />
    </header>
  );
};

export default Header;
