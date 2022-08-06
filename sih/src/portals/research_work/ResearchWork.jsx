import React, { useState } from "react";

import SplitPane from "react-split-pane";

// import { Button } from "@material-ui/core";
import Button from "@mui/material/Button";

const ResearchWork = () => {
  const [url, setUrl] = useState(
    "https://test-ptab-docs-fe-assignment.s3.amazonaws.com/169020134"
  );

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
            <view>
              <ul>
                {pdfs.map((data) => (
                  <li
                    key={data.id}
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
                      }}
                      onClick={() => setUrl(data.url)}
                    >
                      {" "}
                      {data.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </view>
            <div
              className="webviewer"
              style={{ height: "100%" }}
            >
              <object
                width="100%"
                height="100%"
                data={url}
                type="application/pdf"
              >
                {" "}
              </object>
            </div>
          </SplitPane>
        </div>
      </div>
    </>
  );
};

export default ResearchWork;
