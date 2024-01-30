import { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}): JSX.Element => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("ui.theme") as "light" | "dark") || "light"
  );

  const toggleTheme = (): void => {
    const val = theme === "light" ? "dark" : "light";
    setTheme(val);
    localStorage.setItem("ui.theme", val);
    localStorage.setItem("theme", val);
  };

  useEffect(() => {
    console.log("AA");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
