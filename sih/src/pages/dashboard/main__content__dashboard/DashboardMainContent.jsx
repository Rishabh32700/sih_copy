import React, { useContext } from 'react'
import { gData } from '../../../App'
import './DashboardMainContent.css'
import DashboardHome from '../pages/home/DashboardHome'
// import DashboardCommunity from '../pages/community/DashboardCommunity'
import DashboardResearch from '../pages/research/DashboardResearch'
import DashboardWebinar from '../pages/webinars/DashboardWebinar'
import DashboardCommunityVideos from '../pages/community/DashboardCommunity'
import DashboardCommunityImages from '../pages/community/DashboardCommunityImages'
import DashboardModalImages from '../pages/community/DashboardModalImages'


const DashboardMainContent = () => {

  const myGlobalDataForDashboardMainMenu = useContext(gData);

  return (
    <>
            <div className="dashboard__main__content">
                <div className="dashboard__main__content__container">
                  {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state === 'home'?<DashboardHome />:''}
                  {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state === 'images'?<DashboardCommunityImages />:''}
                  {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state === 'videos'?<DashboardCommunityVideos />:''}
                  {/* {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state === 'community'?<DashboardCommunity />:''} */}
                  {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state === 'research'?<DashboardResearch />:''}
                  {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state === 'webinar'?<DashboardWebinar />:''}
                  {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state === 'imageModal'?<DashboardModalImages />:''}
                </div>
            </div>
        </>
  )
}

export default DashboardMainContent