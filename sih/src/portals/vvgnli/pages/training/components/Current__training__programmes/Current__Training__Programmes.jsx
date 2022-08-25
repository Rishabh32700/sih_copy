import React, { useState } from "react";
import TrainingSubmenu from "../training__sub__menu/TrainingSubmenu";
import VvgnliMainMenu from "../../../../main__menu_vvgnli/VvgnliMainMenu";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./Current__Training__Programmes.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Current__Training__Programmes__side__menu = [
  "Training Programme on Understanding New Labour Codes and Rules from North Eastern States -22/08/2022 to 26/08/2022",
  "Leadership Development Programme for Women Officials -22/08/2022 to 24/08/2022",
  "Training Programme on Pension Schemes for the Organised and Unorganised Workers -22/08/2022 to 24/08/2022",
  "Training Programme on Enhancing Leadership Skills of Fisheries Workers -29/08/2022 to 02/09/2022",
  " Training Programme on Understanding Labour Market and Employment Opportunities for North Eastern States -29/08/2022 to 02/09/2022",
  "Training Programme on Emerging Perspectives on Gender, Labour Codes and International Labour Standards -30/08/2022 to 02/09/2022",
];

const current__training__programmes__main__rendering__upper__container__buttons__container__button__array =
  [
    "On Going",
    "Previous Month",
    "Current Month",
    "Next Month",
    "Upcoming Training",
    "Archive",
    "Search",
  ];

const arrayOfObj1 = [
  {
    leftSide: "Course Title",
    rightSide:
      "Training Programme on Understanding New Labour Codes and Rules from North Eastern States",
  },
  {
    leftSide: "Course Aim",
    rightSide:
      "	The programme aims at equipping the participants with the context of recent Labour reforms and labour codes.",
  },
  {
    leftSide: "Course Objective",
    rightSide:
      "To acquire the knowledge of substantive as well as procedural contents of Wage Code. To have an understanding of Social Security Code. To develop an insight into the Industrial Relations Code. To gather an understanding of the law relating to Occupational Safety and Health Code. To understand labour codes and its impacts on workers and employers.",
  },
  {
    leftSide: "Course Profile",
    rightSide:
      "Overview of labour policy, labour legislations and labour reforms in India; Salient features of labour reforms and labour codes; highlights of Wage Code, Social Security Code, Industrial Relations Code, and Occupational Safety and Health Code; understanding of labour codes and its impacts on workers and employers.",
  },
  {
    leftSide: "Participation Level",
    rightSide:
      "Government Officials, Representatives from Trade union & NGOs from North-Eastern States",
  },
  {
    leftSide: "Faculty",
    rightSide: "Dr. Shashi Bala",
  },
  {
    leftSide: "Date",
    rightSide: "From 22-08-2022 to 26-08-2022",
  },
  {
    leftSide: "Training Details",
    rightSide: "Domestic Training Programmes",
  },
  {
    leftSide: "Venue",
    rightSide:
      "V.V. Giri National Labour Institute Sector , 24, Noida – 201 301 Distt. Gautam Budh Nagar Uttar Pradesh",
  },
  {
    leftSide: "Course Director",
    rightSide: "Dr. Shashi Bala",
  },
  {
    leftSide: "Download Course Info",
    rightSide:
      "Download Course Info (Understanding New labour Codes and Rules from NE August 22-26, 2022.pdf)",
  },
  {
    leftSide: "File Size",
    rightSide: "1.46 MB",
  },
];
const arrayOfObj2 = [
  {
    leftSide: "Course Title",
    rightSide: "Leadership Development Programme for Women Officials",
  },
  {
    leftSide: "Course Aim",
    rightSide:
      "This training programme on ‘leadership development programme for women officials’ will train the participants to discover how to adjust your management style through leadership and how to manage people. Leadership skill practice uses role plays, exercise and practice sessions; using leadership models along with interactive activities results to achieve team success and a well respected manager.",
  },
  {
    leftSide: "Course Objective",
    rightSide:
      "Examine managerial style and increase self-awareness through leadership style. Develop skills for negotiation, communication, leadership, interpersonal skills and time management. Learn how to set priorities, how to control chaos in the workplace and make decisions under pressure Learn practical technique to manage and understand how emotions affect your job performance. Develop your analytical skill through research and information Learn assertiveness techniques for survival and advancement and develop the best strategic planning process",
  },
  {
    leftSide: "Course Profile",
    rightSide:
      "Leadership skills, decision making, time management, management skills, assertiveness techniques, communication strategies, better work relationship, techniques to manage emotions and project management skills.",
  },
  {
    leftSide: "Methodology",
    rightSide:
      "Role play, exercises and practice sessions, case studies and experience sharing.",
  },
  {
    leftSide: "Participation Level",
    rightSide:
      "Women management personnel and representatives of trade unions/associations/federations from government, public and private sector organizations.",
  },
  {
    leftSide: "Faculty",
    rightSide: "Dr. Dhanya M.B.",
  },
  {
    leftSide: "Date",
    rightSide: "From 22-08-2022 to 24-08-2022",
  },
  {
    leftSide: "Training Details",
    rightSide: "Domestic Training Programmes",
  },
  {
    leftSide: "Venue",
    rightSide:
      "V.V. Giri National Labour Institute Sector , 24, Noida – 201 301 Distt. Gautam Budh Nagar Uttar Pradesh",
  },
  {
    leftSide: "Course Director",
    rightSide: "Dr. Dhanya M B",
  },
  {
    leftSide: "Download Course Info",
    rightSide:
      "Download Course Info (Leadership Development Programme for Women Officials, August 22-24, 2022.pdf)",
  },
  {
    leftSide: "File Size",
    rightSide: "1.14 MB",
  },
];
const arrayOfObj3 = [
  {
    leftSide: "Course Title",
    rightSide:
      "Training Programme on Pension Schemes for the Organised and Unorganised Workers",
  },
  {
    leftSide: "Course Aim",
    rightSide:
      "The programme aims at strengthening the understanding of participants on the pension schemes for workers in the organized and the unorganized sector. The programme would acquaint the participants with the various inequalities prevalent in the labour market and also enable them to develop an understanding about the challenges existing in the labour market.",
  },
  {
    leftSide: "Course Objective",
    rightSide:
      "Provide an overview of the different pension schemes for workers in the organized and unorganized sector; Understanding different components of the pension schemes; and Share good practices and lessons learnt relating to the implementation of the pension programmes.",
  },
  {
    leftSide: "Course Profile",
    rightSide:
      "This course focuses on capacity building to understand the institutional framework for providing pension to workers in the organized and unorganized sector, understanding the components of the pension schemes, strategies for effective participation in the schemes.",
  },
  {
    leftSide: "Methodology",
    rightSide: "Lectures, Discussions, Experience Sharing and Case Studies.",
  },
  {
    leftSide: "Participation Level",
    rightSide:
      "Unorganized and Organised sector representatives, trade union representatives, government officials.",
  },
  {
    leftSide: "Faculty",
    rightSide: "Dr. Ruma Ghosh",
  },
  {
    leftSide: "Date",
    rightSide: "From 22-08-2022 to 24-08-2022",
  },
  {
    leftSide: "Training Details",
    rightSide: "Domestic Training Programmes",
  },
  {
    leftSide: "Venue",
    rightSide:
      "V.V. Giri National Labour Institute Sector , 24, Noida – 201 301 Distt. Gautam Budh Nagar Uttar Pradesh",
  },
  {
    leftSide: "Course Director",
    rightSide: "Dr. Ruma Ghosh",
  },
  {
    leftSide: "Download Course Info",
    rightSide:
      "Download Course Info (Pension Schemes for the organised and Unorganised Workers.pdf)",
  },
  {
    leftSide: "File Size",
    rightSide: "3.19 MB",
  },
];

const arrayOfObj4 = [
  {
    leftSide: "Course Title",
    rightSide:
      "Training Programme on Enhancing Leadership Skills of Fisheries Workers",
  },
  {
    leftSide: "Course Aim",
    rightSide:
      "To enhance organisation building capacity of activists of fishery workers’ unions.",
  },
  {
    leftSide: "Course Objective",
    rightSide:
      "To impart knowledge and information about fishery industry in general and status of workers in particular To enhance inter-personal communication To discuss the legal protections in various labour legislations To familiarise on the various aspects of welfare funds",
  },
  {
    leftSide: "Course Profile",
    rightSide:
      "Overview of the fishery Industry, Problems of fishery Industry, Leadership Styles, Communication Skills, Effective Trade Union Building.",
  },
  {
    leftSide: "Methodology",
    rightSide: "Lectures, case studies and group discussion",
  },
  {
    leftSide: "Participation Level",
    rightSide:
      "Trade Union Leaders sponsored by Central Trade Unions from fishery Sector. We will appreciate if participants from reserved categories (SC/ST) are also nominated.",
  },
  {
    leftSide: "Faculty",
    rightSide: "Dr. R.R. Patel",
  },
  {
    leftSide: "Date",
    rightSide: "From 29-08-2022 to 02-09-2022",
  },
  {
    leftSide: "Training Details",
    rightSide: "Domestic Training Programmes",
  },
  {
    leftSide: "Venue",
    rightSide:
      "V.V. Giri National Labour Institute Sector , 24, Noida – 201 301 Distt. Gautam Budh Nagar Uttar Pradesh",
  },
  {
    leftSide: "Course Director",
    rightSide: "Dr. Ramya Ranjan Patel",
  },
  {
    leftSide: "Download Course Info",
    rightSide:
      "Download Course Info (Enhancing Leadership Skill of Fisheries Workers, August 29-02 September, 2022.pdf)",
  },
  {
    leftSide: "File Size",
    rightSide: "1.49 MB",
  },
];

const arrayOfObj5 = [
  {
    leftSide: "Course Title",
    rightSide:
      "Training Programme on Understanding Labour Market and Employment Opportunities for North Eastern States",
  },
  {
    leftSide: "Course Aim",
    rightSide:
      "To make the Employment Officers of North Eastern States and Government Officials who are working in the area of Employment and skill development of North Eastern States, aware of the Labour Market trends, Employment opportunities and important role being played by National Career Service project in this area.",
  },
  {
    leftSide: "Course Objective",
    rightSide:
      "To update the knowledge and skills of employment officers on fast changing Labour market dynamics due to Liberalisation, Globalisation and Privatisation of economy. To understand the nature of Labour market trends at various levels. To give an idea of different Research Methodologies based on which analysis of Labour market could be done To understand the role of NCS in Employment Market/Labour Market related areas.",
  },
  {
    leftSide: "Course Profile",
    rightSide:
      "ILO convention/recommendation relating to Labour/employment market, NCO, NIC, Survey and Research Methodologies, Employment Exchange, CNV Act/Rules, Collection, compilation, interpretation of Labour / employment market information data, Preption of Labour / Employment Market Information Reports, Updation of Employers register, NCS Portal management, Role of NCS in extending employment opportunities to the Job Seekers through the studies of employment market/labour market analysis, Role of MCCs in extending employment opportunities to the Job Seekers through the studies of employment market/labour market analysis Employment schemes of various Ministries with a special focus on North Eastern States.",
  },
  {
    leftSide: "Methodology",
    rightSide:
      "Lectures, discussions, audio-visual presentations, case studies and experience sharing.",
  },
  {
    leftSide: "Participation Level",
    rightSide:
      "Employment Officers of North Eastern States and Government Officials of North Eastern States who are working in the area of Employment.",
  },
  {
    leftSide: "Faculty",
    rightSide: "Dr. Otojit Kshetrimayum, Fellow, VVGNLI Otojit.vvgnli@gov.in",
  },
  {
    leftSide: "Date",
    rightSide: "From 29-08-2022 to 02-09-2022",
  },
  {
    leftSide: "Training Details",
    rightSide: "Domestic Training Programmes",
  },
  {
    leftSide: "Venue",
    rightSide:
      "V.V. Giri National Labour Institute Sector , 24, Noida – 201 301 Distt. Gautam Budh Nagar Uttar Pradesh",
  },
  {
    leftSide: "Course Director",
    rightSide: "Dr. Otojit Kshetrimayum",
  },
  {
    leftSide: "Download Course Info",
    rightSide:
      "Download Course Info (Understanding Labour Market and Employment Collaboration with NICS, August 29- September 02, 2022.pdf)",
  },
  {
    leftSide: "File Size",
    rightSide: "1.51 MB",
  },
];

const arrayOfObj6 = [
  {
    leftSide: "Course Title",
    rightSide:
      "Training Programme on Emerging Perspectives on Gender, Labour Codes and International Labour Standards",
  },
  {
    leftSide: "Course Aim",
    rightSide:
      "The programme endeavours to sensitize the participants about the inequalities prevalent in the world of work and the challenges faced by women in the labour market. It would also enable the participants in developing an understanding about the existing legal instruments and international labour standards for ensuring equality at workplace and promoting workers’ rights based on a model of social justice. The programme aims to address the larger questions on intersection of paid work and unpaid unpaid/care work and recognition of care as a right that need to be incorporated into the policy framework for facilitating women’s employment and sustenance in the labour market.The programme would also provide an orientation on the new labour codes and its implications on the labour market.",
  },
  {
    leftSide: "Course Objective",
    rightSide:
      "To provide an overview of labour codes, gender and the labour market; To analyse gender inequalities and discriminatory practices with regard to access to labour market, wages, working conditions, employment security, etc. To understand the gendered vulnerabilities and intersection of paid work and unpaid/care work, challenges in reconciling paid work and family responsibilities that leads women to precarious forms of employment that remain outside the purview of available legal and policy responses; To sensitize the participants about the existing legal instruments and national polices on promotion of gender equality at the workplace; To understand the various international labour standards/international instruments and good practices on gender equality; To provide an insight into gender dimensions in labour legislations. To discuss the key features of the labour codes in India and its implication on the labour market.",
  },
  {
    leftSide: "Course Profile",
    rightSide:
      "Gender and labour laws, gender inequalities in the labour market, national legislations and policies on promoting workplace equality, international instruments/international labour standards on gender equality.",
  },
  {
    leftSide: "Participation Level",
    rightSide:
      "Government Officials, Union Leaders from Central Trade Unions, Researchers and Civil Society representatives.",
  },
  {
    leftSide: "Faculty",
    rightSide: "Dr. Ellina Samantroy",
  },
  {
    leftSide: "Date",
    rightSide: "From 30-08-2022 to 02-09-2022",
  },
  {
    leftSide: "Training Details",
    rightSide: "Domestic Training Programmes",
  },
  {
    leftSide: "Venue",
    rightSide:
      "V.V. Giri National Labour Institute Sector , 24, Noida – 201 301 Distt. Gautam Budh Nagar Uttar Pradesh",
  },
  {
    leftSide: "Course Director",
    rightSide: "Dr. Ellina Samantroy Jena",
  },
  {
    leftSide: "Download Course Info",
    rightSide:
      "Download Course Info (Emerging Perspectives on Gender, Labour Codes and International Labour Standards, August 30-02 September, 2022.pdf)",
  },
  {
    leftSide: "File Size",
    rightSide: "3.46 MB",
  },
];

const trainingProgramPreviousMonth = [
  {
    h2: "Capacity Building Programme on Labour Codes and Rules",
    h3: "Dr. Manoj Jatav",
    p1: "Duration :",
    p2: "27/06/2022 to 01/07/2022",
    p3: "The programme aims at enhancing the understanding of the participants on the process of labour reforms in India. It would orient the participants to have an understanding on the key features of various labour codes.",
  },
  {
    h2: "Training Programme on Future of Work and Social Protection of Workers",
    h3: "Dr. Ruma Ghosh",
    p1: "Duration :",
    p2: "04/07/2022 to 08/07/2022",
    p3: "The growing diversification of work arrangements has become a distinct feature of today’s labour markets. Over the years it has been seen that automation and digitalization have transformed several traditional forms of employment and also led to the emergence of several new forms of employment, such as the ‘platform’ economy. As the world of work continues to evolve, shaped by global trends such as digitalisation, automation and globalisation, as well as socio-demographic changes, social protection systems will need to adapt to changing contexts and demands. While some emerging work and employment arrangements may provide greater flexibility for workers and employers, they may also lead to significant gaps in social protection coverage. It is therefore necessary to strengthen and adapt a social protection system that would address the gaps and changes. A strong social protection system plays a key role in preventing poverty, reducing inequality, enhancing income security and enabling workers and their families to better navigate work and life transitions..",
  },
  {
    h2: "Training Programme on Gender and Labour Issues",
    h3: "Dr. Ellina Samantroy Jena",
    p1: "Duration :",
    p2: "04/07/2022 to 08/07/2022",
    p3: "The programme aims at strengthening the understanding of participants on gender and labour issues.The programme would acquaint the participants with the various inequalities prevalent in the labour market and also enable them to develop an understanding about the challenges existing in the labour market.",
  },
  {
    h2: "Online Training Programme on Abolition of Child Labour and Bonded-Role of Police Personnel",
    h3: "Dr. Shashi Bala",
    p1: "Duration :",
    p2: "04/07/2022 to 06/07/2022",
    p3: "The programme aim at addressing and strengthening the understanding to build critical knowledge and capacity for accelerating progress against child Labor and, where relevant and forced labour.",
  },
  {
    h2: "Capacity Building Programme on Code on Wages, 2019",
    h3: "Dr. Anoop K. Satpathy",
    p1: "Duration :",
    p2: "04/07/2022 to 06/07/2022",
    p3: "The programme aims at developing capacity of all the stake-holders to understand the changes in the wage code and its implications on workers and businesses.",
  },
  {
    h2: "Training Programme on Fundamentals of Labour Codes",
    h3: "Dr. Sanjay Upadhyaya",
    p1: "Duration :",
    p2: "04/07/2022 to 07/07/2022",
    p3: "The programme aims at equipping the participants with the context of labour legislation and recent Labour jurisprudence.",
  },
  {
    h2: "Capacity Building Programme on Labour Codes for Enhancing Workers knowledge and skills for their Development",
    h3: "Dr. Shashi Bala",
    p1: "Duration :",
    p2: "11/07/2022 to 15/07/2022",
    p3: "To familiarize young students with various Labour Issues and their capacities to contribute in their academic and professional pursuits.",
  },
  {
    h2: "ONLINE TRAINING PROGRAMME ON FACILITATING GENDER ENVIRONMENT: A BEHAVIOURAL APPROACH FOR POLICE PERSONNEL",
    h3: "Dr. Shashi Bala",
    p1: "Duration :",
    p2: "11/07/2022 to 15/07/2022",
    p3: "The programme aims at addressing and strengthening the understanding of Gender sensitive environment with following major objectives.",
  },
  {
    h2: "Training Programme on Enhancing Leadership Skills of Sanitation Workers",
    h3: "Dr. Ramya Ranjan Patel",
    p1: "Duration :",
    p2: "11/07/2022 to 15/07/2022",
    p3: "To enhance organisation building capacity of activists of saphai karmacharis unions.",
  },
  {
    h2: "Online Training Programme on Understanding Labour Codes and Rules",
    h3: "Dr. Shashi Bala",
    p1: "Duration :",
    p2: "18/07/2022 to 22/07/2022",
    p3: "The programme aims at enhancing the understanding of the participants on the process of labour reforms in India. It would orient the participants to have an understanding on the key features of various labour codes.",
  },
];

const trainingProgramCurrentMonth = [
  {
    h2: "Training Programme On Good Governance for Effectiveness of Welfare and Development Measures",
    h3: "Mr. Priyadarsan Amitav Khuntia",
    p1: "Duration :",
    p2: "01/08/2022 to 05/08/2022",
    p3: "This programme aims at strengthening the knowledge of the participants with good governance, its elements and the various development/welfare initiatives and discuss the issues and mechanisms for the effective delivery to working mass.",
  },
  {
    h2: "Training programme on Labour Codes in India",
    h3: "Dr. Manoj Jatav",
    p1: "Duration :",
    p2: "01/08/2022 to 05/08/2022",
    p3: "The programme aims at enhancing the understanding of the participants on the process of labour reforms in India. It would orient the participants to have an understanding on the key features of various labour codes.",
  },
  {
    h2: "Online Training Programme on Gender Responsive Budgeting",
    h3: "Dr. Shashi Bala",
    p1: "Duration :",
    p2: "01/08/2022 to 05/08/2022",
    p3: "The programme aims to orient the participants about gender budget initiatives which have the potential of contributing to the promotion of gender equality.",
  },
  {
    h2: "Training Programme on Gender, Poverty and Employment",
    h3: "Dr. Shashi Bala",
    p1: "Duration :",
    p2: "08/08/2022 to 12/08/2022",
    p3: "The programme aims to discuss how working women and men can satisfactorily benefit from the employment opportunities, working conditions, etc. which have a direct impact on the productivity of the workplace and welfare of the families.",
  },
  {
    h2: "Training Programme on Wage Policies in India: Special reference to Code on Wages 2019",
    h3: "Dr. Dhanya M B",
    p1: "Duration :",
    p2: "09/08/2022 to 12/08/2022",
    p3: "Recent years the wage code and the wage rules have introduced several aspects of reform related to the minimum wage, payment of wages and equal remuneration system of the country. Hence, it is important to understand the changes in the wage code and its implications on workers and businesses.",
  },
  {
    h2: "Training Programme on Responsible Business Conduct and Industrial Relations",
    h3: "Dr. Otojit Kshetrimayum",
    p1: "Duration :",
    p2: "16/08/2022 to 18/08/2022",
    p3: "To examine Corporate Social Responsibility from industrial relations perspective.",
  },
  {
    h2: "Online collaborative Training Programme On Enhancing Capacity in Preventing Sexual Harassment at the Workplace",
    h3: "Dr. Shashi Bala",
    p1: "Duration :",
    p2: "16/08/2022 to 18/08/2022",
    p3: "The programme aims at enhancing the perceptiveof the parity and equity in preventing sexual harassment at the workplaces for enhancing healthy productivity in the world of work.",
  },
  {
    h2: "Leadership Development Programme for Women Officials",
    h3: "Dr. Dhanya M B",
    p1: "Duration :",
    p2: "22/08/2022 to 24/08/2022",
    p3: "This training programme on ‘leadership development programme for women officials’ will train the participants to discover how to adjust your management style through leadership and how to manage people. Leadership skill practice uses role plays, exercise and practice sessions; using leadership models along with interactive activities results to achieve team success and a well respected manager.",
  },
  {
    h2: "Training Programme on Understanding New Labour Codes and Rules from North Eastern States",
    h3: "Dr. Shashi Bala",
    p1: "Duration :",
    p2: "22/08/2022 to 26/08/2022",
    p3: "The programme aims at equipping the participants with the context of recent Labour reforms and labour codes.",
  },
  {
    h2: "Training Programme on Pension Schemes for the Organised and Unorganised Workers",
    h3: "Dr. Ruma Ghosh",
    p1: "Duration :",
    p2: "22/08/2022 to 24/08/2022",
    p3: "The programme aims at strengthening the understanding of participants on the pension schemes for workers in the organized and the unorganized sector. The programme would acquaint the participants with the various inequalities prevalent in the labour market and also enable them to develop an understanding about the challenges existing in the labour market.",
  },
];

const trainingProgramNextMonth = [
  {
    h2: "Training Programme on Enhancing Leadership Skills of Fisheries Workers",
    h3: "Dr. Ramya Ranjan Patel",
    p1: "Duration :",
    p2: "29/08/2022 to 02/09/2022",
    p3: "To enhance organisation building capacity of activists of fishery workers’ unions.",
  },
  {
    h2: "Training Programme on Understanding Labour Market and Employment Opportunities for North Eastern States",
    h3: "Dr. Otojit Kshetrimayum",
    p1: "Duration :",
    p2: "29/08/2022 to 02/09/2022",
    p3: "To make the Employment Officers of North Eastern States and Government Officials who are working in the area of Employment and skill development of North Eastern States, aware of the Labour Market trends, Employment opportunities and important role being played by National Career Service project in this area.",
  },
  {
    h2: "Training Programme on Emerging Perspectives on Gender, Labour Codes and International Labour Standards",
    h3: "Dr. Ellina Samantroy Jena",
    p1: "Duration :",
    p2: "30/08/2022 to 02/09/2022",
    p3: "The programme endeavours to sensitize the participants about the inequalities prevalent in the world of work and the challenges faced by women in the labour market. It would also enable the participants in developing an understanding about the existing legal instruments and international labour standards for ensuring equality at workplace and promoting workers’ rights based on a model of social justice. The programme aims to address the larger questions on intersection of paid work and unpaid unpaid/care work and recognition of care as a right that need to be incorporated into the policy framework for facilitating women’s employment and sustenance in the labour market.The programme would also provide an orientation on the new labour codes and its implications on the labour market.",
  },
  {
    h2: "Training Programme on Laws Relating to Equality and Empowerment of Women",
    h3: "Dr. Shashi Bala",
    p1: "Duration :",
    p2: "05/09/2022 to 09/09/2022",
    p3: "The programme aims at enhancing enforcement competence and skills of Enforcement Officers pertaining to women employees.",
  },
  {
    h2: "Training Programme on Informality, New Forms of Work and Social Protection",
    h3: "Dr. Ruma Ghosh",
    p1: "Duration :",
    p2: "05/09/2022 to 09/09/2022",
    p3: "The programme aims to sensitize the participants about the changing nature of employment, the inequalities arising out of these changes and the need for social protection. It would enable participants to understand the international standards and existing legal instruments as well as some global best practices in order to promote workers’ rights, based on a model of social justice.",
  },
  {
    h2: "Online Course on Research Methods in Labour Studies",
    h3: "Mr. Priyadarsan Amitav Khuntia",
    p1: "Duration :",
    p2: "05/09/2022 to 09/09/2022",
    p3: "The course aims at acquainting the participants with the emerging labour issues for research in an interdisciplinary framework, strengthening their knowledge with various methods used in labour research, thereby enabling them to contribute further in the field of labour research.",
  },
  {
    h2: "TRAINING PROGRAMME ON RURAL EMPLOYMENT AVENUES FOR INCLUSIVE DEVELOPMENT",
    h3: "Dr. Ramya Ranjan Patel",
    p1: "Duration :",
    p2: "12/09/2022 to 16/09/2022",
    p3: "Historically, there is a strong urban-bias in the developmental strategy of the third world. The growth (economic) trickle-down still is the predominant approach of development. The result has been concentration poverty in the rural areas. India is no exception to it. The unprecedented migration crisis indicates towards sever employment challenges in the rural sector. The potential of rural workers without getting sufficient decent employment opportunities end up with forced migration very often resulting in distress. Creation of decent rural employment opportunities provides a crucial livelihood options and an alternative to the rural workers other than taking the root of distressed circular migration. Focus must be shifted to find and create decent employment avenues in the rural areas.",
  },
  {
    h2: "Orientation Programme on Key Features of various Labour Codes",
    h3: "Dr. Sanjay Upadhyaya",
    p1: "Duration :",
    p2: "12/09/2022 to 15/09/2022",
    p3: "The programme aims at equipping the participants with the broad scheme and key features of various labour codes.",
  },
  {
    h2: "Training Programme on Gender, Decent Work and Social Protection",
    h3: "Dr. Ruma Ghosh",
    p1: "Duration :",
    p2: "19/09/2022 to 23/09/2022",
    p3: "The programme aims to sensitize the social partners that gender equality approach to social protection policies, strategies and programme is key to enabling equal access to protection from extreme poverty, vulnerability and social exclusion throughout the life cycle. The programme also aims to enhance understanding of the linkages between informal economy and the challenges of safety and health issues at workplace with special focus on the challenges faced by women in the labour market.",
  },
  {
    h2: "Training Programme on Understanding Labour Codes and Rules",
    h3: "Dr. Shashi Bala",
    p1: "Duration :",
    p2: "19/09/2022 to 23/09/2022",
    p3: "The programme aims at enhancing the understanding of the participants on the process of labour reforms in India. It would orient the participants to have an understanding on the key features of various labour codes.",
  },
];

const trainingProgramArchive = [
  {
    h2: "Promoting Skill Development for Women Workers for North Eastern States",
    h3: "Mr. Priyadarsan Amitav Khuntia",
    p1: "Duration :",
    p2: "27/02/2016 to 03/03/2016",
    p3: "The programme aims at putting increasing emphasis on enhancing the skills of workers in general and women workers in particular for enhancing employability and to facilitate for decent employment",
  },
  {
    h2: "Leadership Development Programme for rural Trade union Leaders",
    h3: "Dr. Ellina Samantroy Jena, Dr. Sanjay Upadhyaya, Mr. Priyadarsan Amitav Khuntia",
    p1: "Duration :",
    p2: "04/04/2016 to 08/04/2016",
    p3: "The programme aims at empowering the emerging trade union leaders from rural unorganised sector",
  },
  {
    h2: "Social Security for Workers in the unorganised Sector",
    h3: "Dr. Ruma Ghosh",
    p1: "Duration :",
    p2: "04/04/2016 to 08/04/2016",
    p3: "The programme aims to develop an understanding of the need for social security for workers in the unorganized sector.",
  },
  {
    h2: "Laws relating to Equality & Empowerment of Women",
    h3: "Dr. Shashi Bala",
    p1: "Duration :",
    p2: "11/04/2016 to 15/04/2016",
    p3: "The programme aims at enhancing enforcement competence and skills of Enforcement Officers pertaining to women employees.",
  },
  {
    h2: "Empowering Trade union Leaders",
    h3: "",
    p1: "Duration :",
    p2: "11/04/2016 to 16/04/2016",
    p3: "The programme aims at empowering of trade union leaders by enhancing their knowledge skill base.",
  },
  {
    h2: "Leadership Development Programme: Media Sector",
    h3: "Mr. Priyadarsan Amitav Khuntia",
    p1: "Duration :",
    p2: "18/04/2016 to 22/04/2016",
    p3: "To develop the leadership of working journalists and media persons to address effectively the emerging issues related to work and workplace and contribute for the development of media sector and also the overall all development of working mass",
  },
  {
    h2: "Training of Trainers Programme for rural Educators",
    h3: "",
    p1: "Duration :",
    p2: "18/04/2016 to 22/04/2016",
    p3: "The programme aims at empowering Rural organizers from Central Trade Unions",
  },
  {
    h2: "Labour administration in a Globalised Economy: New Developments and approaches",
    h3: "",
    p1: "Duration :",
    p2: "25/04/2016 to 28/04/2016",
    p3: "This programme aims to address the challenges confronting the labour administration in the context of transformations in the world of work. It would specifically focus on innovations being evolved and adopted to ensure that labour administration addresses the requirements of all categories of workers, particularly those in the informal economy.",
  },
  {
    h2: "Course on research Methods in Labour Studies",
    h3: "Mr. Priyadarsan Amitav Khuntia",
    p1: "Duration :",
    p2: "25/04/2016 to 06/05/2016",
    p3: "The course aims at acquainting the participants with the emerging labour issues for research in an interdisciplinary framework, strengthening their knowledge with various methods used in labour research, thereby enabling them to contribute further in the field of labour research.",
  },
  {
    h2: "Enhancing Leadership Skills: Transport Workers",
    h3: "Dr. Shashi Bala",
    p1: "Duration :",
    p2: "25/04/2016 to 29/04/2016",
    p3: "To enhance organisation building capacity of activists of transport workers’ unions",
  },
];

const Current__Training__Programmes = () => {
  const classes = useStyles();

  const [
    stateForCurrent__Training__Programmes__side__menu,
    setStateForCurrent__Training__Programmes__side__menu,
  ] = useState();

  const [stateForTraining__programmes, setStateForTraining__programmes] =
    useState(0);

  return (
    <>
      <VvgnliMainMenu />
      <div className="about">
        <div className="about__container">
          {console.log("about us section")}
          <TrainingSubmenu />
          <div className="Current__Training__Programmes__inner__containers">
            <div className="Current__Training__Programmes__left__container">
              <div className="Current__Training__Programmes__left">
                <ul>
                  {Current__Training__Programmes__side__menu.map((el, idx) => {
                    return (
                      <>
                        {console.log(idx)}
                        <li
                          onClick={() => {
                            setStateForCurrent__Training__Programmes__side__menu(
                              idx
                            );
                          }}
                        >
                          {el}{" "}
                        </li>
                        <hr />
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="Current__Training__Programmes__right__container">
              <div className="Current__Training__Programmes__right">
                {stateForCurrent__Training__Programmes__side__menu === 0 ? (
                  <>
                    <div>
                      <h1>
                        Training Programme on Understanding New Labour Codes and
                        Rules from North Eastern States
                      </h1>
                      <hr className="line" />
                      <button>feedback</button>
                      <div>
                        <h3>Course Details:</h3>
                        <table>
                          {arrayOfObj1.map((el) => {
                            return (
                              <>
                                <tr>
                                  <td> {el.leftSide} </td>
                                  <td> {el.rightSide} </td>
                                </tr>
                              </>
                            );
                          })}
                        </table>
                      </div>
                    </div>
                  </>
                ) : stateForCurrent__Training__Programmes__side__menu === 1 ? (
                  <>
                    <div>
                      <h1>
                        Leadership Development Programme for Women Officials
                      </h1>
                      <hr className="line" />
                      <button>feedback</button>
                      <div>
                        <h3>Course Details:</h3>
                        <table>
                          {arrayOfObj2.map((el) => {
                            return (
                              <>
                                <tr>
                                  <td> {el.leftSide} </td>
                                  <td> {el.rightSide} </td>
                                </tr>
                              </>
                            );
                          })}
                        </table>
                      </div>
                    </div>
                  </>
                ) : stateForCurrent__Training__Programmes__side__menu === 2 ? (
                  <>
                    <div>
                      <h1>
                        Training Programme on Pension Schemes for the Organised
                        and Unorganised Workers
                      </h1>
                      <hr className="line" />
                      <button>feedback</button>
                      <div>
                        <h3>Course Details:</h3>
                        <table>
                          {arrayOfObj3.map((el) => {
                            return (
                              <>
                                <tr>
                                  <td> {el.leftSide} </td>
                                  <td> {el.rightSide} </td>
                                </tr>
                              </>
                            );
                          })}
                        </table>
                      </div>
                    </div>
                  </>
                ) : stateForCurrent__Training__Programmes__side__menu === 3 ? (
                  <>
                    <div>
                      <h1>
                        Training Programme on Enhancing Leadership Skills of
                        Fisheries Workers
                      </h1>
                      <hr className="line" />
                      <button>feedback</button>
                      <div>
                        <h3>Course Details:</h3>
                        <table>
                          {arrayOfObj4.map((el) => {
                            return (
                              <>
                                <tr>
                                  <td> {el.leftSide} </td>
                                  <td> {el.rightSide} </td>
                                </tr>
                              </>
                            );
                          })}
                        </table>
                      </div>
                    </div>
                  </>
                ) : stateForCurrent__Training__Programmes__side__menu === 4 ? (
                  <>
                    <div>
                      <h1>
                        Training Programme on Understanding Labour Market and
                        Employment Opportunities for North Eastern States
                      </h1>
                      <hr className="line" />
                      <button>feedback</button>
                      <div>
                        <h3>Course Details:</h3>
                        <table>
                          {arrayOfObj5.map((el) => {
                            return (
                              <>
                                <tr>
                                  <td> {el.leftSide} </td>
                                  <td> {el.rightSide} </td>
                                </tr>
                              </>
                            );
                          })}
                        </table>
                      </div>
                    </div>
                  </>
                ) : stateForCurrent__Training__Programmes__side__menu === 5 ? (
                  <>
                    <div>
                      <h1>
                        Training Programme on Emerging Perspectives on Gender,
                        Labour Codes and International Labour Standards
                      </h1>
                      <hr className="line" />
                      <button>feedback</button>
                      <div>
                        <h3>Course Details:</h3>
                        <table>
                          {arrayOfObj6.map((el) => {
                            return (
                              <>
                                <tr>
                                  <td> {el.leftSide} </td>
                                  <td> {el.rightSide} </td>
                                </tr>
                              </>
                            );
                          })}
                        </table>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="current__training__programmes__main__rendering__container">
                      <h1>Training Program</h1>
                      <hr />
                      <div className="current__training__programmes__main__rendering">
                        <div className="current__training__programmes__main__rendering__upper__container">
                          <div className="current__training__programmes__main__rendering__upper__container__buttons__container">
                            {current__training__programmes__main__rendering__upper__container__buttons__container__button__array.map(
                              (el, idx) => {
                                return (
                                  <>
                                    <Button
                                      className="current__training__programmes__main__rendering__upper__container__buttons__container__button"
                                      variant="contained"
                                      color="primary"
                                      onClick={() => {
                                        setStateForTraining__programmes(idx);
                                      }}
                                    >
                                      {el}
                                    </Button>
                                  </>
                                );
                              }
                            )}
                          </div>
                        </div>
                        <div className="current__training__programmes__main__rendering__lower__container">
                          {stateForTraining__programmes === 0 ? (
                            <>
                              <div>
                                <h3>Ongoing Trainings: </h3>
                                <div>
                                  <div>
                                    <div>
                                      <h2>
                                        Training Programme on Responsible
                                        Business Conduct and Industrial
                                        Relations
                                      </h2>
                                      <h3>Dr. Otojit Kshetrimayum</h3>
                                      <p>Duration :</p>
                                      <p>16/08/2022 to 18/08/2022</p>
                                      <p>
                                        To examine Corporate Social
                                        Responsibility from industrial relations
                                        perspective.
                                      </p>
                                    </div>
                                    <div>
                                      <h2>
                                        Online collaborative Training Programme
                                        On Enhancing Capacity in Preventing
                                        Sexual Harassment at the Workplace
                                      </h2>
                                      <h3>Dr. Shashi Bala</h3>
                                      <p>Duration :</p>
                                      <p>16/08/2022 to 18/08/2022</p>
                                      <p>
                                        The programme aims at enhancing the
                                        perceptiveof the parity and equity in
                                        preventing sexual harassment at the
                                        workplaces for enhancing healthy
                                        productivity in the world of work.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : stateForTraining__programmes === 1 ? (
                            <>
                              <div>
                                <h3>Previous month trainings:</h3>
                                <div>
                                  <div>
                                    <div>
                                      {trainingProgramPreviousMonth.map(
                                        (el) => {
                                          return (
                                            <div>
                                              <h2>{el.h2}</h2>
                                              <h3>{el.h3}</h3>
                                              <p>{el.p1}</p>
                                              <p>{el.p2}</p>
                                              <p>{el.p3}</p>
                                            </div>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : stateForTraining__programmes === 2 ? (
                            <>
                              <div>
                                <h3>
                                  Training schedules for the current month:
                                </h3>
                                <div>
                                  <div>
                                    <div>
                                      {trainingProgramCurrentMonth.map((el) => {
                                        return (
                                          <div>
                                            <h2>{el.h2}</h2>
                                            <h3>{el.h3}</h3>
                                            <p>{el.p1}</p>
                                            <p>{el.p2}</p>
                                            <p>{el.p3}</p>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : stateForTraining__programmes === 3 ? (
                            <>
                              <div>
                                <h3>Next month training schedules:</h3>
                                <div>
                                  <div>
                                    <div>
                                      {trainingProgramNextMonth.map((el) => {
                                        return (
                                          <div>
                                            <h2>{el.h2}</h2>
                                            <h3>{el.h3}</h3>
                                            <p>{el.p1}</p>
                                            <p>{el.p2}</p>
                                            <p>{el.p3}</p>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : stateForTraining__programmes === 4 ? (
                            4
                          ) : stateForTraining__programmes === 5 ? (
                            <>
                              <div>
                                <h3>All training schedule are listed here:</h3>
                                <div>
                                  <div>
                                    <div>
                                      {trainingProgramArchive.map((el) => {
                                        return (
                                          <div>
                                            <h2>{el.h2}</h2>
                                            <h3>{el.h3}</h3>
                                            <p>{el.p1}</p>
                                            <p>{el.p2}</p>
                                            <p>{el.p3}</p>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : stateForTraining__programmes === 6 ? (
                            6
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Current__Training__Programmes;