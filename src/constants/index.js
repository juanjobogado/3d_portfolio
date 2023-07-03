import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    next,
    postgre,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    henry,
    coder,
    techecommerce,
    recipes,
    jobit,
    tripguide,
    threejs,
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
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "next",
      icon: next,
    },
    {
      name: "postgre",
      icon: postgre
    }
  ];
  
  const experiences = [
    {
      title: "Full Stack Teaching Assistant",
      company_name: "Soy Henry",
      icon: henry,
      iconBg: "#383E56",
      date: "September 2022 - November 2022",
      points: [
        "Coordinate a group of students to achieve integration to the study group.",
        "Guide students in the first steps of the course.",
        "Assist to solve exercises and promote group collaboration (Pair Programming).",
        "Propose ideas to improve the Bootcamp processes.",
      ],
    },
    {
      title: "Full Stack Developer [Academic] Recipe App",
      company_name: "Soy Henry",
      icon: henry,
      iconBg: "#E6DEDD",
      date: "October 2022 - November 2022",
      points: [
        "Creation of a SPA(single page application), with a CRUD of recipes that are fetched from an external API",
        "You can search for the recipe you want.",
        "Filter the recipe by type of diet, health score, and alphabetical order.",
        "Create a new recipe.",
      ],
    },
    {
      title: "Full Stack Developer [Academic] Tech E-Commerce",
      company_name: "Soy Henry",
      icon: henry,
      iconBg: "#383E56",
      date: "November 2022 - December 2022",
      points: [
        "Participation in an agile development team with one-week sprints, presenting to a Product Owner progress on the development of a complete E-commerce app with design and development of the following features: Basic e-commerce features(product CRUD, auth, catalog, checkout, etc)",
        "Payment gateway integration (Stripe).",
        "Sending transactional emails",
        "Management of shopping cart and product orders",
        "User administration and password management"
      ],
    },
    {
      title: "Backend Tutor",
      company_name: "Coderhouse",
      icon: coder,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Backend tutor at Coderhouse, where I teach Node.js, MongoDB, JS and Asynchronous JS to online students.",
        "Tasks include: taking attendance, solving doubts, answering queries by chat, correcting challenges and deliveries, and monitoring learning.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Tech E-Commerce",
      description:
        "Participation in an agile development team with one-week sprints, presenting to a Product Owner progress on the development of a complete E-commerce app with design and development of the following features: Basic e-commerce features(product CRUD, auth, catalog, checkout, etc…), payment gateway integration (Stripe), sending transactional emails, management of shopping cart and product orders. User administration and password management",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: techecommerce,
      source_code_link: "https://github.com/",
    },
    {
      name: "Recipes App",
      description:
        "Creation of a SPA(single page application), with a CRUD of recipes that are fetched from an external API",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: recipes,
      source_code_link: "https://github.com/",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };