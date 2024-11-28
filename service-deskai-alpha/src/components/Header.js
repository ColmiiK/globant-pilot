import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>Service Deskai</h1>
    </header>
  );
};

export default Header;
