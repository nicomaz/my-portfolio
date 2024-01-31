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

  setInterval(() => setTime(getTime()), 1000);

  return (
    <div className={`${theme}`}>
      <span className="absolute top-4 right-5 text-lg z-30 text-black dark:text-white">
        {time}
      </span>
    </div>
  );
}
