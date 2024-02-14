import IndivResult from "./IndivResult";
import githubLogo from "../assets/github-mark.png";
import interbyteLogo from "../assets/interbyteLogo.png";

export default function ResultsContainer() {
  return (
    <div className="flex flex-col gap-5">
      <IndivResult
        logo={githubLogo}
        alt="github logo"
        url="https://github.com/nicomaz/side-quest"
        firstLink="https://github.com"
        secondLink="&gt; nicomaz &gt; side-quest"
        title="sideQuest - GitHub"
        body="A cross-platform mobile application for exploring London through
      interactive quests built in React Native. Makes use of Firebase for
      mobile authentication and Cloud Firestore as a database to keep track of
      user progression, access quests and locations. Uses React Native Maps
      API to route users' to their next destination."
        technologies={[
          "React Native",
          "Firebase",
          "Cloud Firestore",
          "NativewindCSS",
          "Expo",
          "Kanban board",
          "Wireframing",
          "SCRUM",
        ]}
      />
      <IndivResult
        logo={interbyteLogo}
        alt="a pixelated globe"
        url="https://github.com/nicomaz/news-api"
        firstLink="https://github.com"
        secondLink="&gt; nicomaz &gt; news-api"
        title="InterByte API"
        body="A REST API that allows application data to be accessed programmatically. Database built using Postgres and JavaScript which allows for querying, seeding and updating. Following test driven development, I used Jest and Supertest for integration and unit testing. "
        technologies={[
          "Postgres",
          "JavaScript",
          "Express.js",
          "Jest",
          "Supertest",
          "MVC Pattern",
          "Kanban",
        ]}
      />
      <IndivResult
        logo={interbyteLogo}
        alt="a pixelated globe"
        url="https://interbyte.netlify.app/"
        firstLink="https://interbyte.netlify.app/"
        secondLink=""
        githubLink="https://github.com/nicomaz/byte-news"
        title="InterByte News"
        body="A news website that allows users to comment & like / dislike articles, delete comments, like / dislike comments and view articles. Uses a REST API built using PSQL and axios."
        technologies={["React", "Axios", "CSS", "Wireframing", "Vite"]}
      />
      <IndivResult
        logo={interbyteLogo}
        alt="a pixelated globe"
        url=""
        firstLink=""
        secondLink=""
        githubLink="https://github.com/nicomaz/portfolio"
        title="My Portfolio"
        body="My portfolio was built with inspiration from OS X. Mostly styled using TailwindCSS and animated using CSS. I wanted to make something creative and unique that would challenge my front-end skills while learning TypeScript."
        technologies={[
          "TypeScript",
          "React",
          "TailwindCSS",
          "CSS",
          "Wireframing",
          "Vite",
        ]}
      />
    </div>
  );
}
