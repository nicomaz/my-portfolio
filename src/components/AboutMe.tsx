import WikiContents from "./WikiContents";
import WikiList from "./WikiList";
import WikiSidebar from "./WikiSidebar";
import WikiSeeAlso from "./WikiSeeAlso";
import Media from "react-media";
import WikipediaLogo from "./WikipediaLogo";
import WikipediaSearchBar from "./WikipediaSearchBar";
import wikipediaName from "../assets/wikipedia-logo.png";

interface Props {
  setSection: React.Dispatch<React.SetStateAction<string>>;
  section: string;
  browserExpanded: boolean;
}

export default function AboutMe({
  setSection,
  section,
  browserExpanded,
}: Props) {
  return (
    <div
      className={` ${
        browserExpanded ? "h-full" : "h-[calc(100vh-15rem)] sm:h-[30rem]"
      } w-screen sm:w-full bg-white dark:bg-gray-900 dark:text-gray-200 rounded-b-xl pt-1 sm:px-14 px-2 overflow-scroll`}
    >
      <div className="grid sm:grid-cols-[max-content_1fr]">
        <Media queries={{ small: { maxWidth: 599 } }}>
          {(matches) =>
            matches.small ? (
              <span className="flex flex-row justify-between">
                <img
                  src={wikipediaName}
                  alt="text saying wikipedia"
                  className="h-4 mt-3 sm:mt-4 dark:invert"
                />
                <span className="material-symbols-outlined text-xl text-gray-400 dark:text-gray-200">
                  search
                </span>
              </span>
            ) : (
              <>
                <WikipediaLogo />
                <WikipediaSearchBar />
              </>
            )
          }
        </Media>

        <Media queries={{ small: { maxWidth: 599 } }}>
          {(matches) =>
            matches.small ? null : (
              <div className="mt-2 sticky block bottom-0 left-0 top-0 right-0 h-content overflow-y-auto overflow-x-hidden self-start">
                <nav>
                  <WikiContents setSection={setSection} section={section} />
                </nav>
              </div>
            )
          }
        </Media>

        <div className="sm:ml-12 sm:mt-2 mt-6">
          <span className="flex flex-row justify-between">
            <h1 className="text-2xl font-medium font-serif tracking-tight">
              Nicola Mazuryk
            </h1>
            <span className="sm:flex flex-row tracking-tight hidden">
              <span className="font-bold text-sm tracking-tight">
                2 Languages
              </span>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </span>
          </span>
          <hr className="sm:w-content w-0 mb-2 sm:mb-0" />
          <span className="flex flex-row justify-between tracking-tight">
            <span className=" flex flex-row gap-3">
              <h3 className="text-sm my-1">Article</h3>
              <h3 className="text-sm my-1">Talk</h3>
            </span>
            <span className="sm:flex flex-row gap-2 tracking-tight hidden ">
              <h3 className="text-sm my-1">Read</h3>
              <h3 className="text-sm my-1">View source</h3>
            </span>
          </span>
          <hr className="w-content" />
          <span className="material-symbols-outlined sm:hidden text-lg mt-2">
            translate
          </span>
          <span className="text-xs hidden sm:block sm:mt-2">
            From Wikipedia, the free encyclopedia
          </span>
          <div className="text-sm mt-2 grid grid-cols-[1fr_max-content]">
            <main className="sm:pr-4 text-pretty">
              <div>
                With experience in building full-stack applications & websites,
                I possess a range of skills that allow me to create modern
                solutions to challenging problems.
              </div>
              <div className="mt-2">
                A quick and adaptable learner, I use my background in the
                humanities to research, decipher and debug complex systems. I
                have a keen interest in all things open-source and my goal is to
                consistently contribute to open source software in the future.
              </div>
              <h4 className="text-xl font-medium font-serif mt-4" id="#Skills">
                Skills
              </h4>
              <hr className="w-content" />
              <WikiList
                id="#Programming_Language"
                title="Programming languages"
                concern="Language"
              />
              <WikiList
                id="#Frontend_Development"
                title="Front-end development"
                concern="FE"
              />
              <WikiList
                id="#Backend_Development"
                title="Back-end development"
                concern="BE"
              />
              <WikiList
                id="#Database_and_DevOps"
                title="Databases and DevOps"
                concern="DevOps"
              />

              <WikiList
                id="#Currently_Learning"
                title=" Currently learning"
                concern="Learning"
              />

              <h4
                className="text-xl font-medium font-serif mt-4"
                id="#See_Also"
              >
                See Also
              </h4>
              <hr className="w-content" />
              <span className="text-xs italic">
                Some projects, blogs and the like that I'm interested in
              </span>
              <ul className="list-disc ml-3 mt-3">
                <WikiSeeAlso
                  id="#HackerTab"
                  url="https://hackertab.dev/"
                  title="HackerTab"
                  body=" Free and open-source homepage extension that I like to use to explore articles, github repos and conversations surrounding JavaScript, TypeScript, AI and Machine Learning."
                />
                <WikiSeeAlso
                  id="#Ollama"
                  url="https://github.com/ollama/ollama"
                  title="Ollama"
                  body="  A really cool tool that allows you to run open-source LLMS
                    locally."
                />
                <WikiSeeAlso
                  id="#Julia_Evans_Blog"
                  url="https://jvns.ca/"
                  title="Julia Evans' blog"
                  body=" No one can explain programming concepts like Julia Evans can! My favourite blog, especially when it comes to 'How computer thing works'"
                />
                <WikiSeeAlso
                  id="#Astra_Laboratories"
                  url="https://www.withastra.org/"
                  title="Astra Laboratories"
                  body="A non profit that builds software to serve people. Their app Verena was a big inspiritation in how I see the possibilities and future of software."
                />
              </ul>
            </main>
            <Media queries={{ small: { maxWidth: 599 } }}>
              {(matches) => (matches.small ? null : <WikiSidebar />)}
            </Media>
          </div>
        </div>
      </div>
      <footer>
        <hr className="w-content mt-6 mb-3" />
        <span className="text-xs py-5">
          Icons by{" "}
          <a href="https://icons8.com/" className="underline">
            Icons8.
          </a>
        </span>
      </footer>
    </div>
  );
}
