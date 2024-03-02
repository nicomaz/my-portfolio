import { useEffect, useState } from "react";
import { getTime } from "../utils/functions";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Clock() {
  const { theme } = useContext(ThemeContext);
  const [time, setTime] = useState<string>();

  useEffect(() => {
    setTime(getTime());
  }, []);

  setTimeout(() => setTime(getTime()), 1000);

  return (
    <div className={`${theme}`}>
      <span className="top-0.5 right-5 absolute text-base z-30 text-black dark:text-white">
        {time}
      </span>
    </div>
  );
}
