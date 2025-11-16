import React from "react";
import styles from "../styles/Projects.module.css";
import Project from "./Project";
import { PROJECTS_INFO } from "../ProjectsInfo";

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <main className={styles.projectContainer}>
        {PROJECTS_INFO.map((project) => {
          return (
            <Project
              title={project.title}
              content={project.content}
              img={project.img}
              gitHubUrl={project["gitHub-url"]}
            />
          );
        })}
      </main>
    </>
  );
}

export default Projects;
