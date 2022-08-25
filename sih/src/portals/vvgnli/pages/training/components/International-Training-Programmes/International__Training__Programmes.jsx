import React from "react";
import TrainingSubmenu from "../training__sub__menu/TrainingSubmenu";
import VvgnliMainMenu from "../../../../main__menu_vvgnli/VvgnliMainMenu";

const International__Training__Programmes = () => {
  return (
    <>
      <VvgnliMainMenu />
      <div className="about">
        <div className="about__container">
          {console.log("about us section")}
          <TrainingSubmenu />
        </div>
      </div>
    </>
  );
};

export default International__Training__Programmes;