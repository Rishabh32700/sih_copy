import React from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import AppWidgetSummary from "../../../AppWidgetSummary";
import "../../../DashboardHome.css";
import { Link, useNavigate, Navigate,useParams } from "react-router-dom";

const RegisteredUserDetails = () => {
  const { userId} = useParams()
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <div className="dashboard__home__container__admin">
        <div className="dashboard__home--heading">
          <Typography variant="h4" sx={{ mb: 5 }}>
            Hi, Welcome User1
          </Typography>
        </div>
        <div className="dashboard__home__card__container">
          <div className="dashboard__home__card__list">
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={3}>
                <AppWidgetSummary
                  title="Images Uploaded"
                  total={1352831}
                  color="info"
                  icon={"ant-design:user-filled"}
                  onClick={() => navigate(`/dashboard/home/registerdUsers/${userId}/uploadedImages`)}
                  style={{ cursor: "pointer" }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <AppWidgetSummary
                  title="videos uploaded"
                  total={1723315}
                  color="warning"
                  icon={"ant-design:video-filled"}
                  onClick={() => navigate(`/dashboard/home/registerdUsers/${userId}/uploadedVideos`)}
                  style={{ cursor: "pointer" }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <AppWidgetSummary
                  title="Research Work Uploaded"
                  total={234}
                  color="error"
                  icon={"ant-design:bug-filled"}
                  onClick={() => navigate(`/dashboard/home/registerdUsers/${userId}/uploadedResearch`)}
                  style={{ cursor: "pointer" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <AppWidgetSummary
                  title="Registered Webinar"
                  total={1352831}
                  color="info"
                  icon={"ant-design:apple-filled"}
                  onClick={() => navigate(`/dashboard/home/registerdUsers/${userId}/registeredWebinars`)}
                  style={{ cursor: "pointer" }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <AppWidgetSummary
                  title="Scheduled Webinars"
                  total={1723315}
                  color="warning"
                  icon={"ant-design:windows-filled"}
                  onClick={() => navigate(`/dashboard/home/registerdUsers/${userId}/scheduledWebinars`)}
                  style={{ cursor: "pointer" }}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegisteredUserDetails;
