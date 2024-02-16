import duckduckgoLogo from "../assets/duckduckgo.png";

export default function DuckDuckGoSearch() {
  return (
    <span className="flex flex-row">
      <img
        src={duckduckgoLogo}
        alt="duck duck go loco, a duck"
        className="size-10 mt-1.5 ml-[-15px] mr-[15px]"
      />
      <div className="w-screen sm:w-full sm:ml-5">
        <span className="w-[45rem] border-[1px] border-gray-300 h-10 mt-2 flex items-center dark:bg-gray-800 rounded-md b-shadow">
          <input
            type="text"
            placeholder=""
            defaultValue="Projects"
            className="justify-center w-screen sm:w-full dark:bg-gray-800 ml-2 text-sm"
          ></input>
          <button className="h-7 text-center font-bold text-xs px-2 w-content dark:bg-gray-800">
            <span className="material-symbols-outlined text-xl text-gray-400 dark:text-gray-200">
              search
            </span>
          </button>
        </span>
      </div>
    </span>
  );
}
