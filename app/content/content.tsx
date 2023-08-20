import Link from "next/link";

const content = {
  pages: ["about", "experience", "projects"],
  skills: [
    { skill: "Java", image: "java.png" },
    { skill: "JavaScript", image: "javascript.png" },
    { skill: "SQL", image: "sql.png" },
    { skill: "C#", image: "csharp.png" },
    { skill: "TypeScript", image: "typescript.png" },
    { skill: "Python", image: "python.png" },
    { skill: "HTML/CSS", image: "htmlcss.png" },
  ],
  frameworks: [
    { skill: "React", image: "react.png" },
    { skill: "Next.js", image: "nextjs.png" },
    { skill: "Express", image: "express.png" },

    { skill: "Firebase", image: "firebase.png" },
    { skill: "MongoDB", image: "mongo.png" },
    { skill: "Git", image: "git.png" },
    { skill: "Docker", image: "docker.png" },
  ],
  projects: [
    {
      name: "Concert Match",
      path: "concert-match",
      emoji: "🎶",
      dates: "July 2023 - Present",
      deployed: false,
      featured: true,
      url: "",
      github: "",
      shortDescription:
        "A concert-finding web application for friends to find Ticketmaster events.",
      longDescription:
        "A concert-finding web application for friends to find events from the Ticketmaster API. Users can swipe right on concerts that they would attend and left on ones they're not so interested in. Mutual matches will be identified so friends can keep track of what they're interested in (and can budget accordingly)!",
      cardPhoto: "/concerts.png",
      coverPhoto: "/concertMatch.gif",
      skills: ["MongoDB", "Express", "React"],
      details: (
        <>
          <p>
            My friends and I love going to concerts, and I wanted to make a more
            fun way to decide which ones we should go to. I also wanted to build
            my first app with separate well-designed front-end and back-end. I
            decided to challenge myself with this app by using MongoDB and
            Express for the first time.
          </p>
          <p>
            <strong>This app is still in progress</strong> but currently
            supports user login and authentication, as well as swiping
            functionality for individual users to track what they&apos;re
            interested in. The next step is adding in group functionality, which
            I hope to complete by the end of August 2023.
          </p>
        </>
      ),
      future: (
        <>
          <p>
            While there are still functionalities I need to get the base version
            of this app completed, there are also some things I&apos;m thinking
            of for a version 2 of this app. First, I think it would be cool to
            integrate with Spotify&apos;s API and prioritize concerts with
            artists that a user actually listens to. I also would like to dip my
            toes into the field of AI and machine learning and develop an
            algorithm to provide a better recommendation order.
          </p>
        </>
      ),
    },
    {
      name: "Portfolio",
      path: "portfolio",
      emoji: "💼",
      dates: "June 2023 - August 2023",
      deployed: true,
      featured: false,
      url: "/dessydusichka.com",
      github: "",
      shortDescription:
        "A React portfolio highlighting my experience and projects.",
      longDescription:
        "This site you're on right now is a platform to showcase my work. This is my first project using Next.js and my first project that emphasizes mobile-friendly design.",
      cardPhoto: "/portfolio.png",
      coverPhoto: "",
      skills: ["Next.js", "React", "Tailwind"],
      details: (
        <>
          <p>
            I wanted a platform to showcase my projects and also wanted to learn
            TypeScript, so I combined both goals to create this site. I decided
            to also use Next.js for the first time, in comparison to traditional
            React, and learned about routing and layouts.
          </p>
          <p>
            A big challenge while developing this site was making sure it
            remained mobile-friendly. While I expect most users to be viewing
            from a computer, I still wanted to account for mobile users.
            However, I&apos;m still learning the ins and outs of CSS so this was
            pretty challenging at times, but ultimately I&apos;m happy with how
            it turned out!
          </p>
        </>
      ),
      future: (
        <>
          <p>
            In a future version, I&apos;d like to enhance the design of this
            site and add some more creative pops. I would also like to highlight
            some of the articles I&apos;ve written for NU Sci on a new Articles
            page, and I&apos;ll continue to update the content.
          </p>
        </>
      ),
    },
    {
      name: "Chatterbox",
      path: "chatterbox",
      emoji: "💬",
      dates: "January - May 2023",
      deployed: true,
      featured: true,
      url: "https://chatterbox-io.netlify.app/",
      github: "https://github.com/ddusichka/message-board",
      shortDescription:
        "A channel-based, real-time messaging app built with React and Firebase.",
      longDescription:
        "Chatterbox is a real-time messaging app similar to Slack, built with React and powered by Firebase. Users can connect effortlessly through channels by signing in anonymously, with Google, or with email and password. The user-friendly interface filters out inappropriate language, maintaining a positive environment.",
      cardPhoto: "/chatterbox.png",
      coverPhoto: "/chatterbox.png",
      skills: ["React", "Firebase", "HTML/CSS/JS"],
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
      featured: true,
      url: "",
      github: "https://github.com/ddusichka/jeopardy-v1",
      shortDescription:
        "A real-time, multiplayer Jeopardy game allowing teams to buzz in remotely.",
      longDescription:
        "This is a multiplayer Jeopardy game that allows players to buzz in via their own devices and play in real-time. It was built using React and Firebase. It allows multiple teams to compete, log in via their mobile devices, and buzz in to answer questions. It also keeps track of scoring.",
      cardPhoto: "/jeopardyCover.png",
      coverPhoto: "/jeopardy.png",

      skills: ["Firebase", "React", "HTML/CSS/JS"],
      details: (
        <>
          <p>
            I was inspired to make this Jeopardy app when one of my clubs,
            Biology Club, decided to host a bio-themed Jeopardy night. Having
            previously worked with Jeopardy Powerpoint templates or existing
            websites that didn&apos;t also offer buzzing and scoring, I decided
            to create my own version to meet our needs. I was proud of the fact
            that people could actually buzz in, and successfully using this app
            at our club meeting was a very exciting feeling.
          </p>
          <div className="mt-4">
            <div className="laptop:flex laptop:justify-between laptop:gap-4 ">
              <div>
                <img src={"/jeopardyQuestion.png"} alt="Login" />
                <p className="text-center text-gray-600">
                  Question and answer popup
                </p>
              </div>
              <div>
                <img src={"/jeopardyBuzzer.png"} alt="Channels" />
                <p className="text-center text-gray-600">Team buzzer</p>
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
      featured: false,
      url: "",
      github: "https://github.com/ddusichka/Image-Processor",
      shortDescription:
        "Image processor that can blur, sharpen, flip, and filter user-uploaded images.",
      longDescription:
        "Image processor capable of blurring, sharpening, flipping, and applying various color filters to user-uploaded images. User selects a file from their computer, applies various edits, and can save the resulting image. This was created for Northeastern University's CS3000: Object-Oriented Design.",
      cardPhoto: "/imageProcessor.png",
      coverPhoto: "/ImageProcessor.gif",
      skills: ["Java", "Java Swing", "MVC"],
      details: (
        <>
          <p>
            This is a pair-programmed project implemented using the Model, View,
            Controller design paradigm. It was developed iteratively, so only a
            few features were assigned at first but the goal was to keep our
            code adaptable to future needs. We accomplished this using the
            Command design pattern.
          </p>
          <p>
            This was my first project involving file input and output and also
            taught me a lot about image manipulation techniques. One aspect of
            the project was the ability to support multiple image types
            including .jpg, .png, .bmp, and .ppm files.
          </p>
          <p>
            This project also began with just a command-line interface, so users
            would upload files and execute text-based editing commands. This was
            functional but obviously not the best user experience since the user
            couldn&apos;t actually see what they were editing. The final
            iteration of this assignment was to develop a GUI using Java Swing.
            This was definitely one of the trickiest parts, but very rewarding
            since we could actually see the adjustments we were making to images
            in real-time.
          </p>
        </>
      ),
      future: (
        <p>
          In a future version of this project, I would love to redesign the GUI
          to look more modern, likely using a different framework. I would also
          love to integrate additional editing abilities - one that I think
          would be super cool is image compression like what I developed in my{" "}
          <Link className="text-[#ac3a4a]" href="/projects/seam-carver">
            Seam Carving application
          </Link>
          .
        </p>
      ),
    },
    {
      name: "Marble Solitaire",
      path: "marble-solitaire",
      emoji: "🃏",
      dates: "May 2022",
      deployed: false,
      featured: false,
      url: "",
      github: "https://github.com/ddusichka/Marble-Solitaire",
      shortDescription:
        "A marble solitaire game built with Java and the MVC design paradigm.",
      longDescription: `The Marble Solitaire project is an implementation of the classic board game also known as 'Peg Solitaire' 
      dating back to the 17th century. In this single-player game, the player moves marbles on a board, aiming to make valid moves to clear the board except for a single marble.\n\n
       Valid moves consist of jumping a marble orthogonally over an adjacent marble into an empty hole two positions away,
        resulting in the removal of the jumped marble.`,
      cardPhoto: "/marbleSolitaire.png",
      coverPhoto: "/vid.gif",
      skills: ["Java", "Java Swing"],
      details: (
        <>
          <p>
            This app was developed for CS 3000: Object-Oriented Design as a solo
            project meant to illustrate the Model-View-Controller paradigm. The
            first version of this app used only one board shape (known as
            English solitaire). The game was also only playable via the command
            line where the board state was drawn out using text.
          </p>
          <p>
            Future versions implemented new board shapes, including a Triangular
            and a European version. Following the MVC design pattern enabled me
            to create new models without affecting the rest of the code. Another
            addition was the graphical interface. This was developed using Java
            Swing. Just like how different classes implementing the Model
            interface were interchangeable, it was similarly easy to swap
            between Views.
          </p>
          <div className="mt-4">
            <div className="laptop:flex laptop:justify-between laptop:gap-4 ">
              <div>
                <img src={"/textSolitaire.png"} alt="Login" />
                <p className="text-center text-gray-600">Text-based gameplay</p>
              </div>
              <div>
                <img src={"/triangleSolitaire.png"} alt="Channels" />
                <p className="text-center text-gray-600">
                  Triangle solitaire board
                </p>
              </div>
              <div>
                <img src={"/europeanSolitaire.png"} alt="Channels" />
                <p className="text-center text-gray-600">
                  European solitaire board
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      future: null,
    },
    {
      name: "Maze Animator",
      path: "maze-animator",
      emoji: "🧩",
      dates: "April 2022",
      deployed: false,
      featured: false,
      url: "",
      github: "https://github.com/ddusichka/Maze-Animator",
      shortDescription:
        "A maze animation game that illustrates breadth-first and depth-first search.",
      longDescription:
        "This program generates random mazes for the user to solve manually. The user can also see solutions found via BFS (breadth-first search) or DFS (depth-first search) algorithms. This project was developed for Accelerated Fundamentals of Computer Science 2.",
      cardPhoto: "/maze.png",
      coverPhoto: "/mazeAnimation.gif",

      skills: ["Java"],
      details: (
        <>
          <p>
            This project was meant to teach us about graphs and relevant
            algorithms. Specifically, we used the concept of a minimum spanning
            tree to create the mazes, and then solved them using breadth-first
            and depth-first search.
          </p>
          <p>
            The program launches and animates the construction of a random maze
            (Kruskal&apos;s algorithm is used to create a minimum spanning
            tree). After this, the user is able to navigate through the maze via
            arrow keys, or can watch BFS/DFS solutions via keyboard shortcuts.
            Statistics are kept to show which solution is optimal.
          </p>
          <p>
            The user can control the shape of the generated maze, if they wish,
            by specifying if the maze should have mostly horizontal or mostly
            vertical edges. The color scheme of the board can also be changed to
            see vertices based on either their distance from the start or
            distance from the end, where red signifies being close to the
            specified point and blue represents being far.
          </p>
          <div className="mt-4">
            <div className="laptop:flex laptop:justify-around laptop:gap-12">
              <div>
                <img src={"/horizontalMaze.png"} alt="Horizontal Maze" />
                <p className="text-center text-gray-600">
                  Horizontal-biased maze
                </p>
              </div>
              <div>
                <img src={"/verticalMaze.png"} alt="Vertical Maze" />
                <p className="text-center text-gray-600">
                  Vertical-biased maze
                </p>
              </div>
              <div>
                <img src={"/coloredMaze.png"} alt="Vertical Maze" />
                <p className="text-center text-gray-600">
                  Maze colored by distance from start
                </p>
              </div>
            </div>
          </div>
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
      featured: false,
      url: "",
      github: "https://github.com/ddusichka/Seam-Carving",
      shortDescription:
        "An image compression application that uses content-aware image resizing.",
      longDescription:
        "Intelligently shrinks photos by removing the visually 'least interesting' seam. Uses content-aware image resizing algorithm to compress the image to its most important details; unlike cropping, entire parts of the image aren't lost. Created for Accelerated Fundamentals of Computer Science 2.",
      cardPhoto: "/seamCarving.png",
      coverPhoto: "/SeamCarving.gif",

      skills: ["Java"],
      details: (
        <>
          <p>
            I created this as a class project — the goal was to get practice
            implementing a complex algorithm and creating an interactive user
            interface. This project was daunting at first but taught me a lot
            about image compression and was very satisfying to complete.
          </p>
          <p>
            The first version of this project only removed seams without giving
            the user any controls. My partners and I revised it to display the
            seam being removed in red and give the user the ability to pause the
            animation. The user can also choose to remove only horizontal or
            only vertical seams by typing &quot;h&quot; or &quot;v&quot;
            respectively.
          </p>
          <div className="mt-4">
            <div className="laptop:flex laptop:justify-around laptop:gap-4 ">
              <div>
                <img src={"/seamHorizontal.gif"} alt="Login" />
                <p className="text-center text-gray-600">
                  Removing horizontal seams
                </p>
              </div>
              <div>
                <img src={"/seamVertical.gif"} alt="Channels" />
                <p className="text-center text-gray-600">
                  Removing vertical seams
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      future: (
        <>
          <p>
            If I ever have a chance to revisit this project, there&apos;s a good
            amount I would change. First, the code itself is all in one large
            file that is pretty hard to understand so I&apos;d start by putting
            each class in its own file. Additionally, there&apos;s some
            redundancy — we have some pairs of functions that handle vertical
            and horizontal seams separately, but these should be abstracted into
            one.
          </p>
          <p>
            Functionality wise, it would be cool to add the ability to add seams
            back in. I also think the ability to export a modified photo would
            be cool. Ideally, I&apos;d like to combine this functionality with
            my{" "}
            <Link className="text-[#ac3a4a]" href="/projects/image-processor">
              {"Image Processor project "}
            </Link>
            since it&apos;s a useful image manipulation technique.
          </p>
        </>
      ),
    },
  ],
  experience: [
    {
      position: "Software Development Co-op",
      company: "Blueport",
      location: "Boston, MA",
      image: "/blueport.png",
      date: "Jan 2023 - Present",
      linkText: "blueport.com",
      linkURL: "https://www.blueport.com/",
      bullets: [
        "Developing and refining C# microservice endpoints to power e-commerce sites",
        "Creating tables and procedures in SQL Server and Postgres to effectively manage e-commerce data",
        "Spearheading the company's tooling initiative by launching Retool development",
        "Developing 8 internal and client-facing Retool applications using SQL and JavaScript",
        "Documenting tool development processes, giving demos, and offering support to other developers",
      ],
      showMore: false,
      details: null,
    },
    {
      position: "Writer and Editor",
      company: "NU Sci Magazine",
      location: "Boston, MA",
      image: "/nusci.png",
      date: "Jan 2022 - Present",
      linkText: "nuscimagazine.com",
      linkURL: "https://nuscimagazine.com/",
      bullets: [
        "Writing 2 articles per semester on STEM topics for publication in Northeastern’s science magazine",
        "Editing 8 articles per semester and providing constructive feedback to writers",
      ],
      showMore: false,
    },
    {
      position: "Software Developer",
      company: "Code4Community",
      location: "Boston, MA",
      image: "/c4c.png",
      date: "Mar 2023 - Present",
      linkText: "c4cneu.com",
      linkURL: "https://www.c4cneu.com/",
      bullets: [
        "Developing code for a letter of recommendation web application for the Abdul Latif Jameel Poverty Action Lab",
        "Completing tickets, participating in code reviews, and collaborating with project managers and designers",
      ],
      showMore: false,
    },
    {
      position: "Discrete Structures TA",
      company: "Khoury College",
      location: "Boston, MA",
      image: "/khoury.png",
      date: "Aug 2022 - Dec 2022",
      linkText: "CS 1800 Course Page",
      linkURL: "https://course.ccs.neu.edu/cs1800f22/",
      bullets: [
        "Hosted 4+ office hours weekly, answered student questions, and explained topics in discrete mathematics",
        "Graded homework assignments and exams, provided encouraging feedback for improvement",
      ],
      showMore: false,
    },
    {
      position: "Volunteer Teacher",
      company: "Boston EcoScholars",
      location: "Boston, MA",
      image: "/ecoscholars.png",
      date: "Jan 2022 - May 2022",
      linkText: "Boston EcoScholars",
      linkURL: "https://neu.campuslabs.com/engage/organization/ecoscholars",
      bullets: [
        "Prepared interactive lessons on environmental science and climate change for K-5 students",
        "Taught these lessons to after-school classes of up to 15 students in the greater Boston area",
        "Anticipated the needs of students to resolve conflicts and challenges and foster effective learning",
      ],
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
