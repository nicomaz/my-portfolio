import { useState } from "react";

interface Props {
  title: string;
  body: string;
  link: string;
  note: string;
}

export default function IndivContact({ title, body, link, note }: Props) {
  const [isTextCopied, setIsTextedCopied] = useState<boolean>(false);

  function copyText() {
    navigator.clipboard.writeText(body);
    setIsTextedCopied(true);
    setTimeout(() => {
      setIsTextedCopied(false);
    }, 1500);
  }

  return (
    <div className="mx-8 my-8">
      <div className="flex flex-row items-center justify-center mb-8">
        <div className="bg-gray-300 size-16 rounded-full" />
        <h3 className="text-2xl ml-4 dark:text-gray-200">{title}</h3>
      </div>
      <div className="grid grid-cols-3">
        <span className="text-gray-500 dark:text-gray-400 text-end mr-2">
          home
        </span>
        {title === "Resume" ? (
          <span className="dark:text-gray-200">{title} </span>
        ) : title === "Email" ? (
          <button
            className="dark:text-gray-200 text-left"
            onClick={() => copyText()}
          >
            {isTextCopied ? "Email copied" : body}
          </button>
        ) : (
          <span className="dark:text-gray-200 col-span-2">
            {link ? link : body}
          </span>
        )}

        <hr className="border-gray-300 col-span-3 my-1" />
        <span className="text-gray-500 text-end mr-2 dark:text-gray-400">
          username
        </span>
        {title === "Email" ? (
          <span></span>
        ) : (
          <span className="dark:text-gray-200 col-span-2">{body}</span>
        )}
        <hr className="border-gray-300 col-span-3 my-1" />
        <span className="text-gray-500 text-end mr-2 dark:text-gray-400">
          note
        </span>
        {title === "Resume" ? (
          <span className="dark:text-gray-200 col-span-2">
            <a href={link} download="Nicola_Mazuryk_CV.pdf">
              {note}
            </a>
          </span>
        ) : (
          <span className="dark:text-gray-200 col-span-2">{note}</span>
        )}
      </div>
    </div>
  );
}
