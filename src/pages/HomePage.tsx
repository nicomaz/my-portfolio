import wallpaper from "../assets/wallpaper.jpg";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Notes from "../components/Notes";
import Browser from "../components/Browser";
import Contacts from "../components/Contacts";

interface Props {
  fade: boolean;
}
export default function HomePage({ fade }: Props) {
  const { theme } = useContext(ThemeContext);
  const [notepadOpen, setNotepadOpen] = useState<boolean>(true);
  const [noteMinimised, setNoteMinimised] = useState<boolean>(false);
  const [browserOpen, setBrowserOpen] = useState<boolean>(false);
  const [browserMinimised, setBrowserMinimised] = useState<boolean>(false);
  const [contactsOpen, setContactsOpen] = useState<boolean>(false);
  const [contactsMinimised, setContactsMinimised] = useState<boolean>(false);
  const [appOpen, setAppOpen] = useState("Notes");
  const [appClicked, setAppClicked] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (!contactsOpen) setAppOpen("Portfolio");
    }, 100.01);
  }, [contactsOpen]);

  useEffect(() => {
    if (!browserOpen)
      setTimeout(() => {
        setAppOpen("Portfolio");
      }, 100.01);
  }, [browserOpen]);

  useEffect(() => {
    setTimeout(() => {
      if (!notepadOpen) setAppOpen("Portfolio");
    }, 100.01);
  }, [notepadOpen]);

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
      <div className="w-screen h-screen">
        <Header fade={fade} appOpen={appOpen} />

        <div
          onClick={() => {
            setTimeout(() => {
              setAppClicked("Notes");
              setAppOpen("Notes");
            }, 100);
          }}
          className="relative w-full h-full"
        >
          <Notes
            setAppClicked={setAppClicked}
            appClicked={appClicked}
            setNotepadOpen={setNotepadOpen}
            notepadOpen={notepadOpen}
            setNoteMinimised={setNoteMinimised}
            noteMinimised={noteMinimised}
            fade={fade}
          />
        </div>

        <div
          onClick={() => {
            setTimeout(() => {
              setAppClicked("Safari");
              setAppOpen("Safari");
            }, 100);
          }}
        >
          <Browser
            setAppClicked={setAppClicked}
            appClicked={appClicked}
            setBrowserOpen={setBrowserOpen}
            setBrowserMinimised={setBrowserMinimised}
            browserMinimised={browserMinimised}
            browserOpen={browserOpen}
          />
        </div>
        <div
          onClick={() => {
            setTimeout(() => {
              setAppClicked("Contacts");
              setAppOpen("Contacts");
            }, 100);
          }}
        >
          <Contacts
            setAppClicked={setAppClicked}
            appClicked={appClicked}
            setContactsMinimised={setContactsMinimised}
            setContactsOpen={setContactsOpen}
            contactsMinimised={contactsMinimised}
            contactsOpen={contactsOpen}
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
          setAppOpen={setAppOpen}
          setContactsOpen={setContactsOpen}
          setContactsMinimised={setContactsMinimised}
          contactsOpen={contactsOpen}
        />
      </div>
    </div>
  );
}
