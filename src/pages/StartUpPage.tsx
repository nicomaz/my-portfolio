import Icon from "../components/Icon";
import guestIcon from "../assets/windows-suitcase.png";
import mainIcon from "../assets/mezzanine.jpg";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function StartUpPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} w-screen h-screen sm:pb-44`}>
      <div className="flex flex-row justify-center gap-2 w-full h-full items-center flex-wrap">
        <Icon
          username="Nicola Mazuryk"
          userIcon={mainIcon}
          iconAlt="cover of Mezzanine by Massive Attack"
        />

        <Link to="/home">
          <Icon username="Guest" userIcon={guestIcon} iconAlt="suitcase" />
        </Link>
      </div>
    </div>
  );
}
