import { NoteInfo } from "../utils/noteInfo";

interface Props {
  noteClicked: number;
}

export default function IndivNoteBody({ noteClicked }: Props) {
  const note = NoteInfo.find((note) => note.id === noteClicked)!;
  const body = note.body;

  return (
    <div className="mx-5 sm:h-[50vh] ">
      <div className="flex flex-row justify-between items-center mt-4 mb-3 handle">
        <button className="h-7 w-10 bg-white rounded-lg dark:bg-slate-600 border-[0.5px] border-gray-300 dark:border-slate-800 border-solid">
          <span className="material-symbols-outlined dark:text-white">
            ios_share
          </span>
        </button>
        <span className="text-xs text dark:text-gray-300 ml-4 mr-4 text-center">
          {note.date}
        </span>
        <button className="h-7 w-10 bg-white dark:bg-slate-600 rounded-lg border-[0.5px] border-gray-300 border-solid">
          <span className="material-symbols-outlined dark:text-white">
            edit
          </span>
        </button>
      </div>
      <p className="font-medium dark:text-white">
        <h2 className="text-xl font-bold mb-3">{note.header}</h2>
        {body.map((noteLine) => {
          return <p className="mb-4">{noteLine}</p>;
        })}
      </p>
    </div>
  );
}
