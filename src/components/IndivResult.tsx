import TechnologyWidget from "./TechnologyWidget";

interface Props {
  logo: string;
  alt: string;
  url: string;
  firstLink: string;
  secondLink: string;
  title: string;
  body: string;
  technologies: Array<string>;
  githubLink?: string;
}

export default function IndivResult({
  logo,
  alt,
  url,
  firstLink,
  secondLink,
  title,
  body,
  technologies,
  githubLink,
}: Props) {
  return (
    <div className="mt-2 sm:w-[45rem] sm:mx-0 sm:dark:bg-slate-900 dark:bg-slate-800 rounded-md p-3 sm:p-0">
      <div>
        {" "}
        <a href={url}>
          <span className="flex flex-inline items-center">
            <img src={logo} alt={alt} className="size-4" />
            <span className="text-sm ml-1 flex flex-row">
              {" "}
              {firstLink}
              <span className="text-gray-600 dark:text-gray-400">
                {" "}
                {secondLink}
              </span>
            </span>
          </span>
          <span className="text-blue-700 text-lg dark:text-blue-500">
            {title}
          </span>
        </a>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300">{body}</p>
      <div className="flex justify-between overflow-x-auto overflow-y-hidden sm:w-[45rem] w-full h-content scrollbar-hide">
        <span className="flex gap-2 mt-1 h-content">
          {technologies.map((technologies) => {
            return <TechnologyWidget widgetName={technologies} />;
          })}
        </span>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            className="self-center mt-1 ml-2 sm:mt-0 sm:ml-0 sm:self-end"
          >
            <TechnologyWidget widgetName="GitHub" />
          </a>
        )}
      </div>
    </div>
  );
}
