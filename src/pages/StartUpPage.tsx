import Icon from "../components/Icon";
import guestIcon from "../assets/windows-suitcase.png";
import mainIcon from "../assets/mezzanine.jpg";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import Clock from "../components/Clock";
import ThemeSwitcher from "../components/ThemeSwitcher";
import wallpaper from "../assets/wallpaper.jpg";

interface Props {
  setFade: React.Dispatch<React.SetStateAction<boolean>>;
  fade: boolean;
}

export default function StartUpPage({ fade, setFade }: Props) {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

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
      <div className={fade ? "quick-fade" : ""}>
        <Clock />
        <div className="absolute top-2 left-5 z-30">
          <ThemeSwitcher />
        </div>
      </div>
      <div
        className={
          fade
            ? "absolute quick-fade w-screen h-screen sm:pb-44 glass"
            : " absolute w-screen h-screen sm:pb-44 glass"
        }
      />
      <div
        className={
          fade
            ? ` fade flex flex-row justify-center gap-2 w-full h-full items-center flex-wrap`
            : `flex flex-row justify-center gap-2 w-full h-full items-center flex-wrap`
        }
      >
        <Icon
          username="Nicola Mazuryk"
          userIcon={mainIcon}
          iconAlt="cover of Mezzanine by Massive Attack"
        />

        <div
          onClick={() => {
            setFade(true);
            setTimeout(() => navigate("/home"), 300);
          }}
        >
          <Icon username="Guest" userIcon={guestIcon} iconAlt="suitcase" />
        </div>
      </div>
    </div>
  );
}
