import IndivTab from "./IndivTab";

export default function TabsContainer() {
  return (
    <div className="h-[calc(100%-80px)] w-full bg-white flex flex-row gap-12 flex-wrap justify-center content-center">
      <IndivTab tabName="About me" />
      <IndivTab tabName="Skills" />
      <IndivTab tabName="Projects" />
    </div>
  );
}
