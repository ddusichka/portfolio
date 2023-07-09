import Blueport from "../components/Blueport";

const content = {
  projects: [
    {
      name: "Chatterbox",
      path: "chatterbox",
      dates: "January - March 2023",
      url: "",
      description:
        "A channel-based, real-time messaging app built with React and Firebase.",
      coverPhoto: "/chatterbox.png",
      skills: ["Firebase", "React", "HTML/CSS/JS"],
      details: "" /* Probably it's own React component? */,
    },
    {
      name: "Jeopardy",
      path: "jeopardy",
      dates: "April 2023",
      url: "",
      description:
        "An online multiplayer Jeopardy game that allows players to buzz in.",
      coverPhoto: "/chatterbox.png",
      skills: [],
      details: "" /* Probably it's own React component? */,
    },
    {
      name: "Image Processor",
      path: "image-processor",
      dates: "June 2022",
      url: "",
      description: "An image processing application built with Java.",
      coverPhoto: "/chatterbox.png",
      skills: [],
      details: "" /* Probably it's own React component? */,
    },
    {
      name: "Marble Solitaire",
      path: "marble-solitaire",
      dates: "May 2022",
      url: "",
      description:
        "A marble solitaire game built with Java and the MVC design paradigm.",
      coverPhoto: "/chatterbox.png",
      skills: [],
      details: "" /* Probably it's own React component? */,
    },
    {
      name: "Maze Animator",
      path: "maze-animator",
      dates: "???",
      url: "",
      description: "A maze animation game showing BFS and DFS.",
      coverPhoto: "/chatterbox.png",
      skills: [],
      details: "" /* Probably it's own React component? */,
    },
    {
      name: "Seam Carver",
      path: "seam-carver",
      dates: "???",
      url: "",
      description: "A seam carver application.",
      coverPhoto: "/chatterbox.png",
      skills: [],
      details: "" /* Probably it's own React component? */,
    },
  ],
  experience: [
    {
      position: "Software Development Co-op",
      company: "Blueport",
      location: "Boston, MA",
      date: "Jan 2023 - June 2023",
      linkText: "blueport.com",
      linkURL: "https://www.blueport.com/",
      bullets: [
        "Developing and refining C# microservice endpoints utilizing Postgres databases for e-commerce sites",
        "Creating SQL Server tables and procedures to effectively manage store and catalog data",
        "Developing 7 internal and client-facing web applications using SQL, JavaScript, and API endpoints in Retool",
      ],
      showMore: true,
      details: <Blueport />,
    },
    {
      position: "Writer and Editor",
      company: "NU Sci Magazine",
      location: "Boston, MA",
      date: "Jan 2022 - Present",
      linkText: "nuscimagazine.com",
      linkURL: "https://nuscimagazine.com/",
      bullets: [
        "Writing 2 articles per semester on STEM topics for publication in Northeastern’s science magazine",
        "Editing 8 articles per semester and providing constructive feedback to writers",
      ],
      showMore: true,
    },
    {
      position: "Software Developer",
      company: "Code4Community",
      location: "Boston, MA",
      date: "Mar 2023 - Present",
      linkText: "c4cneu.com",
      linkURL: "https://www.c4cneu.com/",
      bullets: [
        "Developing code for a letter of recommendation web application for the Abdul Latif Jameel Poverty Action Lab",
      ],
      showMore: false,
    },
    {
      position: "Discrete Structures TA",
      company: "Khoury College",
      location: "Boston, MA",
      date: "Aug 2022 - December 2022",
      linkText: "CS 1800 Course Page",
      linkURL: "https://course.ccs.neu.edu/cs1800f22/",
      bullets: [
        "Hosting 4+ office hours weekly, answering student questions, and explaining topics in discrete mathematics",
        "Grading homework assignments and exams, providing encouraging feedback for improvement",
      ],
      showMore: true,
    },
    {
      position: "Retail Sales Associate",
      company: "Staples",
      location: "Lawrenceville, NJ",
      date: "Summer 2021, Summer 2022",
      linkText: "staples.com",
      linkURL: "https://www.staples.com/",
      bullets: [
        "Demonstrated empathetic customer service & assessed customer needs to deliver recommendations",
        "Ensured efficient point-of-sale transactions & drove 15 Staples Connect app downloads per week",
      ],
      showMore: false,
    },
  ],
};

export default content;
