import DuckDuckGoSearch from "./DuckDuckGoSearch";

interface Props {
  browserExpanded: boolean;
}

export default function Projects({ browserExpanded }: Props) {
  return (
    <div
      className={` ${
        browserExpanded ? "h-full" : "h-[calc(100vh-15rem)] sm:h-[30rem]"
      } w-screen sm:w-full bg-white dark:bg-gray-900 dark:text-gray-200 rounded-b-xl pt-1 sm:px-14 px-2 overflow-scroll`}
    >
      <DuckDuckGoSearch />
    </div>
  );
}
