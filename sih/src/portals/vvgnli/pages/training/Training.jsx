import React from "react";

import "./training.css";

import VvgnliMainMenu from "../../main__menu_vvgnli/VvgnliMainMenu";
import TrainingSubmenu from "./components/training__sub__menu/TrainingSubmenu";
import TrainingMainContent from "./components/training__main__content/TrainingMainContent";

const Training = () => {
  return (
    <>
      <VvgnliMainMenu />
      <div className="about">
        <div className="about__container">
          {console.log("about us section")}
          <TrainingSubmenu />
          <TrainingMainContent />
        </div>
      </div>
    </>
  );
};

export default Training;