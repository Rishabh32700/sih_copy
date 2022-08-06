import React, { createContext, useState } from "react";
import Login from "./pages/Login";

import "./index.css";

import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";

import MainRendering from "./components/main_rendering/MainRendering";
import HomePage from "./portals/webinars/components/HomePage/HomePage";
import SocialMedia from "./portals/social_media/SocialMedia";
import ThemeLanguageSwitcher from "./components/theme_language_switcher/ThemeLanguageSwitcher";
import PortalsMenu from "./components/portals_menu/PortalsMenu";
import Webinars from "./portals/webinars/Webinars";
import ResearchWork from "./portals/research_work/ResearchWork";
import Dashboard from "./pages/dashboard/Dashboard";

export let gData = createContext();

const App = () => {
  let [state, setState] = useState(1);
  let [vvgnli_main_menu_state, set_vvgnli_main_menu_state] = useState("home");
  let [dashboard_main_menu_state, set_dashboard_main_menu_state] =
    useState("home");
  let [vvgnli_about_submenu_state, set_vvgnli_about_submenu_state] =
    useState("about_us");
  let [vvgnli_research_submenu_state, set_vvgnli_research_submenu_state] =
    useState("research");

  return (
    <>
      <div className="app">
        <div className="app__container">
          <gData.Provider
            value={{
              state,
              setState,
              vvgnli_main_menu_state,
              set_vvgnli_main_menu_state,
              vvgnli_about_submenu_state,
              set_vvgnli_about_submenu_state,
              vvgnli_research_submenu_state,
              set_vvgnli_research_submenu_state,
              dashboard_main_menu_state,
              set_dashboard_main_menu_state,
            }}
          >
            <ThemeLanguageSwitcher />
            <PortalsMenu />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<MainRendering />} />
              <Route path="/vvgnli" element={<MainRendering />} />
              <Route path="/community" element={<SocialMedia />} />
              <Route path="/webinar" element={<Webinars />} />
              <Route path="/research-section" element={<ResearchWork />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </gData.Provider>
        </div>
      </div>
    </>
  );
};

export default App;
