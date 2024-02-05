import { Dispatch, SetStateAction } from "react";
import Tab from "./Tab";

interface Props {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export default function BrowserTabs({ activeTab, setActiveTab }: Props) {
  return (
    <ul className="relative flex flex-row">
      <nav className="ml-3 relative flex flex-row">
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
  );
}
