import Draggable from "react-draggable";
import Buttons from "./Buttons";
import { useState } from "react";
import { ContactInfo } from "../utils/data";
import IndivContact from "./IndivContact";

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
  const [contactClicked, setContactClicked] = useState<string>("Email");

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
              ? contactsMinimised
                ? "hidden-anim xl:w-4/6 xl:h-4/6 h-[calc(100%-79px-2rem)] sm:h-4/6 backdrop-blur-[2px] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400"
                : "w-screen h-[calc(100vh-7rem)] sm:h-5/6 sm:w-[50rem] backdrop-blur-[2px] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400"
              : "hidden"
          }
        >
          <span className="handle w-[calc(100%-6rem)] col-span-3 h-10 ml-24 absolute" />
          <div className="col-span-1 dark:bg-slate-800/[0.9] bg-blue-100/[0.9] backdrop-blur-[2px] rounded-l-lg border-r-[1px] border-gray-500 max-w-full">
            <span className="handle w-[calc(100%-6rem)] col-span-3 h-10 ml-24 absolute" />
            <Buttons
              setWindowOpen={setContactsOpen}
              setWindowMinimised={setContactsMinimised}
            />
            <ul className="mx-3 pb-4">
              {ContactInfo.map((contact) => {
                return (
                  <div>
                    <h2 className="font-bold dark:text-gray-300 w-full pl-3 py-1 text-gray-500 text-sm">
                      {contact.title[0].toUpperCase()}
                      <hr className="ml-[-10px] mt-1 border-gray-400 mr-1" />
                    </h2>
                    <div
                      className={`w-full pl-4 py-3 ${
                        contactClicked === contact.title
                          ? "dark:bg-blue-900 bg-blue-300 rounded-xl"
                          : "bg-none dark:bg-none"
                      }`}
                      onClick={() => {
                        setContactClicked(contact.title);
                      }}
                    >
                      <h3 className="font-bold dark:text-white">
                        {contact.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="col-span-2 dark:bg-slate-900 bg-gray-200 rounded-r-lg">
            {ContactInfo.map((contact) => {
              return contact.title === contactClicked ? (
                <IndivContact
                  title={contact.title}
                  link={contact.link}
                  body={contact.body}
                  note={contact.note}
                />
              ) : null;
            })}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
