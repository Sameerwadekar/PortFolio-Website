import React from "react";
import "./css/Project.css"

function Projects({ projectDetails }) {
  return (
    <div className="container" style={{marginTop:"5%",height:"auto"}}>
      <h2 className="text-center fs-1 fw-bolder m-0">Projects</h2>
        <h4 className="text-center mt-3  m-0 text-secondary">
          Things's I build so far
        </h4>
      <div className="row g-4 mt-5">
        {projectDetails.map((p, id) => (
          <div className="col-md-4" key={id}>
            <div className="card project-card h-100 shadow-sm">
              <img
                src={p.image}
                className="card-img-top project-img"
                alt="project"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{p.project}</h5>
                <p className="card-text text-muted small">{p.description}</p>
                <p className="text-muted small mb-3">
                  <strong>Tech stack:</strong> {p.tech}
                </p>
                <div className="mt-auto d-flex gap-3">
                  <a href={p.link} className="text-black">
                    <i className="bi bi-link-45deg "></i> Live Preview
                  </a>
                  <a href={p.github} className="text-black">
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
