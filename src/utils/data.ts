import interByteHomePage from "../assets/InterByte-home.png";
import interByteArticles from "../assets/Interbyte-HomeArticles.png";
import interByteIndivArticle from "../assets/Interbyte-Article.png";
import interByteComments from "../assets/InterByte-comments.png";
import interByteLoggedOut from "../assets/InterByte-loggedOut.png";
import interByteTopics from "../assets/InterByteTopics.png";
import sideQuestProfile from "../assets/SideQuestProfile.png";
import sideQuestHomePage from "../assets/SideQuestHomePage.png";
import sideQuestQuest from "../assets/SideQuestQuest.png";
import sideQuestProgression from "../assets/SideQuestProgression.png";
import sideQuestSignIn from "../assets/SideQuestSignIn.png";
import sideQuestSignUp from "../assets/SideQuestSignUp.png";
import sideQuestCard from "../assets/SideQuestCard.png";
import CV from "../assets/Nicola_Mazuryk_CV.pdf";

type NoteInfo = {
  title: string;
  header: string;
  date: string;
  shortDate: string;
  body: string[];
  id: number;
};

type Skills = {
  name: string;
  concern: string;
};

type ProjectImages = {
  photo: string;
  alt: string;
  title: string;
  projectLink: string;
  githubLink?: string;
  id: number;
};

type ContactInfo = {
  title: string;
  link?: string;
  body?: string;
  note?: string;
};

export const NoteInfo: NoteInfo[] = [
  {
    title: "Hello 👋",
    date: "February 1, 2024, 4:26pm",
    shortDate: "1/2/24",
    header: "Hello 👋,  I'm Nicola, a Fullstack developer.",
    body: [
      "I build creative, useful and immersive software.",
      "I am invested in writing code that develops my skills and understanding of software while unlocking doors for old and new users alike. With a focus on collective user experience, I like to engage in conversations surrounding UI design philosophy, open-source software and accessibility. ",
      "My main toolkit consists of React, TailwindCSS and PSQL; I love to learn new technologies, programming languages, and frameworks. I’m currently learning Typescript and honing in my React skills. ",
    ],
    id: 1,
  },
  {
    title: "Welcome to my desktop!",
    date: "January 23, 2024, 1:21pm",
    shortDate: "23/1/24",
    header: "Welcome to my desktop!",
    body: [
      "Feel free to traverse my desktop. You can learn more about me and my project using Firefox.",
      "Want to reach out to me? Contacts will have all you need.",
      "Suddenly feel the urge to solve a math problem? There's even a calculator.",
    ],
    id: 2,
  },
  {
    title: "Canned tomatoes",
    date: "December 14, 2023, 8:32am",
    shortDate: "23/1/24",
    header: "Canned tomatoes",
    body: ["Broccoli", "Basmati rice", "Milk", "Chocolates!!!"],
    id: 3,
  },
];

export const skills: Skills[] = [
  { name: "React", concern: "FE" },
  { name: "React Native", concern: "FE" },
  { name: "JavaScript", concern: "Language" },
  { name: "Axios", concern: "BE" },
  { name: "Express.JS", concern: "BE" },
  { name: "PSQL", concern: "DevOps" },
  { name: "TailWindCSS", concern: "FE" },
  { name: "HTML & CSS", concern: "FE" },
  { name: "TypeScript", concern: "Language" },
  { name: "Node.JS", concern: "BE" },
  { name: "Firebase", concern: "DevOps" },
  { name: "Figma", concern: "FE" },
  { name: "Agile methodologies", concern: "DevOps" },
  { name: "Kanban", concern: "DevOps" },
  { name: "Jest", concern: "BE" },
  { name: "Python", concern: "Learning" },
  { name: "Redux", concern: "Learning" },
];

export const projectImages: ProjectImages[] = [
  {
    photo: interByteHomePage,
    alt: "homepage with singular article",
    title: "Interbyte home page",
    projectLink: "https://interbyte.netlify.app/",
    githubLink: "https://github.com/nicomaz/byte-news",
    id: 1,
  },
  {
    photo: interByteArticles,
    alt: "homepage with articles",
    title: "Interbyte articles",
    projectLink: "https://interbyte.netlify.app/",
    githubLink: "https://github.com/nicomaz/byte-news",
    id: 2,
  },
  {
    photo: interByteComments,
    alt: "comments on article",
    title: "Interbyte comment section",
    projectLink: "https://interbyte.netlify.app/",
    githubLink: "https://github.com/nicomaz/byte-news",
    id: 3,
  },
  {
    photo: interByteIndivArticle,
    alt: "individual article",
    title: "Interbyte individual article",
    projectLink: "https://interbyte.netlify.app/",
    githubLink: "https://github.com/nicomaz/byte-news",
    id: 4,
  },
  {
    photo: interByteLoggedOut,
    alt: "comment section asking user to log in to comment",
    title: "Interbyte logged out user",
    projectLink: "https://interbyte.netlify.app/",
    githubLink: "https://github.com/nicomaz/byte-news",
    id: 5,
  },
  {
    photo: interByteTopics,
    alt: "topics dropdown with coding, football and cooking",
    title: "Interbyte sort by topics",
    projectLink: "https://interbyte.netlify.app/",
    githubLink: "https://github.com/nicomaz/byte-news",
    id: 6,
  },
  {
    photo: sideQuestSignUp,
    alt: "page asking to pick a piece and username",
    title: "SideQuest sign up page",
    projectLink: "https://github.com/nicomaz/side-quest",
    id: 7,
  },
  {
    photo: sideQuestSignIn,
    alt: "page asking for phone number and verification code",
    title: "SideQuest sign in page",
    projectLink: "https://github.com/nicomaz/side-quest",
    id: 8,
  },
  {
    photo: sideQuestHomePage,
    alt: "home page with a map routing to different places in london",
    title: "SideQuest home page",
    projectLink: "https://github.com/nicomaz/side-quest",
    id: 9,
  },
  {
    photo: sideQuestProfile,
    alt: "a profile with users' piece, phone number, scrolls noting progression, their completed quests and a sign out button",
    title: "SideQuest profile",
    projectLink: "https://github.com/nicomaz/side-quest",
    id: 10,
  },
  {
    photo: sideQuestProgression,
    alt: "cards with different quests that are locked and unlocked",
    title: "SideQuest user progression",
    projectLink: "https://github.com/nicomaz/side-quest",
    id: 12,
  },
  {
    photo: sideQuestQuest,
    alt: "two questions, with inputs for answers. one with a red box and one with a green box",
    title: "SideQuest quest questions",
    projectLink: "https://github.com/nicomaz/side-quest",
    id: 13,
  },
  {
    photo: sideQuestCard,
    alt: "a card on top of the home pages' map denoting the quest the user has clicked",
    title: "SideQuest quest clicked on map",
    projectLink: "https://github.com/nicomaz/side-quest",
    id: 14,
  },
];

export const ContactInfo: ContactInfo[] = [
  { title: "Email", body: "nicolamazuryk@gmail.com", note: "Click on my email to copy"},
  {
    title: "GitHub",
    body: "nicomaz",
    link: "https://github.com/nicomaz/",
    note: "Check out my projects on github!",
  },
  {
    title: "LinkedIn",
    body: "nicolamazuryk",
    link: "https://www.linkedin.com/in/nicolamazuryk/",
    note: "Feel free to connect with me on LinkedIn",
  },
  {
    title: "Resume",
    link: CV,
    note: "Click to download my resume",
    body: "Nicola_Mazuryk_CV.pdf",
  },
];
