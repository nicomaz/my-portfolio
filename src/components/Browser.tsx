import Draggable from "react-draggable";
import Buttons from "./Buttons";
import { useEffect, useState } from "react";
import BrowserTabs from "./BrowserTabs";
import Media from "react-media";
import BrowserMenu from "./BrowserMenu";
import TabsContainer from "./TabsContainer";
import SearchBar from "./SearchBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

interface Props {
  setBrowserOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBrowserMinimised: React.Dispatch<React.SetStateAction<boolean>>;
  browserOpen: boolean;
  browserMinimised: boolean;
}

export default function Browser({
  setBrowserMinimised,
  setBrowserOpen,
  browserMinimised,
  browserOpen,
}: Props) {
  const [activeTab, setActiveTab] = useState<string>("About Me");
  const [showTabs, setShowTabs] = useState<boolean>(false);
  const [browserExpanded, setBrowserExpanded] = useState<boolean>(false);
  const [section, setSection] = useState<string>("");

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  return (
    <Draggable handle=".handle">
      <div
        className={` ${
          browserMinimised && "z-[-1]"
        } flex justify-center sm:items-center absolute w-content h-content z-20`}
      >
        <div
          className={
            browserOpen
              ? browserMinimised && !browserExpanded
                ? "hidden-anim backdrop-blur-[1px] rounded-lg drop-shadow-3xl h-shadow border-[0.3px] border-gray-400 dark:bg-slate-900 bg-white/[0.8] absolute sm:relative"
                : browserExpanded
                ? browserMinimised
                  ? "hidden-anim backdrop-blur-[1px] rounded-lg drop-shadow-3xl h-shadow border-[0.3px] border-gray-400 dark:bg-slate-900 bg-white/[0.8] center absolute sm:relative"
                  : "mx-0 backdrop-blur-[1px] rounded-lg drop-shadow-3xl h-shadow border-[0.3px] border-gray-400 dark:bg-slate-900 bg-white/[0.8] center sm:relative w-screen h-[calc(100vh-111px)] w-full sm:h-[calc(100vh-120px)]"
                : "w-screen h-[calc(100vh-7rem)] sm:h-5/6 sm:w-[70rem] sm:mx-2 backdrop-blur-[1px] rounded-lg drop-shadow-3xl h-shadow border-[0.3px] border-gray-400 dark:bg-slate-900 bg-white/[0.8] sm:relative"
              : "hidden z-[-1]"
          }
        >
          <Media queries={{ small: { maxWidth: 599 } }}>
            {(matches) =>
              matches.small ? (
                <div>
                  <div className="flex flex-row bg-[#ccd4e8] w-full h-[2.5rem] rounded-t-lg">
                    <Buttons
                      setWindowOpen={setBrowserOpen}
                      setWindowMinimised={setBrowserMinimised}
                      setWindowExpanded={setBrowserExpanded}
                      windowExpanded={browserExpanded}
                    />

                    <BrowserMenu
                      setShowTabs={setShowTabs}
                      showTabs={showTabs}
                    />

                    <div className="w-full bg-[#ccd4e8] dark:bg-slate-600 h-[3rem] absolute bottom-10 top-shadow">
                      <SearchBar activeTab={activeTab} section={section} />
                    </div>
                  </div>
                  {showTabs ? (
                    <TabsContainer
                      setActiveTab={setActiveTab}
                      setShowTabs={setShowTabs}
                    />
                  ) : activeTab === "About Me" ? (
                    <AboutMe
                      setSection={setSection}
                      section={section}
                      browserExpanded={browserExpanded}
                    />
                  ) : (
                    <Projects browserExpanded={browserExpanded} />
                  )}
                </div>
              ) : (
                <>
                  <div className="flex flex-row bg-[#ccd4e8] dark:bg-slate-900 w-full h-[2.5rem] rounded-t-lg">
                    <span className="handle w-[calc(100%-5rem)] col-span-3 h-10 ml-20 absolute" />
                    <Buttons
                      setWindowOpen={setBrowserOpen}
                      setWindowMinimised={setBrowserMinimised}
                      setWindowExpanded={setBrowserExpanded}
                      windowExpanded={browserExpanded}
                    />

                    <BrowserTabs
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    />
                  </div>

                  <div className="bg-blue-200 dark:bg-blue-900 w-full h-[2.5rem] z-30 relative top-shadow">
                    <SearchBar activeTab={activeTab} section={section} />
                  </div>
                  {activeTab === "About Me" ? (
                    <AboutMe
                      setSection={setSection}
                      section={section}
                      browserExpanded={browserExpanded}
                    />
                  ) : (
                    <Projects browserExpanded={browserExpanded} />
                  )}
                </>
              )
            }
          </Media>
        </div>
      </div>
    </Draggable>
  );
}
