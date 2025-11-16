import React from "react";
import styles from "../styles/InfoCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faEnvelope,
  faLocationDot,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

function Contacts() {
  return (
      <>
        <ul className={styles.contacts}>
          <li>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#1e91a1" }} />
            </div>
            <a href="mailto:nsabishek05@gmail.com">nsabishek05@gmail.com</a>
          </li>
          <li>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon icon={faMobile} style={{ color: "#1e91a1" }} />
            </div>
            <p>+91 8925431449</p>
          </li>
          <li>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon
                icon={faCakeCandles}
                style={{ color: "#1e91a1" }}
              />
            </div>
            <p>Mar 29, 2005</p>
          </li>
          <li>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#1e91a1" }}
              />
            </div>
            <p>Tirupur, Tamil Nadu</p>
          </li>
        </ul>

        <div className={styles.spacer}></div>

        <div className={styles.publicProfiles}>
          <a href="https://github.com/ABISHEK-NS1" target="_blank">
            <FontAwesomeIcon icon={faGithub} style={{ color: "#f6f9fbff" }} />
          </a>
          <a href="https://www.linkedin.com/in/abishek-ns29" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#f6f9fbff" }} />
          </a>
          <a href="https://medium.com/@nsabishek05" target="_blank">
            <FontAwesomeIcon icon={faMedium} style={{ color: "#f6f9fbff" }} />
          </a>
        </div>
      </>
  );
}

export default Contacts;
