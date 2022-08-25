import React from "react";
import VvgnliMainMenu from "../../../../main__menu_vvgnli/VvgnliMainMenu";
import ResearchSubmenu from "../reserach__submenu/ResearchSubmenu";

const CentreForEmploymentRelationsAndRegulations = () => {
  return (
    <>
      <VvgnliMainMenu />
      <div className="about">
        <div className="about__container">
          {console.log("about us section")}
          <ResearchSubmenu />

          <div className="main__content__about__us">
            <div className="main__content__about__us__container">
              <section className="about__us">
                <h1>Centre for Employment Relations and Regulations</h1>
                <hr className="line" />
                <p>
                  <b>Aim</b>
                </p>
                <p>
                  Develop understanding of the changing employment relations in
                  order to help in the formulation of appropriate legal
                  regulation framework and evolving appropriate social
                  protection measures.
                </p>
                <hr />
              </section>
              <section>
                <p>
                  <b>Core Areas</b>
                </p>
                <p>
                  The research activities of the centre focus on the following
                  core areas:
                </p>
                <ul>
                  <li>
                    Trade unions and their role in the emerging socio-economic
                    scenario.
                  </li>
                  <li>
                    Emerging employment relations in the informal and the
                    unorganized sector.
                  </li>
                  <li>
                    Limitations of the existing legal framework in the
                    regulation of employment relations in the unorganized and
                    informal sector.
                  </li>
                  <li>Changes in judicial trend.</li>
                  <li>Social protection to labour.</li>
                  <li>Regulation of minimum wage.</li>
                  <li>
                    Regulation of contract labour and fixed - term employment.
                  </li>
                  <li>International Labour Standards and Labour Regulation</li>
                </ul>
                <hr />
              </section>
              <section>
                <p>
                  <b>Recently Completed Research Projects</b>
                </p>
                <p>
                  Some of the important research projects initiated and
                  completed by the centre in the recent past include:
                </p>
                <ul>
                  <li>
                    Conditions of Employment, Work and Service of Faculty in
                    Private Engineering Colleges in India.
                  </li>
                  <li>Regulation of Private Placement Agencies in India</li>
                  <li>
                    ILO Convention 181:Issues and Challenges in the context of
                    Private Placement Agencies in India
                  </li>
                  <li>
                    Evolution of Minimum Wage Policy and Regulatory Framework:
                    An Inter Country Perspective.
                  </li>
                  <li>
                    Labour, Employment and Social Security Issues of Security
                    Guards Engaged by Private Security Agencies: A Case Study of
                    Okhla and Noida.
                  </li>
                  <li>Contract Labour and Judicial intervention.</li>
                  <li>
                    Strengthening Labour Laws in order to Prevent Violations
                  </li>
                  <li>
                    Labour, Employment and Social Security Issues in Education
                    Industry: A Case Study of Private School of Noida.
                  </li>
                  <li>
                    Status of Labour Welfare Measures in the Factories of NOIDA:
                    A Case Study of Garment and Hosiery Industry.
                  </li>
                </ul>
                <p>
                  Most of the above mentioned research studies have been
                  published in the form of NLI Research Studies Series.
                </p>
                <hr />
              </section>
              <section>
                <p>
                  <b>Research Advisory Group Members</b>
                </p>
                <p>
                  The Centre is having the following distinguished persons as
                  its RAG members for seeking guidance, orientation and
                  direction for carrying out its various activities:
                </p>
                <ul>
                  <li>Prof. Mahavir Singh</li>
                  <li>Dr. Rajan K. E. Varghese</li>
                  <li>Dr. Kamala Sankaran</li>
                  <li>Shri H. Mahadevan</li>
                  <li>Shri B.P. Pant</li>
                </ul>
                <hr />
              </section>
              <section>
                <p>
                  <b>Research Advisory Group Members</b>
                </p>
                <ul>
                  <li>Dr. Sanjay Upadhyaya, Fellow Associate Co-ordinator</li>
                  <li>Dr. Manoj Jatav, Associate, Fellow</li>
                </ul>
              </section>
              <section>
                <p>
                  <b>For any further information, please contact:</b>
                </p>
                <p>Director General, VVGNLI</p>
                <a href="dg.vvgnli@gov.in">dg.vvgnli@gov.in</a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CentreForEmploymentRelationsAndRegulations;