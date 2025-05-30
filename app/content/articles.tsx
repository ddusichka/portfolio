import Link from "next/link";
import { ReactNode } from "react";
import Hyperlink from "../components/Articles/Hyperlink";

export interface Article {
  title: string;
  subtitle: string;
  issue: string;
  id: number;
  date: string;
  category: ArticleCategory;
  summary: string;
  cardImage: string;
  articlepdf: string;
  plaintext: ReactNode;
}

export enum ArticleCategory {
  Technology = "Technology",
  Ecology = "Ecology",
  Health = "Health",
  Psychology = "Psychology",
  Engineering = "Engineering",
}

export const categoryEmojis: Record<ArticleCategory, string> = {
  [ArticleCategory.Technology]: "💻",
  [ArticleCategory.Ecology]: "🌳",
  [ArticleCategory.Health]: "🩺",
  [ArticleCategory.Psychology]: "🧠",
  [ArticleCategory.Engineering]: "⚙️",
};

export const categoryColors: Record<ArticleCategory, string> = {
  [ArticleCategory.Technology]: "bg-blue-100",
  [ArticleCategory.Ecology]: "bg-green-200",
  [ArticleCategory.Health]: "bg-red-200",
  [ArticleCategory.Psychology]: "bg-purple-300",
  [ArticleCategory.Engineering]: "bg-orange-200",
};

export const articles: Article[] = [
  {
    title: "Ice, ice maybe",
    subtitle: "Impacts of declining sea ice on Arctic predator-prey dynamics",
    issue: "Issue 51: Polar",
    id: 51,
    date: "Spring 2022",
    category: ArticleCategory.Ecology,
    summary:
      "This article discusses the implications of climate change on Arctic communities, specifically the altered relationship between polar bears and ringed seals. Rising temperatures are causing sea ice to melt, hurting seals who have had to adjust their spatial patterns and forcing polar bears to shift to different prey, representing how the Arctic community is being negatively impacted by climate change.",
    cardImage: "/issue51cover.png",
    articlepdf: "/issue51.pdf",
    plaintext: <></>,
  },
  {
    title: "Seeing through trees",
    subtitle: "Transparent wood as next-generation glass",
    issue: "Issue 52: Clarity",
    id: 52,
    date: "Spring 2022",
    category: ArticleCategory.Engineering,
    summary:
      'Researchers are developing a transparent wood alternative to traditional glass, addressing issues like thermal inefficiency, carbon dioxide emissions, and fragility. This wood-based "glass" is more thermally efficient, environmentally friendly in production, and durable, presenting a promising solution for energy-efficient and sustainable buildings.',
    cardImage: "/issue52cover.png",
    articlepdf: "/issue52.pdf",
    plaintext: (
      <>
        <div></div>
      </>
    ),
  },
  {
    title: "The return of monkeypox",
    subtitle: "",
    issue: "Issue 53: Odyssey",
    id: 53,
    date: "Fall 2022",
    category: ArticleCategory.Health,
    summary:
      "This article explains the history of monkeypox and the fight to prevent its spread during the 2022 outbreak. Monkeypox is closely related to smallpox, so the smallpox vaccine has been highly effective against both diseases; however, the eradication of smallpox means the vaccine is no longer administered, making people vulnerable to monkeypox.",
    cardImage: "/issue53cover.png",
    articlepdf: "/issue53.pdf",
    plaintext: <></>,
  },
  {
    title: "With people at home, more space to roam",
    subtitle: "How COVID affected bird behavior",
    issue: "Issue 54: Reverb",
    id: 54,
    date: "Fall 2022",
    category: ArticleCategory.Ecology,
    summary:
      "This article analyzes changes in bird behavior as a result of COVID-19. Reduced human travel and activity during the pandemic led to increased populations of some bird species, especially in urban areas, as well as some new, more effective birdsong patterns. However, the pandemic produced unexpected negative results for other bird communities, highlighting the delicate balance of ecological systems.",
    cardImage: "/issue54cover.png",
    articlepdf: "/issue54.pdf",
    plaintext: <></>,
  },
  {
    title: "How to disappear",
    subtitle: "Glass frogs and a lesson on hemoglobin flow",
    issue: "Issue 55: Deviant",
    id: 55,
    date: "Spring 2023",
    category: ArticleCategory.Ecology,
    summary:
      "This article highlights the glass frog, a species native to South American rainforests that showcases a unique form of camouflage by rendering its body virtually transparent when asleep. Duke University researchers discovered that these frogs strategically control hemoglobin flow, offering valuable insights into preventing blood clot formation in humans.",
    cardImage: "/issue55cover.png",
    articlepdf: "/issue55.pdf",
    plaintext: <></>,
  },
  {
    title: "Of mice and mental health",
    subtitle: "How loss of social status leads to depression",
    issue: "Issue 56: Decay",
    id: 56,
    date: "Spring 2023",
    category: ArticleCategory.Psychology,
    summary:
      "This article reveals how loss of social status triggers depression in mice, as revealed by a study at Zhejiang University School of Medicine. These researchers found that injecting the antidepressant ketamine reversed these symptoms, underscoring the utility of mice as a model for human depression and offering hope for improving human mental health outcomes.",
    cardImage: "/issue56cover.png",
    articlepdf: "/issue56.pdf",
    plaintext: <></>,
  },
  {
    title: "Cracking the code behind TikTok's ‘For You' algorithm",
    subtitle: "",
    issue: "Issue 57: Entangled",
    id: 57,
    date: "Fall 2023",
    category: ArticleCategory.Technology,
    summary: `This article dives into TikTok's "For You" algorithm, which utilizes AI-generated content recommendations based on user interactions. Despite the algorithm's secret implementation details, users personify it, describing how it "gets to know" them, emphasizing the cultural and enigmatic intersection of technology and culture in today's digital age.`,
    cardImage: "/issue57cover.png",
    articlepdf: "/issue57.pdf",
    plaintext: <></>,
  },
  {
    title: "The science of superstition",
    subtitle: "",
    issue: "Issue 58: Mirage",
    id: 58,
    date: "Fall 2023",
    category: ArticleCategory.Psychology,
    summary:
      "This article explores how superstitions, such as pre-game rituals or reliance on good luck charms, often involve illogical causal relationships, creating an illusion of control and safety. Despite recognizing the limited logic, individuals tend to follow these beliefs, highlighting the human tendency to draw causation from coincidence and shedding light on the complex intersection of superstition and rationality.",
    cardImage: "/issue58cover.png",
    articlepdf: "/issue58.pdf",
    plaintext: <></>,
  },
  {
    title: "Poison dart frogs",
    subtitle: "What doesn't kill you makes you stronger",
    issue: "Issue 59: Fractal",
    id: 59,
    date: "Spring 2024",
    category: ArticleCategory.Ecology,
    summary:
      "This article explores how poison dart frogs manage to be deadly to predators but immune to their own poisonous defenses. Scientists have discovered toxin-absorbing molecules called alkaloids that make them resistant, with the potential to treat poisoned humans in cases such as overdoses.",
    cardImage: "/issue59cover.png",
    articlepdf: "/issue59.pdf",
    plaintext: <></>,
  },
  {
    title: "Plants and the 'roots' of cognition",
    subtitle: "",
    issue: "Issue 60: Eclipse",
    id: 60,
    date: "Spring 2024",
    category: ArticleCategory.Ecology,
    summary:
      "This article explores the phenomenon of plant intelligence which suggests that plants, despite lacking brains, exhibit forms of intelligence such as problem-solving, learning, and communication through bioelectricity and chemical signals. This emerging field, known as basal cognition, suggests that intelligence can exist in various forms across different organisms, challenging traditional views of cognition.",
    cardImage: "/issue60cover.png",
    articlepdf: "/issue60.pdf",
    plaintext: <></>,
  },
  {
    title: "To dine or to (Door)Dash?",
    subtitle: "",
    issue: "Issue 61: Cascade",
    id: 61,
    date: "Fall 2024",
    category: ArticleCategory.Technology,
    summary:
      "This article discusses the rise of food delivery apps like DoorDash and their reverberating effects. These include health effects, but also touches on economic impacts and overall behavior changes as a result of a more sedentary, tech-powered lifestyle.",
    cardImage: "/issue61cover.png",
    articlepdf: "/issue61.pdf",
    plaintext: <></>,
  },
  {
    title: 'Opinion: Changing the "tech bro" status quo',
    subtitle: "",
    issue: "Issue 62: Void",
    id: 62,
    date: "Fall 2024",
    category: ArticleCategory.Technology,
    summary:
      "This opinion piece discusses the male-dominated tech industry and its impacts on female engineers and technical leadership. It explores the origins of this trend and discusses it in the context of today's leading technology figures and companies, ultimately offering potential solutions for a more gender-balanced workforce.",
    cardImage: "/issue62cover.png",
    articlepdf: "/issue62.pdf",
    plaintext: <></>,
  },
  {
    title: "Getting Pretty Thirsty",
    subtitle: "ChatGPT's hidden water footprint",
    issue: "Issue 63: Enigma",
    id: 63,
    date: "Spring 2025",
    category: ArticleCategory.Technology,
    summary:
      "This piece discusses the impact of AI on our water supply. Data centers require a lot of electricity to run, much of which is water-generated, and they require cooling to prevent overheating. This article discusses the growing water demands and ways to mitigate them in the face of our expanding AI usage.",
    cardImage: "/issue63cover.png",
    articlepdf: "/issue63.pdf",
    plaintext: <></>,
  },
  {
    title: "Nautical networking",
    subtitle: "Undersea fiber-optic cables",
    issue: "Issue 64: Harmony",
    id: 64,
    date: "Spring 2025",
    category: ArticleCategory.Technology,
    // TODO: update this summary
    summary:
      "This piece discusses the existence and importance of physical cables in the ocean that support our global networking. This vital infrastructure supports instant communication and financial transactions, and faces threats.",
    cardImage: "/issue64cover.png",
    articlepdf: "/issue64.pdf",
    plaintext: (
      <>
        <p>
          While it often feels like the internet operates in an invisible
          “cloud” in the sky, it&apos;s actually the opposite — it&apos;s
          powered within the depths of the oceans. Complex hardware underlies
          all software, and global networking is no exception. The internet
          relies on submarine fiber-optic cables on the seafloor that form an
          interconnected highway system for data.
        </p>
        <p>
          Submarine cables enable everyday communication across the world and
          support global economies by processing
          <Hyperlink
            href="https://doi.org/10.1126/science.adi3038"
            text="trillions of dollars"
          />
          in daily transactions. Additionally,
          <Hyperlink
            href="https://doi.org/10.1080/00167428.2020.1773266"
            text="our networking and data needs are only increasing"
          />
          with the development of new technologies like artificial intelligence,
          software-as-a-service, and smart devices comprising the Internet of
          Things. The cables are controlled by individual governments and
          private corporations, highlighting a lack of centralized regulation
          over a vital global infrastructure.
        </p>
        <p>
          The first submarine cables were built in the 1850s using copper to
          support the telegraph. Today&apos;s modern
          <Hyperlink
            href="https://doi.org/10.1007/s11023-024-09683-z"
            text="fiber-optic cables"
          />
        </p>
      </>
    ),
  },
];

export interface Editorial {
  id: number;
  theme: string;
  coverImage: string;
  date: string;
  content: string[];
  pdf: string;
}
export const editorials: Editorial[] = [
  {
    id: 64,
    theme: "Harmony",
    coverImage: "/issue64cover.png",
    date: "Spring 2025",
    pdf: "/64lfte.pdf",
    content: [
      "It's nearly impossible to go a day without interacting with someone — a roommate, professor, barista, stranger on the train, or creator on the internet. Our lives are woven together through countless small moments, reminders that we aren't just individuals, but parts of a larger whole. These parts are not necessarily symmetrical, and that's the beauty of harmony.",
      "Science mirrors this principle, and no single discipline holds all the answers. A biologist, a chemist, and a physicist will each define “life” differently, but their combined perspectives create a more comprehensive understanding of the world. Some of the most groundbreaking discoveries emerge from this intellectual harmony, forging new fields like physical chemistry and astrobiology.",
      "Just as science thrives on collaboration, so does society. When one group suffers, the effects ripple outward. We see this in our interconnected economy, our political alliances, and our individual capacity for empathy. In times of uncertainty, division can feel inevitable — but progress depends on recognizing what unites us. Lasting solutions will emerge not from opposition but from collaboration, where we listen, find common ground, and build something greater together. In difficult times, returning to shared truths can help steady ourselves. Science is no exception. Communicating science clearly, honestly, and thoughtfully is not just an academic exercise; it's a way to remain grounded, build bridges, and ensure that knowledge continues to benefit everyone.",
      "This issue explores harmony in its many forms. We investigate gravitational waves and extraterrestrial life. We explore the intersection of science and politics amidst a new U.S. administration. We dive into musical harmony, uncovering how the brain interprets music from rock anthems to classic pop earworms. We also examine new bioengineering methods, from engineered blood vessels to 3D-printed organs. And, we look to nature, studying harmony within animal communities and the broader relationship between climate change and our natural world.",
      "For my final issue as editor-in-chief, I want to thank our writers, editors, designers, and photographers for bringing this magazine to life. I am also deeply grateful to our e-board, outreach, social media, and web teams — the supportive threads holding this magazine together. NU Sci has been a home for me, a space where collaboration and curiosity flourish. I hope this issue reflects the beautiful harmony within the scientific community at Northeastern and beyond.",
    ],
  },
  {
    id: 63,
    theme: "Enigma",
    coverImage: "/issue63cover.png",
    date: "Spring 2025",
    pdf: "/63lfte.pdf",
    content: [
      "I love solving jigsaw puzzles, but I have one golden rule — I can't look at the picture on the box. My friends tease me for taking the longer path, but to me, it's more satisfying to navigate on my own, testing pieces (and making mistakes) until they eventually fit. This way, you can't see the result from the beginning. Instead, you work piece by piece until you finally see the bigger picture.",
      "Science works the same way. There's no guide or answer key — no “picture” to follow. It's a series of unknowns waiting to be connected. These enigmas give us something to work towards, rewarding us with “aha moments” that eventually lead to new questions.",
      "Take black holes, for example. Scientists have had evidence of their existence for over a century, but capturing an image of one seemed impossible. Black holes swallow light, making them invisible. But researchers persevered, developing the Event Horizon Telescope to aggregate data from observatories worldwide. Finally, in 2019, they revealed the first-ever image of a black hole, turning a long-standing enigma into a groundbreaking discovery. And still, we've only scratched the surface of black holes and their secrets, giving us new avenues for further research.",
      "This issue of NU Sci uncovers enigmas all around us. We ask if sibling birth order impacts personality, and examine discoveries relating to gut health and molecular aging. We look at cultural phenomena like parasocialism and nepotism alongside neurological processes like memory sorting. We investigate whether or not animals have morals, explore possible treatments for ALS, and even discuss the potential existence of a new planet.",
      "Thank you to our writers, editors, designers, and photographers for contributing their creativity and passion. I also thank our e-board members and the software, social media, and outreach teams working hard to make this possible. I hope these pages help you untangle enigmas in science and beyond, but more importantly, give you the confidence to persist in the face of unknown answers.",
    ],
  },
  {
    id: 62,
    theme: "Void",
    coverImage: "/issue62cover.png",
    date: "Fall 2024",
    pdf: "/62lfte.pdf",
    content: [
      "My favorite part of sending a voice message is the suspense after it's sent. Did it actually go through – or has it slipped into the “void”? My friends and I joke about this digital limbo, a place of emptiness floating beyond the bounds of retrieval in some eerie, unreachable dimension.",
      "The void represents something lost, missing or simply unknown. Once in the void, what is gone often cannot be retrieved. Yet this loss, paradoxically, offers a fresh start. In this sense, the void can be an opportunity for growth and may not be as bleak as it seems at first glance.",
      "Acknowledging the voids around us, whether personal or societal, can help us bridge knowledge gaps and reach mutual understanding with each other. In science, identifying voids in our knowledge drives innovation and unearths solutions to our pressing issues. In the American political climate, many feel a void in representation and policy that leaves them dissatisfied. Personal voids exist too — for me, the impending thought of graduation and losing the familiar bubble of my college environment is scary, but it also represents a fresh start: a new life chapter with a stronger sense of independence. Pinpointing precisely what's missing is essential for making meaningful progress and lasting solutions.",
      "This issue of NU Sci explores voids across science and society. We investigate brain plasticity, sensory deprivation, and intrusive thoughts. We reflect on the impact of technology on art and human empathy, alongside philosophical questions of consciousness and the block universe theory. Finally, we delve into nature's mysteries, from the depths of the Mariana Trench to the phenomenon of disappearing stars.",
      "I'm grateful for our writers, editors, designers, and photographers, along with the web and software, marketing, and outreach teams that make this possible. To our readers, I hope these pages inspire you to reflect on the voids around you. Voids are less empty than they seem — let's approach them not with fear, but with the curiosity to uncover what's possible.",
    ],
  },
  {
    id: 61,
    theme: "Cascade",
    coverImage: "/issue61cover.png",
    date: "Fall 2024",
    pdf: "/61lfte.pdf",
    content: [
      "In a quiet, sterile Japanese laboratory in 1987, Yoshizumi Ishino and his team discovered a strange genetic sequencing result that would forever change biology. A sequence of palindromic nucleotides repeated itself, like a section of DNA mistakenly copy-pasted too many times. Intrigued, yet unable to explain this, they quickly documented the anomaly and moved on.",
      "These repeats, later coined 'clustered regularly interspaced short palindromic repeats' (CRISPR), reveal a clever bacterial immune system that defends against viruses by cutting up their genetic information. In recent decades, CRISPR has been harnessed by humans to enhance crops, alter harmful species through gene drives, and even edit human genes to treat conditions like sickle cell disease. More uses have been envisioned, but ethical debates continue over CRISPR's potential consequences.",
      "Cascades are all around us. Stumbling upon this inherently simple DNA sequence triggered a cascade in biology and beyond, reminding us how even the smallest discoveries can have far-reaching consequences. Other cascades are more deliberate, like grassroots political movements hoping to inspire change, or big technology companies hoping to dominate by developing new AI-powered features. All cascades, whether unintentional or engineered, illustrate the profound cause-and-effect dynamics that shape our world and remind us to thoroughly consider the implications of advancements before proceeding.",
      "This issue of NU Sci reflects cascades of curiosity and human progress. We investigate long-term impacts of COVID-19 on adolescent psychology plus a new solution to antibiotic resistance. Mysteries in space are explored alongside the effects of powerful mobile apps like DoorDash and Spotify. We also examine the intertwined relationship between the human and natural worlds, as well as contributors to the climate crisis and innovative ways to mitigate their effects.",
      "I thank our writers, designers, photographers, and the web and software, marketing, and outreach teams that make this possible. To our readers, I hope these pages inspire you to recognize cascades in your lives, helping you pinpoint seemingly small moments that have had a much greater reach than you expected.",
    ],
  },
];
