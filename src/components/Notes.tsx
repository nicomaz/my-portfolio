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

  return (
    <Draggable handle=".handle">
      <div
        className={
          notepadOpen
            ? noteMinimised && !noteExpanded
              ? "hidden-anim xl:w-4/6 xl:h-4/6 mx-2 h-[calc(100%-2rem)] sm:h-4/6 backdrop-blur-[1px] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400"
              : noteExpanded
              ? noteMinimised
                ? "hidden-anim xl:w-full xl:w-full mx-0 h-full sm:h-full backdrop-blur-[1px] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400 center"
                : "xl:w-full xl:w-full mx-0 h-full sm:h-full backdrop-blur-[1px] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400 center"
              : "xl:w-4/6 xl:h-4/6 mx-2 h-[calc(100%-2rem)] sm:h-4/6 backdrop-blur-[1px] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400"
            : "hidden"
        }
      >
        <span className="handle w-[calc(100%-6rem)] absolute h-10 ml-20" />
        <div className="col-span-1 dark:bg-slate-600/[0.9] bg-gray-200/[0.8] rounded-l-lg border-r-[1px] border-gray-500 max-w-full">
          <Buttons
            setNotepadOpen={setNotepadOpen}
            setNoteExpanded={setNoteExpanded}
            noteExpanded={noteExpanded}
            setNoteMinimised={setNoteMinimised}
          />

          <input
            className="w-[95%] h-8 bg-white rounded-lg block m-auto border-[0.5px] border-gray-500 mb-2 dark:bg-slate-400"
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
        <div className="col-span-2 dark:bg-slate-900 bg-gray-200 rounded-r-lg grain">
          <IndivNoteBody noteClicked={noteClicked} />
        </div>
      </div>
    </Draggable>
  );
}

// noteOpen ? noteExpanded ? noteMinimised ? "note minimised" : "note expanded": "noteOpen" : "noteClosed"
