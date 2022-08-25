import React from "react";

import VvgnliMainMenu from "./main__menu_vvgnli/VvgnliMainMenu";
import Home from "./pages/home/Home";


import "./vvgnli.css";

const Vvgnli = () => {
  return (
    <>
      <VvgnliMainMenu />
      <div className="vvgnli">
        <div className="vvgnli__container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Vvgnli;
