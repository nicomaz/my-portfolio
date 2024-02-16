import ReactPlayer from "react-player";
import youtubeLogo from "../assets/youtube-logo.png";

export default function DuckVideos() {
  return (
    <div className="w-fit h-[280px] rounded-md border-[1px] border-gray-200 rounded-md b-shadow  overflow-hidden">
      <ReactPlayer
        url="https://youtu.be/OJvwS6T8qVw"
        width="300px"
        height="200px"
        controls={true}
      />
      <a href="https://youtu.be/OJvwS6T8qVw" target="_blank">
        <h4 className="mx-4 mt-2 font-medium">SideQuest Demo </h4>
        <div className="flex flex-row text-xs ml-4 mt-3">
          <img src={youtubeLogo} alt="youtube logo" className="size-5" />
          <span className="self-center">YouTube</span>
        </div>
      </a>
    </div>
  );
}
