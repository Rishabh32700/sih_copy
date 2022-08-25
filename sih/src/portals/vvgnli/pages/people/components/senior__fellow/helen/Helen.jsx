import React from "react";

import VvgnliMainMenu from "../../../../.././main__menu_vvgnli/VvgnliMainMenu";
import PeopleSubmenu from "../.././people__submenu/PeopleSubmenu";
import seniorFellow1 from ".././images/seniorFellow1.jpg";

const Helen = () => {
  return (
    <>
      <VvgnliMainMenu />
      <div style={{ padding: "0" }} className="main__content__about__us">
        <div className="main__content__about__us__container">
          {console.log("about us section")}
          <PeopleSubmenu />
          <div style={{ width: "100%", height: "100%" }}>
            <div
              style={{
                width: "100%",
                height: "47%",
                display: "flex",
                marginTop: "2rem",
              }}
              className="upper"
            >
              <div
                style={{
                  width: "20%",
                  height: "30vh",
                  marginRight: "2.5rem",
                }}
              >
                <img
                  style={{
                    border: "2px solid black",
                    width: "80%",
                    height: "100% ",
                    marginLeft: "1.5rem",
                  }}
                  src={seniorFellow1}
                  alt="image"
                ></img>
              </div>
              <div>
                <h2>Dr. Helen R Sekar</h2>
                <h2>Senior Fellow</h2>
                <hr />
                <p>Qualification: M.A., M. Phil., Ph.D.</p>
                <p>Phone No: 0120-2412498; Ext: 239</p>
                <p>Email ID: helenrsekar.vvgnli@gov.in</p>
                <p>Fax : 0120-2412498</p>
                <button>Resume</button>
              </div>
            </div>
            <div className="lower">
              <div>
                <h1>About</h1>
                <p>
                  Dr. Helen R. Sekar is a Senior Fellow(Faculty) of the V.V.
                  Giri National Labour Institute. She has Post Graduate Degree
                  in Public Administration from Presidency College, Madras and
                  M. Phil and Ph.D. from Madras Christian College, affiliated to
                  the Madras University. Dr. Helen R. Sekar is presently the
                  Coordinator of the National Resource Centre on Child Labour
                  (NRCCL). This work entails a mix of primary and secondary
                  research, advocacy, training, planning, monitoring and
                  evaluation. Her primary specialization, though, being Labour
                  Administration, Labour Legislation and Labour Welfare, drawing
                  on field work in several parts of India, she has conducted
                  research on child labour in hazardous industries such as lock
                  industry, knife industry, brassware industry and match and
                  fireworks. She has developed Project Proposals and managed
                  Development Projects. Her other areas of research include
                  employment of children home-based work, slaughter houses,
                  children at the traffic lights, rag picking children,
                  insecurities and vulnerabilities of Informal sector Vendors,
                  children vending on the streets, implications of HIV/AIDs on
                  child labour and related issues. The focus of her research was
                  the development of theory and empirical evidence on risk,
                  resilience and coping in childhood and children’s economic and
                  social roles and labour dimensions of migrant and trafficked
                  children. Dr. Sekar’s work has also focused on child labour
                  and education, child labour legislation and enforcement,
                  Impact of technological change on the demand of child labour,
                  health and child labour, local governing bodies and child
                  labour. She has coordinated nation-wide evaluation of the
                  National Child Labour Project by the end of both the Ninth
                  Five-year plan and the Tenth plan. She has done a study on
                  Children at Hard Labor in the Farms of United States of
                  America and the Legal Framework: A Critical Analysis. Dr.
                  Helen R. Sekar has done extensive Monitoring, Desk Review,
                  Inspection and Field Review of the National Child Labour
                  Project. She has also coordinated the SAARC conference on
                  child labour. As an experienced Trainer comfortable with
                  simulation work, Dr. Sekar has contributed to the development
                  of teaching and training skills which has meant an extensive
                  interface with Officials of different departments of the
                  Government, UN Organisations, Trade Union, Labour Departments,
                  Teachers’ Association, NGOs, Media, elected representatives of
                  Local Government Institutions, Advocates, Judiciary, Youth
                  Groups including Students of Social Work, NSS and NYK, Project
                  Directors and Field Officials of NCLP. She has been guest
                  faculty on courses organized by various academic and training
                  institutions. Dr. Sekar has been involved in developing
                  curriculum for different Universities in India. Her major
                  books in the recent period include: Hard Labour at Tender Age;
                  Girl Child Labour in the Match Industry of Sivakasi: No Light
                  in Their Lives; Child Labour Legislation in India: A Study in
                  Retrospect and Prospect; and Vulnerability and Insecurities of
                  Informal Sector Workers: A Study of Street Vendors, Forced
                  Child Labour: A Study of Children at the Traffic Lights and
                  co-authored ‘Rehabilitation of Child Labour in India: Lessons
                  Learnt from the Evaluation of National Child Labour Project’.
                  Besides, Dr. Sekar has also prepared many Booklets, Training
                  Packages, Training Manuals, Reports, Compendium and Monographs
                  on the issue of Child Labour. She has published several
                  articles in journals of national and international repute. Dr.
                  Helen R. Sekar is the Editor of ‘Child Hope’, the Quarterly
                  Newsletter on Child Labour. During the past two decades, Dr.
                  Sekar has been actively involved in formulation and
                  implementation of a number of Research, training and
                  Evaluation projects of the International Institute of Labour
                  Studies (IILS), UNICEF, ILO-IPEC, ILO-IPEC-ABSBP,
                  ILO-INDUSCLP, ILO-IPEC-Converging Against Child Labour:
                  Support for India’s Model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Helen;
