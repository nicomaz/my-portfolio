import ReactPlayer from "react-player";
import youtubeLogo from "../assets/youtube-logo.png";
import Media from "react-media";

export default function DuckVideos() {
  return (
    <div className="sm:w-fit h-[230px] mx-2 sm:ml-0 sm:h-[280px] rounded-md border-[1px] border-gray-200 rounded-md b-shadow overflow-hidden flex flex-col">
      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? (
            <div className="self-center">
              <ReactPlayer
                url="https://youtu.be/OJvwS6T8qVw"
                width="100vw"
                height="180px"
                controls={true}
              />
            </div>
          ) : (
            <ReactPlayer
              url="https://youtu.be/OJvwS6T8qVw"
              width="300px"
              height="200px"
              controls={true}
            />
          )
        }
      </Media>

      <a href="https://youtu.be/OJvwS6T8qVw" target="_blank">
        <div className="sm:block flex flex-cols justify-between mx-4 sm:mx-0">
          <h4 className="sm:mx-4 mt-2 font-medium">SideQuest Demo </h4>
          <div className="flex flex-row text-xs ml-4 mt-3">
            <img src={youtubeLogo} alt="youtube logo" className="size-5" />
            <span className="self-center">YouTube</span>
          </div>
        </div>
      </a>
    </div>
  );
}
