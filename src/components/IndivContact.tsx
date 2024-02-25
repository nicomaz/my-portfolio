import { useState } from "react";

interface Props {
  title: string;
  body?: string;
  link?: string;
  note?: string;
}

export default function IndivContact({ title, body, link, note }: Props) {
  const [isTextCopied, setIsTextedCopied] = useState<boolean>(false);

  function copyText() {
    navigator.clipboard.writeText(body || "nicolamazuryk@gmail.com");
    setIsTextedCopied(true);
    setTimeout(() => {
      setIsTextedCopied(false);
    }, 1500);
  }

  return (
    <div className="mx-8 my-8">
      <div className="flex flex-row items-center justify-center mb-8">
        <h3 className="text-2xl ml-4 dark:text-gray-200 mt-12">{title}</h3>
      </div>
      <div className="grid  sm:grid-cols-3">
        <span className="text-gray-500 dark:text-gray-400 sm:text-end mr-2">
          home
        </span>
        {title === "Resume" ? (
          <span className="dark:text-gray-200">{title} </span>
        ) : title === "Email" ? (
          <button
            className="dark:text-gray-200 text-left"
            onClick={() => copyText()}
          >
            {isTextCopied ? "Email copied" : <span>{body}</span>}
          </button>
        ) : (
          <span className="dark:text-gray-200 sm:col-span-2">
            {link ? (
              <a href={link} target="_blank">
                {link}
              </a>
            ) : (
              body
            )}
          </span>
        )}

        <hr className="border-gray-300 sm:col-span-3 my-1" />
        <span className="text-gray-500 sm:text-end mr-2 dark:text-gray-400">
          username
        </span>
        {title === "Email" ? (
          <span>
            <br />
          </span>
        ) : (
          <span className="dark:text-gray-200 sm:col-span-2">{body}</span>
        )}
        <hr className="border-gray-300 sm:col-span-3 my-1" />
        <span className="text-gray-500 sm:text-end mr-2 dark:text-gray-400">
          note
        </span>
        {title === "Resume" ? (
          <span className="dark:text-gray-200 sm:col-span-2">
            <a href={link} download="Nicola_Mazuryk_CV.pdf">
              {note}
            </a>
          </span>
        ) : (
          <span className="dark:text-gray-200 sm:col-span-2">{note}</span>
        )}
      </div>
    </div>
  );
}
