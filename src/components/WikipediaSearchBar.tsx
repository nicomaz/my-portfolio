export default function WikipediaSearchBar() {
  return (
    <div className="w-screen sm:w-full sm:ml-12">
      <span className="w-3/6 border-[0.3px] border-black h-7 mt-4 flex items-center dark:bg-gray-800">
        <span className="material-symbols-outlined text-xl text-gray-400 dark:text-gray-200">
          search
        </span>
        <input
          type="text"
          placeholder="Search Wikipedia"
          className="justify-center border-r-[0.3px] w-screen sm:w-full border-r-black dark:bg-gray-800"
        ></input>
        <button className="h-7 text-center font-bold text-xs px-2 w-content bg-gray-100 border-y-[0.3px] border-y-black dark:bg-gray-800">
          Search
        </button>
      </span>
    </div>
  );
}
