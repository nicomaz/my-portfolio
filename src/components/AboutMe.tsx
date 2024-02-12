import wikipediaLogo from "../assets/wikipedia.png";
import wikipediaName from "../assets/wikipedia-logo.png";
import wikipediaSub from "../assets/wikipedia-sub.png";
import { skills } from "../utils/data";
import { useState } from "react";

interface Props {
  setSection: React.Dispatch<React.SetStateAction<string>>;
  section: string;
}

export default function AboutMe({ setSection, section }: Props) {
  const [skillsOpened, setSkillsOpened] = useState(false);
  const [seeAlsoOpened, setSeeAlsoOpened] = useState(false);

  const scrollToComponent = (componentId: string) => {
    const element = document.getElementById(componentId);
    setSection(componentId);
    if (element) {
      element.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

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
          <h3 className="font-bold text-sm pt-9 pl-4 tracking-tight">
            Contents
          </h3>
          <hr className="w-content ml-4" />
          <nav>
            <ul className="text-sm pl-3 tracking-tight">
              <li
                className="ml-1"
                onClick={() => {
                  scrollToComponent(" ");
                }}
              >
                (Top)
              </li>
              <li
                onClick={() => {
                  setSkillsOpened(!skillsOpened);
                  scrollToComponent("#Skills");
                }}
                className={`${
                  section === "#Skills" ? "font-bold" : "font-medium"
                }`}
              >
                <span className="material-symbols-outlined text-base">
                  {skillsOpened ? "expand_more" : "navigate_next"}
                </span>
                Skills
              </li>
              {skillsOpened ? (
                <ul className="pl-2">
                  <li
                    className={`${
                      section === "#Programming_Language"
                        ? "font-bold text-black"
                        : "text-blue-600"
                    } py-0.5 `}
                    onClick={() => scrollToComponent("#Programming_Language")}
                  >
                    Programming Languages
                  </li>

                  <li
                    className={`${
                      section === "#Frontend_Development"
                        ? "font-bold text-black"
                        : "text-blue-600"
                    } py-0.5`}
                    onClick={() => scrollToComponent("#Frontend_Development")}
                  >
                    Front-end development
                  </li>
                  <li
                    className={`${
                      section === "#Backend_Development"
                        ? "font-bold text-black"
                        : "text-blue-600"
                    } py-0.5`}
                    onClick={() => scrollToComponent("#Backend_Development")}
                  >
                    Back-end development
                  </li>
                  <li
                    className={`${
                      section === "#Database_and_DevOps"
                        ? "font-bold text-black"
                        : "text-blue-600"
                    } py-0.5`}
                    onClick={() => scrollToComponent("#Database_and_DevOps")}
                  >
                    Database and DevOps
                  </li>
                  <li
                    className={`${
                      section === "#Currently_Learning"
                        ? "font-bold text-black"
                        : "text-blue-600"
                    } py-0.5`}
                    onClick={() => scrollToComponent("#Currently_Learning")}
                  >
                    Currently Learning
                  </li>
                </ul>
              ) : null}
              <li
                onClick={() => {
                  setSeeAlsoOpened(!seeAlsoOpened);
                  scrollToComponent("#See_Also");
                }}
                className={`${
                  section === "#See_Also" ? "font-bold" : "font-medium"
                }`}
              >
                <span className="material-symbols-outlined text-base">
                  {seeAlsoOpened ? "expand_more" : "navigate_next"}
                </span>
                See Also
              </li>
              {seeAlsoOpened ? (
                <ul className="pl-2">
                  <li
                    className={`${
                      section === "#HackerTab"
                        ? "font-bold text-black"
                        : "text-blue-600"
                    } py-0.5 `}
                    onClick={() => scrollToComponent("#HackerTab")}
                  >
                    HackerTab
                  </li>
                  <li
                    className={`${
                      section === "#Ollama"
                        ? "font-bold text-black"
                        : "text-blue-600"
                    } py-0.5 `}
                    onClick={() => scrollToComponent("#Ollama")}
                  >
                    Ollama
                  </li>
                  <li
                    className={`${
                      section === "#Julia_Evans_Blog"
                        ? "font-bold text-black"
                        : "text-blue-600"
                    } py-0.5 `}
                    onClick={() => scrollToComponent("#Julia_Evans_Blog")}
                  >
                    Julia Evans' blog
                  </li>
                  <li
                    className={`${
                      section === "#Astra_Laboratories"
                        ? "font-bold text-black"
                        : "text-blue-600"
                    } py-0.5 `}
                    onClick={() => scrollToComponent("#Astra_Laboratories")}
                  >
                    Astra Laboratories
                  </li>
                </ul>
              ) : null}
            </ul>
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
            <div className="pr-4">
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

              <h5
                className="text-[0.95rem] font-semibold mt-1 pt-2"
                id="#Programming_Language"
              >
                Programming languages
              </h5>

              <ul className="grid grid-cols-3 list-disc ml-3">
                {skills.map(
                  (skill) =>
                    skill.concern === "Language" && <li>{skill.name}</li>
                )}
              </ul>

              <h5
                className="text-[0.95rem] font-semibold mt-3"
                id="#Frontend_Development"
              >
                Front-end development
              </h5>
              <ul className="grid grid-cols-3 list-disc ml-3">
                {skills.map(
                  (skill) => skill.concern === "FE" && <li>{skill.name}</li>
                )}
              </ul>
              <h5
                className="text-[0.95rem] font-semibold mt-3"
                id="#Backend_Development"
              >
                Back-end development
              </h5>

              <ul className="grid grid-cols-3 list-disc ml-3">
                {skills.map(
                  (skill) => skill.concern === "BE" && <li>{skill.name}</li>
                )}
              </ul>
              <h5
                className="text-[0.95rem] font-semibold mt-3"
                id="#Database_and_DevOps"
              >
                Databases and DevOps
              </h5>
              <ul className="grid grid-cols-3 list-disc ml-3">
                {skills.map(
                  (skill) => skill.concern === "DevOps" && <li>{skill.name}</li>
                )}
              </ul>

              <h5
                className="text-[0.95rem] font-semibold mt-3"
                id="#Currently_Learning"
              >
                Currently learning
              </h5>

              <ul className="grid grid-cols-3 list-disc ml-3">
                {skills.map(
                  (skill) =>
                    skill.concern === "Learning" && <li>{skill.name}</li>
                )}
              </ul>
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
                    possibilities and future of software.{" "}
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-200 w-56 h-72 border-[0.5px] border-gray-800 text-center p-1">
              <h3 className="font-semibold">Nicola Mazuryk</h3>
            </div>
          </div>
        </div>
        <div className="w-full h-[5rem]"></div>
      </div>
    </div>
  );
}
