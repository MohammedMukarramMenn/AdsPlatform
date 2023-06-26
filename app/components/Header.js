import styles from "@/app/styles/navbar.module.css";
import Nav from "@/app/components/Nav";

const Header = () => {
  return (
    <header className={`${styles.main_header} ${styles.fixed_header}`}>
      <Nav />
    </header>
  );
};

export default Header;
