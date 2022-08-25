import React from "react";
import ResearchSubmenu from "./components/reserach__submenu/ResearchSubmenu";

import "./research.css";

import VvgnliMainMenu from "../../main__menu_vvgnli/VvgnliMainMenu";
import ResearchMainContent from "./components/research__main__content/ResearchMainContent";

const Research = () => {
  return (
    <>
      <VvgnliMainMenu />
      <div className="about">
        <div className="about__container">
          {console.log("about us section")}
          <ResearchSubmenu />
          <ResearchMainContent />
        </div>
      </div>
    </>
  );
};

export default Research;