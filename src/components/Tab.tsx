import { Dispatch, SetStateAction } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface Props {
  tabName: string;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export default function Tab({ tabName, setActiveTab, activeTab }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <li
        className={
          activeTab === tabName
            ? ` ${
                theme === "dark" && "dark"
              } bg-blue-200 dark:bg-blue-900 w-[10rem] h-[calc(100%-0.5rem)] top-full translate-y-[-100%] rounded-t-lg relative  z-40 overflow-visible before:size-[0.5rem] before:bg-[#c5dcfc] dark:before:bg-blue-900 before:bottom-0 before:absolute before:-left-2 after:size-[1rem] after:bg-white dark:after:bg-slate-600 after:bottom-0 after:absolute after:-right-4 after:rounded-3xl active`
            : tabName === "Skills"
            ? ` ${
                theme === "dark" && "dark"
              } bg-slate-200 dark:bg-slate-600 w-[10rem] h-[calc(100%-0.5rem)] relative top-full translate-y-[-100%] rounded-t-lg overflow-visible before:size-[0.5rem] before:bg-[#dadfef] before:bottom-0 before:absolute before:-left-2 after:size-[1rem] after:bottom-0 after:absolute after:-right-4 after:rounded-3xl not-active z-30`
            : ` ${
                theme === "dark" && "dark"
              } bg-slate-200 dark:bg-slate-600 w-[10rem] h-[calc(100%-0.5rem)] relative top-full translate-y-[-100%] rounded-t-lg overflow-visible before:size-[0.5rem] before:bg-[#dadfef] before:bottom-0 before:absolute before:-left-2 after:size-[1rem] after:bottom-0 after:absolute after:-right-4 after:rounded-3xl not-active`
        }
        onClick={() => {
          setActiveTab(tabName);
        }}
      >
        <a
          className={`${activeTab === tabName ? "active" : "not-active"}  ${
            theme === "dark" && "dark"
          } before:size-[1rem] before:bg-[#d9e0f0] before:bottom-0 before:absolute before:-left-4 before:rounded-3xl after:size-[0.5rem] after:bg-[#c5dcfc] after:bottom-0 after:absolute after:-right-2`}
        >
          <h3 className="ml-4 text-sm mt-[0.3rem] relative dark:text-slate-200">
            {tabName}
          </h3>
        </a>
      </li>
    </>
  );
}
