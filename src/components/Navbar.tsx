import notepad from "../assets/notepad.png";
import safari from "../assets/safari.png";
import NavbarIcons from "./NavbarIcons";
import contacts from "../assets/contacts.png";
import finder from "../assets/finder.png";

interface Props {
  fade: boolean;
  setNotepadOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNoteMinimised: React.Dispatch<React.SetStateAction<boolean>>;
  notepadOpen: boolean;
  setBrowserOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBrowserMinimised: React.Dispatch<React.SetStateAction<boolean>>;
  browserOpen: boolean;
  setAppOpen: React.Dispatch<React.SetStateAction<string>>;
  setContactsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setContactsMinimised: React.Dispatch<React.SetStateAction<boolean>>;
  contactsOpen: boolean;
}

export default function Navbar({
  fade,
  notepadOpen,
  setNoteMinimised,
  setNotepadOpen,
  setBrowserOpen,
  setBrowserMinimised,
  setAppOpen,
  browserOpen,
  setContactsOpen,
  setContactsMinimised,
  contactsOpen,
}: Props) {
  return (
    <div
      className={`${
        fade ? "sm:up up-mobile" : ""
      } absolute bottom-0 sm:bottom-2 w-full flex justify-center h-14 sm:h-[4.7rem]`}
    >
      <ul className="w-full lg:w-5/12 sm:h-[4.9rem] dark:bg-slate-800/[0.6] bg-blue-200/[0.7] backdrop-blur-[3px] rounded-2xl h-shadow flex flex-row justify-evenly items-center">
        <li className="after:bg-gray-900 after:rounded-2xl after:block after:m-auto after:size-1.5 after:dark:bg-white">
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
            setAppOpen("Notes");
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
            setAppOpen("Safari");
          }}
        >
          <NavbarIcons icon={safari} name="Safari" alt="safari browser" />
        </li>
        <li
          className={
            contactsOpen
              ? "after:bg-black after:rounded-2xl after:block after:m-auto after:size-1.5 after:dark:bg-white"
              : ""
          }
          onClick={() => {
            setContactsOpen(true);
            setContactsMinimised(false);
            setAppOpen("Contacts");
          }}
        >
          <NavbarIcons
            icon={contacts}
            name="Contacts"
            alt="apple contacts icon"
          />
        </li>
      </ul>
    </div>
  );
}
