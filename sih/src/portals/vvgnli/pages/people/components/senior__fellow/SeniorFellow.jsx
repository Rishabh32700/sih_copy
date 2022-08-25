import { red } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import VvgnliMainMenu from "../../../../main__menu_vvgnli/VvgnliMainMenu";
import PeopleSubmenu from "../people__submenu/PeopleSubmenu";
import Helen from "./helen/Helen";
import seniorFellow1 from "./images/seniorFellow1.jpg";
import seniorFellow2 from "./images/seniorFellow2.jpg";
import Sanjay from "./sanjay/Sanjay";


const SeniorFellow = () => {
    const navigate = useNavigate();
  return (
    <>
      <VvgnliMainMenu />
      <div className="main__content__about__us">
        <div className="main__content__about__us__container">
          {console.log("about us section")}
          <PeopleSubmenu />
          <div className="upper">
            <div>
              <h1>Senior Fellows</h1>
              <hr className="line" />
              <p>
                The Institute has 13 faculty members, specializing in core areas
                of labour studies and with a track record of undertaking
                systematic and action research. The topics covered in faculty
                research are wide ranging – from employment, rural labour,
                migration, skill-development, to child labour, health, gender,
                to labour laws, labour history, to informal sector, decent work,
                and agrarian relations – and they fall within the ambit of the
                thrust areas of the respective centres.
              </p>
              <p>
                Imparting learner-centered training is amongst the core
                competencies of the Institute's faculty, given their experience
                in delivering programmes for target groups like labour
                administrators, trade union leaders, human resource / industrial
                relations managers, social activists involved with women labour,
                child labour, rural labour, migrant labour etc. and researchers
                on labour studies.
              </p>
            </div>
          </div>
          <div
            style={{
              border: "2px solid black",
              width: "99vw",
              height: "40vh",
              display: "flex",
              marginTop: "2rem",
              justifyContent: "space-evenly",
            }}
            className="lower"
          >
            <div
              style={{
                height: "100%",
                // border: "2px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}

              onClick={()=>{
                console.log("hello");
                navigate("/vvgnli/people/senior-fellow/helen")
              }}
            >
                
              <img
                style={{border: "2px solid black", height: "80%", marginTop: "1rem" }}
                src={seniorFellow1}
                alt="Dr. Helen R Sekar"
              />
                
                
              <h2
              //   style={{ border: "2px solid green" }}
              >
                Dr. Helen R Sekar
              </h2>
            </div>
            <div
              style={{
                height: "100%",
                
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}

              onClick={()=>{
                console.log("hello");
                navigate("/vvgnli/people/senior-fellow/sanjay")
              }}
            >
              <img
                style={{border: "2px solid black", height: "80%", marginTop: "1rem" }}
                src={seniorFellow2}
                alt="Dr. Sanjay Upadhyaya"
                onClick={Sanjay}
              />
              <h2
              //   style={{ border: "2px solid green" }}
              >
                Dr. Sanjay Upadhyaya
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeniorFellow;
