import Draggable from "react-draggable";
import Buttons from "./Buttons";
import { useState } from "react";
import BrowserTabs from "./BrowserTabs";
import Media from "react-media";
import BrowserMenu from "./BrowserMenu";
import TabsContainer from "./TabsContainer";
import SearchBar from "./SearchBar";

export default function Browser() {
  const [activeTab, setActiveTab] = useState<string>("About Me");
  const [showTabs, setShowTabs] = useState<boolean>(false);

  return (
    <Draggable handle=".handle">
      <div className="xl:w-4/6 xl:h-4/6 mx-2 h-5/6 w-full sm:h-4/6 backdrop-blur-[1px] rounded-lg drop-shadow-3xl h-shadow border-[0.3px] border-gray-400 dark:bg-slate-900 bg-white/[0.8] absolute">
        <Media queries={{ small: { maxWidth: 599 } }}>
          {(matches) =>
            matches.small ? (
              <div className="flex flex-row bg-[#ccd4e8] w-full h-[2.5rem] rounded-t-lg relative">
                <Buttons />
              </div>
            ) : (
              <>
                <div className="flex flex-row bg-[#ccd4e8] w-full h-[2.5rem] rounded-t-lg relative">
                  <Buttons />
                  <BrowserTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                </div>
                <div className="bg-gradient-to-t bg-[#c5dcfc] w-full h-[2.5rem] z-30 relative top-shadow">
                  <SearchBar activeTab={activeTab} />
                </div>
              </>
            )
          }
        </Media>

        <Media queries={{ small: { maxWidth: 599 } }}>
          {(matches) =>
            matches.small ? (
              <>
                <BrowserMenu setShowTabs={setShowTabs} showTabs={showTabs} />
                <div className="w-full bg-[#ccd4e8] h-[3rem] absolute bottom-10 top-shadow">
                  <SearchBar activeTab={activeTab} />
                </div>
              </>
            ) : null
          }
        </Media>

        {showTabs ? <TabsContainer /> : null}
      </div>
    </Draggable>
  );
}
