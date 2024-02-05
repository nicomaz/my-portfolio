import wallpaper from "../assets/wallpaper.jpg";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Notes from "../components/Notes";
import Browser from "../components/Browser";

interface Props {
  fade: boolean;
}
export default function HomePage({ fade }: Props) {
  const { theme } = useContext(ThemeContext);
  const [notepadOpen, setNotepadOpen] = useState<boolean>(false);
  const [noteMinimised, setNoteMinimised] = useState<boolean>(false);

  console.log(noteMinimised);

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

        {notepadOpen ? (
          <div className="absolute flex justify-center items-center h-[calc(100%-35vw)] sm:h-5/6">
            <Notes
              setNotepadOpen={setNotepadOpen}
              notepadOpen={notepadOpen}
              setNoteMinimised={setNoteMinimised}
              noteMinimised={noteMinimised}
            />
          </div>
        ) : null}

        <div className="flex justify-center items-center h-[calc(100%-35vw)] sm:h-5/6">
          <Browser />
        </div>
        <Navbar
          fade={fade}
          setNotepadOpen={setNotepadOpen}
          notepadOpen={notepadOpen}
          setNoteMinimised={setNoteMinimised}
        />
      </div>
    </div>
  );
}
