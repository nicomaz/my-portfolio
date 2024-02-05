import notepad from "../assets/notepad.png";
import safari from "../assets/safari.png";
import NavbarIcons from "./NavbarIcons";
import contacts from "../assets/contacts.png";
import finder from "../assets/finder.png";
import calculator from "../assets/calculator.png";

interface Props {
  fade: boolean;
  setNotepadOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNoteMinimised: React.Dispatch<React.SetStateAction<boolean>>;
  notepadOpen: boolean;
  setBrowserOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBrowserMinimised: React.Dispatch<React.SetStateAction<boolean>>;
  browserOpen: boolean;
}

export default function Navbar({
  fade,
  notepadOpen,
  setNoteMinimised,
  setNotepadOpen,
  setBrowserOpen,
  setBrowserMinimised,
  browserOpen,
}: Props) {
  return (
    <div
      className={`${fade ? "up" : ""} absolute bottom-0 sm:bottom-2 w-full flex justify-center`}
    >
      <ul className="w-full lg:w-5/12 h-[4.9rem] dark:bg-slate-800/[0.6] bg-blue-200/[0.7] backdrop-blur-[3px] rounded-2xl h-shadow flex flex-row justify-evenly items-center">
        <li className="after:bg-black after:rounded-2xl after:block after:m-auto after:size-1.5 after:dark:bg-white">
          <NavbarIcons icon={finder} name="Finder" alt="apple finder icon" />
        </li>
        <li
          className={
            notepadOpen
              ? "after:bg-black after:rounded-2xl after:block after:m-auto after:size-1.5 after:dark:bg-white"
              : ""
          }
          onClick={() => {
            setNotepadOpen(true);
            setNoteMinimised(false);
          }}
        >
          <NavbarIcons icon={notepad} name="Notes" alt="notepad" />
        </li>
        <li
          className={
            browserOpen
              ? "after:bg-black after:rounded-2xl after:block after:m-auto after:size-1.5 after:dark:bg-white"
              : ""
          }
          onClick={() => {
            setBrowserOpen(true);
            setBrowserMinimised(false);
          }}
        >
          <NavbarIcons icon={safari} name="Safari" alt="safari browser" />
        </li>
        <li>
          <NavbarIcons
            icon={contacts}
            name="Contacts"
            alt="apple contacts icon"
          />
        </li>
        <li>
          <NavbarIcons icon={calculator} name="Calculator" alt="calculator" />
        </li>
      </ul>
    </div>
  );
}
