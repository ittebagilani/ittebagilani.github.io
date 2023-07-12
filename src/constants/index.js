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
    roomLogo
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Game Developer",
      icon: gamer,
    },
    {
      title: "Photographer",
      icon: camera,
    },
    {
      title: "Illustrator",
      icon: creator,
    },
  ];
  

  
  const projects = [
    {
      name: "Traffic Sign Identifier",
      description:
        "Detects German traffic signs using a trained neural network.",
      url: 'traffic',
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
      url: 'googlemini',
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
      url: 'sentenceparser',
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
      source_code_link: "https://github.com/ittebagilani/SentenceParser",
    },
    {
      name: "Nim AI",
      description:
        "Trained a model using reinforcement learning to play the game of Nim.",
      url: 'nimai',
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "reinforcementlearning",
          color: "green-text-gradient",
        },
        {
          name: "ai",
          color: "pink-text-gradient",
        },
      ],
      image: nimLogo,
      source_code_link: "https://github.com/ittebagilani/NimAI",
    },
    {
      name: "Beyond Earth",
      description:
        "Control a rocket and fly it from the start to the finish while avoiding obstacles.",
      url: 'beyondearth',
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
      source_code_link: "https://github.com/ittebagilani/ProjectBoost/tree/master",
    },
    {
      name: "Jump n Hunt",
      description:
        "A 2D platformer that takes you through an old village in search of apples.",
      url: 'jumpnhunt',
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Canon Lens Replica",
      description:
        "A 3D replica of the Canon 70mm - 300mm Kit Lens.",
      url: 'canonlensreplica',
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Paradise Chamber",
      description:
        "A 3D room that includes everything one could ask for.",
      url: 'paradisechamber',
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
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, projects };