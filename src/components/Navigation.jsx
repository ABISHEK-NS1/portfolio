import React from "react";
import styles from "../styles/Navigation.module.css";

function Navigation() {
  return (
    <>
      <ul className={styles.navigation}>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact-me">Contact</a>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
