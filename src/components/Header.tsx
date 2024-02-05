import Clock from "./Clock";
import ThemeSwitcher from "./ThemeSwitcher";

interface Props {
  appOpen?: string;
  fade: boolean;
}

export default function Header({ appOpen = "Portfolio", fade }: Props) {
  return (
    <div
      className={
        fade
          ? "down dark:bg-slate-800/[0.6] bg-blue-200/[0.8] backdrop-blur-[3px] w-screen drop-shadow-lg h-shadow"
          : "dark:bg-slate-800/[0.6] bg-blue-200/[0.8] backdrop-blur-[3px] h-8 w-screen drop-shadow-lg h-shadow"
      }
    >
      <div>
        <span
          className={
            fade
              ? "relative icon-down text-base font-semibold dark:text-white left-5 gap-5 flex flex-row w-full"
              : "relative text-base font-semibold dark:text-white left-5 gap-5 top-2 flex flex-row w-full"
          }
        >
          <span>
            <ThemeSwitcher fade={fade} />
          </span>
        </span>
        <span
          className={
            fade
              ? "text-down relative left-16 dark:text-white"
              : "relative left-16 dark:text-white top-[-12px]"
          }
        >
          {appOpen}
        </span>
      </div>
      <span
        className={
          fade ? "time-down absolute right-0" : " top-0 absolute right-0"
        }
      >
        <Clock />
      </span>
    </div>
  );
}
