import { NoteInfo } from "../utils/data";

interface Props {
  noteClicked: number;
}

export default function IndivNoteBody({ noteClicked }: Props) {
  const note = NoteInfo.find((note) => note.id === noteClicked)!;
  const body = note.body;
  const link = note.link;
  const linkable = note.linkable;

  return (
    <div className="sm:mx-5 ml-4 pr-4 sm:h-[50vh] h-[calc(100vh-10.6rem)] overflow-scroll">
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
          return (
            <p className="mb-4">
              {noteLine}{" "}
              <a href={link} target="_blank">
                <span className="font-bold underline underline-offset-1">
                  {linkable}
                </span>
              </a>
            </p>
          );
        })}
      </p>
    </div>
  );
}
