import React from "react";

interface Props {
  note: {
    title: string;
    date: string;
    shortDate: string;
    body: string[];
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
      className={`w-full pl-4 py-3 ${
        noteClicked === note.id
          ? "dark:bg-blue-900 bg-blue-300"
          : "bg-none dark:bg-none"
      }`}
      onClick={() => {
        setNoteClicked(note.id);
      }}
    >
      <h3 className="font-bold dark:text-white">{note.title}</h3>
      <p className="text-xs text-gray-600 dark:text-white">{note.shortDate}</p>
    </div>
  );
}
