import IndivTab from "./IndivTab";
import aboutPreview from "../assets/about-preview.png";
import projectsPreview from "../assets/projects-preview.png";

interface Props {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setShowTabs: React.Dispatch<React.SetStateAction<boolean>>;
  activeTab: string;
}

export default function TabsContainer({
  setActiveTab,
  setShowTabs,
  activeTab,
}: Props) {
  return (
    <div className="h-[calc(100vh-12rem)] w-full bg-white dark:bg-slate-800 dark:text-gray-100 flex flex-row gap-12 flex-wrap justify-center content-center relative">
      <div className="w-full h-12 bg-slate-600 absolute top-0 text-center py-3 grid grid-cols-3 font-semibold">
        <div>&nbsp;</div>
        <div className="drop-shadow-2xl text-center">Open Tabs</div>
        <div className="mr-4 text-right" onClick={() => setShowTabs(false)}>
          Done
        </div>
      </div>
      <div
        onClick={() => {
          setActiveTab("About Me");
          setShowTabs(false);
        }}
      >
        <IndivTab
          tabName="About Me"
          website=" — Wikipedia"
          image={aboutPreview}
          alt="screenshot of about page"
          activeTab={activeTab}
        />
      </div>
      <div
        onClick={() => {
          setActiveTab("Projects");
          setShowTabs(false);
        }}
      >
        <IndivTab
          tabName="Projects"
          website=" — DuckDuckGo"
          image={projectsPreview}
          alt="screenshot of projects page"
          activeTab={activeTab}
        />
      </div>
    </div>
  );
}
