import Buttons from "./Buttons";
import { NoteInfo } from "../utils/noteInfo";
import IndivNote from "./IndivNoteSidebar";
import { useState } from "react";
import IndivNoteBody from "./IndivNoteBody";

export default function Notes() {
  const [noteClicked, setNoteClicked] = useState<number>(1);

  return (
    <div
      className={`w-4/6 h-4/6 backdrop-blur-[1px] rounded-lg drop-shadow-3xl h-shadow grid grid-cols-3 border-[0.3px] border-gray-400`}
    >
      <div className="col-span-1 dark:bg-slate-600 bg-gray-200/[0.8] rounded-l-lg border-r-[1px] border-gray-500 ">
        <Buttons />
        <input
          className="w-[95%] h-8 bg-white rounded-lg block m-auto border-[0.5px] border-gray-500 mb-2 dark:bg-slate-400"
          placeholder="Search"
        />
        <ul>
          {NoteInfo.map((note) => {
            return (
              <li
                key={note.id}
        
              >
                <IndivNote note={note} setNoteClicked={setNoteClicked} noteClicked={noteClicked}/>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-span-2 dark:bg-slate-900 bg-gray-200 rounded-r-lg grain">
       <IndivNoteBody noteClicked={noteClicked}/>
      </div>
    </div>
  );
}
