import React, { createContext, useState } from "react";
import Login from "./pages/Login";

import "./index.css";

import { Routes, useLocation, Route } from "react-router-dom";
import Signup from "./pages/Signup";

import MainRendering from "./components/main_rendering/MainRendering";
import HomePage from "./portals/webinars/components/HomePage/HomePage";
import SocialMedia from "./portals/social_media/SocialMedia";
import PortalsMenu from "./components/portals_menu/PortalsMenu";
import Webinars from "./portals/webinars/Webinars";
import ResearchWork from "./portals/research_work/ResearchWork";
import Dashboard from "./pages/dashboard/Dashboard";
import UploadedImagesRegular from "./pages/dashboard/pages/home/CardComponents/Reglular/UploadedImagesRegular";
import UploadedResearchRegular from "./pages/dashboard/pages/home/CardComponents/Reglular/UploadedResearchRegular";
import UploadedVideosRegular from "./pages/dashboard/pages/home/CardComponents/Reglular/UploadedVideosRegular";
import RegisteredWebinarsRegular from "./pages/dashboard/pages/home/CardComponents/Reglular/RegisteredWebinarsRegular";
import WebinarsAttendedRegular from "./pages/dashboard/pages/home/CardComponents/Reglular/WebinarsAttendedRegular";
import RegisteredUsers from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisterdUsers";
import ScheduledWebinars from "./pages/dashboard/pages/home/CardComponents/Admin/ScheduledWebinars";
import ActiveWebinars from "./pages/dashboard/pages/home/CardComponents/Admin/ActiveWebinars";
import WebinarsTillNow from "./pages/dashboard/pages/home/CardComponents/Admin/WebinarsTillNow";
import UploadedImages from "./pages/dashboard/pages/home/CardComponents/Admin/UploadedImages";
import UploadedVideos from "./pages/dashboard/pages/home/CardComponents/Admin/UploadedVideos";
import UploadedResearchWork from "./pages/dashboard/pages/home/CardComponents/Admin/UploadedResearchWork";
import DashboardCommunityImages from "./pages/dashboard/pages/community/DashboardCommunityImages";
import DashboardCommunityVideos from "./pages/dashboard/pages/community/DashboardCommunity";
import DashboardResearch from "./pages/dashboard/pages/research/DashboardResearch";
import DashboardWebinar from "./pages/dashboard/pages/webinars/DashboardWebinar";

import DashboardHome from "./pages/dashboard/pages/home/DashboardHome";
import RegisteredUserDetails from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisteredUserDetails";
import RegisteredUserUploadedImages from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisteredUserPhotos";
import RegisteredUserUploadedVideos from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisteredUserVideos";
import RegisteredUserUploadedResearch from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisteredUserResearch";
import RegisteredUserScheduledWebinars from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisteredUserScheduledWebinar";
import RegisteredUserRegisteredWebinars from "./pages/dashboard/pages/home/CardComponents/Admin/RegistereUsers/RegisteredUserRegisteredWebinar";
import ForgotPassword from "./pages/ForgotPassword";
import ProfilePage from "./pages/Profile";
import PasswordReset from "./pages/PasswordReset";
import ProtectedRoutes from "./Auth/Auth";
import ErrorPage from "./pages/404page";
import WebinarShowPage from "./pages/webinarShowPage/webinarShowPage";

import ThemeLanguageSwitcher from "./components/theme_language_switcher/ThemeLanguageSwitcher";
import Vvgnli from "./portals/vvgnli/Vvgnli";

import About from "./portals/vvgnli/pages/about_us/About";

import Research from "./portals/vvgnli/pages/research/Research";

import EResource from "./portals/vvgnli/pages/e_resources/EResource";
import DirectorGeneralDesk from "./portals/vvgnli/pages/about_us/components/director__general__desk/DirectorGeneralDesk";
import VisionAndMission from "./portals/vvgnli/pages/about_us/components/vision__and__mission/VisionAndMission";
import History from "./portals/vvgnli/pages/about_us/components/history/History";
import GoverningBodies from "./portals/vvgnli/pages/about_us/components/governing__bodies/GoverningBodies";
import Infrastructure from "./portals/vvgnli/pages/about_us/components/infrastructure/Infrastructure";
import Networking from "./portals/vvgnli/pages/about_us/components/networking/Networking";
import WhosWho from "./portals/vvgnli/pages/about_us/components/whos__who/WhosWho";
import CentreForInternationalNetworking from "./portals/vvgnli/pages/research/components/centre_for_international_networking/CentreForInternationalNetworking";
import CentreForLabourMarketStudies from "./portals/vvgnli/pages/research/components/centre__for__labour__market__studies/CentreForLabourMarketStudies";
import CentreForEmploymentRelationsAndRegulations from "./portals/vvgnli/pages/research/components/centre_for_employment_relations_and_regulations/CentreForEmploymentRelationsAndRegulations";
import CentreForAgrarianRelationsRuralAndBehaviouralStudies from "./portals/vvgnli/pages/research/components/centre_for_agrarian_relations_rural_and_behavioural_studies/CentreForAgrarianRelationsRuralAndBehaviouralStudies";
import CentreForNationalResourceCentreOnChildLabour from "./portals/vvgnli/pages/research/components/centre_for_national_resource _centre_on_child_labour/CentreForNationalResourceCentreOnChildLabour";
import CentreForIntegratedLabourHistoryResearchProgramme from "./portals/vvgnli/pages/research/components/centre_for_integrated_labour_history_research_programme/CentreForIntegratedLabourHistoryResearchProgramme";
import CentreForLabourAndHealthStudies from "./portals/vvgnli/pages/research/components/centre_for_labour_and_health_studies/CentreForLabourAndHealthStudies";
import CentreForGenderAndLabourStudies from "./portals/vvgnli/pages/research/components/centre_for_gender_and_labour_studies/CentreForGenderAndLabourStudies";
import CentreForNorthEastIndia from "./portals/vvgnli/pages/research/components/centre_for_north_east_india/CentreForNorthEastIndia";
import CentreForClimateChangeAndLabour from "./portals/vvgnli/pages/research/components/centre_for_climate_change_and_labour/CentreForClimateChangeAndLabour";
import Library from "./portals/vvgnli/pages/library/Library";
import Training from "./portals/vvgnli/pages/training/Training";
import Current__Training__Programmes from "./portals/vvgnli/pages/training/components/Current__training__programmes/Current__Training__Programmes";
import Domestic__Training__Programmes from "./portals/vvgnli/pages/training/components/Domestic-Training-Programmes/Domestic__Training__Programmes";
import International__Training__Programmes from "./portals/vvgnli/pages/training/components/International-Training-Programmes/International__Training__Programmes";
import ITEC__Sanction__FY__2022__23 from "./portals/vvgnli/pages/training/components/ITEC-Sanction-FY-2022-23/ITEC__Sanction__FY__2022__23";
import Training__Calendar__2022__2023__English from "./portals/vvgnli/pages/training/components/Training-Calendar-2022-2023-English/Training__Calendar__2022__2023__English";
import Training__Calendar__2022__2023__Hindi from "./portals/vvgnli/pages/training/components/Training-Calendar-2022-2023-Hindi/Training__Calendar__2022__2023__Hindi";

import People from "./portals/vvgnli/pages/people/People";

import DirectorGeneral from "./portals/vvgnli/pages/people/components/director__general/DirectorGeneral";
import Sanjay from "./portals/vvgnli/pages/people/components/senior__fellow/sanjay/Sanjay";
import Helen from "./portals/vvgnli/pages/people/components/senior__fellow/helen/Helen";

import SeniorFellow from "./portals/vvgnli/pages/people/components/senior__fellow/SeniorFellow";
export let gData = createContext();

const App = () => {
  const location = useLocation();
  console.log(location);
  let [state, setState] = useState(1);
  let [vvgnli_main_menu_state, set_vvgnli_main_menu_state] = useState("home");
  let [dashboard_main_menu_state, set_dashboard_main_menu_state] =
    useState("home");
  let [vvgnli_about_submenu_state, set_vvgnli_about_submenu_state] =
    useState("about_us");
  let [vvgnli_research_submenu_state, set_vvgnli_research_submenu_state] =
    useState("research");

  const { pathname } = useLocation();

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
            {pathname !== "/signup" &&
              pathname !== "/login" &&
              pathname !== "/forgotPassword" &&
              pathname !== "/PasswordReset" &&
              pathname !== "/error" && <ThemeLanguageSwitcher />}
            {pathname !== "/signup" &&
              pathname !== "/login" &&
              pathname !== "/forgotPassword" &&
              pathname !== "/PasswordReset" &&
              pathname !== "/error" && <PortalsMenu />}

            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/community" element={<SocialMedia />} />
              <Route path="/webinar" element={<Webinars />} />
              <Route path="/research-section" element={<ResearchWork />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/PasswordReset" element={<PasswordReset />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="/showWebinars" element={<WebinarShowPage />} />
              <Route
                path="/dashboard"
                element={<ProtectedRoutes element={<Dashboard />} />}
              >
                <Route path="" element={<DashboardHome />} />
                <Route path="images" element={<DashboardCommunityImages />} />
                <Route path="videos" element={<DashboardCommunityVideos />} />
                <Route path="videos" element={<DashboardCommunityVideos />} />
                <Route path="research" element={<DashboardResearch />} />
                <Route path="webinars" element={<DashboardWebinar />} />

                <Route
                  path="home/uploadedImagesRegular"
                  element={<UploadedImagesRegular />}
                />
                <Route
                  path="home/uploadedVideosRegular"
                  element={<UploadedVideosRegular />}
                />
                <Route
                  path="home/uploadedResearchRegular"
                  element={<UploadedResearchRegular />}
                />
                <Route
                  path="home/webinarsAttendedRegular"
                  element={<WebinarsAttendedRegular />}
                />
                <Route
                  path="home/registeredWebinarsRegular"
                  element={<RegisteredWebinarsRegular />}
                />
                <Route
                  exact
                  path="home/registerdUsers"
                  element={<RegisteredUsers />}
                />
                <Route
                  path="home/registerdUsers/:userId"
                  element={<RegisteredUserDetails />}
                />
                <Route
                  path="home/registerdUsers/:userId/uploadedImages"
                  element={<RegisteredUserUploadedImages />}
                />
                <Route
                  path="home/registerdUsers/:userId/uploadedVideos"
                  element={<RegisteredUserUploadedVideos />}
                />
                <Route
                  path="home/registerdUsers/:userId/uploadedResearch"
                  element={<RegisteredUserUploadedResearch />}
                />
                <Route
                  path="home/registerdUsers/:userId/registeredWebinars"
                  element={<RegisteredUserRegisteredWebinars />}
                />
                <Route
                  path="home/registerdUsers/:userId/scheduledWebinars"
                  element={<RegisteredUserScheduledWebinars />}
                />
                <Route
                  path="home/uploadedImages"
                  element={<UploadedImages />}
                />
                <Route
                  path="home/uploadedVideos"
                  element={<UploadedVideos />}
                />
                <Route
                  path="home/uploadedResearch"
                  element={<UploadedResearchWork />}
                />
                <Route
                  path="home/webinarTillNow"
                  element={<WebinarsTillNow />}
                />
                <Route
                  path="home/activeWebinars"
                  element={<ActiveWebinars />}
                />
                <Route
                  path="home/scheduledWebinars"
                  element={<ScheduledWebinars />}
                />
              </Route>

              <Route path="" element={<Vvgnli />} />
              <Route path="/vvgnli" element={<Vvgnli />} />
              <Route path="/vvgnli/about-us" element={<About />} />
              <Route
                exact
                path="/vvgnli/about-us/director-general"
                element={<DirectorGeneralDesk />}
              />
              <Route
                exact
                path="/vvgnli/about-us/vision-mission"
                element={<VisionAndMission />}
              />
              <Route
                exact
                path="/vvgnli/about-us/history"
                element={<History />}
              />
              <Route
                exact
                path="/vvgnli/about-us/governing-bodies"
                element={<GoverningBodies />}
              />
              <Route
                exact
                path="/vvgnli/about-us/infrastructure"
                element={<Infrastructure />}
              />
              <Route
                exact
                path="/vvgnli/about-us/networking"
                element={<Networking />}
              />
              <Route
                exact
                path="/vvgnli/about-us/whoswho"
                element={<WhosWho />}
              />

              <Route path="/vvgnli/research" element={<Research />} />
              <Route
                path="/vvgnli/research/centreForInternationalNetworking"
                element={<CentreForInternationalNetworking />}
              />
              <Route
                path="/vvgnli/research/centreForLabourMarketStudies"
                element={<CentreForLabourMarketStudies />}
              />
              <Route
                path="/vvgnli/research/centreForEmploymentRelationsAndRegulations"
                element={<CentreForEmploymentRelationsAndRegulations />}
              />
              <Route
                path="/vvgnli/research/centreForAgrarianRelationsRuralAndBehaviouralStudies"
                element={
                  <CentreForAgrarianRelationsRuralAndBehaviouralStudies />
                }
              />
              <Route
                path="/vvgnli/research/centreForNationalResourceCentreOnChildLabour"
                element={<CentreForNationalResourceCentreOnChildLabour />}
              />
              <Route
                path="/vvgnli/research/centreForIntegratedLabourHistoryResearchProgramme"
                element={<CentreForIntegratedLabourHistoryResearchProgramme />}
              />
              <Route
                path="/vvgnli/research/centreForLabourAndHealthStudies"
                element={<CentreForLabourAndHealthStudies />}
              />
              <Route
                path="/vvgnli/research/centreForGenderAndLabourStudies"
                element={<CentreForGenderAndLabourStudies />}
              />
              <Route
                path="/vvgnli/research/centreForNorthEastIndia"
                element={<CentreForNorthEastIndia />}
              />
              <Route
                path="/vvgnli/research/centreForClimateChangeAndLabour"
                element={<CentreForClimateChangeAndLabour />}
              />

              <Route path="vvgnli/training" element={<Training />} />
              <Route
                path="/vvgnli/training/ITEC-Sanction-FY-2022-23"
                element={<ITEC__Sanction__FY__2022__23 />}
              />
              <Route
                path="/vvgnli/training/Domestic-Training-Programmes"
                element={<Domestic__Training__Programmes />}
              />
              <Route
                path="/vvgnli/training/International-Training-Programmes"
                element={<International__Training__Programmes />}
              />
              <Route
                path="/vvgnli/training/Training-Calendar-2022-2023-Hindi"
                element={<Training__Calendar__2022__2023__Hindi />}
              />
              <Route
                path="/vvgnli/training/Training-Calendar-2022-2023-English"
                element={<Training__Calendar__2022__2023__English />}
              />
              <Route
                path="/vvgnli/training/Current-Training-Programmes"
                element={<Current__Training__Programmes />}
              />

              <Route path="vvgnli/library" element={<Library />} />
              <Route path="vvgnli/people" element={<People />} />
              <Route
                path="vvgnli/people/director-general"
                element={<DirectorGeneral />}
              />
              <Route
                path="vvgnli/people/senior-fellow"
                element={<SeniorFellow />}
              />
              <Route
                path="vvgnli/people/senior-fellow/sanjay"
                element={<Sanjay />}
              />
              <Route
                path="vvgnli/people/senior-fellow/helen"
                element={<Helen />}
              />

              <Route path="/vvgnli/e-resource" element={<EResource />} />
            </Routes>
          </gData.Provider>
        </div>
      </div>
    </>
  );
};

export default App;
