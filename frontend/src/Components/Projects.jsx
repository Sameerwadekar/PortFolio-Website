import React, { useContext } from "react";
import "./css/Project.css"
import { ThemeContext } from "./themeContext";

function Projects({ projectDetails }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="container" style={{ marginTop: "5%", height: "auto" }}>
      <h2 className="text-center fs-1 fw-bolder m-0">Projects</h2>
      <h4 className="text-center mt-3 m-0 text-secondary">
        Things I’ve built so far
      </h4>

      <div className="row g-4 mt-5">
        {projectDetails.map((p, id) => (
          <div className="col-md-4 " key={id}>
            <div className={`card project-card h-100 shadow-sm  ${darkMode ? "bg-black" : "bg-white"}`}>
              <img
                src={p.image}
                className="card-img-top project-img"
                alt="project"
              />
              <div className={`card-body d-flex flex-column ${darkMode ? "text-white" : "text-black"}`}>
                <h5 className={`card-title fw-bold ${darkMode ? "text-white" : "text-black"}`}>
                  {p.project}
                </h5>

                {/* Description */}
                <p className={`card-text small ${darkMode ? "text-white" : "text-muted"}`}>
                  {p.description}
                </p>

                {/* Tech stack */}
                <p className={`small mb-3 ${darkMode ? "text-white" : "text-muted"}`}>
                  <strong>Tech stack:</strong> {p.tech}
                </p>

                <div className="mt-auto d-flex gap-3">
                  <a href={p.link} className={`${darkMode ? "text-white" : "text-black"}`}>
                    <i className="bi bi-link-45deg"></i> Live Preview
                  </a>
                  <a href={p.github} className={`${darkMode ? "text-white" : "text-black"}`}>
                    <i className="bi bi-github"></i> View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
