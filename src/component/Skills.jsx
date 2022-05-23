import React from "react";
import "../App.css";

function Skills() {
  return (
    <div className="bg-skill" id="skills">
      <div className="container">
        <div className="row">
          <h2 className="mt-4 mb-0 text-center fw-bold">Skills</h2>
          <hr />
          <div className="col-md-6">
            <h5>Front End</h5>
            <div className="card-skill">
              <img
                className="pt-1 pb-1"
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-html-web-development-flaticons-lineal-color-flat-icons.png"
              />
              <h6>Hyper Text Markup Language (HTML)</h6>
            </div>
            <div className="card-skill">
              <img
                className="pt-1 pb-1"
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-css-web-development-flaticons-lineal-color-flat-icons.png"
              />
              <h6>CasCading Style (CSS)</h6>
            </div>
            <div className="card-skill">
              <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />
              <h6>Bootstrap</h6>
            </div>
            <div className="card-skill">
              <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" />
              <h6>JavaScript</h6>
            </div>
            <div className="card-skill">
              <img src="https://img.icons8.com/plasticine/100/000000/react.png" />
              <h6>React JS</h6>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <h5 className="backend-skill">Back End</h5>
            <div className="card-skill">
              <img src="https://img.icons8.com/fluency/48/000000/node-js.png" />
              <h6>Node JS</h6>
            </div>
            <div className="card-skill">
              <span
                style={{
                  width: "42px",
                  height: "42px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                <h5>EX</h5>
              </span>
              <h6>Express JS</h6>
            </div>
            <div className="card-skill">
              <img src="https://img.icons8.com/color/96/000000/mongodb.png" />
              <h6>MongoDB</h6>
            </div>
            <div className="card-skill">
              <img src="https://img.icons8.com/color/96/000000/mysql-logo.png" />
              <h6 className="ms-1">Mysql</h6>
            </div>
            <div className="card-skill">
              <img src="https://img.icons8.com/color/96/000000/java-web-token.png" />
              <h6>Jason Web Token</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
