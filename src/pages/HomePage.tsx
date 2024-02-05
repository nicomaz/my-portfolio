import wallpaper from "../assets/wallpaper.jpg";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Notes from "../components/Notes";

interface Props {
  fade: boolean;
}
export default function HomePage({ fade }: Props) {
  const { theme } = useContext(ThemeContext);
  const [notepadOpen, setNotepadOpen] = useState<boolean>(false);

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

        <div className="flex justify-center items-center h-[calc(100%-35vw)] sm:h-5/6">
          <Notes setNotepadOpen={setNotepadOpen} notepadOpen={notepadOpen}/>
        </div>

        <Navbar fade={fade} setNotepadOpen={setNotepadOpen} notepadOpen={notepadOpen}/>
      </div>
    </div>
  );
}
