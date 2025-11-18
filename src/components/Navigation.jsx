import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navigation.module.css";

function Navigation() {
  return (
    <>
      <ul className={styles.navigation}>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact-me">Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
