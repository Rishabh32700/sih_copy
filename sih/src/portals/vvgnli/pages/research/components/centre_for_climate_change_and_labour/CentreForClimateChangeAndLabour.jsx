import React from "react";
import VvgnliMainMenu from "../../../../main__menu_vvgnli/VvgnliMainMenu";
import ResearchSubmenu from "../reserach__submenu/ResearchSubmenu";

const CentreForClimateChangeAndLabour = () => {
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
                <h1>Centre for Climate Change and Labour</h1>
                <hr className="line" />
                <p>
                  The impact of climate change is a global concern and in India
                  where large numbers of people are poor and dependent on
                  agriculture and informal sector for their livelihoods, the
                  impact of climate change is quite critical. In order to
                  address key issues relating to climate change and its
                  inter-linkages with the world of work, the V. V. Giri National
                  Labour Institute has set up a new research centre namely
                  Centre for Climate Change and Labour in the year 2010. The
                  major objective of the research centre is to carry out policy
                  oriented research on climate change and its inter-linkages
                  with labour and livelihoods. The core research areas of the
                  centre are as follows:
                </p>
                <hr />
              </section>
              <section>
                <p>
                  <b>Core Research Areas</b>
                </p>

                <ul>
                  <li>
                    Understanding inter-linkages between climate change, labour
                    and livelihoods;
                  </li>
                  <li>
                    Employment Challenges of Climate Change and transition to
                    ‘Green Jobs’;
                  </li>
                  <li>
                    Assessment of livelihood adaptation and mitigation
                    strategies to climate variability and change at the macro,
                    meso and micro level;
                  </li>
                  <li>Climate change and its impact on migration and</li>
                  <li>
                    Impact of climate change on natural resources, forests and
                    commons.
                  </li>
                </ul>
                <hr />
              </section>
              <section>
                <p>
                  <b>Specific Researchable Issues include:</b>
                </p>
                <ul>
                  <li>
                    Effect of climate change on the livelihoods of vulnerable
                    workers engaged in subsistence farming, informal economy,
                    tourism sector, coastal fishing/salt/farming community and
                    indigenous forest dependent scheduled tribes;
                  </li>
                  <li>
                    Role of employers and trade unions in reorganizing
                    production processes, protecting job losses and re-orienting
                    macro policies to combat climate change;
                  </li>
                  <li>
                    Impact of climate change on food security through its
                    linkage with reduction in agriculture production and
                    productivity caused by prolonged droughts, floods and highly
                    erratic monsoon;
                  </li>
                  <li>
                    Role of NREGA in protecting livelihood security and adapting
                    to climate change;
                  </li>
                  <li>Climate Change and Gender;</li>
                  <li>
                    Climate Change and its impact on accelerating migration
                    processes;
                  </li>
                  <li>
                    Understanding local perceptions on climate impacts, local
                    coping capacities, and existing adaptation strategies.
                  </li>
                  <li>
                    Capacity building and orientation programmes for various
                    stakeholders about the science of climate change, its
                    potential impact and about various adaptation and mitigation
                    strategies.
                  </li>
                </ul>
              </section>
              <section>
                <p>
                  <b>Centre Co-Ordinator</b>
                </p>

                <ul>
                  <li>Dr. Anoop Satpathy, Fellow</li>
                </ul>
              </section>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CentreForClimateChangeAndLabour;