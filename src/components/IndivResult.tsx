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
    <div className="mt-2 w-[45rem]">
      <div>
        {" "}
        <a href={url}>
          <span className="flex flex-inline items-center">
            <img src={logo} alt={alt} className="size-4" />
            <span className="text-sm ml-1 flex flex-row">
              {" "}
              {firstLink}
              <span className="text-gray-600"> {secondLink}</span>
            </span>
          </span>
          <span className="text-blue-700 text-lg">{title}</span>
        </a>
      </div>
      <p className="text-sm text-gray-700">{body}</p>
      <div className="flex inline-flex justify-between overflow-x-auto overflow-y-hidden w-[45rem] h-content scrollbar-hide">
        <span className="flex inline-flex gap-2 mt-1 h-content">
          {technologies.map((technologies) => {
            return <TechnologyWidget widgetName={technologies} />;
          })}
        </span>
        {githubLink && (
          <a href={githubLink} target="_blank">
            <TechnologyWidget widgetName="GitHub" />
          </a>
        )}
      </div>
    </div>
  );
}
