import { useState } from "react";

interface Props {
  setSection: React.Dispatch<React.SetStateAction<string>>;
  section: string;
}

export default function WikiContents({ setSection, section }: Props) {
  const [skillsOpened, setSkillsOpened] = useState(false);
  const [seeAlsoOpened, setSeeAlsoOpened] = useState(false);

  const scrollToComponent = (componentId: string) => {
    const element = document.getElementById(componentId);
    setSection(componentId);
    if (element) {
      element.scrollIntoView({
        behavior: "instant",
        block: "nearest",
        inline: "end",
      });
    }
  };

  return (
    <div>
      <h3 className="font-bold text-sm pt-9 pl-4 tracking-tight mb-1">
        Contents
      </h3>
      <hr className="w-content ml-4" />
      <ul className="text-sm pl-3 tracking-tight cursor-pointer">
        <li
          className={`${
            section === " " ? "font-bold" : "font-medium"
          } ml-1 mt-1`}
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
          className={`${section === "#Skills" ? "font-bold" : "font-medium"}`}
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
                  ? "font-bold text-black dark:text-gray-300"
                  : "text-blue-600"
              } py-0.5 `}
              onClick={() => scrollToComponent("#Programming_Language")}
            >
              Programming Languages
            </li>

            <li
              className={`${
                section === "#Frontend_Development"
                  ? "font-bold text-black dark:text-gray-300"
                  : "text-blue-600"
              } py-0.5`}
              onClick={() => scrollToComponent("#Frontend_Development")}
            >
              Front-end development
            </li>
            <li
              className={`${
                section === "#Backend_Development"
                  ? "font-bold text-black dark:text-gray-300"
                  : "text-blue-600"
              } py-0.5`}
              onClick={() => scrollToComponent("#Backend_Development")}
            >
              Back-end development
            </li>
            <li
              className={`${
                section === "#Database_and_DevOps"
                  ? "font-bold text-black dark:text-gray-300"
                  : "text-blue-600"
              } py-0.5`}
              onClick={() => scrollToComponent("#Database_and_DevOps")}
            >
              Database and DevOps
            </li>
            <li
              className={`${
                section === "#Currently_Learning"
                  ? "font-bold text-black dark:text-gray-300"
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
          className={`${section === "#See_Also" ? "font-bold" : "font-medium"}`}
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
                  ? "font-bold text-black dark:text-gray-300"
                  : "text-blue-600"
              } py-0.5 `}
              onClick={() => scrollToComponent("#HackerTab")}
            >
              HackerTab
            </li>
            <li
              className={`${
                section === "#Ollama"
                  ? "font-bold text-black dark:text-gray-300"
                  : "text-blue-600"
              } py-0.5 `}
              onClick={() => scrollToComponent("#Ollama")}
            >
              Ollama
            </li>
            <li
              className={`${
                section === "#Julia_Evans_Blog"
                  ? "font-bold text-black dark:text-gray-300"
                  : "text-blue-600"
              } py-0.5 `}
              onClick={() => scrollToComponent("#Julia_Evans_Blog")}
            >
              Julia Evans' blog
            </li>
            <li
              className={`${
                section === "#Astra_Laboratories"
                  ? "font-bold text-black dark:text-gray-300"
                  : "text-blue-600"
              } py-0.5 `}
              onClick={() => scrollToComponent("#Astra_Laboratories")}
            >
              Astra Laboratories
            </li>
          </ul>
        ) : null}
      </ul>
    </div>
  );
}
