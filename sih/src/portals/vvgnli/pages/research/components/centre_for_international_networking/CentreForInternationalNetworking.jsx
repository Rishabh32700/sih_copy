import React from "react";
import VvgnliMainMenu from "../../../../main__menu_vvgnli/VvgnliMainMenu";
import ResearchSubmenu from "../reserach__submenu/ResearchSubmenu";

const CentreForInternationalNetworking = () => {
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
                <h1>Centre For International Networking</h1>
                <hr className="line" />
                <p>
                  V.V. Giri National Labour Institute is mandated to forge
                  professional collaborations with major international
                  institutions involved with labour and related issues.
                  Accordingly, the Institute has over the years forged
                  collaborations with institutions like International Labour
                  Organisation (ILO), United Nations Children’s Fund (UNICEF),
                  World Health Organisation (WHO), United Nations Development
                  Programme (UNDP), International Institute for Labour Studies
                  (IILS) etc. for undertaking various research and training
                  activities. In the recent past, a number of innovative
                  initiatives have been taken not only to strengthen the
                  collaborations with organizations like ILO, UNDP and UNICEF
                  but also to forge new and longterm collaborations with
                  institutions like Japan Institute of Labour Policy and
                  Training (JILPT), Korea Labour Institute (KLI), International
                  Organisation for Migration (IOM) and International Training
                  Centre (ITC), Turin, Sri Lanka Institute of Labour &
                  Employment, UN Women, IGK Work and Human Lifecycle in Global
                  History, Humboldt University, Germany and Centre for Modern
                  Indian Studies, University of Gottingen, Germany. The major
                  areas of collaborations include: Child Labour: Labour
                  Migration, Social Security, Gender Issues, Skill Development,
                  Labour History, Decent Work and Training Interventions related
                  to Labour.
                </p>
                <p>
                  The Institute is also currently empanelled as a training
                  institution for organizing international training programmes
                  under the ITEC/SCAAP scheme of the Ministry of External
                  Affairs, Govt. of India. The Institute organized seven
                  international training programmes on major themes like
                  Leadership Development, Labour and Employment Relations in a
                  Globalising Economy, Social Security, Health Protection and
                  Security, Skill Development and Employment Generation, Gender
                  Issues in Labour and Research Methods in Labour Studies.
                </p>
                <p>
                  Memorandum of Understanding (MOU) between V.V. Giri National
                  Labour Institute (VVGNLI) and International Training Centre
                  (ITC) of International Labour Organisation (ILO) Turin, Italy
                  for professional collaboration was signed on October 30, 2012.
                  The purpose of this MOU is to expand the collaboration between
                  the two institutions in training activities to promote decent
                  work for all. The two organisations will work together in
                  areas of mutual interest for activities, inter alia, related
                  to (i) organising collaborative training and education
                  programmes; (ii) developing training modules; and (iii)
                  faculty exchange. Such a collaboration is expected to result
                  in upgradation of technical capacities of both the
                  institutions in responding to the challenges emanating from
                  transformations in the world of work. The collaboration will
                  also aim to evolve V.V. Giri National Labour Institute as a
                  training institution for the SAARC region to begin with and
                  developing it further as an internationally acclaimed centre
                  of excellence in training on labour and related issues.
                </p>
                <p>
                  The Institute is committed to sustain international networking
                  and hopes to forge more long term collaborations with leading
                  international institutions, especially in relation to
                  undertaking collaborative research and training activities,
                  promoting faculty exchange programmes, and organising
                  international/regional workshops and seminars.
                </p>
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

export default CentreForInternationalNetworking;