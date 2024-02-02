import { NoteInfo } from "../utils/noteInfo";

interface Props {
  noteClicked: number;
}

export default function IndivNoteBody({ noteClicked }: Props) {
  const note = NoteInfo.find((note) => note.id === noteClicked)!;

  return (
    <div className="mx-5">
      <div className="flex flex-row justify-between items-center mt-4 mb-3">
        <button className="h-7 w-10 bg-white rounded-lg dark:bg-slate-600 border-[0.5px] border-gray-300 dark:border-slate-800 border-solid">
          <span className="material-symbols-outlined dark:text-white">ios_share</span>
        </button>
        <span className="text-xs text dark:text-gray-300"> {note.date}</span>
        <button className="h-7 w-10 bg-white dark:bg-slate-600 rounded-lg border-[0.5px] border-gray-300 border-solid">
          <span className="material-symbols-outlined dark:text-white">edit</span>
        </button>
      </div>
      <p className="font-medium dark:text-white"> {note.body}</p>
    </div>
  );
}
