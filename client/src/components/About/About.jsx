import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header text-white bg-amazon">
          <h1>About the app</h1>
        </div>
        <div className="card-body p-3 bg-bone">
          <div className="card m-2">
            <div className="card-header bg-raisin text-white">
              <h5 className="card-title">api - express.js</h5>
            </div>
            <div className="card-body">
              <h6 className="card-title">
                <b>Dependencies:</b>
              </h6>
              <p className="card-text">
                express, cors, helmet, chai-http, morgan, nodemon, http-errors
              </p>
            </div>
          </div>
          <div className="card m-2">
            <div className="card-header bg-raisin text-white">
              <h5 className="card-title">client - react.js</h5>
            </div>
            <div className="card-body">
              <h6 className="card-title">
                <b>Dependencies:</b>
              </h6>
              <p className="card-text">
                axios , react-router-dom, react-lazy-load, react-table,
                react-toastify, use-dencrypt-effect
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
