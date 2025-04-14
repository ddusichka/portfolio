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
}

export enum ArticleCategory {
  Technology = "Technology",
  Ecology = "Ecology",
  Health = "Health",
  Psychology = "Psychology",
  Engineering = "Engineering",
}

export const categoryColors: Record<ArticleCategory, string> = {
  [ArticleCategory.Technology]: "bg-blue-200",
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
  },
  {
    title: "Cracking the code behind TikTok’s ‘For You’ algorithm",
    subtitle: "",
    issue: "Issue 57: Entangled",
    id: 57,
    date: "Fall 2023",
    category: ArticleCategory.Technology,
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
    category: ArticleCategory.Psychology,
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
    category: ArticleCategory.Ecology,
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
    category: ArticleCategory.Ecology,
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
    category: ArticleCategory.Technology,
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
    category: ArticleCategory.Technology,
    summary:
      "This opinion piece discusses the male-dominated tech industry and its impacts on female engineers and technical leadership. It explores the origins of this trend and discusses it in the context of today's leading technology figures and companies, ultimately offering potential solutions for a more gender-balanced workforce.",
    cardImage: "/issue62cover.png",
    articlepdf: "/issue62.pdf",
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
  },
];

export interface Editorial {
  title: string;
  subtitle?: string;
  issue: string;
  id: number;
  date: string;
  summary: string;
  cardImage: string;
  articlepdf?: string;
}
export const editorials = [
  {
    id: 63,
    theme: "Enigma",
    title: "Finding Meaning in Mystery",
    coverImage: "/images/issues/issue63-cover.jpg",
    link: "https://nuscimagazine.com/letter-from-editor-enigma",
    date: "Spring 2024",
    excerpt:
      "In this letter, I explore how the pursuit of knowledge often begins with embracing the enigmas that surround us, and how science thrives on curiosity about the unknown.",
    pdfLink: "/pdfs/letter-enigma.pdf", // Optional
  },
  {
    id: 62,
    theme: "Void",
    title: "Exploring Empty Spaces",
    coverImage: "/images/issues/issue62-cover.jpg",
    link: "https://nuscimagazine.com/letter-from-editor-void",
    date: "Winter 2023",
    excerpt:
      "This letter discusses how empty spaces - from quantum vacuums to the gaps in our knowledge - are not truly empty but full of potential and opportunity for discovery.",
  },
];
