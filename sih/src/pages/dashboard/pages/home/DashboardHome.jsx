import React from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import AppWidgetSummary from "./AppWidgetSummary";
import './DashboardHome.css'

// components
const DashboardHome = () => {
  const theme = useTheme();

  return (
    <div className="dashboard__home">
      <div className="dashboard__home__container">
        <Container maxWidth="xl">
          <div className="dashboard__home--heading">
            <Typography variant="h4" sx={{ mb: 5 }}>
              Hi, Welcome Admin
            </Typography>
          </div>
          <div className="dashboard__home__card__container">
            <div className="dashboard__home__card__list">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary
                    title="Regstered user"
                    total={714000}
                    icon={"ant-design:UserAddOutLined"}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary
                    title="Images Uploaded"
                    total={1352831}
                    color="info"
                    icon={"ant-design:user-filled"}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary
                    title="videos uploaded"
                    total={1723315}
                    color="warning"
                    icon={"ant-design:video-filled"}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary
                    title="Research Work Uploaded"
                    total={234}
                    color="error"
                    icon={"ant-design:bug-filled"}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary
                    title="Webinar Till Now"
                    total={714000}
                    icon={"ant-design:android-filled"}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary
                    title="Active Webinar"
                    total={1352831}
                    color="info"
                    icon={"ant-design:apple-filled"}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary
                    title="Scheduled Webinars"
                    total={1723315}
                    color="warning"
                    icon={"ant-design:windows-filled"}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <AppWidgetSummary
                    title="Research Work Uploaded"
                    total={234}
                    color="error"
                    icon={"ant-design:bug-filled"}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </Container>
        {/* </Page> */}
      </div>
    </div>
  );
};

export default DashboardHome;
