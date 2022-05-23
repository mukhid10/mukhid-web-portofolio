import React from "react";
import "../App.css";
import baparekrafe from "../asset/baparekrafe.PNG";
import cstudio from "../asset/c-studio.PNG";
import impact from "../asset/impact.PNG";
import mukhid from "../asset/mukhid.jpeg";

function About() {
  return (
    <div className="bg-about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4 about">
            <div className="img-about mt-2">
              <img src={mukhid} alt="" />
            </div>
            <h2
              className="mt-1"
              style={{
                fontFamily: "Roboto",
                fontWeight: "bolder",
              }}
            >
              About Me
            </h2>
            <p className="mt-2">
              Nama saya Mukhammad Abdul Mukhid. Saya adalah full stack web
              developer JavaScript saya dapat menggunakan ReactJS, Node JS,
              ExpressJS, Mysql, MongoDB dan Mongoose. Saya telah mengikuti
              beberapa pelatihan untuk menigkatkan skill saya dan membuat
              beberapa project untuk portofolio. Rencana saya ke depan adalah
              untuk dapat berkarir sebagai Web Developer.
            </p>
            <div className="row education mt-3" id="education">
              <h2
                className="text-center"
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "bolder",
                }}
              >
                Education
              </h2>
              <hr />
              <div className="col-md-6 title-pend">
                <h4 className="text-center">Pendidikan Formal</h4>
                <ul>
                  <li>
                    2013 - 2016 SMK Darttaqwa (Teknik Komputer dan Jaringan)
                  </li>
                  <li>2016 - 2020 Universitas YUDHARTA (Teknik Informatika)</li>
                </ul>
              </div>
              <div className="col-md-6 title-pend">
                <h4 className="text-center">Pelatihan</h4>
                <ul>
                  <li>2021 Codin Studio (Responsive Website)</li>
                  <li>2022 Impact Byte (Full Stack Web Developer)</li>
                </ul>
              </div>
            </div>
            <div className="row sertifikat">
              <h4>Srtificate</h4>
              <div className="col-md-4">
                <div className="bg-secondary div-img m-1">
                  <img src={impact} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-secondary div-img m-1">
                  <img src={cstudio} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-secondary div-img m-1">
                  <img src={baparekrafe} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
