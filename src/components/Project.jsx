import React from "react";
import styles from "../styles/Project.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

function Project({ title, content, img, gitHubUrl }) {
  return (
    <div className={styles.projectBox}>
      <div className={styles.imageWrapper}>
        <img src={img} alt={`${title} image`} />
      </div>
      <a href={gitHubUrl} target="_blank">
        <FontAwesomeIcon
          icon={faSquareGithub}
          style={{
            position: "absolute",
            bottom: "10px",
            right: "15px",
            fontSize: "20px",
            cursor: 'url("/cursor-hand.cur")5 0, pointer',
          }}
        />
      </a>
      <div className={styles.projectInfos}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Project;
