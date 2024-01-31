import Clock from "../components/Clock";
import ThemeSwitcher from "../components/ThemeSwitcher";
import wallpaper from "../assets/wallpaper.jpg";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import NavBar from "../components/NavBar";

interface Props {
  fade: boolean;
}
export default function HomePage({ fade }: Props) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`
  ${theme} w-screen h-screen sm:pb-44 ${theme}-aurora-outer `}
      style={{
        backgroundImage: `url(${wallpaper})`,
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`w-screen h-screen ${theme}-aurora-inner`}>
        <NavBar />
        <Clock />
        <ThemeSwitcher />

        <div className={fade ? "in" : ""}> </div>
      </div>
    </div>
  );
}
