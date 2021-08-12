import React from "react";
import "./about.css";

export const About = () => {
  return (
    <div>
      <div class="card">
        <div class="card-header text-white bg-amazon">
          <h1>About the app</h1>
        </div>
        <div class="card-body p-3 bg-bone">
          <div className="card m-2">
            <div className="card-header bg-raisin text-white">
              <h5 class="card-title">api - express.js</h5>
            </div>
            <div className="card-body">
              <h6 class="card-title">
                <b>Dependencies:</b>
              </h6>
              <p class="card-text">
                express, cors, helmet, chai-http, morgan, nodemon, http-errors
              </p>
            </div>
          </div>
          <div className="card m-2">
            <div className="card-header bg-raisin text-white">
              <h5 class="card-title">client - react.js</h5>
            </div>
            <div className="card-body">
              <h6 class="card-title">
                <b>Dependencies:</b>
              </h6>
              <p class="card-text">
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
