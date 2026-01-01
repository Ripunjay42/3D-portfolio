import {
  front,
  back,
  devops,
  comp,

  rag,
  drone,
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
  java,
  python,
  html,
  css,
  reactjs,
  next,
  redux,
  zustand,
  tailwind,
  bootstrap,
  flask,
  django,
  express,
  nodejs,
  spring_boot,
  jwt,
  rabbitmq,
  mysql,
  postgresql,
  sqlite,
  mongodb,
  redis,
  quadrant, 
  linux,
  bash,
  git,
  docker,
  postman,
  firebase,
  aws,

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



export const about = `I am a tech enthusiast and problem solver with a strong passion for software development and system design. 
I hold a B.Sc. (Hons) in Computer Science (CBCS) from L.C.B. College, Guwahati, 
and have completed my Master of Computer Applications (MCA) from Tezpur University.

My programming journey began with C++, building a solid foundation in problem-solving and algorithms. 
Over time, I expanded into full-stack development, working with technologies such as React, Next.js, Express.js, and PostgreSQL. 
I am currently working as a Full Stack Developer at C-DAC, Bangalore, focusing on building scalable, efficient, and impactful applications. 
I actively solve problems on LeetCode to continuously refine my algorithmic and system design skills..`;

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
    name: "Java",
    icon: java,
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
    name: "Redux",
    icon: redux,
  },
  {
    name: "Zustand",
    icon: zustand,
  },
  {
      name: "Tailwind",
      icon: tailwind,
  },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },

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
  // {
  //     name: "Spring Boot",
  //     icon: spring_boot,
  // },
  {
    name: "JWT",
    icon: jwt,
  },
  {
    name: "RabbitMQ",
    icon: rabbitmq,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  // {
  //     name: "Sqlite3",
  //   icon: sqlite,
  // },
  
 
  {
    name: "PostgreSql",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Quadrant",
    icon: quadrant,
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
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "AWS",
    icon: aws,
  }
];

const experiences = [
   {
    title: "Software Developer",
    company_name: "CDAC, Bangalore",
    icon: cdac,
    iconBg: "#013247",
    date: "Aug 2025 - Present",
    points: [
        "Designed and implemented a complete DLMS/COSEM firmware upgrade flow (Steps 0–7) for smart meters.",
        "Built DLMS/COSEM request–response handling (GET/SET/ACTION) over TCP with payload construction and validation.",
        "Implemented block-wise firmware transfer from Intel HEX files with binary extraction and block tracking.",
        "Added OctetString length encoding (0–65535+ bytes) and adaptive block sizing for reliable transfers.",
        "Implemented state-based transfer tracking using image_transfer_status (0–7) with retry and timeout handling.",
        "Enabled resume, recovery, and auditability through persistent storage of transfer context and block metadata.",

        "Built a modular admin control dashboard with card-based navigation and inline configuration panels.",
        "Implemented end-to-end license request handling, including creation, approval, editing, filtering, and pagination.",
        "Developed group, host, and inventory management workflows with OEM and tool mapping support.",
        "Implemented feature access policy management using Include/Exclude and global rule application.",
        "Built license governance mechanisms covering limits, overdraft, timeout, and linger policies.",
        "Implemented secure request handling and session management using token-based authentication and controlled logout."
    ],
  },
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
    name: "AI-Powered Document Query System",
    description:
      `A full-stack RAG (Retrieval-Augmented Generation) application that enables users to upload documents and interact with them through an intelligent chat interface powered by Google's Gemini AI.`,
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      }, 
      {
        name: "Expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "Zustand",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name : "Redis",
        color : "green-text-gradient", 
      },
      {
        name : "rabbit mq",
        color : "pink-text-gradient", 
      },
      {
        name : "Quadrant",
        color : "green-text-gradient",
      },
      {
        name : "Gemini",
        color : "blue-text-gradient",
      }
    ],
    image: rag,
    source_code_link: "https://github.com/Ripunjay42/Ai_assistant.git",
    website_link: 'https://query-quill-nu.vercel.app',
  },  
    {
    name: "Drone Survey Management",
    description:
      `A full-stack platform to plan, execute, monitor drone missions, manage fleets, and access survey reports via a user-friendly interface.`,
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      }, 
      {
        name: "Expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "Zustand",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: drone,
    source_code_link: "https://github.com/Ripunjay42/drone_servey.git",
    website_link: 'https://dronesurveymanager.vercel.app',
  },  
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
