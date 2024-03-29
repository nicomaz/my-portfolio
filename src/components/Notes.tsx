import Buttons from "./Buttons";
import { NoteInfo } from "../utils/data";
import IndivNote from "./IndivNoteSidebar";
import { useState } from "react";
import IndivNoteBody from "./IndivNoteBody";
import Draggable from "react-draggable";

interface Props {
  setNotepadOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNoteMinimised: React.Dispatch<React.SetStateAction<boolean>>;
  setAppClicked: React.Dispatch<React.SetStateAction<string>>;
  notepadOpen: boolean;
  noteMinimised: boolean;
  appClicked: string;
  fade: boolean;
}

export default function Notes({
  setNotepadOpen,
  notepadOpen,
  setNoteMinimised,
  noteMinimised,
  setAppClicked,
  appClicked,
  fade,
}: Props) {
  const [noteClicked, setNoteClicked] = useState<number>(1);
  const [noteExpanded, setNoteExpanded] = useState<boolean>(false);

  return (
    <Draggable handle=".handle">
      <div
        className={` ${fade ? "fade-in" : ""} ${
          appClicked === "Notes" ? "z-20" : "z-10"
        } flex justify-center sm:items-center absolute w-content max-w-[100vw] overflow-x-hidden ${
          noteExpanded ? "center" : "sm:top-[calc(100vh/6)] sm:left-[calc(100vw/10)]"
        } `}
        onClick={() => {
          setAppClicked("Notes");
        }}
        onDrag={() => {
          setAppClicked("Notes");
        }}
      >
        <div
          className={
            notepadOpen
              ? noteMinimised && !noteExpanded
                ? "hidden-anim xl:w-4/6 xl:h-4/6 h-[calc(100%-79px-2rem)] sm:h-4/6 backdrop-blur-[2px] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400"
                : noteExpanded
                ? noteMinimised
                  ? "hidden-anim w-full h-[calc(100%-79px-2rem)] sm:h-full backdrop-blur-[2px]] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400 center"
                  : "mx-0 h-[calc(100vh-10.4rem)] w-screen sm:h-[calc(100vh-114px)] backdrop-blur-[2px] rounded-lg grid grid-cols-3 border-[0.3px] border-gray-400 center"
                : "w-screen h-[calc(100vh-10.4rem)] sm:h-5/6 sm:w-[80rem] backdrop-blur-[2px] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400"
              : "hidden"
          }
        >
          <span className="handle w-[calc(100%-6rem)] col-span-3 h-10 ml-24 absolute" />
          <div className="col-span-1 dark:bg-slate-800/[0.9] bg-blue-100/[0.9] backdrop-blur-[2px] rounded-l-lg border-r-[1px] border-gray-500 max-w-[40vw]">
            <span className="handle w-[calc(100%-6rem)] col-span-3 h-10 ml-24 absolute" />
            <Buttons
              setWindowOpen={setNotepadOpen}
              setWindowExpanded={setNoteExpanded}
              windowExpanded={noteExpanded}
              setWindowMinimised={setNoteMinimised}
            />

            <ul>
              {NoteInfo.map((note) => {
                return (
                  <li key={note.id} className="notes">
                    <IndivNote
                      note={note}
                      setNoteClicked={setNoteClicked}
                      noteClicked={noteClicked}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-2 dark:bg-slate-900 bg-gray-200 rounded-r-lg max-w-[70vw]">
            <IndivNoteBody noteClicked={noteClicked} />
          </div>
        </div>
      </div>
    </Draggable>
  );
}
