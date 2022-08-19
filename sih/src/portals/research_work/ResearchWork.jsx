import React, { useRef, useState } from "react";

import SplitPane from "react-split-pane";

// import { Button } from "@material-ui/core";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import axios from "axios";
import config from "../../ApiConfig/Config";
import { toast } from "react-toastify";
import { Document, Page } from "react-pdf";
import { CircularProgress } from "@mui/material";

const ResearchWork = () => {
  const toastId = useRef(null);
  const [url, setUrl] = useState();
  // "https://test-ptab-docs-fe-assignment.s3.amazonaws.com/169020134"
  const [refresh, setRefresh] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const user = JSON.parse(sessionStorage.getItem("user"));
  const pdfs = [
    {
      id: 1,
      label: "Document 1",
      url: "https://test-ptab-docs-fe-assignment.s3.amazonaws.com/169020134",
    },
    {
      id: 2,
      label: "Document 2",
      url: "https://test-ptab-docs-fe-assignment.s3.amazonaws.com/169020136",
    },
    {
      id: 3,
      label: "Document 3",
      url: "https://test-ptab-docs-fe-assignment.s3.amazonaws.com/169020138",
    },
  ];
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const [loading, setLoading] = useState(true);
  const [pdfList, setPdfList] = useState([]);

  const handleChange = (e) => {
    console.log("file change");
    const data = { pdf: e.target.files[0] };
    setPdfFile(data);
  };
  useEffect(() => {
    if (pdfFile) {
      console.log("not null");
      handleUpload();
    } else {
      console.log("file null");
    }
  }, [pdfFile]);

  const handleUpload = async () => {
    // setLoading(true);
    let formData = new FormData();
    formData.append("file", pdfFile.pdf);
    console.log("file uploading");

    try {
      const res = await axios.post(
        config.server.path + config.api.uploadResearchWork,
        // `/?userId=${user.userId}`,
        formData,
        {
          onUploadProgress: (p) => {
            const progress = p.loaded / p.total;
            // check if we already displayed a toast
            if (toastId.current === null) {
              toastId.current = toast("Upload in Progress", { progress });
            } else {
              toast.update(toastId.current, {
                progress,
                type: toast.TYPE.INFO,
              });
            }
          },
          headers: { "User-Id": user.userId },
        }
      );

      toast.done(toastId.current);
      toast.update(toastId.current, {
        render: "Upload Done",
        type: toast.TYPE.SUCCESS,
        autoClose: 5000,
      });
      // console.log("res", res);
      // setApprovedResearchWork(res.data.mediaIdArray);
      const res2 = await axios.post(
        config.server.path + config.api.handlePost,
        {
          userId: user.userId,
          mediaIdArray: res.data.mediaIdArray,
        },
        { headers: { "User-Id": user.userId } }
      );
      // console.log("res2", res2);
      setRefresh(true);
    } catch (error) {
      console.log(error);
      toast.error();
    }

    console.log("upload function done");
    setPdfFile(null);
    toastId.current = null;
  };

  useEffect(() => {
    const getApprovedResearchWork = async () => {
      setLoading(true);
      const res = await axios.get(
        config.server.path + config.api.getApprovedResearchWork
      );
      console.log(res.data.approvedResearchWork);
      setPdfList(res.data.approvedResearchWork);
      setRefresh(false);
      setLoading(false);
    };

    getApprovedResearchWork();
  }, [refresh]);
  const notify = (msg) => {
    toast.error(msg, {
      toastId: "id",
    });
  };
  return (
    <>
      <div className="research__work">
        <div className="research__work__container">
          <SplitPane
            split="vertical"
            minSize={250}
            defaultSize={200}
            maxSize={400}
            style={{ height: "87%" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                paddingBottom: "10%",
              }}
            >
              {loading ? (
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress sx={{ color: "white" }} />
                </div>
              ) : (
                <ul style={{ overflow: "scroll" }}>
                  {pdfList.map((data, key) => (
                    <li
                      key={data.mediaId}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100px",
                        justifyContent: "space-around",
                      }}
                    >
                      <Button
                        style={{
                          color: "#1976d2",
                          backgroundColor: "white",
                          fontWeight: "700",
                          cursor: "pointer",
                        }}
                        onClick={() => setUrl(data.mediaURL)}
                      >
                        {`Document ${key + 1}`}
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
              <div>
                <Button
                  variant="contained"
                  style={{
                    color: "#1976d2",
                    backgroundColor: "white",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                  component="label"
                >
                  Upload
                  <input
                    hidden
                    accept="application/pdf"
                    type="file"
                    onChangeCapture={(e) => handleChange(e)}
                    onClick={(e) => {
                      if (user === null) {
                        e.preventDefault();
                        notify("Login before Uploading");
                      } else {
                        e.target.value = null;
                      }
                    }}
                  />
                </Button>
              </div>
            </div>
            <div className="webviewer" style={{ height: "100%" }}>
              {/* <object
                width="100%"
                height="100%"
                data={
                  "https://vvgnli-mediabucket.s3.amazonaws.com/1bf7e53c-2fbf-41c0-adb2-1c2a2243e256"
                }
                type="application/pdf"
              >
                {" "}
              </object> */}
              <Document
                file={
                  "https://vvgnli-mediabucket.s3.amazonaws.com/1bf7e53c-2fbf-41c0-adb2-1c2a2243e256"
                }
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
            </div>
          </SplitPane>
        </div>
      </div>
    </>
  );
};

export default ResearchWork;
