import React from "react";

interface Props {
  note: {
    title: string;
    date: string;
    shortDate: string;
    body: string;
    active: boolean;
    id: number;
  };
  setNoteClicked: React.Dispatch<React.SetStateAction<number>>;
  noteClicked: number;
}

export default function IndivNote({
  note,
  setNoteClicked,
  noteClicked,
}: Props) {
  return (
    <div
      className={
        noteClicked === note.id
          ? "w-full h-14 bg-blue-300 dark:bg-blue-900 pl-3 pt-1"
          : "w-full h-14 bg-none dark:bg-none pl-3 pt-1"
      }
      onClick={() => {
        setNoteClicked(note.id);
      }}
    >
      <h3 className="font-bold dark:text-white">{note.title}</h3>
      <p className="text-xs text-gray-600 dark:text-white">{note.shortDate}</p>
    </div>
  );
}
