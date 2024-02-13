import IndivTab from "./IndivTab";

interface Props {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setShowTabs: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TabsContainer({ setActiveTab, setShowTabs }: Props) {
  return (
    <div className="h-[calc(100%-80px)] w-full bg-white flex flex-row gap-12 flex-wrap justify-center content-center">
      <div
        onClick={() => {
          setActiveTab("About Me");
          setShowTabs(false);
        }}
      >
        <IndivTab tabName="About Me" />
      </div>
      <div
        onClick={() => {
          setActiveTab("Skills");
          setShowTabs(false);
        }}
      >
        <IndivTab tabName="Skills" />
      </div>
      <div
        onClick={() => {
          setActiveTab("Projects");
          setShowTabs(false);
        }}
      >
        <IndivTab tabName="Projects" />
      </div>
    </div>
  );
}
