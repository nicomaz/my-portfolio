import wallpaper from "../assets/wallpaper.jpg";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Notes from "../components/Notes";

interface Props {
  fade: boolean;
}
export default function HomePage({ fade }: Props) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`
  ${theme} w-screen h-screen sm:pb-44`}
      style={{
        backgroundImage: `url(${wallpaper})`,
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-screen h-screen ">
        <Header fade={fade} />
        <div className="flex justify-center items-center w-full h-[calc(100%-100px)]">
          <Notes />
        </div>
        <Navbar fade={fade} />
      </div>
    </div>
  );
}
