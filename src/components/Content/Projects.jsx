import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center"  style={{ fontFamily: 'Oswald' }}>My Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src="https://via.placeholder.com/100" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Description of Project 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src="https://via.placeholder.com/100" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Description of Project 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src="https://via.placeholder.com/100" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">Description of Project 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
