import React from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import AppWidgetSummary from "./AppWidgetSummary";
import "./DashboardHome.css";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

// components
const DashboardHome = ({}) => {
  const theme = useTheme();
  var isAdmin = false
  var userRoleFromSession = JSON.parse(sessionStorage.getItem("user"));
    console.log(userRoleFromSession.role);
    if(userRoleFromSession.role === 1){
      isAdmin = true
    }else if(userRoleFromSession.role ===2){
      isAdmin = false
    }
    console.log(isAdmin);
  const navigate = useNavigate();

  debugger
  return (
    <div className="dashboard__home">
      <div className="dashboard__home__container">
          {isAdmin && (
            <div className="dashboard__home__container__admin">
              <div className="dashboard__home--heading">
                {/* <Typography variant="h4" sx={{ mb: 5 }}> */}
                  <h1>

                  Hi, Welcome Admin
                  </h1>
                {/* </Typography> */}
              </div>
              <div className="dashboard__home__card__container">
                <div className="dashboard__home__card__list">
                    <div className="dashboard__card wrapper">
                      <div className="card">
                        <AppWidgetSummary
                          title="Registered users"
                          total={714000}
                          icon={"ant-design:UserAddOutLined"}
                          onClick={() =>
                            navigate("/dashboard/home/registerdUsers")
                          }
                          className="dashboard__card__inner__div"
                          style={{ cursor: "pointer", fontSize:".5rem" }}
                        />
                     </div>
                    </div>

                    <div className="dashboard__card wrapper">
                      <div className="card">
                        <AppWidgetSummary
                          title="Images Uploaded"
                          total={1352831}
                          color="info"
                          icon={"ant-design:user-filled"}
                          onClick={() =>
                            navigate("/dashboard/home/uploadedImages")
                          }
                          className="dashboard__card__inner__div"
                          style={{ cursor: "pointer", fontSize:".5rem" }}
                        />
                     </div>
                    </div>

                    <div className="dashboard__card wrapper">
                      <div className="card">
                        <AppWidgetSummary
                          title="videos uploaded"
                          total={1723315}
                          color="warning"
                          icon={"ant-design:video-filled"}
                          onClick={() =>
                            navigate("/dashboard/home/uploadedVideos")
                          }
                          className="dashboard__card__inner__div"
                          style={{ cursor: "pointer", fontSize:".5rem" }}
                        />
                     </div>
                    </div>
                    
                    <div className="dashboard__card wrapper">
                      <div className="card">
                        <AppWidgetSummary
                          title="Research Work Uploaded"
                          total={234}
                          color="error"
                          icon={"ant-design:bug-filled"}
                          onClick={() =>
                            navigate("/dashboard/home/uploadedResearch")
                          }
                          className="dashboard__card__inner__div"
                          style={{ cursor: "pointer", fontSize:".5rem" }}
                        />
                     </div>
                    </div>

                    <div className="dashboard__card wrapper">
                      <div className="card">
                        <AppWidgetSummary
                          title="Webinar Till Now"
                          total={714000}
                          icon={"ant-design:android-filled"}
                          onClick={() =>
                            navigate("/dashboard/home/webinarTillNow")
                          }
                          className="dashboard__card__inner__div"
                          style={{ cursor: "pointer", fontSize:".5rem" }}
                        />
                     </div>
                    </div>

                    <div className="dashboard__card wrapper">
                      <div className="card">
                        <AppWidgetSummary
                          title="Active Webinar"
                          total={1352831}
                          color="info"
                          icon={"ant-design:apple-filled"}
                          onClick={() =>
                            navigate("/dashboard/home/activeWebinars")
                          }
                          className="dashboard__card__inner__div"
                          style={{ cursor: "pointer", fontSize:".5rem" }}
                        />
                     </div>
                    </div>

                    <div className="dashboard__card wrapper">
                      <div className="card">
                        <AppWidgetSummary
                          title="Scheduled Webinars"
                          total={1723315}
                          color="warning"
                          icon={"ant-design:windows-filled"}
                          onClick={() =>
                            navigate("/dashboard/home/scheduledWebinars")
                          }
                          className="dashboard__card__inner__div"
                          style={{ cursor: "pointer", fontSize:".5rem" }}
                        />
                     </div>
                    </div>
                </div>
              </div>
            </div>
          )}

          {!isAdmin && (
            <div className="dashboard__home__container__regular">
              <div className="dashboard__home--heading">
                <Typography variant="h4" sx={{ mb: 5 }}>
                  Hi, Welcome Regular
                </Typography>
              </div>
              <div className="dashboard__home__card__container">
                <div className="dashboard__home__card__list">
                  <Grid container spacing={8}>
                    <Grid item xs={12} sm={6} md={3}>
                      <AppWidgetSummary
                        title="Images Uploaded"
                        total={714000}
                        icon={"ant-design:UserAddOutLined"}
                        onClick={() =>
                          navigate("/dashboard/home/uploadedImagesRegular")
                        }
                        style={{ cursor: "pointer" }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <AppWidgetSummary
                        title="Videos Uploaded"
                        total={1352831}
                        color="info"
                        icon={"ant-design:user-filled"}
                        onClick={() =>
                          navigate("/dashboard/home/uploadedVideosRegular")
                        }
                        style={{ cursor: "pointer" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <AppWidgetSummary
                        title="Research Work Uploaded"
                        total={234}
                        color="error"
                        icon={"ant-design:bug-filled"}
                        onClick={() =>
                          navigate("/dashboard/home/uploadedResearchRegular")
                        }
                        style={{ cursor: "pointer" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <AppWidgetSummary
                        title="Registerd Webinar"
                        total={1352831}
                        color="info"
                        icon={"ant-design:apple-filled"}
                        onClick={() =>
                          navigate("/dashboard/home/registeredWebinarsRegular")
                        }
                        style={{ cursor: "pointer" }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <AppWidgetSummary
                        title="Webinars Attended"
                        total={1723315}
                        color="warning"
                        icon={"ant-design:windows-filled"}
                        onClick={() =>
                          navigate("/dashboard/home/webinarsAttendedRegular")
                        }
                        style={{ cursor: "pointer" }}
                      />
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          )}
        {/* </Container> */}
        {/* </Page> */}
      </div>
    </div>
  );
};

export default DashboardHome;
