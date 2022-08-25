import React from "react";
import VvgnliMainMenu from "../../../../main__menu_vvgnli/VvgnliMainMenu";
import ResearchSubmenu from "../reserach__submenu/ResearchSubmenu";

const CentreForLabourAndHealthStudies = () => {
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
                <h1>Centre for Labour and Health Studies</h1>
                <hr className="line" />
                <p>
                  <b>Aims and Objectives</b>
                </p>
                <p>
                  Globalisation has led to increasing informalisation of work in
                  the developing countries, whereby workers have less access to
                  social protection. On the one hand flexible, precarious and
                  insecure forms of work with greater health risks have
                  increased. On the other hand, safety and protection systems
                  designed for formal workplaces and workers in the formal
                  sector are often inaccessible to informal workers. Moreover,
                  in many developing countries, governments have been compelled
                  to limit welfare programmes including health services through
                  public expenditure. This has increased health insecurities and
                  vulnerability for majority of the workers in the developing
                  countries.
                </p>
                <p>
                  In India where a large number of people are poor and depend on
                  the informal sector for their livelihood, providing horizontal
                  equity in terms of health protection and benefits becomes a
                  challenge. In order to address these key issues of health
                  protection and its interlinkages with the world of work, the
                  Centre for Labour and Health Studies has been set up in V.V.
                  Giri National Labour Institute. This specialised Centre
                  focuses on understanding and addressing emerging health
                  challenges confronting workers in a globalised economy. The
                  core research areas of the centre are as follows:
                </p>
                <hr />
              </section>
              <section>
                <p>
                  <b>Core Research Areas of the Centre</b>
                </p>
                <ul>
                  <li>
                    New forms of employment and emerging health risks and
                    patterns of morbidity
                  </li>
                  <li>
                    Labour market transformations and its challenges to health
                    security
                  </li>
                  <li>
                    Understanding access to health and health behaviour: caste,
                    class, ethnicity and gender interfaces
                  </li>
                  <li>Public health care delivery systems and its impact.</li>
                  <li>
                    Role of social insurance in providing health protection.
                  </li>
                </ul>
                <hr />
              </section>
              <section>
                <p>
                  <b>Research Advisory Group</b>
                </p>
                <p>
                  The Research Advisory Group of the Centre comprises of the
                  following members:
                </p>
                <ul>
                  <li>
                    Prof Prof. Ritu Priya Mehrotra, Centre of Social Medicine
                    and Community Health, Jawaharlal Nehru University, New
                    Delhi.
                  </li>
                  <li>
                    Prof. Indrani Gupta, Health Policy Research Unit, Institute
                    of Economic Growth, University of Delhi, New Delhi.
                  </li>
                  <li>
                    Prof. P.M. Kulkarni, Centre for the Study of Regional
                    Development, Jawaharlal Nehru University, New Delhi.
                  </li>
                  <li>
                    Prof. Sanjay Zodpey, Director, Indian Institute of Public
                    Health, Delhi.
                  </li>
                </ul>
              </section>
              <section>
                <hr />
                <p>
                  <b>Major Research Projects completed/initiated recently</b>
                </p>

                <ul>
                  <li>
                    Evaluation Study of Rashtriya Swasthya Bima Yojana (RSBY) -
                    A Study of Jharkhand, Maharashtra and Punjab 18
                  </li>
                  <li>
                    Changing Land Utilisation Patterns in the Tea Plantation
                    Sector in West Bengal: Few Policy Imperatives
                  </li>
                  <li>
                    Workplace Health and Safety: A Study of Select Small-Scale
                    Industrial Units in Delhi
                  </li>
                  <li>
                    Impact of MGNREGA on the Living Conditions of Unorganized
                    Workers in Rural Areas
                  </li>
                  <li>
                    Women’s Labour in the Tea Sector: Changing Roles,
                    Trajectories and Emerging Concerns.
                  </li>
                </ul>
                <hr />
              </section>
              <section>
                <p>
                  <b>Centre Coordinator</b>
                </p>
                <ul>
                  <li>Dr. Ruma Ghosh, Fellow</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CentreForLabourAndHealthStudies;