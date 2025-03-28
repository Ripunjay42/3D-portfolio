import {
  front,
  back,
  devops,
  comp,

  ridewise,
  rce,
  jobbox,
  tictac,
  alumni,
  facemask,
  rain,
  // portfolio,

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
  cdac,

} from "../assets";

import { FaUser, FaNetworkWired, FaProjectDiagram, FaLaptopCode, FaEnvelope } from 'react-icons/fa';



export const about = `I am a tech enthusiast and problem solver with a passion for programming and design.
                     I love to create and build things that are meaningful and impactful.

                      I was born and raised in Assam.
                      I have completed my graduation in B.sc(Hons)CBCS Computer Science from L.C.B College(Guwahati)
                      and I am currently pursuing Master of Computer Applications(MCA) at Tezpur University.

                      My programming journey began with C++, which sparked my interest in problem-solving and competitive programming. 
                      Over time, I expanded my expertise to full-stack development, working with React, Next.js, Express.js, PostgreSQL,
                      among other technologies. I actively solve problems on LeetCode, continuously refining my skills in algorithms, 
                      and scalable application development..`;

export const navLinks = [
  {
    id: "about",
    title: "About",
    icon: FaUser,
  },
  {
    id: "exp",
    title: "Experience",
    icon: FaNetworkWired,
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
    title: "DSA",
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
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: next,
  },
  {
      name: "Tailwind",
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
    name: "Express",
    icon: express,
  },
  {
    name: "NodeJS",
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
    name: "PostgreSql",
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
    title: "Full-Stack Developement Intern",
    company_name: "CDAC, Bangalore",
    icon: cdac,
    iconBg: "#013247",
    date: "Jan 2025 - June 2025",
    points: [
      "Implemented role-based access control (RBAC) for granular permissions on form creation, editing, and submission.",
      "Developed linked forms with automated workflows, ensuring seamless data flow and reducing manual processing.",
      "Secured API endpoints with JWT authentication and rate limiting for safer form submissions and data retrieval.",
      "Designed APIs for log retrieval and analysis, enabling structured reporting, tracking denied attempts.",
      "Created a drag-and-drop form builder using React, enabling 50+ customizable web forms with real-time preview.",
      "Implemented Zustand for state management, managing 100+ form elements, multi-page forms, and data persistence.",
      "Integrated a drag-and-drop interface using DND Kit, supporting seamless element placement, reordering, and nesting.",
      // "Optimized real-time validation, grid-based alignment, and a theming system for enhanced user experience.",
      // "Enabled localStorage-based form persistence, allowing users to save and reload designs across sessions.",
      "Incorporated form validation, API integration capabilities, and custom request handling."
    ],
  },
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
    name: "RIDEWISE:Ride Booking System",
    description:
      `Designed an automated ride-matching system with driver rating prioritization, that pairs passenger requests with available
      driver schedules in real-time.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      }, 
      {
        name: "Expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "mapbox",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSql",
        color: "green-text-gradient",
      },
    ],
    image: ridewise,
    source_code_link: "https://github.com/Ripunjay42/Ride_wise.git",
    website_link: 'https://ride-wise-bay.vercel.app',
  },  
  {
    name: "Daily Code:Remote Code Execution",
    description:
      `Remote Code Execution allows user to access a variety of coding problems and submit solutions and check output against predefined test cases 
      and also can analyze complexity using Gemini.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      }, 
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Gemini",
        color: "pink-text-gradient",
      },
      {
        name: "Judge0",
        color: "blue-text-gradient",
      },
    ],
    image: rce,
    source_code_link: "https://github.com/Ripunjay42/remote-code-execution.git",
    website_link: 'https://daily-code-pi.vercel.app',
  },  
  {
    name: "Job BOX:Job Searching Platform",
    description:
      `job search platform with Enhanced performance through client and server pagination, Implemented efficient data prefetching, 
      Admin panel for manage content, Responsive UI design.`,
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
        color: "green-text-gradient",
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
  // {
  //   name: "Personal portfolio",
  //   description:
  //     "Developed and Designed a portfolio website as a self learning project, as learning one subject or skill at a time is always the best option.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: portfolio,
  //   source_code_link: "https://ripunjay-choudhury.vercel.app/",
  //   website_link: "https://ripunjay-choudhury.vercel.app/",  
  // },
];

export { services, technologies, experiences, certifications, projects };
