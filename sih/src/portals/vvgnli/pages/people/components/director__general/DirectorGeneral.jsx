import React from "react";

import VvgnliMainMenu from "../../../../main__menu_vvgnli/VvgnliMainMenu";
import PeopleSubmenu from "../people__submenu/PeopleSubmenu";
import img1 from "./people1.jpg";
const DirectorGeneral = () => {
  return (
    <>
      <VvgnliMainMenu />
      <div style={{ padding: "0" }} className="main__content__about__us">
        <div className="main__content__about__us__container">
          {console.log("about us section")}
          <PeopleSubmenu />
          <div
            style={{ width: "100%", height: "100%"}}
          >
            <div
              style={{
                width: "100%",
                height: "47%",
                display: "flex",
                marginTop: "2rem"
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
                  style={{ width: "100%", height: "100% " }}
                  src={img1}
                  alt="image"
                ></img>
              </div>
              <div>
                <h2>Shri. Amit Nirmal</h2>
                <h2>Director General</h2>
                <hr />
                <p>Phone No: 0120-2411533 , 535; Extention: 232</p>
                <p>Direct: 0120-2411470</p>
                <p>Email ID: dg.vvgnli@gov.in</p>
                <p>Fax : 0120-2411474</p>
              </div>
            </div>
            <div className="lower">
              <div>
                <h1>From Director General’s Desk</h1>
                <p>
                  V.V. Giri National Labour Institute, ever since its inception
                  in 1974, has been at the forefront in undertaking training,
                  education, research, consultancy and publications pertaining
                  to different aspects of labour.
                </p>
                <p>
                  The Institute is dedicated through its core activities to:
                </p>
                <ul>
                  <li>
                    Project labour issues as a core concern of policy making
                  </li>
                  <li>
                    Empower the social actors with capacities to meet the
                    challenge of change
                  </li>
                  <li>
                    Highlight the role of labour in shaping of modern India
                  </li>
                  <li>
                    Address the issues of transformation of the world of work in
                    a global economy
                  </li>
                  <li>
                    Preserve and disseminate information on labour matters.
                  </li>
                </ul>
                <p>
                  The Institute is committed to pursue these objectives by
                  accelerating the pace of its activities and also by responding
                  to the emerging challenges of change. Today, the combination
                  of factors such as extraordinary and continual technological
                  change, globalisation of markets, liberalisation of trade,
                  economic crisis and adjustments, which are all inter-related,
                  presents a labour and employment situation which is
                  distinctively different from those prevailing few decades
                  back. It is in this context that the role and activities of a
                  premier training and research institution like the V.V. Giri
                  National Labour Institute assumes greater significance.
                </p>
                <p>
                  With rapid transformations taking in the world of work, all
                  concerned such as labour administrators, managers, trade
                  unions, workers and researchers have to thoroughly understand
                  the different complexities involved which in turn would call
                  for enhancing their knowledge and sharpening their skills.
                  Workers need to be educated on their legal rights; labour
                  administrators and managements have to strive at creating a
                  conducive atmosphere for industrial growth; trade union
                  leaders have to be prepared to evolve and adopt new and
                  innovative organizing strategies, labour law enforcement
                  officials have to be made more innovative and inquisitive on
                  enforcing labour laws; researchers have to be taught the
                  emerging scenario with a view to evolve new and appropriate
                  research methodologies. The Institute is prepared to respond
                  to these requirements by developing ‘learner-centered’
                  training programmes and interventions.
                </p>
                <p>
                  The Institute’s Training Calendar 2016-2017 has been developed
                  to address the training needs of all the concerned
                  stakeholders. I sincerely hope that the various training
                  programmes that have been designed would serve as useful
                  inputs to prepare the social partners to respond to the
                  challenges of change.
                </p>
                <p>
                  The Institute looks forward to the continued support of all
                  concerned for making our training interventions as a major
                  catalyst towards enhancing quality of work and work relations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectorGeneral;
