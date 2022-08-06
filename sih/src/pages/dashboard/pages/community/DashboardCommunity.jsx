import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@material-ui/core/Box";
import CancelIcon from "@mui/icons-material/Cancel";
// material
import { Card, Stack, Container, Typography} from "@mui/material";
// import Scrollbar from "./components/ScrollBar";

import Page from "../home/Page";
import WebinarListHead from "../webinars/components/WebinarListHead";

const RESEARCHLIST = [
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: false,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
  {
    name: "Frozen yoghurt",
    userId: "aasd-fghj-asd",
    date: "Thu Sep 03 2020 08:21:14",
    category: "Ashley Jacobson",
    paperLink: "https://google.com",
    status: true,
  },
];
const TABLE_HEAD = [
  { id: "userName", label: "User Name", alignRight: false },
  { id: "userId", label: "User Id", alignRight: false },
  { id: "category", label: "Category", alignRight: false },
  { id: "date", label: "Date", alignRight: false },
  { id: "paperLink", label: "Post link", alignRight: false },
  { id: "status", label: "Verified", alignRight: false },
  { id: "action", label: "Action", alignRight: false },
];

const DashboardCommunityVideos = () => {
  
  return (
    <div className="dashboard__community">
      <div className="dashboard__community__container">
        <div className="dashboard__community__list">
          <Page>
            <Container>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
              >
                <Typography variant="h4" gutterBottom>
                  Uploaded Videos
                </Typography>
              </Stack>

              <Card>
                {/* <Scrollbar> */}
                  <TableContainer sx={{ minWidth:600 }}>
                    <Table>
                      <WebinarListHead
                        headLabel={TABLE_HEAD}
                        rowCount={RESEARCHLIST.length}
                      />
                      <TableBody>
                        {RESEARCHLIST.map((row, id) => {
                          const {
                            name,
                            userId,
                            status,
                            category,
                            paperLink,
                            date,
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
                              <TableCell align="left">{userId}</TableCell>
                              <TableCell align="left">{category}</TableCell>
                              <TableCell align="left">{date}</TableCell>
                              <TableCell align="left">
                                {" "}
                                <a
                                  href={paperLink}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Open Video
                                </a>
                              </TableCell>
                              <TableCell align="left">{status ? "Yes":"NO"}</TableCell>
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

export default DashboardCommunityVideos;
