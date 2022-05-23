import React from "react";
import "../App.css";
import cv from "../asset/Mukhid - CV.pdf";
import m from "../asset/m-bg.png";

function Intro() {
  return (
    <div className="bg-intro">
      <div className="container">
        <div className="row" style={{ width: "100%", height: "92vh" }}>
          <div className="col-md-6 intro-nama">
            <p style={{ fontSize: "25px", margin: "0" }}>Hi, nama saya</p>
            <h1
              style={{
                fontFamily: "Roboto",
                fontWeight: "bolder",
                margin: "0",
              }}
            >
              Mukhammad Abdul Mukhid
            </h1>
            <p
              className="m-0"
              style={{
                fontFamily: "Roboto",
                fontWeight: "bolder",
              }}
            >
              Full Stack Web Developer
            </p>
            <div className="media">
              <a href="https://www.linkedin.com/in/mukhid">
                <img src="https://img.icons8.com/color/96/000000/linkedin-circled--v1.png" />
              </a>
              <a href="https://github.com/mukhid10 ">
                <img src="https://img.icons8.com/ios-filled/50/000000/github.png" />
              </a>
              <a href="https://www.instagram.com/mabdulmukhid/">
                <img src="https://img.icons8.com/fluency/144/000000/instagram-new.png" />
              </a>
            </div>
            <div className="cv bg-secondary">
              <a href={cv}>Download CV</a>
            </div>
          </div>
          <div className="col-md-6 intro-img">
            <img src={m} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
