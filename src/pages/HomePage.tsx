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
  const [browserOpen, setBrowserOpen] = useState<boolean>(false);
  const [browserMinimised, setBrowserMinimised] = useState<boolean>(false);

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
          <div className="absolute flex justify-center items-center h-[calc(100%-35vw)] sm:h-[calc(100%-79px-2.5rem)]">
            <Notes
              setNotepadOpen={setNotepadOpen}
              notepadOpen={notepadOpen}
              setNoteMinimised={setNoteMinimised}
              noteMinimised={noteMinimised}
            />
          </div>
        ) : null}

        <div className="flex justify-center sm:items-center sm:h-[calc(100%-79px-2.5rem)]">
          <Browser
            setBrowserOpen={setBrowserOpen}
            setBrowserMinimised={setBrowserMinimised}
            browserMinimised={browserMinimised}
            browserOpen={browserOpen}
          />
        </div>
        <Navbar
          fade={fade}
          setNotepadOpen={setNotepadOpen}
          notepadOpen={notepadOpen}
          setNoteMinimised={setNoteMinimised}
          setBrowserOpen={setBrowserOpen}
          setBrowserMinimised={setBrowserMinimised}
          browserOpen={browserOpen}
        />
      </div>
    </div>
  );
}
