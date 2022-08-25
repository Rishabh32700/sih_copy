import React from "react";
import TrainingSubmenu from "../training__sub__menu/TrainingSubmenu";
import VvgnliMainMenu from "../../../../main__menu_vvgnli/VvgnliMainMenu";

const Training__Calendar__2022__2023__English = () => {
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

export default Training__Calendar__2022__2023__English;