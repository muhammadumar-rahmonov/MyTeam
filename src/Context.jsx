import { createContext } from "react";
export const MyTeamContext = createContext(null);

import MYImg from "./assets/Group 11.svg";
import MYImg2 from "./assets/Group 12.svg";
import MYImg3 from "./assets/Group 13.svg";
import MYImg4 from "./assets/Oval@2x.png";
import MYImg5 from "./assets/Oval Copy 5.png";
import MYImg6 from "./assets/Oval Copy 6.png";
import MYImg9 from "./assets/Oval.png";
import MYimg10 from "./assets/Oval (1).png";
import MYimg11 from "./assets/Oval (2).png";
import MYimg12 from "./assets/Oval (3).png";
import MYimg13 from "./assets/Oval (4).png";
import MYimg14 from "./assets/Oval (5).png";
import MYimg15 from "./assets/Group 16.png";
import { DeliveryVector, HeaderSVG, Social } from "./SVGs";
import MYimg16 from "./assets/Object (2).svg";
import MYimg17 from "./assets/jakarta.svg";
import MYimg18 from "./assets/Object.svg";
import MYimg19 from "./assets/Object (1).svg";
import MYimg20 from "./assets/gadgets-now.svg";

const MySVG = <DeliveryVector />;
const MySocial = <Social />;
const svg = <HeaderSVG />;

const img5 = (
  <img src={MYImg4} className="inline-block" alt="ava" width="62" height="62" />
);
const img6 = (
  <img src={MYImg5} className="inline-block" alt="ava" width="62" height="62" />
);
const img7 = (
  <img src={MYImg6} className="inline-block" alt="ava" width="62" height="62" />
);

const MYIMG = <img src={MYImg9} alt="ava" />;
const MYIMG2 = <img src={MYimg10} alt="ava" />;
const MYIMG3 = <img src={MYimg11} alt="ava" />;
const MYIMG4 = <img src={MYimg12} alt="ava" />;
const MYIMG5 = <img src={MYimg13} alt="ava" />;
const MYIMG6 = <img src={MYimg14} alt="ava" />;
const MYIMG7 = <img className="mb-9" src={MYimg15} alt="icon" />;
const MYIMG8 = <img className="responsive-img" src={MYimg16} alt="text-svg" />;
const MYIMG9 = <img className="responsive-img" src={MYimg17} alt="text-svg" />;
const MYIMG10 = <img className="responsive-img" src={MYimg18} alt="text-svg" />;
const MYIMG11 = <img className="responsive-img" src={MYimg19} alt="text-svg" />;
const MYIMG12 = <img className="responsive-img" src={MYimg20} alt="text-svg" />;

const v2 = <img src="./src/assets/Group 8 (1).svg" alt="ava" />;

const customObj = [
  {
    id: 1,
    img: MYImg,
    title: "Experienced Individuals",
    about:
      "Our network is made up of highly experienced professionals who are passionate about what they do.",
  },
  {
    id: 2,
    img: MYImg2,
    title: "Easy to Implement",
    about:
      "Our processes have been refined over years of implementation meaning our teams always deliver.",
  },
  {
    id: 3,
    img: MYImg3,
    title: "Enhanced Productivity",
    about:
      "Our customized platform with in-built analytics helps you manage your distributed teams.",
  },
];

const customObj2 = [
  {
    id: 1,
    about:
      " “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
    title: "Kady Baker",
    name: "Product Manager at Bookmark",
    img: img5,
    v: MySVG,
  },
  {
    id: 2,
    about:
      "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!” ",
    title: "Aiysha Reese",
    name: "Founder of Manage",
    img: img6,
    v: MySVG,
  },
  {
    id: 3,
    about:
      " “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
    title: "Arthur Clarke",
    name: "Co-founder of MyPhysio",
    img: img7,
    v: MySVG,
  },
];

const btnSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 0H6V6H0V10H6V16H10V10H16V6H10V0Z"
      fill="#012F34"
    />
  </svg>
);

const boxes = [
  {
    id: 1,
    img: MYIMG,
    title: "Nikita Marks",
    name: "Founder & CEO",
  },
  {
    id: 2,
    img: MYIMG2,
    title: "Cristian Duncan",
    name: "Co-founder & COO",
  },
  {
    id: 3,
    img: MYIMG3,
    title: "Cruz Hamer",
    name: "Co-founder & CTO",
  },
  {
    id: 4,
    img: MYIMG4,
    title: "Drake Heaton",
    name: "Business Development Lead",
  },
  {
    id: 5,
    img: MYIMG5,
    title: "Griffin Wise",
    name: "Lead Marketing",
  },
  {
    id: 6,
    img: MYIMG6,
    title: "Aden Allan",
    name: "Head of Talent",
  },
];
const TextSVGs = [
  {
    id: 1,
    img: MYIMG8,
  },
  {
    id: 2,
    img: MYIMG9,
  },
  {
    id: 3,
    img: MYIMG10,
  },
  {
    id: 4,
    img: MYIMG11,
  },
  {
    id: 5,
    img: MYIMG12,
  },
];

const contextValue = {
  svg,
  customObj,
  customObj2,
  v2,
  MySocial,
  boxes,
  btnSvg,
  MYIMG7,
  TextSVGs,
};

const MyTeamProvider = ({ children }) => {
  return (
    <MyTeamContext.Provider value={contextValue}>
      {children}
    </MyTeamContext.Provider>
  );
};

export default MyTeamProvider;
