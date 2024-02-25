import Draggable from "react-draggable";
import Buttons from "./Buttons";
import { useState } from "react";

interface Props {
  setContactsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setContactsMinimised: React.Dispatch<React.SetStateAction<boolean>>;
  setAppClicked: React.Dispatch<React.SetStateAction<string>>;
  contactsOpen: boolean;
  contactsMinimised: boolean;
  appClicked: string;
}

export default function Contacts({
  setContactsOpen,
  setContactsMinimised,
  setAppClicked,
  contactsOpen,
  contactsMinimised,
  appClicked,
}: Props) {
  const [contactsExpanded, setContactsExpanded] = useState<boolean>(false);

  return (
    <Draggable handle=".handle">
      <div
        className={`  ${
          appClicked === "Contacts" ? "z-20" : "z-10"
        } flex justify-center sm:items-center absolute w-content h-content`}
        onClick={() => {
          setAppClicked("Contacts");
        }}
        onDrag={() => {
          setAppClicked("Contacts");
        }}
      >
        <div
          className={
            contactsOpen
              ? contactsMinimised && !contactsExpanded
                ? "hidden-anim xl:w-4/6 xl:h-4/6 h-[calc(100%-79px-2rem)] sm:h-4/6 backdrop-blur-[2px] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400"
                : contactsExpanded
                ? contactsMinimised
                  ? "hidden-anim w-full h-[calc(100%-79px-2rem)] sm:h-full backdrop-blur-[2px]] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400 center"
                  : "mx-0 h-[calc(100vh-111px)] w-full sm:h-[calc(100vh-120px)] backdrop-blur-[2px] rounded-lg grid grid-cols-3 border-[0.3px] border-gray-400 center"
                : "w-screen h-[calc(100vh-7rem)] sm:h-5/6 sm:w-[80rem] backdrop-blur-[2px] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400"
              : "hidden"
          }
        >
          <span className="handle w-[calc(100%-6rem)] col-span-3 h-10 ml-24 absolute" />
          <div className="col-span-1 dark:bg-slate-800/[0.9] bg-blue-100/[0.9] backdrop-blur-[2px] rounded-l-lg border-r-[1px] border-gray-500 max-w-full">
            <span className="handle w-[calc(100%-6rem)] col-span-3 h-10 ml-24 absolute" />
            <Buttons
              setWindowOpen={setContactsOpen}
              setWindowExpanded={setContactsExpanded}
              windowExpanded={contactsExpanded}
              setWindowMinimised={setContactsMinimised}
            />
          </div>
          <div className="col-span-2 dark:bg-slate-900 bg-gray-200 rounded-r-lg"></div>
        </div>
      </div>
    </Draggable>
  );
}
