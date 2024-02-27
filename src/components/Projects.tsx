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
      } w-screen sm:w-full bg-white dark:bg-gray-900 dark:text-gray-200 pt-1 overflow-scroll`}
    >
      <div className="sm:px-10 sm:pl-24">
        <DuckDuckGoSearch />
        <div className="sm:ml-16 mt-1">
          <DuckBar tabClicked={tabClicked} setTabClicked={setTabClicked} />
        </div>
      </div>
      <hr className="w-full" />
      {tabClicked === "All" ? (
        <div className="sm:ml-[6.5rem] mt-2 mb-10 sm:pl-12">
          <ResultsContainer />
        </div>
      ) : tabClicked === "Images" ? (
        <div className="mt-2 mb-10 sm:ml-[-3rem] sm:pl-12">
          <DuckImages browserExpanded={browserExpanded} />
        </div>
      ) : (
        <div className="mt-2 mb-10 sm:ml-[-3rem] sm:pl-12">
          <DuckVideos />
        </div>
      )}
    </div>
  );
}
