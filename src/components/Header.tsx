
import Clock from "./Clock";
import ThemeSwitcher from "./ThemeSwitcher";

interface Props {
  appOpen?: string;
  fade: boolean;
}

export default function Header({ appOpen = "Portfolio", fade }: Props) {
  console.log(appOpen);

  return (
    <div
      className={`
        ${
          fade ? "down" : "h-7"
        } dark:bg-slate-800/[0.6] bg-blue-200/[0.7] backdrop-blur-[3px] w-screen drop-shadow-lg h-shadow z-30 font-medium`}
    >
      <div>
        <span
          className={`
           ${
             fade ? "icon-down" : "top-2"
           } relative text-base font-bold dark:text-white left-5 gap-5 flex flex-row w-full
         `}
        >
          <span>
            <ThemeSwitcher fade={fade} />
          </span>
        </span>
        <span
          className={` ${
            fade ? "text-down" : "top-[-11px]"
          } relative left-14 dark:text-white`}
        >
          {appOpen}
        </span>
      </div>
      <span className={`${fade ? "time-down" : "top-0"} absolute right-0`}>
        <Clock />
      </span>
    </div>
  );
}
