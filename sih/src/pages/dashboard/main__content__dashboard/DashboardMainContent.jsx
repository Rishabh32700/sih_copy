import React, { useContext } from "react";
import { gData } from "../../../App";
import "./DashboardMainContent.css";
import DashboardHome from "../pages/home/DashboardHome";
// import DashboardCommunity from '../pages/community/DashboardCommunity'
import DashboardResearch from "../pages/research/DashboardResearch";
import DashboardWebinar from "../pages/webinars/DashboardWebinar";
import DashboardCommunityVideos from "../pages/community/DashboardCommunity";
import DashboardCommunityImages from "../pages/community/DashboardCommunityImages";
import DashboardModalImages from "../pages/community/DashboardModalImages";

const DashboardMainContent = () => {
  const myGlobalDataForDashboardMainMenu = useContext(gData);
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user.role);
  const isAdmin = user.role === 1 ? true : false;

  return (
    <>
      <div className="dashboard__main__content">
        <div className="dashboard__main__content__container">
          {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state ===
          "home" ? (
            <DashboardHome isAdmin={isAdmin} />
          ) : (
            ""
          )}
          {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state ===
          "images" ? (
            <DashboardCommunityImages isAdmin={isAdmin} />
          ) : (
            ""
          )}
          {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state ===
          "videos" ? (
            <DashboardCommunityVideos isAdmin={isAdmin} />
          ) : (
            ""
          )}
          {/* {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state === 'community'?<DashboardCommunity />:''} */}
          {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state ===
          "research" ? (
            <DashboardResearch isAdmin={isAdmin} />
          ) : (
            ""
          )}
          {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state ===
          "webinar" ? (
            <DashboardWebinar isAdmin={isAdmin} />
          ) : (
            ""
          )}
          {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state ===
          "imageModal" ? (
            <DashboardModalImages isAdmin={isAdmin} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardMainContent;
