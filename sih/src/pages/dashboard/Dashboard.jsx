import React from 'react'
import DashboardMainContent from './main__content__dashboard/DashboardMainContent'
import DashboardMainMenu from './main__menu__dashboard/DashboardMainMenu'

const Dashboard = () => {
  return (
    <>
      <DashboardMainMenu />
      <div className="dashboard">
        <div className="dashboard__container">
          <DashboardMainContent />
        </div>
      </div>
    </>
  )
}

export default Dashboard
