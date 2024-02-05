import Draggable from "react-draggable";
import Buttons from "./Buttons";
import Tab from "./Tab";
import { useState } from "react";

export default function Browser() {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <Draggable handle=".handle">
      <div className="xl:w-4/6 xl:h-4/6 mx-2 h-[calc(100%-2rem)] sm:h-4/6 backdrop-blur-[1px] rounded-lg drop-shadow-3xl h-shadow border-[0.3px] border-gray-400 absolute">
        <div className="flex flex-row bg-[#ccd4e8] w-full h-[2rem] rounded-t-lg relative">
          <Buttons />
          <ul className="relative flex flex-row tabs">
            <nav className="ml-3 relative flex flex-row tabs">
              <Tab
                tabName="About Me"
                setActiveTab={setActiveTab}
                activeTab={activeTab}
              />
              <Tab
                tabName="Skills"
                setActiveTab={setActiveTab}
                activeTab={activeTab}
              />
              <Tab
                tabName="Projects"
                setActiveTab={setActiveTab}
                activeTab={activeTab}
              />
            </nav>
          </ul>
        </div>
        <div className="bg-gradient-to-t bg-[#c5dcfc] w-full h-[2.5rem] z-30 relative top-shadow" />
      </div>
    </Draggable>
  );
}
