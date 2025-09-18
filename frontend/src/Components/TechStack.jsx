import React from "react";
import "./css/Tech_stack.css";

function TechStack({ data }) {
  return (
    <div className="container tech-container " style={{marginTop:"6%",height:"auto"}}>
      <div>
        <h2 className="text-center fs-1 fw-bolder m-0">My Tech Stack</h2>
        <h4 className="text-center mt-3 text-secondary m-0">
          Technologies I've been working with recently
        </h4>
      </div>

      <div className="row text-center" style={{marginTop:"5%"}}>
        {data.map((item, id) => (
          <div className="col-6 col-md-2 mb-4" key={id}>
            <img
              src={item.link}
              alt={`tech-${id}`}
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
