import React from 'react'

import VvgnliMainMenu from "../../../../.././main__menu_vvgnli/VvgnliMainMenu";
import PeopleSubmenu from "../.././people__submenu/PeopleSubmenu";
import seniorFellow2 from ".././images/seniorFellow2.jpg";

const Sanjay = () => {
  return (
    <>
      <VvgnliMainMenu />
      <div style={{ padding: "0" }} className="main__content__about__us">
        <div className="main__content__about__us__container">
          {console.log("about us section")}
          <PeopleSubmenu />
          <div style={{ width: "100%", height: "100%"}}>
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
                  src={seniorFellow2}
                  alt="image"
                ></img>
              </div>
              <div>
                <h2>
Dr. Sanjay Upadhyaya</h2>
                <h2>Senior Fellow</h2>
                <hr />
                <p>Qualification: LL.M., Ph.D. (Law)
</p>
                <p>Phone No: 0120-2411736</p>
                <p>Email ID: sanjay.vvgnli@gov.in</p>
                {/* <p>Fax : 0120-2412498</p> */}
                <button>Resume</button>
              </div>
            </div>
            <div className="lower">
              <div>
                <h1>About</h1>
                <p>
                  Dr. Sanjay Upadhyaya has been working as Senior
                  Fellow(Faculty) at the V.V. Giri National Labour Institute for
                  the last 23 years. He is the Co-ordinator of the Research
                  Centre for Employment Relations and Regulations. Areas of his
                  current key research interests include: Contract Labour and
                  Legal Protection, Social Security Law, Employment Relations
                  Law and Regulation of Minimum Wages. He has the experience of
                  having co-ordinated more than 160 training programmes on
                  various themes of labour (for different target groups) such
                  as: Leadership Development; Fundamentals of Labour Laws;
                  Effective Labour Law Enforcement; Roles and Functions of
                  Quasi-Judicial Authorities; Effective Enforcement of Building
                  and Other Construction Workers Act; Effective Labour Welfare
                  Administration and Making Adjudication Effective etc. within
                  and outside V.V. Giri National Labour Institute. The
                  programmes coordinated by him have been attended by over 3200
                  participants including representatives of NGOs and Trade
                  Unions, Labour Enforcement Officials, Labour Administrators,
                  Judges of Labour Courts and Tribunals, Officers from Indian
                  Statistical Service, Officers from Indian Ordinance Factory
                  Service, Personnel Officers and Industrial Relations
                  Practitioners from Private and Public Sector etc. He has
                  addressed a large number of participants of various National
                  and International Training Programmes on several themes of
                  labour law such as: Constitution and Labour; Regulatory
                  Framework for Wages; Contract Labour and Legal Protection;
                  Contract Labour and Judicial Intervention; Managerial
                  Excellence and Human Rights; Industrial Relations Law and
                  Legislation pertaining to migrant workers, women workers,
                  building and other construction workers and child labour etc.
                </p>
                <p>
                  The major research studies carried out by Dr. Sanjay Upadhyaya
                  include: Conditions of Employment, Work and Service of Faculty
                  in Private Engineering Colleges in India; Evolution of Minimum
                  Wage Policy and Regulatory Framework: An Inter Country
                  Perspective; Adaptation of ITC-ILO Curriculum on Building
                  Modern and Effective Labour Inspection Systems; Labour,
                  Employment and Social Security Issues of Security Guards
                  Engaged by Private Security Agencies; Contract Labour and
                  Judicial Interventions; Strengthening Labour Laws in order to
                  Prevent Violations; Assessing the Social Security Measures and
                  Promoting Effective Participation of Beneficiaries (An action
                  research); Labour, Employment and Social Security Issues in
                  Education Industry: A Case Study of Private Schools;
                  Organizing Rural Labour: A Case of Chittorgarh, Rajasthan (An
                  action research); Status of Labour Welfare Measures in he
                  Factories of NOIDA: A Case Study of Garment & Hosiery Industry
                  and Delay in Industrial Adjudication: A case study of
                  C.G.I.T-cum-Labour Court, Delhi. Most of these studies have
                  been published in the form of NLI Research Studies Series. He
                  has recently initiated a new V.V.Giri NLI publication in the
                  form of ‘Workers Education and Empowerment Series’ (in Hindi
                  language) for wider dissemination of key research findings of
                  research studies carried out by V.V. Giri National Labour
                  Institute from time to time.
                </p>
                <p>
                  Dr. Sanjay Upadhyaya has recently brought out a book on
                  contract labour titled, ‘Policy and Law on Contract Labour in
                  India’ published by Thomson Reuters and also edited a book
                  ‘Bharat ke Shramik Neta:Vyaktitva evam Krititva’ (in Hindi)
                  containing the short biographies of eminent trade union
                  leaders of India. In the past he has been the editor of ‘Shram
                  Samachar’, inhouse Hindi news magazine of Ministry of Labour,
                  Govt. of India. He is the editor of inhouse regular
                  publications of the V.V.Giri National Labour Institute,
                  ‘Awards Digest: Journal of Labour Legislation’ and ‘Shram
                  Vidhan’ .He is also one of the active members of core team
                  constituted by Ministry of Labour and Employment for drafting
                  of the Small Factories (Regulation of Employment and
                  Conditions of Service) Bill, the Labour Code on Wages and
                  Labour Code on Industrial Relations.
                </p>
                <p>
                  He has made presentations in various National / International
                  seminars and participated in a number of discussions and
                  workshops. He has to his credit a large number of publications
                  in the form of articles in various academic journals / edited
                  volumes, magazines and newspapers etc. in English and Hindi on
                  various themes of labour in general and labour law in
                  particular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sanjay