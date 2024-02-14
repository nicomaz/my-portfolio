import DuckBar from "./DuckBar";
import DuckDuckGoSearch from "./DuckDuckGoSearch";
import ResultsContainer from "./ResultsContainer";

interface Props {
  browserExpanded: boolean;
}

export default function Projects({ browserExpanded }: Props) {
  return (
    <div
      className={` ${
        browserExpanded ? "h-full" : "h-[calc(100vh-15rem)] sm:h-[30rem]"
      } w-screen sm:w-full bg-white dark:bg-gray-900 dark:text-gray-200 rounded-b-xl pt-1 overflow-scroll`}
    >
      <div className="px-10">
        <DuckDuckGoSearch />
        <div className="ml-16 mt-1">
          <DuckBar />
        </div>
      </div>
      <hr className="w-full px-0 ml-0" />
      <div className="ml-[6.5rem] mt-2">
        <ResultsContainer />
      </div>
    </div>
  );
}
