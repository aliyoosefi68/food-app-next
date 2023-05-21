import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">HiFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categoties</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://hielementor.com" target="_blank" rel="noreferer">
          Hielementor
        </a>
        Next.js website | Hielementor Project &copy;
      </footer>
    </>
  );
};

export default Layout;
