import React from "react";
import About from "../component/About";
import Intro from "../component/Intro";
import NavigationBar from "../component/NavigationBar";
import PortofolioGalery from "../component/PortofolioGalery";
import Skills from "../component/Skills";

function Portofolio() {
  return (
    <div>
      <NavigationBar />
      <Intro />
      <About />
      <Skills />
      <PortofolioGalery />
    </div>
  );
}

export default Portofolio;
