import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    clg,school, torbita,
    crypto,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, chitchat, notes, react1, dental, market,
    be,sql, mini, snl,
  } from "../assets";

  const profiles = [
    {
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    },
    {
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
    },
    {
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
    },
    {
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
    },
    {
      link:"https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: hf,
    },
    {
      link:"https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
      icon: holopin,
    },
  ];

  const achievements = [
    {
      title: " Mastered frontend frameworks (e.g., Vue, Angular), backend languages (e.g., Go, Python), and databases (SQL/NoSQL).",
    },
    {
      title: "Lead and contribute to the development of complex web applications across multiple tech stacks (React, Node.js, Django, etc.).",
    },
    {
      title: "Set up CI/CD pipelines, containerized apps using Docker, and deployed systems to AWS, Azure, or GCP.",
    },
    {
      title: "1st Position : Consecutive four times Winner of Tech Scholarship in Torbita Institute (2019 - 2023).",
    },
    {
      title: "Served as Branch Head of IT Department (2021 – 2022), leading events and mentoring juniors.",
    },
    {
      title: "Selected in top 100 candidates for Google Cloud Training among 20k Students (2021).",
    },
    {
      title: " Design scalable backend systems and RESTful APIs used by thousands of users.",
    },
  ]
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name:"Bootstrap",
      icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    },
    {
      name:"Google Cloud",
      icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
    },
    {
      name:"C++ tool",
      icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
    
  ];

const list = [
    {
      id: "web",
      title: "Web Dev",
    },
    {
      id: "java",
      title: "Java",
    },
   
    {
      id: "c++",
      title: "C++",
    },
   
    {
      id: "other",
      title: "Other",
    },
  ];

  export const javaProject = [
    {
      name: "Cryptography",
      description:
        "The project is based on a cryptography technique that uses Double layer encryption and decryption using Armstrong numbers and RGB color-based mappings for various types of file format. The idea is inspired from a research paper.",
      tags: [
        {
          name: "cryptography",
          color: "blue-text-gradient",
        },
        {
          name: "security",
          color: "green-text-gradient",
        },
        {
          name: "java",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
    {
      name: "Snake Yaml",
      description:
        "Created a simple Maven project, a YAML file and write student data in it. As the request is made, crud should be performed in real time . (Hint: Used SnakeYAML library and add dependency in pom)",
      tags: [
        {
          name: "yaml",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "postman",
          color: "pink-text-gradient",
        },
      ],
      image: yml,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
    {
      name: "CRUD operations",
      description:
        "Built a java based application to allow user to create, read, update and delete Entities. Spring Boot provides an interface called CrudRepository that contains methods for CRUD operations.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "crud",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
    {
      name: "Byte-Array-to-File",
      description:
        "Built a java project where we input a file using byte array, store it on local system. In order to convert a byte array to a file, we will be using a method named the getBytes() method of String class.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "byteArray",
          color: "green-text-gradient",
        },
        {
          name: "file",
          color: "pink-text-gradient",
        },
      ],
      image: dwld,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
    {
      name: "Spring Boot One To Many",
      description:
        "Implemented Spring Boot One-To-Many mapping with Hibernate in a Spring Boot CRUD using @OnetoMany annotation. Mapping between two entities and used a MySQL database to store and retrieve the data.",
      tags: [
        {
          name: "onetomany",
          color: "blue-text-gradient",
        },
        {
          name: "springbott",
          color: "green-text-gradient",
        },
        {
          name: "crud",
          color: "pink-text-gradient",
        },
      ],
      image: onetomany,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
    {
      name: "OOP Lab",
      description:
        "These projects contain object oriented programming primary concepts and its code in Java language. Topics like : Inheritence, Constructor, Virtual function, Interface, Exception Handling, Generic Programming and File Handling etc.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "oop",
          color: "green-text-gradient",
        },
        {
          name: "coding",
          color: "pink-text-gradient",
        },
      ],
      image: oop,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
  ];
  
  export const cProject = [
    {
      name: "Spell Checker",
      description:
        "Trie data structure implementation used as a dictionary, where customer details are checked, searched, inserted and removed. Using Trie, search complexities can be brought to optimal limit (key length)",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "trie",
          color: "green-text-gradient",
        },
        {
          name: "dictionary",
          color: "pink-text-gradient",
        },
      ],
      image: trie,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
    {
      name: "DSA Lab",
      description:
        "These projects contain data structure and algorithms primary concepts and its code in C++ language. Topics like : Linked List, Stack, Queue, Circular Queue, Binary Tree, Binary Search Tree, Expression Tree, Threaded Binary Tree, and Heap Sort etc.",
      tags: [
        {
          name: "DSA",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: ds,
      source_link: "hhttps://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
    {
      name: "Computer Graphics Lab",
      description:
        "These projects contain computer graphics topics like : Line Drawing Algorithm (DDA and Bresenham), Bresenham circle drawing, Polygon filling, 2D transformation, Cohen Sutherland polygon clipping and Bezier curve.",
      tags: [
        {
          name: "computergraphics",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: cg,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
    
  ];
  
  export const webProject = [
    {
      name: "3D React Portfolio",
      description:
        "Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "3d_react",
          color: "pink-text-gradient",
        },
      ],
      image: port_3d,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
    {
      name: "Dental Website",
      description:
        "Redesigned a professional dental clinic website using WordPress and Elementor. Delivered a responsive, SEO-optimized 20+ page platform with booking functionality, and iframe embeds",
      tags: [
        {
          name: "Custom CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Elementor",
          color: "green-text-gradient",
        },
        {
          name: "WordPress",
          color: "pink-text-gradient",
        },
      ],
      image: dental,
      source_link: "https://plainlanddental.com.au",
      source_code_link: "https://plainlanddental.com.au",
    },
    {
      name: "Multi-Vendor Marketplace",
      description:
        "Developed a fully functional multi-vendor marketplace with affiliate referral features and e-commerce capabilities. Built using React and Tailwind CSS, supports custom vendor dashboards and 3D UI elements for an engaging UX",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: market,
      source_link: "https://tradelineexpress.co",
      source_code_link: "https://tradelineexpress.co",
    },
   
    {
      name: "30 Days of JavaScript",
      description:
        "Website made using Nodejs and Express in the BackEnd. A 30 Days Of JavaScript challenge to learn JavaScript by making 30 different projects using some famous JavaScript libraries.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "30dayschallenge",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jsp,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
    {
      name: "Chit Chat Application",
      description:
        "Real-Time, event based communication in Nodejs and browser-based Chat application. Uses Socket.io for implementation for WebSockets protocol. This application built using Node.js, Express, Socket.io and Render (Hosting)",
      tags: [
        {
          name: "Chatting",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: chitchat,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
    {
      name: "Rizz Rentals",
      description:
        "Developed a sleek, fully responsive website for Rizz Rentals by converting Figma designs into a modern interface using Next.js and Tailwind CSS",
      tags: [
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "next.js",
          color: "pink-text-gradient",
        },
      ],
      image: notes,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
  ];
  
  export const otherProject = [
    {
      name: "Multilingual Multiple Choice Question Generation",
      description:
        "Final Year Project : Its a low level and high level model where we automate the process of creating objective question assessment using LSTM(at low level) and Transformer(at high level) models for multiple languages.",
      tags: [
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "multilingual",
          color: "green-text-gradient",
        },
        {
          name: "BE_Project",
          color: "pink-text-gradient",
        },
      ],
      image: be,
      source_link: "https://drive.google.com/drive/folders/1LECu5ENk_zsowbPeRN_R1V8Rf2Gp7N6l",
      source_code_link: "https://github.com/MacsMorgan",
    },

    {
      name: "DBMS Lab",
      description:
        "Semester 4 : DBMS Lab. Topics included: ER/EER Diagram, DDL statements, primary key and foreign key constraint., SQL queries with different functions, Views, PL/SQL, Trigger (Row level and statement level) and cursor.",
      tags: [
        {
          name: "MySql",
          color: "blue-text-gradient",
        },
        {
          name: "dbms",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: sql,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
    {
      name: "SQL : Library Management System",
      description:
        "Semester 4 : DBMS Mini Project. Created a library management system using SQL and different functionalities.",
      tags: [
        {
          name: "sql",
          color: "blue-text-gradient",
        },
        {
          name: "management",
          color: "green-text-gradient",
        },
        {
          name: "miniproject",
          color: "pink-text-gradient",
        },
      ],
      image: mini,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
    {
      name: "Pyhton : Snake and Ladder",
      description:
        "Snake and Ladder game using python language. A simple command line interface snake and ladder game",
      tags: [
        {
          name: "snake and ladder",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "CLI",
          color: "pink-text-gradient",
        },
      ],
      image: snl,
      source_link: "https://github.com/MacsMorgan",
      source_code_link: "https://github.com/MacsMorgan",
    },
    
  ];
  
  const experiences = [
    {
      title: "Full stack web developer",
      company_name: "OMTech Technologies",
      icon: bny,
      iconBg: "#383E56",
      date: "November 2020 - Present",
      link: "",
      points: [
        "Scripted and coded for various projects including Perl, Visual Basic, and Java.",
        "Designed and carried out numerous performance tests with technologies such as HP LoadRunner and Java Virtual Machine.",
        "Used technologies such as JVM, BMC Patrol, and Sawmill to track, report, and analyze data.",
        "Delivered test reports based on self-generated data analysis and system behavior evaluation.",
        "Organizing and participating in weekly conference calls with project stakeholders and IT professionals."
      ],
      link: "https://omtechmasters.co.uk/",
    },
    {
      title: "Senior Software Engineer",
      company_name: "Deutrix Tech ",
      icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-national-security-agency-crowdfunding-flaticons-lineal-color-flat-icons-2.png",
      iconBg: "#383E56",
      date: "April 2019 - March 2020 ",
      link: "",
      points: [
        "contributed to the Fusion program by developing code on both the client and server sides.",
        "Collaborating with cross-functional technologies like spring boot, react etc. to integrate high-quality products.",
        "* Distributed several implementations of the source code to various testing environments.",
      ],
      link: "https://deutrix.com/",
    },
    {
      title: "MERN Stack Developer",
      company_name: "Zenbit Tech (INTERN)",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
      iconBg: "#E6DEDD",
      date: "April 2018 - February 2019",
      link: "",
      points: [
        "Plan the design of customers' websites by defining goals and creating functionality.",
        "Responsible for reviewing and writing articles based on Data Structures and Algorithms.",
        "* Identify and analyze opportunities for improvement, such as introducing new technology and preserving linkages.",
      ],
      link: "https://zenbit.tech/",
    },
    {
      title: "ReactJS | NextJS Developer ",
      company_name: "Upwork Community",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
      iconBg: "#383E56",
      date: "Dec 2024 - Present",
      link: "",
      points: [
        "Creative and experienced React developer with 5+ years of experience.",
        "Attracted over 10000+ visitors to each company's website I developed with powerful educational content.",
        "Wrote 100+ articles and improved 300+ articles on topics like Data Structures, Algorithms, Mathematics and related engineering topics",
      ],
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
    },
    {
      title: "WordPress / Shopify / Webflow Developer ",
      company_name: "Upwork Community",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
      iconBg: "#383E56",
      date: "Dec 2024 - Present",
      link: "",
      points: [
        "Designing front End prototypes using Adobe XD or Figma.",
        "Developing the website using ELEMENTOR PRO for WordPress or your preferred web builder.",
        " I offer a comprehensive range of services to help businesses establish and enhance their online presence.",
      ],
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
    },
    {
      title: "Website Speed Optimization ",
      company_name: "Google Cloud",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Apr 2021",
      link: "",
      points: [
        "Through intensive testing, I identify and resolve all sources of slowness and optimize key web vital scores. ",
        "Collaborating with cross-functional technologies.",
        " On both mobile and desktop devices, I strive to have your site loaded quickly under 2 seconds.",
        "Additional self-paced labs were provided to practice on Qwiklabs a platform by Google",
      ],
      link: "https://www.upwork.com/freelancers/~01a2a841e7e1767e4e",
    },
   
  ];
  
  const educations = [
    {
      degree: "Bachelor of Computer Science",
      branch:
        "Information Technology",
      marks:
        "CGPA : 4.62 / 5",
      name: "Obafemi Awolowo University, Nigeria",
      year: "(2012 - 2016)",
      image: clg,
    },
    {
      degree:
        "Master of Computer Science (MSCS)",
      branch : "Software Engineering",
      marks:
        "GPA : 4.57",
      name: "University of Lagos, Akoka",
      year: "2017 - 2019",
      image: school,
    },
    {
      degree:
        "Certified Full Stack Developer",
      branch: "MERN & Next.js Development",
      marks:
        "Percentage : 90 %",
      name: "Torbita Computer Institute, Abuja",
      year: "2020",
      image: torbita,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };
