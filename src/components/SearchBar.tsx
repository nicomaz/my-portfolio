interface Props {
  activeTab: string;
  section: string;
}

export default function SearchBar({ activeTab, section }: Props) {
  return (
    <div className="flex flex-row justify-center">
      <label
        className="mt-2 w-full justify-center flex flex-row rounded"
        htmlFor="url"
      >
        <input
          className="sm:w-4/6 w-5/6 rounded text-base sm:text-sm h-8 sm:h-6 pl-2 dark:bg-slate-800 dark:text-white"
          placeholder="Search or enter address"
          type="text"
          name="url"
          value={
            activeTab === "About Me"
              ? `https://en.wikipedia.org/wiki/Nicola_Mazuryk${section}`
              : "https://duckduckgo.com/?t=ffab&q=projects&ia=web"
          }
          defaultValue={
            activeTab === "About Me"
              ? "https://en.wikipedia.org/wiki/Nicola_Mazuryk"
              : activeTab === "Skills"
              ? "https://en.wikipedia.org/wiki/Skills"
              : "https://duckduckgo.com/?t=ffab&q=projects&ia=web"
          }
        />
      </label>
    </div>
  );
}
