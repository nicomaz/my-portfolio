import { Dispatch, SetStateAction } from "react";

interface Props {
  tabName: string;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export default function Tab({ tabName, setActiveTab, activeTab }: Props) {
  return (
    <>
      <li
        className={
          activeTab === tabName
            ? "bg-gradient-to-t from-[#c5dcfc] via-[#d5eafb] to-[#eef8fc] w-[10rem] h-[calc(100%-0.5rem)] top-full translate-y-[-100%] rounded-t-lg relative  z-40 overflow-visible before:size-[0.5rem] before:bg-[#c5dcfc] before:bottom-0 before:absolute before:-left-2 after:size-[1rem] after:bg-[#d9e0f0] after:bottom-0 after:absolute after:-right-4 after:rounded-3xl active"
            : tabName === "Skills"
            ? "bg-gradient-to-t from-[#d9e0f0] via-[#d8dfef] to-[#f0f3fa] w-[10rem] h-[calc(100%-0.5rem)] relative top-full translate-y-[-100%] rounded-t-lg overflow-visible before:size-[0.5rem] before:bg-[#dadfef] before:bottom-0 before:absolute before:-left-2 after:size-[1rem] after:bottom-0 after:absolute after:-right-4 after:rounded-3xl not-active z-30"
            : "bg-gradient-to-t from-[#d9e0f0] via-[#d8dfef] to-[#f0f3fa] w-[10rem] h-[calc(100%-0.5rem)] relative top-full translate-y-[-100%] rounded-t-lg overflow-visible before:size-[0.5rem] before:bg-[#dadfef] before:bottom-0 before:absolute before:-left-2 after:size-[1rem] after:bottom-0 after:absolute after:-right-4 after:rounded-3xl not-active"
        }
        onClick={() => {
          setActiveTab(tabName);
        }}
      >
        <a
          className={
            activeTab === tabName
              ? "before:size-[1rem] before:bg-[#d9e0f0] before:bottom-0 before:absolute before:-left-4 before:rounded-3xl after:size-[0.5rem] after:bg-[#c5dcfc] after:bottom-0 after:absolute after:-right-2 active"
              : "before:size-[1rem] before:bg-[#d9dfee] before:bottom-0 before:absolute before:-left-4 before:rounded-3xl after:size-[0.5rem] after:bottom-0 after:absolute after:-right-2 after:bg-[#d9dfee] not-active"
          }
        >
          <h3 className="ml-4 text-sm mt-[0.1rem] relative ">{tabName}</h3>
        </a>
      </li>
    </>
  );
}
