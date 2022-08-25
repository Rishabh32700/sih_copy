import React from "react";

import "./people.css";
import VvgnliMainMenu from "../../main__menu_vvgnli/VvgnliMainMenu";
import PeopleSubmenu from "./components/people__submenu/PeopleSubmenu";
import DirectorGeneral from "./components/director__general/DirectorGeneral";

const People = () => {
  return (
    <>
      <VvgnliMainMenu style={{ width: "90%" }} />
      <div className="about">
        <div className="about__container">
          {console.log("about us section")}
          <PeopleSubmenu />
          <DirectorGeneral />
        </div>
      </div>
    </>
  );
};

export default People;