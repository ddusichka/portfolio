import Link from "next/link";

const content = {
  pages: ["about", "experience", "projects", "articles"],
  skills: [
    { skill: "Java", image: "java.png" },
    { skill: "C#", image: "csharp.png" },
    { skill: "Python", image: "python.png" },
    { skill: "Go", image: "go.png" },
    { skill: "SQL", image: "sql.png" },
    { skill: "JavaScript", image: "javascript.png" },
    { skill: "TypeScript", image: "typescript.png" },
    { skill: "HTML/CSS", image: "htmlcss.png" },
  ],
  frameworks: [
    { skill: "React", image: "react.png" },
    { skill: "Next.js", image: "nextjs.png" },
    { skill: "Express", image: "express.png" },

    { skill: "Firebase", image: "firebase.png" },
    { skill: "MongoDB", image: "mongo.png" },
    { skill: "SQL Server", image: "mssqlserver.png" },

    { skill: "Git", image: "git.png" },
    { skill: "Docker", image: "docker.png" },
  ],
  projects: [
    {
      name: "Couplet",
      path: "couplet",
      emoji: "🎟️",
      dates: "January 2024 - April 2024",
      deployed: false,
      featured: true,
      url: "",
      shortDescription:
        "A mobile dating app that connects people through shared interests in events.",
      longDescription:
        'Couplet is a dating app that matches users based on shared interest in local events. This allows people to connect over shared interests and experiences, rather than just superficially connecting over profile pictures. Users create profiles and then can "like" events they\'re interested in attending. Users can also "like" other users, and if there\'s a mutual match, they can chat and see events they\'re both interested in, making it easier to plan a first date.',
      cardPhoto: "/coupletCover.png",
      coverPhotos: [
        "/coupletHome.png",
        "/coupletEvent.png",
        "/coupletEvents.png",
      ],
      skills: ["Go", "TypeScript", "React Native"],
      details: (
        <>
          <div className="tablet:flex justify-between">
            <div className="flex flex-col gap-2 mr-8">
              <p>
                This app was developed for real clients as part of Generate at
                Northeastern, a student-led product development studio. I worked
                with a team of 8 other engineers, as well as a team of
                designers, to collaboratively build an initial version of this
                app.
              </p>
              <p>
                The engineering team began by building the backend in Go,
                developing endpoints for user and event management. Once the
                designers created Figma mockups, we began building the front-end
                in React Native. I primarily worked on event-related
                functionality, building screens that show local events and allow
                users to react to them as shown in the screenshots above.
              </p>
              <p>
                This was my first time working on mobile development and I
                learned a lot about React Native and Expo! It was also great to
                work alongside a team of designers and mutually provide feedback
                to improve our product.
              </p>
            </div>
            <img src={"/coupletTeam.png"} className="h-80" />
            {/* <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vR8-5qGGcu8oBpTnWrf462Efjvabv7Hjvvg4-I8bs4YyXVkJdvjLLdjP27XiuLE_RU-zHwjnt_b2nlD/embed?start=true&loop=true&delayms=3000"
              width="600"
            ></iframe> */}
          </div>
        </>
      ),
    },
    {
      name: "Caits Curates",
      path: "caits-curates",
      emoji: "🎁",
      dates: "September 2023 - December 2023",
      deployed: false,
      featured: true,
      url: "",
      shortDescription:
        "A gift suggestion website that allows curator Cait to recommend gifts to users.",
      longDescription:
        "Caits Curates aims to help users find the perfect gift for their loved ones. Users can answer a few questions about the recipient and the occasion, and Cait will provide a curated list of gift suggestions. Users can then easily purchase gift suggestions from the retailer's website.",
      cardPhoto: "/caitsCover.png",
      coverPhotos: ["/caits.png"],
      skills: ["Go", "TypeScript", "React"],
      details: (
        <>
          <p>
            This app was developed for a real client named Cait through Generate
            at Northeastern, a student-led product development studio. I worked
            with a team of 7 other engineers, as well as a team of designers, to
            collaboratively build an initial version of this app.
          </p>
          <p>
            The engineering team began by building the backend in Go, developing
            endpoints for user, gift, and request management. Once the designers
            created Figma mockups, we began building the front-end using React
            and Tailwind. I primarily worked on gift and request-related
            functionality, including the gift response screen shown above.
          </p>
          <p>
            This was my first project with Generate and gave me good experience
            building an API in Go! It was also great to work alongside a team of
            designers and learn about the process of building a brand and a
            series of pages to complete the full product.
          </p>
        </>
      ),
      future: null,
    },
    {
      name: "Concert Match",
      path: "concert-match",
      emoji: "🎶",
      dates: "July 2023 - Present",
      deployed: false,
      featured: true,
      url: "",
      github: "https://github.com/ddusichka/concert-match-python",
      shortDescription:
        "A concert-finding web application for friends to find Ticketmaster events.",
      longDescription:
        "An in-progress concert-finding web application for friends to find concerts by their favorite artists. Users can import their Spotify libraries and then find local matching concerts using the Ticketmaster API. Users can favorite concerts that they would attend and can also identify mutual matches with friends!",
      cardPhoto: "/concertMatchCard.png",
      coverPhotos: ["/concertMatchNew.png"],
      skills: ["Python", "Django", "React"],
      details: (
        <>
          <p>
            My friends and I love going to concerts, and I wanted to make a more
            fun way to decide which ones we should go to. I also wanted to build
            my first solo project with a separate well-designed frontend and
            backend. I{" "}
            <a
              className="text-blue-900"
              href="https://github.com/ddusichka/concert-match/tree/main"
              target="_blank"
              rel="noopener noreferrer"
            >
              initially built this app using Express
            </a>{" "}
            so that I could learn the framework and improve my JavaScript. I put
            it on hold during the school year, revisited it, and decided I
            wanted to redesign it and add some core functionality. First, after
            learning Express, I decided it was time to try a new framework,
            namely Django. I also wanted to use Postgres insteads of MongoDB to
            better take advantage of relationships between different entities.
            Lastly, I wanted to make the Spotify integration a priority.
          </p>
          <p>
            The redevelopment of this app is still in progress (and early), but
            it currently supports event fetching via the Ticketmaster Discovery
            API, as well as Spotify authentication and library fetching. Then,
            overlapping artists within the user&apos;s library and the event
            lineup are identified. The next steps are to implement user
            accounts, a &quot;favoriting&quot; mechanism, and a more useful and
            aesthetic UI.
          </p>
          <p>
            The goal is to expose myself to more concerts, especially to artists
            with only a few saved songs in my library. I think it&apos;s awesome
            to go to small concerts before artists blow up, so the goal is to
            find more of these!
          </p>
        </>
      ),
      future: (
        <>
          <p>
            The redesign still requires a good amount of work to complete the
            base functionality. An additional nice-to-have would be the ability
            to track concerts a user actually attended, and add
            reviews/photos/setlists to serve as a digital concert scrapbook of
            sorts. It would also be cool to find ways to use AI for a new,
            smarter recommendation algorithm.
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
      url: "/",
      github: "https://github.com/ddusichka/portfolio",
      shortDescription:
        "A React portfolio highlighting my experience and projects.",
      longDescription:
        "This site you're on right now is a platform to showcase my work. This is my first project using Next.js and my first project that emphasizes mobile-friendly design.",
      cardPhoto: "/portfolio.png",
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
            remained mobile-friendly. I&apos;m still learning the ins and outs
            of CSS so this was pretty challenging at times, but ultimately
            I&apos;m happy with this first iteration!
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
          <p>Update: The articles page has been recently added!</p>
        </>
      ),
    },
    {
      name: "Chatterbox",
      path: "chatterbox",
      emoji: "💬",
      dates: "January - May 2023",
      deployed: true,
      featured: false,
      url: "https://chatterbox-io.netlify.app/",
      github: "https://github.com/ddusichka/message-board",
      shortDescription: "A channel-based, real-time web messaging app.",
      longDescription:
        "Chatterbox is a real-time messaging app similar to Slack, built with React and powered by Firebase. Users can connect effortlessly through channels by signing in anonymously, with Google, or with email and password. The user-friendly interface filters out inappropriate language, maintaining a positive environment.",
      cardPhoto: "/chatterbox.png",
      coverPhotos: ["/chatterbox.png"],
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
      featured: false,
      url: "",
      github: "https://github.com/ddusichka/jeopardy-v1",
      shortDescription:
        "A real-time, multiplayer Jeopardy game allowing teams to buzz in remotely.",
      longDescription:
        "This is a multiplayer Jeopardy game that allows players to buzz in via their own devices and play in real-time. It was built using React and Firebase. It allows multiple teams to compete, log in via their mobile devices, and buzz in to answer questions. It also keeps track of scoring.",
      cardPhoto: "/jeopardyCover.png",
      coverPhotos: ["/jeopardy.png"],
      skills: ["React", "Firebase", "HTML/CSS/JS"],
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
      coverPhotos: ["/ImageProcessor.gif"],
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
      coverPhotos: ["/vid.gif"],
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
      coverPhotos: ["/mazeAnimation.gif"],

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
      coverPhotos: ["/SeamCarving.gif"],
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
  // TODO: create functionality for multiple roles under same company

  experience: [
    {
      position: "Computer Science and Biology Student",
      shortPosition: "CS + Bio Student",
      company: "Northeastern University",
      location: "Boston, MA",
      category: "Academics",
      image: "/northeastern.png",
      date: "Sep 2021 - Present",
      linkText: "northeastern.edu",
      linkURL: "https://www.northeastern.edu/",
      bullets: [
        "Pursuing a BS in Computer Science and Biology",
        "University Honors Program, GPA 3.97/4.0",
        "Courses: Software Engineering, Algorithms and Data, Object-Oriented Design, Artificial Intelligence, Database Design, Foundations of Data Science, Accelerated Fundamentals of Computer Science I & II, Discrete Structures",
      ],
      showMore: false,
    },
    {
      position: "Software Technical Lead",
      shortPosition: "Software TL",
      company: "Generate Product Development",
      location: "Boston, MA",
      category: "Campus Experience",
      image: "/generate_logo.jpeg",
      date: "Aug 2024 - Present",
      linkText: "generatenu.com",
      linkURL: "https://generatenu.com/",
      bullets: [
        "Lead 6 engineers in engineering a cross-platform music review app; plan and lead weekly sprints",
        "Conduct code reviews and provide mentorship, utilizing Go, TypeScript, React Native for feature development",
      ],
      showMore: false,
    },
    {
      position: "Editor-in-Chief",
      company: "NU Sci Magazine",
      location: "Boston, MA",
      category: "Campus Experience",
      image: "/nusci.png",
      date: "May 2024 - Present",
      linkText: "nuscimagazine.com",
      linkURL: "https://nuscimagazine.com/",
      bullets: [
        "Shaping the creative direction of Northeastern’s student-run science magazine through 4 print issues",
        "Leading a team of 17 editors and 50+ writers and coordinating issue production with the executive board",
        "Editing 60+ articles per semester, providing feedback to refine content, clarity, accuracy, and engagement",
        "Selecting and arranging articles to create 44-page print issues",
        "Writing articles on topics relating to ecology, biology, health, and technology",
      ],
      showMore: false,
    },
    {
      position: "Professional Development for Co-op TA",
      shortPosition: "Professional Development TA",
      company: "Khoury College",
      location: "Boston, MA",
      category: "Campus Experience",
      image: "/khoury.png",
      date: "Sep 2024 - Present",
      linkText: "catalog.northeastern.edu",
      linkURL: "https://catalog.northeastern.edu/course-descriptions/cs/",
      bullets: [
        "Offering tailored advice for 100+ computer science undergraduates taking CS1210 during their first co-op job search",
        "Conducted 50+ resume reviews and 25+ mock interviews, boosting student confidence and job readiness",
      ],
      showMore: false,
    },
    {
      position: "Software Engineering Co-op",
      shortPosition: "SWE Co-op",
      company: "HubSpot",
      location: "Cambridge, MA",
      category: "Work Experience",
      image: "/hubspot.svg",
      date: "Jan 2024 - May 2024",
      linkText: "hubspot.com",
      linkURL: "https://www.hubspot.com/",
      bullets: [
        "Developed cron-based script scheduling API using Java, Dropwizard, and MySQL for triggering SQL scripts",
        "Built React interface using TypeScript and implemented scope-based gating to protect sensitive data",
        "Maintained ETL ingestion jobs using internal APIs, S3 buckets, & Snowflake for high-volume business intelligence needs",
      ],
      // TODO: remove showMore?
      showMore: false,
    },
    {
      position: "Software Developer",
      company: "Generate",
      location: "Boston, MA",
      category: "Campus Experience",
      image: "/generate.svg",
      date: "Mar 2023 - April 2024",
      linkText: "generatenu.com",
      linkURL: "https://generatenu.com/",
      bullets: [
        "Collaborated with developers and designers to build a gift recommendation platform for a real-world client",
        "Implemented Figma mockups using React, TypeScript, and Tailwind, creating an aesthetic, intuitive UI",
        "Assisted with architecting database schema, built and tested endpoints in Go for managing user and gift data",
      ],
      showMore: false,
    },

    {
      position: "Software Development Co-op",
      company: "Blueport",
      location: "Boston, MA",
      category: "Work Experience",
      image: "/blueport.png",
      date: "Jan 2023 - Dec 2023",
      linkText: "blueport.com",
      linkURL: "https://www.blueport.com/",
      bullets: [
        "Implemented and tested microservice endpoints in C# and Go to power e-commerce sites",
        "Developed 30+ procedures and tables in SQL Server and Postgres for efficient data management",
        "Spearheaded the company's tooling initiative by launching Retool development",
        "Developed 9 internal and client-facing Retool applications using SQL and JavaScript",
        "Documented tool development processes, gave demos, and offered support to other developers",
      ],
      showMore: false,
      details: null,
    },
    {
      position: "Software Developer",
      company: "Code4Community",
      location: "Boston, MA",
      category: "Campus Experience",
      image: "/c4c.png",
      date: "Mar 2023 - Dec 2023",
      linkText: "c4cneu.com",
      linkURL: "https://www.c4cneu.com/",
      bullets: [
        "Developed code for a letter of recommendation web application for the Abdul Latif Jameel Poverty Action Lab",
        "Completed tickets, participated in code reviews, and collaborated with project managers and designers",
      ],
      showMore: false,
    },
    {
      position: "Discrete Structures TA",
      company: "Khoury College",
      location: "Boston, MA",
      category: "Campus Experience",
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
      category: "Campus Experience",
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
  articles: [
    {
      title: "Ice, ice maybe",
      subtitle: "Impacts of declining sea ice on Arctic predator-prey dynamics",
      issue: "Issue 51: Polar",
      id: 51,
      date: "Spring 2022",
      summary:
        "This article discusses the implications of climate change on Arctic communities, specifically the altered relationship between polar bears and ringed seals. Rising temperatures are causing sea ice to melt, hurting seals who have had to adjust their spatial patterns and forcing polar bears to shift to different prey, representing how the Arctic community is being negatively impacted by climate change.",
      cardImage: "/issue51cover.png",
      articlepdf: "/issue51.pdf",
    },
    {
      title: "Seeing through trees",
      subtitle: "Transparent wood as next-generation glass",
      issue: "Issue 52: Clarity",
      id: 52,
      date: "Spring 2022",
      summary:
        'Researchers are developing a transparent wood alternative to traditional glass, addressing issues like thermal inefficiency, carbon dioxide emissions, and fragility. This wood-based "glass" is more thermally efficient, environmentally friendly in production, and durable, presenting a promising solution for energy-efficient and sustainable buildings.',
      cardImage: "/issue52cover.png",
      articlepdf: "/issue52.pdf",
    },
    {
      title: "The return of monkeypox",
      subtitle: "",
      issue: "Issue 53: Odyssey",
      id: 53,
      date: "Fall 2022",
      summary:
        "This article explains the history of monkeypox and the fight to prevent its spread during the 2022 outbreak. Monkeypox is closely related to smallpox, so the smallpox vaccine has been highly effective against both diseases; however, the eradication of smallpox means the vaccine is no longer administered, making people vulnerable to monkeypox.",
      cardImage: "/issue53cover.png",
      articlepdf: "/issue53.pdf",
    },
    {
      title: "With people at home, more space to roam",
      subtitle: "How COVID affected bird behavior",
      issue: "Issue 54: Reverb",
      id: 54,
      date: "Fall 2022",
      summary:
        "This article analyzes changes in bird behavior as a result of COVID-19. Reduced human travel and activity during the pandemic led to increased populations of some bird species, especially in urban areas, as well as some new, more effective birdsong patterns. However, the pandemic produced unexpected negative results for other bird communities, highlighting the delicate balance of ecological systems.",
      cardImage: "/issue54cover.png",
      articlepdf: "/issue54.pdf",
    },
    {
      title: "How to disappear",
      subtitle: "Glass frogs and a lesson on hemoglobin flow",
      issue: "Issue 55: Deviant",
      id: 55,
      date: "Spring 2023",
      summary:
        "This article highlights the glass frog, a species native to South American rainforests that showcases a unique form of camouflage by rendering its body virtually transparent when asleep. Duke University researchers discovered that these frogs strategically control hemoglobin flow, offering valuable insights into preventing blood clot formation in humans.",
      cardImage: "/issue55cover.png",
      articlepdf: "/issue55.pdf",
    },
    {
      title: "Of mice and mental health",
      subtitle: "How loss of social status leads to depression",
      issue: "Issue 56: Decay",
      id: 56,
      date: "Spring 2023",
      summary:
        "This article reveals how loss of social status triggers depression in mice, as revealed by a study at Zhejiang University School of Medicine. These researchers found that injecting the antidepressant ketamine reversed these symptoms, underscoring the utility of mice as a model for human depression and offering hope for improving human mental health outcomes.",
      cardImage: "/issue56cover.png",
      articlepdf: "/issue56.pdf",
    },
    {
      title: "Cracking the code behind TikTok’s ‘For You’ algorithm",
      subtitle: "",
      issue: "Issue 57: Entangled",
      id: 57,
      date: "Fall 2023",
      summary: `This article dives into TikTok's "For You" algorithm, which utilizes AI-generated content recommendations based on user interactions. Despite the algorithm's secret implementation details, users personify it, describing how it "gets to know" them, emphasizing the cultural and enigmatic intersection of technology and culture in today's digital age.`,
      cardImage: "/issue57cover.png",
      articlepdf: "/issue57.pdf",
    },
    {
      title: "The science of superstition",
      subtitle: "",
      issue: "Issue 58: Mirage",
      id: 58,
      date: "Fall 2023",
      summary:
        "This article explores how superstitions, such as pre-game rituals or reliance on good luck charms, often involve illogical causal relationships, creating an illusion of control and safety. Despite recognizing the limited logic, individuals tend to follow these beliefs, highlighting the human tendency to draw causation from coincidence and shedding light on the complex intersection of superstition and rationality.",
      cardImage: "/issue58cover.png",
      articlepdf: "/issue58.pdf",
    },
    {
      title: "Poison dart frogs",
      subtitle: "What doesn't kill you makes you stronger",
      issue: "Issue 59: Fractal",
      id: 59,
      date: "Spring 2024",
      summary:
        "This article explores how poison dart frogs manage to be deadly to predators but immune to their own poisonous defenses. Scientists have discovered toxin-absorbing molecules called alkaloids that make them resistant, with the potential to treat poisoned humans in cases such as overdoses.",
      cardImage: "/issue59cover.png",
      articlepdf: "/issue59.pdf",
    },
    {
      title: "Plants and the 'roots' of cognition",
      subtitle: "",
      issue: "Issue 60: Eclipse",
      id: 60,
      date: "Spring 2024",
      summary:
        "This article explores the phenomenon of plant intelligence which suggests that plants, despite lacking brains, exhibit forms of intelligence such as problem-solving, learning, and communication through bioelectricity and chemical signals. This emerging field, known as basal cognition, suggests that intelligence can exist in various forms across different organisms, challenging traditional views of cognition.",
      cardImage: "/issue60cover.png",
      articlepdf: "/issue60.pdf",
    },
    {
      title: "To dine or to (Door)Dash?",
      subtitle: "",
      issue: "Issue 61: Cascade",
      id: 61,
      date: "Fall 2024",
      summary:
        "This article discusses the rise of food delivery apps like DoorDash and their reverberating effects. These include health effects, but also touches on economic impacts and overall behavior changes as a result of a more sedentary, tech-powered lifestyle.",
      cardImage: "/issue61cover.png",
      articlepdf: "/issue61.pdf",
    },
    {
      title: 'Opinion: Changing the "tech bro" status quo',
      subtitle: "",
      issue: "Issue 62: Void",
      id: 62,
      date: "Fall 2024",
      summary:
        "This opinion piece discusses the male-dominated tech industry and its impacts on female engineers and technical leadership. It explores the origins of this trend and discusses it in the context of today's leading technology figures and companies, ultimately offering potential solutions for a more gender-balanced workforce.",
      cardImage: "/issue62cover.png",
      articlepdf: "/issue62.pdf",
    },
  ],
};

export default content;
