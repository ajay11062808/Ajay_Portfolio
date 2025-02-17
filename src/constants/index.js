import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  vinci,
  threejs,
  ey,
  react_native,
  recoil,
  java,
  python,
  aws,
  azure,
  kubernetes,
  mysql,
  postgres,
  postman,
  jenkins,
  vscode,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id:"projects",
    title:"Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: typescript,
    category: "Frontend",
  },
  {
    name: "React JS",
    icon: reactjs,
    category: "Frontend",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    category:"Frontend",
  },
  {
    name:"Recoil",
    icon:recoil,
    category:"Frontend"
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    category: "Frontend",
  },
  {
    name: "Node JS",
    icon: nodejs,
    category: "Backend",
  },
  {
    name: "Java",
    icon: java,
    category: "Backend",
  },
  {
    name: "Python",
    icon: python,
    category: "Backend",
  },
  {
    name: "MySQL",
    icon: mysql,
    category: "Database",
  },
  {
    name: "PostgresSQL",
    icon: postgres,
    category: "Database",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    category: "Database",
  },
  {
    name: "Three JS",
    icon: threejs,
    category: "Frontend",
  },
  {
    name: "Git",
    icon: git,
    category: "Dev Tools",
  },
  {
    name: "VS Code",
    icon: vscode,
    category: "Dev Tools",
  },
  {
    name: "AWS",
    icon: aws,
    category: "Cloud",
  },
  {
    name: "Azure",
    icon: azure,
    category: "Cloud",
  },
  {
    name: "Jenkins",
    icon: jenkins,
    category: "Dev Tools",
  },
  {
    name: "Postman",
    icon: postman,
    category: "Dev Tools",
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
    category: "Dev Tools",
  },
  {
    name: "Docker",
    icon: docker,
    category: "Dev Tools",
  },
  {
    name: "Figma",
    icon: figma,
    category: "Design",
  },
  {
    name: "React Native",
    icon: react_native,
    category: "Mobile",
  },
  {
    name: "HTML 5",
    icon: html,
    category: "Frontend",
  },
  {
    name: "CSS 3",
    icon: css,
    category: "Frontend",
  },
];

const experiences = [
  {
    title: "Application Design and Developement Engineer",
    company_name: "Ernst and Young",
    icon: ey,
    iconBg: "#383E56",
    date: "October 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Hands on knowledge of React, Java ,SQL,Jenkins,Kubernetes,Recoil,Kafka,Websockets",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive designs and ensuring that the web applications are mobile-friendly.",
      "Working With React Native to develop mobile applications.",
      "Creating reusable components and libraries for future use.",

    ],
  },
  {
    title: "Application System Engineer",
    company_name: "Ernst and Young",
    icon: ey,
    iconBg: "#383E56",
    date: "July 2022 - September 2024",
    points: [
      "In-depth understanding of Azure cloud computing services, including VM, IAM, VPC, and more.",
      "Hands on Knowledge on LLMs used them in web applications,Implemented RESTful APIs to integrate with frontend applications.",
      "Hands on knowledge of React, Java ,SQL,Jenkins,Docker",
      "Created a Dashboard to bring all cloud resources(Azure,GCP,AWS) under one webpage using Grafana,Neo4j,PostgresDB ",
      "Boosted client productivity by 40% by creating an intuitive, centralized dashboard to streamline cloud resource management.",
      "Optimized CI/CD pipelines, cutting deployment times by approximately 30% with automated testing and pre-deployment validation.",
      "Reduced critical code vulnerabilities by 20 percent through automated scans using SonarQube,Trivy(containers),SAST and DAST tools and code quality gates.",
    ],
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Vinci-ai is a web app that generats images from the user's prompts, you tell vinci what you want in the image or the image you want and it generate's the image. with support from the openai-api.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: vinci,
    source_code_link: "https://github.com/ajay11062808/Portfolio",
    app_link: "",
  }
];

export { services, technologies, experiences,projects };
