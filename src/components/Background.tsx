import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Background() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme} ${theme}-aurora-outer w-screen h-screen absolute`}
    >
      <div className={`${theme}-aurora-inner w-screen h-screen sm:pb-24`}></div>
    </div>
  );
}
