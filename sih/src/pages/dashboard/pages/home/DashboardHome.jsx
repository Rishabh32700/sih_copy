import React from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import AppWidgetSummary from "./AppWidgetSummary";
import "./DashboardHome.css";
import { Link, useNavigate, Navigate } from "react-router-dom";

// components
const DashboardHome = ({ isAdmin }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div className="dashboard__home">
      <div className="dashboard__home__container">
        <Container maxWidth="xl">
          {isAdmin && (
            <div className="dashboard__home__container__admin">
              <div className="dashboard__home--heading">
                <Typography variant="h4" sx={{ mb: 5 }}>
                  Hi, Welcome Admin
                </Typography>
              </div>
              <div className="dashboard__home__card__container">
                <div className="dashboard__home__card__list">
                  <Grid container spacing={8}>
                    <Grid item xs={12} sm={6} md={3}>
                      <AppWidgetSummary
                        title="Registered users"
                        total={714000}
                        icon={"ant-design:UserAddOutLined"}
                        onClick={() => navigate("/dashboard/registerdUsers")}
                        style={{ cursor: "pointer" }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <AppWidgetSummary
                        title="Images Uploaded"
                        total={1352831}
                        color="info"
                        icon={"ant-design:user-filled"}
                        onClick={() => navigate("/dashboard/uploadedImages")}
                        style={{ cursor: "pointer" }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <AppWidgetSummary
                        title="videos uploaded"
                        total={1723315}
                        color="warning"
                        icon={"ant-design:video-filled"}
                        onClick={() => navigate("/dashboard/uploadedVideos")}
                        style={{ cursor: "pointer" }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <AppWidgetSummary
                        title="Research Work Uploaded"
                        total={234}
                        color="error"
                        icon={"ant-design:bug-filled"}
                        onClick={() => navigate("/dashboard/uploadedResearch")}
                        style={{ cursor: "pointer" }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <AppWidgetSummary
                        title="Webinar Till Now"
                        total={714000}
                        icon={"ant-design:android-filled"}
                        onClick={() => navigate("/dashboard/webinarTillNow")}
                        style={{ cursor: "pointer" }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <AppWidgetSummary
                        title="Active Webinar"
                        total={1352831}
                        color="info"
                        icon={"ant-design:apple-filled"}
                        onClick={() => navigate("/dashboard/activeWebinars")}
                        style={{ cursor: "pointer" }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <AppWidgetSummary
                        title="Scheduled Webinars"
                        total={1723315}
                        color="warning"
                        icon={"ant-design:windows-filled"}
                        onClick={() => navigate("/dashboard/scheduledWebinars")}
                        style={{ cursor: "pointer" }}
                      />
                    </Grid>
                  </Grid>
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
                          navigate("/dashboard/uploadedImagesRegular")
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
                          navigate("/dashboard/uploadedVideosRegular")
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
                          navigate("/dashboard/uploadedResearchRegular")
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
                          navigate("/dashboard/registeredWebinarsRegular")
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
                          navigate("/dashboard/webinarsAttendedRegular")
                        }
                        style={{ cursor: "pointer" }}
                      />
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          )}
        </Container>
        {/* </Page> */}
      </div>
    </div>
  );
};

export default DashboardHome;
