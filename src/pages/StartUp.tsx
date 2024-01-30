import Icon from "../components/Icon";
import guestIcon from "../assets/windows-suitcase.png";
import mainIcon from "../assets/mezzanine.jpg";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function StartUp() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} ${theme}-aurora-outer w-screen h-screen`}>
      <div className={`${theme}-aurora-inner w-screen h-screen sm:pb-24`}>
        <div className="flex flex-row justify-center gap-2 w-full h-full items-center flex-wrap">
          <Icon
            username="Nicola Mazuryk"
            userIcon={mainIcon}
            iconAlt="cover of Mezzanine by Massive Attack"
          />
          <Icon username="Guest" userIcon={guestIcon} iconAlt="suitcase" />
        </div>
      </div>
    </div>
  );
}
