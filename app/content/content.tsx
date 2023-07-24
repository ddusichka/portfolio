import Blueport from "../components/Blueport";

const content = {
  pages: ["about", "experience", "projects"],
  projects: [
    {
      name: "Chatterbox",
      path: "chatterbox",
      dates: "January - March 2023",
      deployed: true,
      url: "https://chatterbox-io.netlify.app/",
      github: "https://github.com/ddusichka/chatterbox",
      shortDescription:
        "A channel-based, real-time messaging app built with React and Firebase.",
      longDescription:
        "Chatterbox is a real-time messaging application, similar to Slack, that allows users to communicate via channels. Users can log in via Google, email and password, or anonymously. Bad words are filtered out of messages. This app was built using React and uses Firebase for data storage and user authentication.",
      coverPhoto: "/chatterbox.png",
      skills: ["Firebase", "React", "HTML/CSS/JS"],
      details: (
        <>
          <p>
            I started developing chatterbox as part of the application process
            for a software club on campus. The only requirements were to support
            real-time editing from multiple users across different devices.
          </p>
          <p>
            This was my first complex React project and my first time using
            Firebase and was pretty daunting at first. However, I quickly
            learned both and was able to get this functionality working. As
            bonus features, I added filtering of bad words using a library and
            incorporated user authentication via Firebase. I decided to support
            logging in with Google, email and password, and anonymous sign-in. I
            deployed this as a Netlify website (my first time doing this),
            submitted the project, and was accepted as a software developer!
          </p>
          <p>
            After getting the basic functionality down, I was proud of this
            project and decided to keep expanding it. I created a list of
            features that would fit in nicely, prioritized them, and got to
            work. Namely, I wanted to add channel-specific messaging and improve
            the front-end layout by adding a sidebar.
          </p>
        </>
      ),
    },
    {
      name: "Jeopardy",
      path: "jeopardy",
      dates: "April 2023",
      deployed: false,
      url: "",
      github: "",
      shortDescription:
        "A real-time, multiplayer Jeopardy game that allows players to buzz in.",
      longDescription:
        "This is a multiplayer Jeopardy game that allows players to buzz in via their own devices and play in real-time. It was built using React and Firebase. It allows multiple teams to compete, log in via their mobile devices, and buzz in to answer questions. It also keeps track of scoring.",
      coverPhoto: "/chatterbox.png",
      skills: ["Firebase", "React", "HTML/CSS/JS"],
      details: (
        <div>
          <p>
            I was inspired to make this Jeopardy app when one of my clubs,
            Biology Club, decided to host a bio-themed Jeopardy night. Having
            previously worked with Jeopardy Powerpoint templates or existing
            websites that didn't also offer buzzing and scoring, I decided to
            create my own version to meet our needs.
          </p>
          <p>
            The first version of this app came after I built Chatterbox, at
            which point I felt comfortable with React and Firebase. I also
            wanted to build this quickly in time for my club to use it, so I
            stuck to familiar frameworks. However, I later revisited this
            project and wanted to build a separate backend instead of having my
            front-end directly communicate with Firebase.
          </p>
        </div>
      ),
    },
    {
      name: "Image Processor",
      path: "image-processor",
      dates: "June 2022",
      deployed: false,
      url: "",
      github: "https://github.com/ddusichka/Image-Processor",
      shortDescription: "An image processing application built with Java.",
      longDescription: "",
      coverPhoto: "/chatterbox.png",
      skills: ["Java", "Java Swing"],
      details: "",
    },
    {
      name: "Marble Solitaire",
      path: "marble-solitaire",
      dates: "May 2022",
      deployed: false,
      url: "",
      github: "",
      shortDescription:
        "A marble solitaire game built with Java and the MVC design paradigm.",
      longDescription: "",
      coverPhoto: "/chatterbox.png",
      skills: ["Java"],
      details: "",
    },
    {
      name: "Maze Animator",
      path: "maze-animator",
      dates: "???",
      deployed: false,
      url: "",
      github: "https://github.com/ddusichka/Maze-Animator",
      shortDescription: "A maze animation game showing BFS and DFS.",
      longDescription: "",
      coverPhoto: "/chatterbox.png",
      skills: ["Java"],
      details: "",
    },
    {
      name: "Seam Carver",
      path: "seam-carver",
      dates: "???",
      deployed: false,
      url: "",
      github: "",
      shortDescription: "A seam carver application.",
      longDescription: "",
      coverPhoto: "/chatterbox.png",
      skills: ["Java"],
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
      position: "Curriculum Developer and Volunteer Teacher",
      company: "Boston EcoScholars",
      location: "Boston, MA",
      date: "Jan 2022 - May 2022",
      linkText: "",
      linkURL: "",
      bullets: [],
      showMore: false,
    },
    // {
    //   position: "Retail Sales Associate",
    //   company: "Staples",
    //   location: "Lawrenceville, NJ",
    //   date: "Summer 2021, Summer 2022",
    //   linkText: "staples.com",
    //   linkURL: "https://www.staples.com/",
    //   bullets: [
    //     "Demonstrated empathetic customer service & assessed customer needs to deliver recommendations",
    //     "Ensured efficient point-of-sale transactions & drove 15 Staples Connect app downloads per week",
    //   ],
    //   showMore: false,
    // },
  ],
};

export default content;
