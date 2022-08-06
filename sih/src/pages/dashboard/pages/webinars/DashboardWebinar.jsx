import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import "./DashboardWebinar.css";
import WebinarListHead from "./components/WebinarListHead";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@material-ui/core/Box";
import CancelIcon from "@mui/icons-material/Cancel";
// material
import { Card, Stack, Container, Typography} from "@mui/material";
import Scrollbar from "./components/ScrollBar";
import Page from "../home/Page";

const WEBINARLIST = [
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
];
const TABLE_HEAD = [
  { id: "webinarName", label: "Webinar Name", alignRight: false },
  { id: "dept", label: "Dept", alignRight: false },
  { id: "date", label: "Date", alignRight: false },
  { id: "host", label: "Host", alignRight: false },
  { id: "webinarLink", label: "Webinar link", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "users", label: "Registered Users", alignRight: false },
  { id: "action", label: "Action", alignRight: false },
];

const DashboardWebinar = () => {
  return (
    <div className="dashboard__webinar">
      <div className="dashboard__webinar__container">
        <div className="dashboard__webinar__list">
          <Page>
            <Container>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
              >
                <Typography variant="h4" gutterBottom>
                  Webinars
                </Typography>
              </Stack>

              <Card>
                {/* <Scrollbar> */}
                  <TableContainer sx={{ minWidth: 800 }}>
                    <Table>
                      <WebinarListHead
                        headLabel={TABLE_HEAD}
                        rowCount={WEBINARLIST.length}
                      />
                      <TableBody>
                        {WEBINARLIST.map((row, id) => {
                          const {
                            name,
                            date,
                            status,
                            department,
                            webinarLink,
                            usersLink,
                            host,
                          } = row;
                          return (
                            <TableRow hover key={id} tabIndex={-1}>
                              <TableCell
                                component="th"
                                scope="row"
                                padding="10px"
                              >
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  spacing={2}
                                >
                                  <Typography variant="subtitle2" noWrap>
                                    {name}
                                  </Typography>
                                </Stack>
                              </TableCell>
                              <TableCell align="left">{department}</TableCell>
                              <TableCell align="left">{date}</TableCell>
                              <TableCell align="left">{host}</TableCell>
                              <TableCell align="left">
                                {" "}
                                <a
                                  href={webinarLink}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Open Webinar
                                </a>
                              </TableCell>
                              <TableCell align="left">{status}</TableCell>
                              <TableCell align="left">
                                {" "}
                                <a
                                  href={usersLink}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  See Users
                                </a>
                              </TableCell>
                              <TableCell align="right">
                                <Box component="div" sx={{ display: "inline" }}>
                                  <CancelIcon color="action" />
                                </Box>
                                <Box component="div" sx={{ display: "inline" }}>
                                  <DoneIcon color="primary" />
                                </Box>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                {/* </Scrollbar> */}
              </Card>
            </Container>
          </Page>
        </div>
      </div>
    </div>
  );
};

export default DashboardWebinar;
