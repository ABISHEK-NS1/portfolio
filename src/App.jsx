import React from "react";
import InfoCard from "./components/InfoCard";
import MainInfo from "./components/MainInfo";
import Navigation from "./components/Navigation";
import styles from "./styles/App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wholeContainer}>
          <InfoCard />
          <div className={styles.mainContainer}>
            <div className={styles.subContainer}>
              <Routes>
                <Route path="/" element={<MainInfo />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact-me" element={<ContactMe />} />
              </Routes>
            </div>
            <Navigation />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
