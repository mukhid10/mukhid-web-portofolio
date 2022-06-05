import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";
import library from "../asset/library.PNG";
import melodico from "../asset/melodico.PNG";
import anime from "../asset/anime.PNG";

function PortofolioGalery() {
  const formref = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i99garl",
        "template_0mz2rtn",
        formref.current,
        "MV0PsNGwjdSKsxtGq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-porto" id="porto">
      <div className="container">
        <div className="row">
          <h2 className="text-center mt-4 text-white fw-bold">Portofolio</h2>
          <hr className="text-white" />
          <div className="col-md-4 mt-2">
            <div className="card-porto p-1">
              <img className="" src={melodico} alt="" />
              <div className="bg-secondary">
                <p className="text-center pt-2">
                  melodico adalah website streaming music yang menampilkan
                  berbagia genre music.
                </p>
                <a href="https://melodico.netlify.app/">
                  <button>Kunjungi</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <div className="card-porto p-1">
              <img className="" src={library} alt="" />
              <div className="bg-secondary">
                <p className="text-center pt-2">
                  Haku Library adalah website perpustakaan online yang
                  menyediakan berbagai buku.
                </p>
                <a href="https://haku-library-site.netlify.app/">
                  <button>Kunjungi</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5 mt-2">
            <div className="card-porto p-1">
              <img className="" src={anime} alt="" />
              <div className="bg-secondary">
                <p className="text-center pt-2">
                  Free Anime adalah website yang meyediakan movie anime terbaru
                  scara gratis.
                </p>
                <a href="https://anime-gratisss.netlify.app/">
                  <button>Kunjungi</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="contact">
          <h2 className="text-center text-white fw-bold">Contact</h2>
          <hr className="text-white" />
          <div className="col-md-5">
            <div className="card-contact mt-2">
              <img src="https://img.icons8.com/color/96/000000/home--v1.png" />
              <h6 className="m-0 ms-2">
                Ds. Martopuro - Purwosari - Pasruan, Jawa Timur
              </h6>
            </div>
            <div className="card-contact mt-2">
              <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-business-kiranshastry-lineal-color-kiranshastry.png" />
              <h6 className="m-0 ms-2">mukhid976@gmail.com</h6>
            </div>
            <div className="card-contact mt-2">
              <img src="https://img.icons8.com/fluency/144/000000/whatsapp.png" />
              <h6 className="m-0 ms-2">085700744809</h6>
            </div>
          </div>
          <div className="col-md-7 mb-5">
            <form
              className="form-contact"
              ref={formref}
              onSubmit={handleSubmit}
            >
              <input
                className="mt-2"
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                className="mt-2"
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                className="mt-2"
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                className="mt-2"
                placeholder="Message"
                name="message"
                rows="5"
              ></textarea>
              <button className="mt-2 bg-secondary">Submit</button>
              {done && "Pesan Telah Terkirim.  .  .  ."}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortofolioGalery;
