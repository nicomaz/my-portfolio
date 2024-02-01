import notepad from "../assets/notepad.png";
import safari from "../assets/safari.png";
import NavbarIcons from "./NavbarIcons";
import contacts from "../assets/contacts.png";
import finder from "../assets/finder.png";
import calculator from "../assets/calculator.png"

export default function Navbar() {
  return (
    <div className="absolute bottom-2 w-full flex justify-center ">
      <div className="w-full lg:w-3/6 h-16 bg-white/[0.1] backdrop-blur-[3px] rounded-xl h-shadow flex flex-row justify-evenly">
        <NavbarIcons icon={finder} name="Finder" alt="apple finder icon" />
        <NavbarIcons icon={notepad} name="notepad" alt="notepad" />
        <NavbarIcons icon={safari} name="Safari" alt="safari browser" />
        <NavbarIcons icon={contacts} name="contacts" alt="apple contacts icon" />
        <NavbarIcons icon={calculator} name="calculator" alt="calculator" />
      </div>
    </div>
  );
}
