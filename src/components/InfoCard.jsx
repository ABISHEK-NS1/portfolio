import React, { useState, useEffect } from "react";
import styles from "../styles/InfoCard.module.css";
import profilePic from "../assets/Profile_Ca.png";
import profilePicSpeak from "../assets/ABISHEK_NS_Photo_Speaking_.png";
import Contacts from "./Contacts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function InfoCard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);
  const [showContactsMobile, setShowContactsMobile] = useState(false);

  const [profilePicture, setProfilePicture] = useState(profilePic);

  // Listen to window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.infoCardStyle}>
        {isMobile && (
          <FontAwesomeIcon
            icon={faCaretDown}
            styles={{ color: "#1e91a1" }}
            className={styles.toggleBtn}
            onClick={() => setShowContactsMobile((prev) => !prev)}
          />
        )}
        <div className={styles.profilePicture}>
          <img
            src={profilePicture}
            alt="profile"
            onMouseEnter={() => setProfilePicture(profilePicSpeak)}
            onMouseLeave={() => setProfilePicture(profilePic)}
          />
          {profilePicture == profilePicSpeak && (
            <div
              style={{
                position: "absolute",
                top: "-30px",
                left: "80px",
                backgroundColor: "#333",
                padding: "2px 5px",
              }}
            >
              <p style={{ color: "white", fontFamily: "var(--font-family-2)" }}>
                Click on a secret{" "}
                <span style={{ color: "var(--highlight-text-color)" }}>A</span>
              </p>
            </div>
          )}
          <div>
            <h1>
              Abishek NS
            </h1>
            <h3>Web developer</h3>
          </div>
        </div>

        <div className={styles.contactSection}>
          {(!isMobile || showContactsMobile) && <Contacts />}
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
