import React, { useContext } from 'react'
import { gData } from '../../../App'
import './DashboardMainContent.css'
import DashboardHome from '../pages/home/DashboardHome'
import DashboardCommunity from '../pages/community/DashboardCommunity'
import DashboardResearch from '../pages/research/DashboardResearch'
import DashboardWebinar from '../pages/webinars/DashboardWebinar'


const DashboardMainContent = () => {

  const myGlobalDataForDashboardMainMenu = useContext(gData);

  return (
    <>
            <div className="dashboard__main__content">
                <div className="dashboard__main__content__container">
                  {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state === 'home'?<DashboardHome />:''}
                  {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state === 'community'?<DashboardCommunity />:''}
                  {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state === 'research'?<DashboardResearch />:''}
                  {myGlobalDataForDashboardMainMenu.dashboard_main_menu_state === 'webinar'?<DashboardWebinar />:''}
                </div>
            </div>
        </>
  )
}

export default DashboardMainContent