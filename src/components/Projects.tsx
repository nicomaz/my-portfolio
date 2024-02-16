import { useState } from "react";
import DuckBar from "./DuckBar";
import DuckDuckGoSearch from "./DuckDuckGoSearch";
import ResultsContainer from "./ResultsContainer";
import DuckImages from "./DuckImages";
import DuckVideos from "./DuckVideos";

interface Props {
  browserExpanded: boolean;
}

export default function Projects({ browserExpanded }: Props) {
  const [tabClicked, setTabClicked] = useState("All");

  return (
    <div
      className={` ${
        browserExpanded ? "h-full" : "h-[calc(100vh-15rem)] sm:h-[30rem]"
      } w-screen sm:w-full bg-white dark:bg-gray-900 dark:text-gray-200 rounded-b-xl pt-1 overflow-scroll sm:pl-24`}
    >
      <div className="sm:px-10">
        <DuckDuckGoSearch />
        <div className="sm:ml-16 mt-1">
          <DuckBar tabClicked={tabClicked} setTabClicked={setTabClicked} />
        </div>
      </div>
      <hr className="w-screen px-0 sm:ml-[-6rem]" />
      {tabClicked === "All" ? (
        <div className="sm:ml-[6.5rem] mt-2 mb-24">
          <ResultsContainer />
        </div>
      ) : tabClicked === "Images" ? (
        <div className="mt-2 mb-24 sm:ml-[-3rem]">
          <DuckImages browserExpanded={browserExpanded} />
        </div>
      ) : (
        <div className="mt-2 mb-24 sm:ml-[-3rem]">
          <DuckVideos />
        </div>
      )}
    </div>
  );
}
