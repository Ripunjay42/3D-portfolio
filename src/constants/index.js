import {
  mobile,
  backend,
  creator,
  web,
  c,
  cpp,
  javascript,
  python,
  html,
  css,
  reactjs,
  tailwind,
  bootstrap,
  flask,
  django,
  nodejs,
  mysql,
  postgresql,
  sqlite,
  linux,
  bash,
  git,
  githubactions,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  votify,
  buyNsell,
  admindashboard,
  awsccp,
  gcpdg,
  az900,
  tekion

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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Devops",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
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
    icon: reactjs,
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
    icon: django,
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

  
  {
    name: "Githubactions",
    icon: githubactions,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Tekion",
    icon: html,
    iconBg: "#00bfa4",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Built a strong foundation on the fundamentals of HTML, CSS & JavaScript",
      "Improved on efficient methods of developing a web application",
      "Insights on industry Standards for web development"
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "CloudTel Solutions",
    icon: html,
    iconBg: "#FFF",
    date: "July 2022 - August 2022",
    points: [
      "Worked with AWS Services such as Amazon EC2, S3, VPC, IAM, ECR ...",
      "Interacted with AWS Services using the AWS CLI and the Python SDK (Boto3)",
      "Created shell Scripts to bootstrap a server and then create an AMI",
      "Adopted exclusively to Linux OS (Ubuntu) for day-to-day tasks",
      "Deployed application on containers to production",
      "Configured webservers to serve static files and installed SSL certificates for the domain"
    ],
  }
];

const certifications = [
  {
    name:
      "AWS Certified Cloud Practitioner",
    image: awsccp,
    icon: html,
    url: 'https://www.credly.com/badges/57074209-7830-4367-9921-62928eb57aeb/public_url'
  },
  {
    name:
      "Google Cloud Digital Leader",
    image: gcpdg,
    icon: html,
    url: 'https://www.credential.net/b6adac8a-184c-4743-88ca-c5537628fcec?key=005f755bbbbabc1448a3463fd43634cc20af978e8e53952d2f17cf1ba9237d47&record_view=true'
  },
  {
    name:
    "Microsoft Azure Fundamentals",
    image: az900,
    icon: html,
    url: 'https://www.credly.com/badges/ad668692-9764-4853-903d-f046266c1c15/public_url'
  },
  // {
  //   name:
  //     "Python Basics",
  //   image: pythoncert,
  //   icon: hackerrank,
  //   url: 'https://www.hackerrank.com/certificates/635cc0313ed6'
  // },
];

const projects = [
  {
    name: "Buy N Sell",
    description:
      "An e-commerce website that allows users to buy and sell used products. This application was hosted on AWS with the help of containers ",
    tags: [
      {
        name: "devops",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: buyNsell,
    source_code_link: "https://github.com/masif2002/buyNsell-django-app",
  },
  {
    name: "Admin Dashboard",
    description:
      "A dashboard application for an organization that allows to view the list of employees and their details",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: admindashboard,
    source_code_link: "https://github.com/masif2002/admin-dashboard",
  },
  {
    name: "Votify",
    description:
      "A simple social media application that allows users to vote for photos posted by other users on the platform",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "heroku",
        color: "pink-text-gradient",
      },
    ],
    image: votify,
    source_code_link: "https://github.com/masif2002/fastapi",  
  },
];

export { services, technologies, experiences, certifications, projects };