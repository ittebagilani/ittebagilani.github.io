import {
  gamer,
  camera,
  creator,
  web,
  trafficSignLogo,
  googleMiniLogo,
  sentenceParserLogo,
  nimLogo,
  projectBoostLogo,
  jumpnHuntLogo,
  lensLogo,
  roomLogo,
  cube,
  data,
  llm,
  shsm,
  ecocar,
  coding
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Lead Project Manager",
    company_name: "ICT SHSM",
    // icon: shsm,
    iconBg: "#000",
    date: "March 2020 - April 2021",
    points: [
      "Configured FreePBX on a legacy server which involved installation and configuring services",
      "Setup and installed Apache OFBiz, an open-source enterprise resource planning and customer relationship management system",
      "Created thorough documentation detailing the setup, configuration, and maintenance procedures for both FreePBX and Apache OFBiz"
    ],
  },
  {
    title: "DeltaHacks 9 Hackathon",
    company_name: "DeltaHacks",
    // icon: tesla,
    iconBg: "#000",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Led a team in the development of an online learning resource for programming using Figma.",
      "Prioritized user satisfaction by utilizing the design process, creating a visually appealing platform. ",
      " Facilitated seamless communication within the team, ensuring a shared understanding of objectives, timelines, and deliverables."
    ],
  },
  {
    title: "C++ Teaching Assistant",
    company_name: "McMaster University",
    // icon: tesla,
    iconBg: "#000",
    date: "Jan 2024 - Present",
    points: [
      "Effectively conducted lab sessions to guide students through the intricacies of C++ and object-oriented programming.",
      "Held regular office hours to provide troubleshooting support, address queries, and offer clarification on course content.",
      "Contributed to the creation of supplemental materials to enrich the learning experience and provide additional practice opportunities."
    ],
  }
];

const services = [
  {
    title: "Game Developer",
    icon: gamer,
    id: "gamedev",
  },
  {
    title: "Data Scientist",
    icon: data,
    id: "datascience",
  },
  {
    title: "3D Designer",
    icon: cube,
    id: "design",
  },
  {
    title: "Extras",
    icon: camera,
    id: "extras",
  },
];

const gameDevProjects = [
  {
    name: "Beyond Earth",
    description:
      "Control a rocket and fly it from the start to the finish while avoiding obstacles.",
    url: "beyondearth",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "csharp",
        color: "green-text-gradient",
      },
      {
        name: "platformer",
        color: "pink-text-gradient",
      },
    ],
    image: projectBoostLogo,
  },
  {
    name: "Jump n Hunt",
    description:
      "A 2D platformer that takes you through an old village in search of apples.",
    url: "jumpnhunt",
    tags: [
      {
        name: "2Dplatformer",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "csharp",
        color: "pink-text-gradient",
      },
    ],
    image: jumpnHuntLogo,
  },
]

const aiProjects = [
  {
    name: "LLM from Scratch",
    description: "A decoder-only transformer model for text generation.",
    url: "llm",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "transformers",
        color: "pink-text-gradient",
      },
    ],
    image: llm,
    source_code_link: "https://github.com/ittebagilani/TrafficSignIdentifier",
  },
  {
    name: "Traffic Sign Identifier",
    description: "Detects German traffic signs using a trained neural network.",
    url: "traffic",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: trafficSignLogo,
    source_code_link: "https://github.com/ittebagilani/TrafficSignIdentifier",
  },
  {
    name: "Google Mini",
    description:
      "An artifical intelligence model that can answer your questions.",
    url: "googlemini",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "nltk",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: googleMiniLogo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sentence Parser",
    description:
      "Takes a sentence and breaks it down into nouns, verbs, prepositions, etc.",
    url: "sentenceparser",
    tags: [
      {
        name: "nltk",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "language",
        color: "pink-text-gradient",
      },
    ],
    image: sentenceParserLogo,
  },
  // {
  //   name: "Nim AI",
  //   description:
  //     "Trained a model using reinforcement learning to play the game of Nim.",
  //   url: "nimai",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "reinforcementlearning",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "ai",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: nimLogo,
  // },
]
const designProjects = [
  
  {
    name: "Canon Lens Replica",
    description: "A 3D replica of the Canon 70mm - 300mm Kit Lens.",
    url: "canonlens",
    tags: [
      {
        name: "tinkercad",
        color: "blue-text-gradient",
      },
      {
        name: "3dmodel",
        color: "green-text-gradient",
      },
    ],
    image: lensLogo,
  },
  {
    name: "Paradise Chamber",
    description: "A 3D room that includes everything one could ask for.",
    url: "paradisechamber",
    tags: [
      {
        name: "3Dmodel",
        color: "blue-text-gradient",
      },
      {
        name: "tinkercad",
        color: "green-text-gradient",
      },
    ],
    image: roomLogo,
  },
];

const extras = [
  
  {
    name: "McMaster EcoCar",
    description: "Reengineering the Cadillac Lyriq",
    url: "ecocar",
    tags: [
      {
        name: "engineering",
        color: "blue-text-gradient",
      },
      {
        name: "cad",
        color: "green-text-gradient",
      },
    ],
    image: ecocar,
  },
  {
    name: "Coding Club",
    description: "A safe environment to learn coding.",
    url: "codingclub",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
    ],
    image: coding,
  },
];

export { experiences, services, designProjects, gameDevProjects, aiProjects, extras };
