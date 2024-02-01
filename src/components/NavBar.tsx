import Clock from "./Clock";
import ThemeSwitcher from "./ThemeSwitcher";

interface Props {
  appOpen?: string;
  fade: boolean;
}

export default function NavBar({ appOpen = "Portfolio", fade }: Props) {
  return (
    <div
      className={
        fade
          ? "down bg-white/[0.1] backdrop-blur-[1px] w-screen shadow drop-shadow-lg backdrop-blur-[3px] h-shadow"
          : "bg-white/[0.1] backdrop-blur-[1px] h-8 w-screen shadow drop-shadow-lg backdrop-blur-[3px] h-shadow"
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
              : "relative left-16 dark:text-white top-[-13px]"
          }
        >
          {appOpen}
        </span>
      </div>
      <span
        className={fade ? "time-down absolute right-0" : " top-0 absolute right-0"}
      >
        <Clock />
      </span>
    </div>
  );
}
