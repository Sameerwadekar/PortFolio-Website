import React from 'react';
import "./css/About.css"

function About({data}) {
  return (
    <div className="container about-container " id='about'>
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-6 col-12">    
            <p className="fs-1 fw-bolder m-0">Hi👋,</p>
            <p className="fs-1 fw-bolder m-0">My name is</p>
            <p className="fs-1 fw-bolder m-0"><span className='text-primary'>{data.name}</span></p>
            <p className="fs-1 fw-bolder m-0">I build things for web</p>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-6 col-12">
          <div className="d-flex justify-content-center align-items-center image">
            <img 
            src="https://imgs.search.brave.com/OGtfOoNeiKkJzIj0Zondt0xEDbew44BDF0Sb_c7Mn3w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lYXN5/LXBlYXN5LmFpL2Nk/bi1jZ2kvaW1hZ2Uv/cXVhbGl0eT04MCxm/b3JtYXQ9YXV0byx3/aWR0aD03MDAvaHR0/cHM6Ly9tZWRpYS5l/YXN5LXBlYXN5LmFp/Lzk5ZWM5MjA5LWFj/YjMtNDAyZC1hN2Q4/LWRmMGQ3MGVhOGI3/MS8xYTk4NTA0Ni0z/ZDdkLTQxN2UtYWNi/ZS04ODIzM2NhMzNi/N2EucG5n" 
            alt="Kitten" 
            className="img-fluid" 
            style={{borderRadius:"50%",border:"2px solid purple",width:"200px",height:"200px"}}
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
