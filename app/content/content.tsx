import Blueport from "../components/Blueport";

const content = {
  pages: ["about", "experience", "projects"],
  projects: [
    {
      name: "Chatterbox",
      path: "chatterbox",
      emoji: "💬",
      dates: "January - May 2023",
      deployed: true,
      url: "https://chatterbox-io.netlify.app/",
      github: "https://github.com/ddusichka/message-board",
      shortDescription:
        "A channel-based, real-time messaging app built with React and Firebase.",
      longDescription:
        "Introducing Chatterbox – a real-time messaging app similar to Slack, built with React and powered by Firebase. Connect effortlessly through channels by signing in anonymously, with Google, or with email and password. Our user-friendly interface filters out inappropriate language, maintaining a professional tone.",
      coverPhoto: "/chatterbox.png",
      photos: ["/chatterbox.png"],
      skills: ["Firebase", "React", "HTML/CSS/JS"],
      details: (
        <>
          <p>
            I started developing Chatterbox as part of the application process
            for a software development club on campus. The only real requirement
            was to allow users to post messages in real-time across multiple
            devices.
          </p>
          <p>
            This was my first complex React project and my first time using
            Firebase and was pretty daunting at first. However, I got the hang
            of both and was able to create a message board that anyone could
            post to. As a bonus, I added bad word filtering using a library and
            incorporated user authentication via Firebase. I decided to support
            logging in with Google, email and password, and anonymous sign-in. I
            deployed this as my first Netlify website, submitted the project,
            and was accepted as a software developer!
          </p>
          <p>
            I was proud of this project and decided to keep expanding it so I
            could sharpen my React skills. I created a list of features that
            would fit in nicely, prioritized them, and got to work. The biggest
            overhaul was the addition of channels to organize messages by topic.
            I restructured the way I organized messages in Firebase and enabled
            users to create their own channels. This required the front-end to
            look different, and I decided to add a sidebar. This was pretty
            challenging with my limited CSS skills, but I was able to create a
            layout I liked! I also added user profile updating capabilities to
            the app.
          </p>
          <div className="mt-4">
            <div className="laptop:flex laptop:justify-between laptop:gap-4 ">
              <div>
                <img src={"/chatterboxLogin.png"} alt="Login" />
                <p className="text-center text-gray-600">Login options</p>
              </div>
              <div>
                <img src={"/chatterboxChannels.png"} alt="Channels" />
                <p className="text-center text-gray-600">
                  Sidebar with channel specificity
                </p>
              </div>

              <div>
                <img src={"/chatterboxNewChannel.png"} alt="New Channel" />
                <p className="text-center text-gray-600">
                  Channel creation page
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      future: (
        <>
          <p>
            If I get a chance to revisit this project, I would love to add
            message editing and deleting. The ability to select channels to join
            and exclude others is another feature I want, along with the ability
            to create private channels. Direct messaging would also be cool.
          </p>
          <p>
            I also would use this app to get better at backend development.
            Currently, the front-end directly interacts with Firebase, and
            I&apos;d be interested in replacing that with a new API that handles
            these requests.
          </p>
        </>
      ),
    },
    {
      name: "Jeopardy",
      path: "jeopardy",
      emoji: "❓",

      dates: "April 2023",
      deployed: false,
      url: "",
      github: "https://github.com/ddusichka/jeopardy-v1",
      shortDescription:
        "A real-time, multiplayer Jeopardy game that allows players to buzz in.",
      longDescription:
        "This is a multiplayer Jeopardy game that allows players to buzz in via their own devices and play in real-time. It was built using React and Firebase. It allows multiple teams to compete, log in via their mobile devices, and buzz in to answer questions. It also keeps track of scoring.",
      coverPhoto: "/jeopardyCover.png",
      photos: ["/jeopardy.png"],

      skills: ["Firebase", "React", "HTML/CSS/JS"],
      details: (
        <>
          <p>
            I was inspired to make this Jeopardy app when one of my clubs,
            Biology Club, decided to host a bio-themed Jeopardy night. Having
            previously worked with Jeopardy Powerpoint templates or existing
            websites that didn&apos;t also offer buzzing and scoring, I decided
            to create my own version to meet our needs.
          </p>
          <p>
            The first version of this app came after I built Chatterbox, at
            which point I felt comfortable with React and Firebase. I also
            wanted to build this quickly in time for my club to use it, so I
            stuck to familiar frameworks. However, I later revisited this
            project and wanted to build a separate backend instead of having my
            front-end directly communicate with Firebase.
          </p>
          <div className="mt-4">
            <div className="laptop:flex laptop:justify-between laptop:gap-4 ">
              <div>
                <img src={"/jeopardyQuestion.png"} alt="Login" />
                <p className="text-center text-gray-600">Login options</p>
              </div>
              <div>
                <img src={"/jeopardyBuzzer.png"} alt="Channels" />
                <p className="text-center text-gray-600">
                  Sidebar with channel specificity
                </p>
              </div>
              <div>
                <img src={"/jeopardyScoring.png"} alt="Channels" />
                <p className="text-center text-gray-600">
                  Scoring functionality
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      future: (
        <>
          <p>
            In a future version of this project, I would definitely want to
            create the concept of a game code so that multiple games can be
            played independently. Currently, questions are hard-coded and are
            biology themed. I&apos;d love to give hosts the ability to create
            their own questions or perhaps choose from a pre-determined set of
            genres. Fetching actual old Jeopardy games could be cool too.
          </p>
          <p>
            I also would revamp this app to use a proper backend. Currently, the
            front-end directly interacts with Firebase, and I&apos;d be
            interested in replacing that with a new API that handles these
            requests.
          </p>
        </>
      ),
    },
    {
      name: "Image Processor",
      path: "image-processor",
      emoji: "📸",

      dates: "June 2022",
      deployed: false,
      url: "",
      github: "https://github.com/ddusichka/Image-Processor",
      shortDescription: "An image processing application built with Java.",
      longDescription: "",
      coverPhoto: "/ImageProcessor.gif",
      photos: ["/ImageProcessor.gif"],

      skills: ["Java", "Java Swing"],
      details: "",
      future: null,
    },
    {
      name: "Marble Solitaire",
      path: "marble-solitaire",
      emoji: "💬",

      dates: "May 2022",
      deployed: false,
      url: "",
      github: "https://github.com/ddusichka/Marble-Solitaire",
      shortDescription:
        "A marble solitaire game built with Java and the MVC design paradigm.",
      longDescription: "",
      coverPhoto: "/chatterbox.png",
      photos: [],
      skills: ["Java"],
      details: "",
      future: null,
    },
    {
      name: "Maze Animator",
      path: "maze-animator",
      emoji: "🧩",
      dates: "April 2022",
      deployed: false,
      url: "",
      github: "https://github.com/ddusichka/Maze-Animator",
      shortDescription: "A maze animation game showing BFS and DFS.",
      longDescription:
        "This program generates random mazes for the user to solve manually. The user can also see solutions found via BFS (breadth-first search) or DFS (depth-first search) algorithms.",
      coverPhoto: "/maze.png",
      photos: ["/maze.png"],

      skills: ["Java"],
      details: (
        <>
          <p>
            Mazes! This game allows users to traverse randomly generated mazes.
          </p>
        </>
      ),
      future: null,
    },
    {
      name: "Seam Carver",
      path: "seam-carver",
      emoji: "⚡️",
      dates: "March 2022",
      deployed: false,
      url: "",
      github: "https://github.com/ddusichka/Seam-Carving",
      shortDescription: "A seam carver application.",
      longDescription:
        "Intelligently shrinks photos by removing the visually 'least interesting' seam. Uses content-aware image resizing algorithm to compress the image to its most important details. Created for Accelerated Fundamentals of Computer Science 2.",
      coverPhoto: "/chatterbox.png",
      photos: ["/SeamCarving.gif"],

      skills: ["Java"],
      details: "" /* Probably it's own React component? */,
      future: null,
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
        "Developing and refining C# microservice endpoints to power e-commerce sites",
        "Creating tables and procedures in SQL Server and Postgres to effectively manage e-commerce data",
        "Spearheading the company's tooling initiative by launching Retool development",
        "Developing 8 internal and client-facing Retool applications using SQL and JavaScript",
        "Documenting tool development processes, giving demos, and offering support to other developers",
      ],
      showMore: true,
      details: (
        <div>
          <div className="mt-4 flex-col space-y-4">
            <h1 className="font-bold text-md tablet:text-lg">Details</h1>
            <p>
              For my first co-op experience at Northeastern, I worked at
              <b> Blueport</b>, a company that provides an omni-channel
              e-commerce platform for furniture retailers. As the only{" "}
              <b>Software Development Co-op</b> at a small company, my role had
              a lot of variety and gave me a broad range of software experience.
            </p>
            <p>
              When I started, Blueport had recently purchased a <b>Retool </b>
              subscription — Retool is a low-code platform for building UIs.
              However, few apps were being built. My role was to learn how to
              use the software and begin building tools to save developer time
              and put power in the hands of retailers (our clients).
            </p>
            <p>
              Building each Retool app required... JavaScript is the language of
              Retool, so I quickly picked it up. Additionally, each app required
              the development or refinement of SQL Server procedures and/or
              tables, as well as gRPC endpoints. Thus, I gained a lot of
              <b>backend experience</b> through each app.
            </p>
            <p>
              Some of the non-technical skills I gained include technical
              writing, presenting, and teaching. I made documentation a
              priority, so I wrote a wiki page for every tool I developed and
              also created general how-to wiki pages that I thought would be
              useful to others.
            </p>
          </div>
        </div>
      ),
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
      linkURL: "https://neu.campuslabs.com/engage/organization/ecoscholars",
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
