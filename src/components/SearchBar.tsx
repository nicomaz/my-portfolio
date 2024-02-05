interface Props {
  activeTab: string;
}

export default function SearchBar({ activeTab }: Props) {
  return (
    <div className="flex flex-row justify-center">
      <label
        className="mt-2 w-full justify-center flex flex-row rounded"
        htmlFor="url"
      >
        <input
          className="w-4/6 rounded text-sm h-6 pl-2"
          placeholder="Search or enter address"
          type="text"
          name="url"
          defaultValue={
            activeTab === "About Me"
              ? "https://en.wikipedia.org/wiki/Nicola_Mazuryk"
              : activeTab === "Skills"
              ? "https://en.wikipedia.org/wiki/Skills"
              : "https://www.google.com/search?q=projects&iflsig=ANes7DEAAAAAZcEGklFyOxDgW4OE__qgzrtuE2lsZtEH&uact=5"
          }
        />
      </label>
    </div>
  );
}
