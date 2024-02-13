import wikipediaLogo from "../assets/wikipedia.png";
import wikipediaName from "../assets/wikipedia-logo.png";
import wikipediaSub from "../assets/wikipedia-sub.png";

export default function WikipediaLogo() {
  return (
    <span className="flex flex-row" id=" ">
      <img
        src={wikipediaLogo}
        alt="wikipedia logo"
        className="size-12 sm:size-14 mt-1 sm:mt-0"
      />
      <span className="flex flex-col ml-1 dark:invert ">
        <img
          src={wikipediaName}
          alt="text saying wikipedia"
          className="h-4 mt-3 sm:mt-4"
        />
        <img
          src={wikipediaSub}
          alt="text saying 'The Free Encyclopedia'"
          className="h-2 mt-1 ml-1"
        />
      </span>
    </span>
  );
}
