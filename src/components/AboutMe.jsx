import React from "react";
import confetti from "canvas-confetti";
import styles from "../styles/MainInfo.module.css";

function AboutMe() {
  function handleReward() {
    confetti({
      particleCount: 150,
      spread: 100,
      startVelocity: 40,
      origin: { y: 0.7 },
    });
  }

  return (
    <>
      <h1>
        About Me
      </h1>
      <main className={styles.contents}>
        <section className={styles.aboutMeText}>
          <p>
            Hi, I am{" "}
            <strong>
              <i style={{ color: "#1e91a1ff" }}>
                <span onClick={() => handleReward()}>A</span>bishek NS
              </i>
            </strong>
            , a dedicated Engineering student driven by a strong desire to
            create a meaningful impact through technology. I am deeply
            passionate about learning and exploring the ever-evolving world of
            software.
          </p>
          <p>
            My goal is to become a well-rounded developer by continuously
            improving my skills, contributing to impactful projects, and
            collaborating with like-minded individuals to turn ideas into
            reality.
          </p>
        </section>

        <section className={styles.skills}>
          <h2>Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skill}>
              <p>HTML</p>
              <div data-level="60" className={styles.bar}></div>
            </div>
            <div className={styles.skill}>
              <p>CSS</p>
              <div data-level="50" className={styles.bar}></div>
            </div>
            <div className={styles.skill}>
              <p>JavaScript</p>
              <div data-level="60" className={styles.bar}></div>
            </div>
            <div className={styles.skill}>
              <p>React</p>
              <div data-level="60" className={styles.bar}></div>
            </div>
            <div className={styles.skill}>
              <p>C++</p>
              <div data-level="70" className={styles.bar}></div>
            </div>
          </div>
        </section>
        <section className={styles.education}>
          <h2>Education</h2>
          <ul className={styles.timeline}>
            <li>
              <span className={styles.duration}>2022 - 2026</span>
              <p>BE - CSE</p>
              <p>Bannari Amman Institute of Technology</p>
              <p>gpa: 8.64</p>
            </li>
            <li>
              <span className={styles.duration}>2021 - 2022</span>
              <p>HSC</p>
              <p>Vidhya Vikashni Matric Hr. Sec School</p>
              <p>Percentage: 94.83</p>
            </li>
            <li>
              <span className={styles.duration}>2019 - 2022</span>
              <p>SSLC</p>
              <p>Vidhya Vikashni Matric Hr. Sec School</p>
              <p>Percentage: 77.4</p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default AboutMe;
