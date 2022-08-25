import React from "react";
import VvgnliMainMenu from "../../main__menu_vvgnli/VvgnliMainMenu";

import "./about.css";
import AboutUsSubmenu from "./components/about__us__submenu/AboutUsSubmenu";
import MainContentAboutUs from "./components/main__content__about__us/MainContentAboutUs";


const About = () => {
  return (
    <>
      <VvgnliMainMenu />
      <div className="about">
        <div className="about__container">
          {console.log("about us section")}
          <AboutUsSubmenu />
          <MainContentAboutUs />
        </div>
      </div>
    </>
  );
};

export default About;
