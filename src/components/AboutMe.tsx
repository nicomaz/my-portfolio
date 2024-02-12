import wikipediaLogo from "../assets/wikipedia.png";
import wikipediaName from "../assets/wikipedia-logo.png";
import wikipediaSub from "../assets/wikipedia-sub.png";
import WikiContents from "./WikiContents";
import WikiList from "./WikiList";
import WikiSidebar from "./WikiSidebar";

interface Props {
  setSection: React.Dispatch<React.SetStateAction<string>>;
  section: string;
}

export default function AboutMe({ setSection, section }: Props) {
  return (
    <div className="w-full h-[30rem] bg-white rounded-b-xl pt-1 px-14 overflow-scroll">
      <div className="grid grid-cols-[max-content_1fr]">
        <span className="flex flex-row" id=" ">
          <img src={wikipediaLogo} alt="wikipedia logo" className="size-14" />
          <span className="flex flex-col ml-1">
            <img
              src={wikipediaName}
              alt="text saying wikipedia"
              className="h-4 mt-4"
            />
            <img
              src={wikipediaSub}
              alt="text saying 'The Free Encyclopedia'"
              className="h-2 mt-1 ml-1"
            />
          </span>
        </span>
        <div className="w-full ml-12">
          <span className="w-3/6 border-[0.3px] border-black h-7 mt-4 flex items-center">
            <span className="material-symbols-outlined text-xl text-gray-400">
              search
            </span>
            <input
              type="text"
              placeholder="Search Wikipedia"
              className="justify-center border-r-[0.3px] w-full border-r-black"
            ></input>
            <button className="h-7 text-center font-bold text-xs px-2 w-content bg-gray-100 border-y-[0.3px] border-y-black">
              Search
            </button>
          </span>
        </div>
        <div className="mt-2 sticky block bottom-0 left-0 top-0 right-0 h-content overflow-y-auto overflow-x-hidden self-start">
          <nav>
            <WikiContents setSection={setSection} section={section} />
          </nav>
        </div>
        <div className="ml-12 mt-2">
          <span className="flex flex-row justify-between">
            <h1 className="text-2xl font-medium font-serif tracking-tight">
              Nicola Mazuryk
            </h1>
            <span className="flex flex-row tracking-tight">
              <span className="font-bold text-sm tracking-tight">
                2 Languages
              </span>
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </span>
          </span>
          <hr className="w-content" />
          <span className="flex flex-row justify-between tracking-tight">
            <span className=" flex flex-row gap-3">
              <h3 className="text-sm mt-1">Article</h3>
              <h3 className="text-sm mt-1">Talk</h3>
            </span>
            <span className="flex flex-row gap-2 tracking-tight">
              <h3 className="text-sm mt-1">Read</h3>
              <h3 className="text-sm mt-1">View source</h3>
            </span>
          </span>
          <hr className="w-content" />
          <span className="text-xs">From Wikipedia, the free encyclopedia</span>
          <div className="text-sm mt-2 grid grid-cols-[1fr_max-content]">
            <main className="pr-4 text-pretty">
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
                <li className="mb-2" id="#HackerTab">
                  <a
                    href="https://hackertab.dev/"
                    target="_blank"
                    className="text-blue-600 font-semibold"
                  >
                    HackerTab
                  </a>
                  <p>
                    Free and open-source homepage extension that I like to use
                    to explore articles, github repos and conversations
                    surrounding JavaScript, TypeScript, AI and Machine Learning.
                  </p>
                </li>
                <li className="mb-2" id="#Ollama">
                  <a
                    href="https://github.com/ollama/ollama"
                    target="_blank"
                    className="text-blue-600 font-semibold"
                  >
                    Ollama
                  </a>
                  <p>
                    A really cool tool that allows you to run open-source LLMS
                    locally.
                  </p>
                </li>
                <li className="mb-2" id="#Julia_Evans_Blog">
                  <a
                    href="https://jvns.ca/"
                    target="_blank"
                    className="text-blue-600 font-semibold"
                  >
                    Julia Evans' blog
                  </a>
                  <p>
                    No one can explain programming concepts like Julia Evans
                    can! My favourite blog, especially when it comes to 'How
                    computer thing work'
                  </p>
                </li>
                <li className="mb-2" id="#Astra_Laboratories">
                  <a
                    href="https://www.withastra.org/"
                    target="_blank"
                    className="text-blue-600 font-semibold"
                  >
                    Astra Laboratories
                  </a>
                  <p>
                    A non profit that builds software to serve people. Their app
                    Verena was a big inspiritation in how I see the
                    possibilities and future of software.
                  </p>
                </li>
              </ul>
            </main>
            <WikiSidebar />
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
