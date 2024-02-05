import Buttons from "./Buttons";
import { NoteInfo } from "../utils/noteInfo";
import IndivNote from "./IndivNoteSidebar";
import { useState } from "react";
import IndivNoteBody from "./IndivNoteBody";
import Draggable from "react-draggable";

interface Props {
  setNotepadOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNoteMinimised: React.Dispatch<React.SetStateAction<boolean>>;
  notepadOpen: boolean;
  noteMinimised: boolean;
}

export default function Notes({
  setNotepadOpen,
  notepadOpen,
  setNoteMinimised,
  noteMinimised,
}: Props) {
  const [noteClicked, setNoteClicked] = useState<number>(1);
  const [noteExpanded, setNoteExpanded] = useState<boolean>(false);

  console.log(noteExpanded);
  return (
    <Draggable handle=".handle">
      <div
        className={
          notepadOpen
            ? noteMinimised && !noteExpanded
              ? "hidden-anim xl:w-4/6 xl:h-4/6 h-[calc(100%-79px-2rem)] sm:h-4/6 backdrop-blur-[2px] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400"
              : noteExpanded
              ? noteMinimised
                ? "hidden-anim w-full h-[calc(100%-79px-2rem)] sm:h-full backdrop-blur-[2px]] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400 center"
                : "mx-0 h-[calc(100%-79px-2rem)] w-full sm:h-full backdrop-blur-[2px] rounded-lg grid grid-cols-3 border-[0.3px] border-gray-400 center"
              : "xl:w-4/6 xl:h-4/6 sm:h-4/6 h-[calc(100%-79px-2rem)] w-full backdrop-blur-[2px] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400"
            : "hidden"
        }
      >
        <span className="handle w-[calc(100%-6rem)] col-span-3 h-10 ml-24 absolute" />
        <div className="col-span-1 dark:bg-slate-800/[0.9] bg-blue-100/[0.9] backdrop-blur-[2px] rounded-l-lg border-r-[1px] border-gray-500 max-w-full">
          <span className="handle w-[calc(100%-6rem)] col-span-3 h-10 ml-24 absolute" />
          <Buttons
            setWindowOpen={setNotepadOpen}
            setWindowExpanded={setNoteExpanded}
            windowExpanded={noteExpanded}
            setWindowMinimised={setNoteMinimised}
          />

          <input
            className="w-[95%] h-8 bg-white rounded-lg block border-[0.5px] border-gray-500 mb-2 dark:bg-slate-400 text-base sm:text-sm"
            placeholder="Search"
          />
          <ul>
            {NoteInfo.map((note) => {
              return (
                <li key={note.id}>
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
        <div className="col-span-2 dark:bg-slate-900 bg-gray-200 rounded-r-lg">
          <IndivNoteBody noteClicked={noteClicked} />
        </div>
      </div>
    </Draggable>
  );
}
