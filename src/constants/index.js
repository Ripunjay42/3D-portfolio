import {
  front,
  back,
  devops,
  comp,


  jobbox,
  tictac,
  alumni,
  facemask,
  rain,
  portfolio,

  c,
  cpp,
  javascript,
  python,
  html,
  css,
  reactjs,
  next,
  tailwind,
  bootstrap,
  flask,
  django,
  express,
  nodejs,
  mysql,
  postgresql,
  sqlite,
  linux,
  bash,
  git,
  docker,

  gcp,
  dsa,
  javacer,
  pythoncer,
  nse1,
  nse2,
  cer,

  gdsc,

} from "../assets";

import { FaUser, FaProjectDiagram, FaLaptopCode, FaEnvelope } from 'react-icons/fa';



export const about = "I am a tech enthusiast and problem solver with a passion for programming and design.\n"+
                      "I love to create and build things that are meaningful and impactful.\n\n"+

                      "I was born and raised in Assam.\n"+
                      "I have completed my graduation in B.sc(Hons)CBCS Computer Science from L.C.B College(Guwahati)\n"+
                      "and I am currently pursuing Master of Computer Applications(MCA) at Tezpur University.\n\n"+
                      
                      "I started my journey of programming by learning C++ as a language which created my interest in Problem Solving.\n"+
                      "Currently I am trying competitive programming and solving problems on LeetCode.."

export const navLinks = [
  {
    id: "about",
    title: "About",
    icon: FaUser,
  },
  {
    id: "work",
    title: "Projects",
    icon: FaProjectDiagram,
  },
  {
    id: "tech",
    title: "Tech",
    icon: FaLaptopCode,
  },
  {
    id: "contact",
    title: "Contact",
    icon: FaEnvelope,
  },
];

const services = [
  {
    title: "Frontend",
    icon: front,
  },
  {
    title: "Backend",
    icon: back,
  },
  {
    title: "Devops",
    icon: devops,
  },
  {
    title: "SDE",
    icon: comp,
  },
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "CPP",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
      name: "Tailwind CSS",
      icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },

  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Mysql",
    icon: mysql,
  },
  {
      name: "Sqlite3",
    icon: sqlite,
  },
  
 
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Core Development Member",
    company_name: "GDSC Tezpur University",
    icon: gdsc,
    iconBg: "#013247",
    date: "Aug 2023 - June 2024",
    points: [
      "Participated in a team-based project, working with fellow developers to design and implement the GDSC Tezpur University website,",
      "Applied proficiency in front-end technologies (such as HTML, CSS, JavaScript, React)",
      "Utilized Git for version control, managing code changes, and contributing to project documentation"
    ],
  },
];

const certifications = [
  {
    name:
      "Google cloud",
    image: gcp,
    icon: cer,
    url: 'https://www.cloudskillsboost.google/public_profiles/b82cdb38-86d0-4db0-a010-a4808ea5b9bc'
  },
  {
    name:
      "DSA",
    image: dsa,
    icon: cer,
    url: 'https://drive.google.com/file/d/1eTIk37rO4Qt-hTHwJFCrpE-YK96dvtlC/view'
  },
  {
    name:
    "Java",
    image: javacer,
    icon: cer,
    url: 'https://drive.google.com/file/d/19_4WzlEAfSTFm8XYCLM97inMzzD-eSpp/view'
  },
  {
    name:
      "Python",
    image: pythoncer,
    icon: cer,
    url: 'https://drive.google.com/file/d/1ZXYjT2AezXiGNsiFlMVXdD_-PRHiEmxw/view'
  },
  {
    name:
      "NSE 1",
    image: nse1,
    icon: cer,
    url: 'https://drive.google.com/file/d/1-BilMhbbdWqIx5LC8KzbUwQRg9sZIW8M/view'
  },
  {
    name:
      "NSE 2",
    image: nse2,
    icon: cer,
    url: 'https://drive.google.com/file/d/1BXRIQ-Sr3PAYTVd-mRp3KPwZS_hj3ciN/view'
  },
];

const projects = [
  {
    name: "JOBBOX:Full-Stack Job Platform",
    description:
      `job search platform with Enhanced performance through backend and client-side pagination. 
      Implemented efficient data prefetching strategy for improved user experience and faster page loads.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "yellow-text-gradient",
      },
    ],
    image: jobbox,
    source_code_link: "https://github.com/Ripunjay42/JobBox.git",
    website_link: 'https://jobbox-gules.vercel.app/',
  },
  {
    name: "TicTacToe with chat functionality",
    description:
      "Multiplayer Tic Tac Toe game with authentication and real-time chat functionality. Players can chat in real-time while playing the game using the Stream API for messaging.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "StreamChat",
        color: "blue-text-gradient",
      },
    ],
    image: tictac,
    source_code_link: "https://github.com/Ripunjay42/Multiplayer_TicTacToe.git",
    website_link: "https://tictactoe-multiplayer-silk.vercel.app/",
  },
  {
    name: "Alumni Information System ",
    description:
      "A web application that allows alumni to register, and an admin to review, update, and delete users. Additionally, admin can add events, and general users can visit the verified alumni.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
    ],
    image: alumni,
    source_code_link: "https://github.com/Ripunjay42/alumni",
    website_link: "https://alumni-info.vercel.app/",  
  },
  {
    name: "Face mask detector",
    description:
      "The project is called the Face Mask Detection where it uses facial and object recognition to accurately distinguish those with or without masks. Employs TensorFlow and OpenCV to detect face masks.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite3",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: facemask,
    source_code_link: "https://github.com/Ripunjay42/Facemask_detector",
    website_link: "https://facemask-detector8.onrender.com/",  
  },
  {
    name: "Rainfall prediction app",
    description:
      "Rainfall predictor is a web app which has a Machine Learning model running at the back. The purpose of developing this app is to predict whether it will rainfall or not.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "sqlite3",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: rain,
    source_code_link: "https://github.com/Ripunjay42/Rainfall-prediction",
    website_link: "https://rainfall-prediction8.onrender.com/",  
  },
  {
    name: "Personal portfolio",
    description:
      "Developed and Designed a portfolio website as a self learning project, as learning one subject or skill at a time is always the best option.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://ripunjay-choudhury.vercel.app/",
    website_link: "https://ripunjay-choudhury.vercel.app/",  
  },
];

export { services, technologies, experiences, certifications, projects };
