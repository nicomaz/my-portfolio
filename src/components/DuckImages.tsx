import SingleImage from "./SingleImage";
import { projectImages } from "../utils/data";
import { useState } from "react";
import ExpandedImage from "./ExpandedImage";
import Media from "react-media";
import MobileExpandedImage from "./MobileExpandedImage";

interface Props {
  browserExpanded: boolean;
}

export default function DuckImages({ browserExpanded }: Props) {
  const [imageClicked, setImageClicked] = useState<number>(0);
  const [expandImage, setExpandImage] = useState<boolean>(false);
  const firstFiveElements = projectImages.slice(0, 5);
  const secondFiveElements = projectImages.slice(5, 10);
  const lastElements = projectImages.slice(10, 13);

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-5 gap-y-3 w-full h-fit sm:px-0 self-center"
      onClick={() => {
        setExpandImage(true);
      }}
    >
      {expandImage ? (
        <Media queries={{ small: { maxWidth: 599 } }}>
          {(matches) =>
            matches.small
              ? projectImages.map((projectImage) => {
                  return (
                    projectImage.id === imageClicked && (
                      <MobileExpandedImage
                        title={projectImage.title}
                        link={projectImage.projectLink}
                        github={projectImage.githubLink}
                        image={projectImage.photo}
                        alt={projectImage.alt}
                        setExpandImage={setExpandImage}
                        setImageClicked={setImageClicked}
                      />
                    )
                  );
                })
              : null
          }
        </Media>
      ) : null}

      {firstFiveElements.map((projectImage) => {
        return (
          <SingleImage
            title={projectImage.title}
            link={projectImage.projectLink}
            github={projectImage.githubLink}
            image={projectImage.photo}
            alt={projectImage.alt}
            id={projectImage.id}
            setImageClicked={setImageClicked}
            browserExpanded={browserExpanded}
          />
        );
      })}
      <div
        className={`${
          imageClicked <= 5 && imageClicked > 0 ? "block col-span-5" : "hidden"
        }`}
      >
        {firstFiveElements.map((projectImage) => {
          return (
            projectImage.id === imageClicked && (
              <ExpandedImage
                title={projectImage.title}
                link={projectImage.projectLink}
                github={projectImage.githubLink}
                image={projectImage.photo}
                alt={projectImage.alt}
              />
            )
          );
        })}
      </div>
      {secondFiveElements.map((projectImage) => {
        return (
          <SingleImage
            title={projectImage.title}
            link={projectImage.projectLink}
            github={projectImage.githubLink}
            image={projectImage.photo}
            alt={projectImage.alt}
            id={projectImage.id}
            setImageClicked={setImageClicked}
            browserExpanded={browserExpanded}
          />
        );
      })}
      <div
        className={`${
          imageClicked >= 6 && imageClicked <= 10
            ? "block col-span-5"
            : "hidden"
        }`}
      >
        {secondFiveElements.map((projectImage) => {
          return (
            projectImage.id === imageClicked && (
              <ExpandedImage
                title={projectImage.title}
                link={projectImage.projectLink}
                github={projectImage.githubLink}
                image={projectImage.photo}
                alt={projectImage.alt}
              />
            )
          );
        })}
      </div>
      {lastElements.map((projectImage) => {
        return (
          <SingleImage
            title={projectImage.title}
            link={projectImage.projectLink}
            github={projectImage.githubLink}
            image={projectImage.photo}
            alt={projectImage.alt}
            id={projectImage.id}
            setImageClicked={setImageClicked}
            browserExpanded={browserExpanded}
          />
        );
      })}
      <div className={`${imageClicked >= 11 ? "block col-span-5" : "hidden"}`}>
        {lastElements.map((projectImage) => {
          return (
            projectImage.id === imageClicked && (
              <ExpandedImage
                title={projectImage.title}
                link={projectImage.projectLink}
                github={projectImage.githubLink}
                image={projectImage.photo}
                alt={projectImage.alt}
              />
            )
          );
        })}
      </div>
    </div>
  );
}
